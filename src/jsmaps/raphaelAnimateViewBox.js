"use strict";

(function(RFN) {

	function addToQueue(canvas, stepFunction, duration, callback) {
		var queue = findQueue(canvas),
			startTime = +new Date(),
			endTime = startTime + duration,
			runID = ++addToQueue.runID;

		function startAnimation() {
			function animate() {
				var now = +new Date(),
					elapsed = now - startTime,
					completeness = now >= endTime ? 1 : (elapsed / duration);

				stepFunction(completeness);

				if(now >= endTime) {
					completeQueueItem(runID, queue, callback);
					return cancelAnimationFrame(animate);
				}
				return requestAnimationFrame(animate, canvas);
			}
			return animate();
		}

		queue.push(startAnimation);

		manageQueue(queue);

	}
	addToQueue.runID = 0;

	function manageQueue(queue) {
		var current = queue[0];
		if(!current) {
			return;
		}
		if(!current.runID) {
			current.runID = current();
		}
	}

	function findQueue(canvas) {
		if(!canvas.queueID) {
			canvas.queueID = Raphael.createUUID();
		}
		var queueObj = animateViewBox.stat.queue;
		if(!queueObj[canvas.queueID]) {
			queueObj[canvas.queueID] = [];
		}
		return queueObj[canvas.queueID];
	}

	function completeQueueItem(runID, queue, callback) {
		var currentItem = queue.shift();

		if(currentItem) {
			if(callback) {
				callback();
			}
			manageQueue(queue);
		}
	}

	var animateViewBox = function(currentViewBox, viewX, viewY, width, height, duration, callback) {

		duration = duration || 250;

		//var originals = ChartManager.getViewBox(),
		var originals = currentViewBox,
			differences = {
				x: viewX - originals.x,
				y: viewY - originals.y,
				width: width - originals.width,
				height: height - originals.height
			},
			stepped = {
				x: differences.x,
				y: differences.y,
				width: differences.width,
				height: differences.height
			}, i = 1,
			canvas = this;

		addToQueue(canvas, function(completeness) {
			canvas.setViewBox(
				originals.x + (stepped.x * completeness),
				originals.y + (stepped.y * completeness),
				originals.width + (stepped.width * completeness),
				originals.height + (stepped.height * completeness)
			);
			
			
		}, duration, function() {
			if(callback) {
				callback(viewX, viewY, width, height);
			}
		});

	}

	// Todo, set queues up and append operations behind so that animations do not overlap
	animateViewBox.stat = {
		queue: {}
	}

	RFN.animateViewBox = animateViewBox;

}(Raphael.fn));



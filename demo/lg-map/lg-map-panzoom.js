/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

	window.requestAnimationFrame = ( function() {

		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

			window.setTimeout( callback, 1000 / 60 );

		};

	} )();

}

if ( !window.cancelAnimationFrame ) {

	window.cancelAnimationFrame = ( function() {

		return window.cancelAnimationFrame ||
		window.mozCancelAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

			//window.setTimeout( callback, 1000 / 60 );
			window.clearTimeout();

		};

	} )();

}
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

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



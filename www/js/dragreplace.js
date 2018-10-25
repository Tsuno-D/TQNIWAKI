/**
 * Repalce element with `Drag and Drop`
 * Ver 0.1
 *
 * @author Kazuya Hiruma
 * @edit by TQNIWAKI
 */
var pos;
(function (win, doc, $) {

  'use strict';

  /////////////////////////////////////////////////////////////////////////////////////

  /* ----------------------------------------
     PRIVATE PROPERTY
  ------------------------------------------- */
  var isTouch = ('ontouchstart' in win),
    MouseEvent = {
      CLICK: isTouch ? 'touchstart' : 'click',
      MOUSE_UP: isTouch ? 'touchend' : 'mouseup',
      MOUSE_DOWN: isTouch ? 'touchstart' : 'mousedown',
      MOUSE_MOVE: isTouch ? 'touchmove' : 'mousemove'
    };

  /////////////////////////////////////////////////////////////////////////////////////

  /* ----------------------------------------
     PRIVATE METHOD
  ------------------------------------------- */
  function getEventObject(e) {

    return (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) || (e.touches && e.touches[0]) || e;
  }

  /**
   * get next sibling as `Node`
   * @name getNextSibling
   * @function
   * @param ele 
   * @return 
   */
  function getNextSibling(ele) {

    var res = ele.nextSibling;

    while (res && res.nodeType !== 1) {
      res = res.nextSibling;
    }

    if (!res) {
      return null;
    }

    return res;
  }

  /////////////////////////////////////////////////////////////////////////////////////

  /**
   * @name draggable
   * @function
   * @param elements 
   * @param config 
   */
  $.fn.replaceable = function (config) {

    var self = this,
      startPos = {};

    //config settings.
    this.config = config || {};
    this.config.dragger = (this.config.dragger === undefined) ? true : false;

    // set value
    this.startPos = startPos;
    this.currentClone = null;
    this.currentTarget = null;

    ///////////////////////////////////////////////////////////////

    /**
     * Replace element ele1 to ele2
     * @name replaceElement
     * @function
     * @param ele1 Replace to `hitElement`
     * @param ele2 Replace from `draggingElement`
     * @return {Element} replaced element.
     */


    ////////////////////////////////////////////////////////////////////////

    // set events to `document`
    $(document)
      .bind(MouseEvent.MOUSE_MOVE, function (e) {

        var evt, offset, curPos = {}, hitElement;

        if (!self.currentClone) {
          return true;
        }

        evt = getEventObject(e);
        offset = self.currentClone[0].getBoundingClientRect();

        curPos.x = startPos.x - evt.pageX;
        curPos.y = startPos.y - evt.pageY;

        self.currentClone.css({
          '-webkit-transition': '0ms',
          '-webkit-transform': 'translate3d(' + -curPos.x + 'px, ' + -curPos.y + 'px, 0)'
        });

        //dispatch `move` event.
        self.trigger('move', {
          x: (offset.left + offset.right) / 2,
          y: (offset.top + offset.bottom) / 2
        });
      })
      .bind(MouseEvent.MOUSE_UP, function (e) {

        var evt, hitElement;

        if (!self.currentClone) {
          return true;
        }

        // replace
        if ((hitElement = $('.replaceable.hit').removeClass('hit')[0])) {
          // replaceElement(hitElement, self.currentTarget[0]);
          self.currentClone.remove();
          self.currentClone = null;
          self.currentTarget.removeClass('dragging');
          self.currentTarget = null;

          element.value += texttext2;
          // alert("挿入しました");
          //switchで増やす
        }

        // not replace, and move to default position with transition.
        else {
          self.currentClone.one('webkitTransitionEnd', function (e) {

            $(this).remove();
            self.currentTarget.removeClass('dragging');
            self.currentTarget = null;
          })
            .css({
              '-webkit-transition-duration': '0.3s',
              '-webkit-transform': 'translate3d(0, 0, 0)'
            });

          self.currentClone = null;
        }
      });


    // setting `Replaceable`
    return this.each(function (i, val) {

      var $val = $(val);

      /**
       * @name hitCheck
       * @private
       * @function
       * @param {Object} pos moving center position object.
       */
      function hitCheck(e, pos) {

        var $val = $(val),
          rect1 = element1.getBoundingClientRect();
        rect2 = element2.getBoundingClientRect();
        rect3 = element3.getBoundingClientRect();
        rect4 = element4.getBoundingClientRect();

        // hit check
        if (
          (rect1.left <= pos.x && rect1.right >= pos.x) &&
          (rect1.top <= pos.y && rect1.bottom >= pos.y)
        ) {
          $("#InputA").addClass('hit');
          texttext = document.getElementsByClassName('dragTarget')[0];
          texttext2 = texttext.innerHTML;
          texttext2 = texttext2.replace(/<span class="dragger"><\/span>/g, '');
          element = element1;
          $("#InputB").removeClass('hit');
          $("#InputC").removeClass('hit');
          $("#InputD").removeClass('hit');
                    
        }
        else if (
          (rect2.left <= pos.x && rect2.right >= pos.x) &&
          (rect2.top <= pos.y && rect2.bottom >= pos.y)
        ) {
          $("#InputB").addClass('hit');
          texttext = document.getElementsByClassName('dragTarget')[0];
          texttext2 = texttext.innerHTML;
          texttext2 = texttext2.replace(/<span class="dragger"><\/span>/g, '');
          element = element2;
          $("#InputA").removeClass('hit');
          $("#InputC").removeClass('hit');
          $("#InputD").removeClass('hit');
          
        }
        else if (
          (rect3.left <= pos.x && rect3.right >= pos.x) &&
          (rect3.top <= pos.y && rect3.bottom >= pos.y)
        ) {
          $("#InputC").addClass('hit');
          texttext = document.getElementsByClassName('dragTarget')[0];
          texttext2 = texttext.innerHTML;
          texttext2 = texttext2.replace(/<span class="dragger"><\/span>/g, '');
          element = element3;
          $("#InputA").removeClass('hit');
          $("#InputB").removeClass('hit');
          $("#InputD").removeClass('hit');
        }
        else if (
          (rect4.left <= pos.x && rect4.right >= pos.x) &&
          (rect4.top <= pos.y && rect4.bottom >= pos.y)
        ) {
          $("#InputD").addClass('hit');
          texttext = document.getElementsByClassName('dragTarget')[0];
          texttext2 = texttext.innerHTML;
          texttext2 = texttext2.replace(/<span class="dragger"><\/span>/g, '');
          element = element4;
          $("#InputA").removeClass('hit');
          $("#InputB").removeClass('hit');
          $("#InputC").removeClass('hit');
        }
        else {
          $val.removeClass('hit');
          $("#InputA").removeClass('hit');
          $("#InputB").removeClass('hit');
          $("#InputC").removeClass('hit');
          $("#InputD").removeClass('hit');
        }
      }

      /**
       * mouse down handler 
       * @name handleMouseDown
       * @function
       * @param e event object.
       */
      function handleMouseDown(e) {

        var evt = getEventObject(e),
          offset = this.getBoundingClientRect(),
          scroll = {
            top: doc.body.scrollTop,
            left: doc.body.scrollLeft
          };

        if (self.config.dragger && !$(e.target).hasClass('dragger')) {
          return;
        }

        if (self.currentClone || self.currentTarget) {
          return;
        }

        // create clone of target element.
        self.currentClone = $(this)
          .clone()
          .addClass('dragTarget')
          .css({
            'width': $(this).outerWidth(),
            'left': offset.left + scroll.left,
            'top': offset.top + scroll.top,
            '-webkit-transform': 'translate3d(-2px, -2px, 0)'
          })
          .appendTo(document.body);

        // save current target.
        self.currentTarget = $(e.currentTarget)
          .addClass('dragging');

        self.startPos.x = evt.pageX;
        self.startPos.y = evt.pageY;

        return false;
      }

      /////////////////////////////////////////////////////////

      $val.addClass('replaceable')
        .bind(MouseEvent.MOUSE_DOWN, handleMouseDown);

      if (self.config.dragger) {
        $val.append('<span class="dragger" />');
      }

      //bind event to global of replaceable
      self.bind('move', hitCheck);
    });
  };

  /////////////////////////////////////////////////////////////////////////////////////

}(window, document, jQuery));
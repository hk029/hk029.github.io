/* ========================================================================
* Bootstrap: scrollspy.js v3.3.2
* http://getbootstrap.com/javascript/#scrollspy
* ========================================================================
* Copyright 2011-2015 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */

/**
 * Customized by iissnan & Ivan.Nginx
 *
 * - Add a `clear.bs.scrollspy` event.
 * - Esacpe targets selector.
 * - Refactored with eslint-config-theme-next style.
 */
function JQuery(name) {
  let list = document.querySelectorAll(name);
  // return list;
  return list.length > 1 ? list : list[0];
}

(function($) {
  "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================
  class ScrollSpy {
    constructor(element, options) {
      this.$body = $("body");
      this.$window = $(window);
      this.$scrollElement =
        element[0] === this.$body[0] ? this.$window : element;
      this.options = { offset: 10, ...options };
      this.selector = (this.options.target || "") + " .nav li > a";
      this.offsets = [];
      this.targets = [];
      this.activeTarget = null;
      this.scrollHeight = 0;
      if (
        this.$scrollElement !== this.$window &&
        this.$scrollElement[0].scrollHeight - 100 >
          this.$scrollElement[0].offsetHeight
      ) {
        this.$scrollElement.on("scroll", this.process.bind(this));
      } else {
        this.$window.on("scroll", this.process.bind(this));
      }
      this.refresh();
    }

    getScrollHeight() {
      return (
        this.$scrollElement[0].scrollHeight ||
        Math.max(
          this.$body[0].scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }

    refresh() {
      this.offsets = [];
      this.targets = [];
      this.scrollHeight = this.getScrollHeight();
      this.offsets = [].slice
        .call(this.$body.find(this.selector))
        .map(function(a) {
          let href = a.getAttribute("target") || a.href;
          href = /(#.*)/.test(href) && /(#.*)/g.exec(href)[0];
          let $href = $(decodeURI(href));

          return (
            ($href && {
              element: a,
              target: $href,
              top: $href.offset().top
            }) || { element: a, target: $href, top: -1 }
          );
        })
        .sort(function(a, b) {
          return a.top - b.top;
        });
    }

    process(a) {
      let scrollHeight = this.getScrollHeight();
      var maxScroll = this.options.offset + scrollHeight;
      let i = 0;

      var offsets = this.offsets;
      var activeTarget = this.activeTarget;
      if (this.scrollHeight !== scrollHeight) {
        this.refresh();
      }
      let scroll = 0;
      if (this.$scrollElement[0] !== window) {
        scroll = this.$scrollElement.scroll().top;
      } else {
        scroll = window.scrollY;
      }
      if (scroll + window.screen.height >= maxScroll) {
        return activeTarget !== (i = offsets.length - 1) && this.activate(i);
      }

      if (scroll < offsets[0].top) {
        this.activeTarget = -1;
        return this.clear();
      }

      for (i = offsets.length - 1; i--; ) {
        if (scroll >= offsets[i].top) {
          return i !== activeTarget && this.activate(i);
        }
      }
    }

    activate(t) {
      this.activeTarget = t;
      if (t < 0) return;
      let target = this.offsets[t];
      this.clear();
      let parentLi = target.element.parentElement;
      let parentOL = parentLi.parentElement;
      let parent = parentLi;
      parentLi.classList.add("active");
      do {
        parent = parent.parentElement;
        if (parent.classList.contains("nav-child")) {
          parent.classList.add("open");
        }
      } while (!parent.classList.contains("nav"));
    }

    clear() {
      let actives = $(".post-toc-content ol , .post-toc-content li");
      if (actives) {
        [].slice.call(actives).map(a => {
          a.classList.remove("active");
          a.classList.remove("open");
        });
      }
    }
  }

  ScrollSpy.VERSION = "1.1.0";

  ScrollSpy.DEFAULTS = {
    offset: 10
  };

  window.onload = () => {
    new ScrollSpy($("body"));
  };
})(jQuery);

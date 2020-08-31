(function (g, fn) {
  if (typeof require !== "undefined") {
    if (g.$ === undefined) {
      g.$ = require("./jquery.min.js");
    }
  }
  var $ = g.$;
  if (typeof define === "function" && define.amd) {
    define(function () {
      return fn($);
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = fn($);
  } else {
    g.Tab = fn($);
  }
})(typeof window !== "undefined" ? window : this, function ($) {
  console.log($);

  var Tab = function (container, options) {
    console.log(container);
    var _this = this;
    this.tab = container;
    this.default = {
      trigger: "click",
      animation: true,
      defaultTab: 1,
      auto: false,
    };
    this.config = $.extend({}, this.default, options);
    this.tabItems = $(this.tab).find("ul.tab-nav li");

    this.contentItems = $(this.tab).find(
      "div.tab-content div.tab-content__item"
    );
    this.tabLength = this.tabItems.length;
    if (this.config.trigger == "click") {
      this.tabItems.bind(this.config.trigger, function () {
        _this.invoke($(this));
      });
    } else if (this.config.trigger == "mouseover") {
      this.tabItems
        .mouseover(this.config.triggerType, function () {
          var self = $(this);
          this.timer = window.setTimeout(function () {
            _this.invoke(self);
          }, 300);
        })
        .mouseout(function () {
          window.clearTimeout(this.timer);
        });
    }
    if (this.config.auto) {
      this.timer = null;
      this.loop = 0;
      this.autoplay();
      $(this.tab).hover(
        function () {
          window.clearInterval(_this.timer);
        },
        function () {
          _this.autoplay();
        }
      );
    }
    if (
      this.config.defaultTab > 1 &&
      this.config.defaultTab <= this.tabLength
    ) {
      this.invoke(this.tabItems.eq(this.config.defaultTab - 1));
    }
  };

  Tab.prototype = {
    autoplay: function () {
      var _this = this;
      this.timer = window.setInterval(function () {
        _this.loop++;
        if (_this.loop >= _this.tabLength) {
          _this.loop = 0;
        }
        console.log("loop", _this.loop);
        _this.invoke(_this.tabItems.eq(_this.loop));
      }, this.config.auto);
    },

    invoke: function (currentTab) {
      var index = currentTab.index();
      currentTab.addClass("active").siblings().removeClass("active");
      // animation
      if (this.config.animation) {
        this.contentItems.eq(index).fadeIn().siblings().fadeOut();
      } else {
        this.contentItems
          .eq(index)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
      if (this.config.auto) {
        this.loop = index;
      }
    },
  };

  return Tab;

  // $.fn.Tab = function (options) {
  //   this.each(function () {
  //     new Tab($(this), options);
  //   });
  // };
  //   $.fn.extend({
  //     tab: function () {
  //       this.each(function () {
  //         new Tab($(this));
  //       });
  //     },
  //   });
});

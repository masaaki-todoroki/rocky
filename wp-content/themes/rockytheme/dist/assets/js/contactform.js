/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  var option = {
    pages: [{
      'path': ['/inquiries/'],
      'button': {
        'areaClassName': 'submit-button', //  <p class="submit-button">[submit "送信する"]</p>
        'confirm': '<input class="button-confirm" type="button" value="確認画面へ" />', //  html
        'rewrite': '<input class="button-rewrite" type="button" value="修正する" />' //  html
      }
    }],
    validates: {
      required: {
        before: '',
        after: 'は必須項目です。'
      },
      email: {
        match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        before: '',
        after: 'が正しい形式ではありません（メールアドレスに「.」を使用することはできません）'
      }
    }
  };

  var flg = false;
  for (var i in option.pages) {
    var page = option.pages[i];
    for (var j in page.path) {
      var path = page.path[j];
      if (path == document.location.pathname) {
        flg = true;
        option.page = page;
        break;
      }
    }
  }
  if (!flg) return;

  (0, _jquery2.default)('form.wpcf7-form').each(function () {

    (0, _jquery2.default)(this).find('.wpcf7-form-control-wrap').each(function () {

      var child = (0, _jquery2.default)(this).children(0);

      if (child.hasClass('wpcf7-text')) {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.change(function () {
          (0, _jquery2.default)(this).parent().next().text((0, _jquery2.default)(this).val());
        }).change();
      } else if (child.get(0).tagName.toLowerCase() == 'textarea') {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.change(function () {
          (0, _jquery2.default)(this).parent().next().html((0, _jquery2.default)('<span>').text((0, _jquery2.default)(this).val()).html().replace(/\n/g, '<br />'));
        }).change();
      } else if (child.hasClass('wpcf7-number')) {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.change(function () {
          (0, _jquery2.default)(this).parent().next().text((0, _jquery2.default)(this).val());
        }).change();
      } else if (child.hasClass('wpcf7-select')) {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.change(function () {
          (0, _jquery2.default)(this).parent().next().text((0, _jquery2.default)(this).find('option[value="' + (0, _jquery2.default)(this).val() + '"]').text());
        }).change();
      }if (child.hasClass('wpcf7-radio')) {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.find('input[type="radio"]').change(function () {
          (0, _jquery2.default)(this).parents('.wpcf7-form-control-wrap').find('input[type="radio"]').each(function () {
            if (this.checked) {
              (0, _jquery2.default)(this).parents('.wpcf7-form-control-wrap').next().text((0, _jquery2.default)(this).parent().text());
            }
          });
        }).change();
      }if (child.hasClass('wpcf7-checkbox')) {
        (0, _jquery2.default)(this).after((0, _jquery2.default)('<span>').addClass('wpcf7-form-control-wrap-confirm'));
        child.find('input[type="checkbox"]').change(function () {
          var a = [];
          (0, _jquery2.default)(this).parents('.wpcf7-form-control-wrap').find('input[type="checkbox"]').each(function () {
            if (this.checked) {
              a.push((0, _jquery2.default)('<span>').text((0, _jquery2.default)(this).parent().text()).html());
            }
          });
          (0, _jquery2.default)(this).parents('.wpcf7-form-control-wrap').next().html(a.join('<br />'));
        }).change();
      }
    });

    (0, _jquery2.default)('.wrap_error').prepend((0, _jquery2.default)('<ul>').addClass('error-messages').hide());

    (0, _jquery2.default)(this).find('.' + option.page.button.areaClassName).addClass('buttons-area');

    (0, _jquery2.default)(this).find('.buttons-area').prepend(option.page.button.rewrite).after((0, _jquery2.default)('<p>').addClass('buttons-area-confirm').html(option.page.button.confirm));

    (0, _jquery2.default)(this).addClass('wpcf7-form-mode-edit');
    (0, _jquery2.default)(this).find('.wpcf7-form-control-wrap-confirm').hide();
    (0, _jquery2.default)(this).find('.wpcf7-form-control-wrap').show();
    (0, _jquery2.default)(this).find('.buttons-area').hide();
    (0, _jquery2.default)(this).find('.buttons-area-confirm').show();

    (0, _jquery2.default)(this).submit(function () {
      (0, _jquery2.default)(this).find('.buttons-area input[type="submit"]').hide();
    });

    (0, _jquery2.default)(this).find('.buttons-area .button-rewrite').click(function () {
      var form = (0, _jquery2.default)(this).parents('form.wpcf7-form');
      form.addClass('wpcf7-form-mode-edit').removeClass('wpcf7-form-mode-confirm');
      form.find('.buttons-area input[type="submit"]').show();
      form.find('.wpcf7-response-output').empty().removeClass('wpcf7-mail-sent-ok');
      form.find('.wpcf7-form-control-wrap-confirm').hide();
      form.find('.wpcf7-form-control-wrap').show();
      form.find('.buttons-area').hide();
      form.find('.buttons-area-confirm').show();
      (0, _jquery2.default)('html,body').animate({ scrollTop: form.offset().top - 30 }, 'slow', null);
      return false;
    });

    (0, _jquery2.default)(this).find('.buttons-area-confirm .button-confirm').click(function () {
      var form = (0, _jquery2.default)(this).parents('form.wpcf7-form'),
          error = form.find('ul.error-messages');
      error.empty();
      form.find('table tr').removeClass('error');
      form.find('.wpcf7-form-control-wrap').each(function () {
        var child = (0, _jquery2.default)(this).children(0),
            title = child.parents('tr').find('th').text();
        if (title.length == 0) {
          title = child.parents('p').find('.title').text();
        }
        if (child.hasClass('wpcf7-text')) {
          if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
            error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
            (0, _jquery2.default)(this).addClass('error');
          } else if (child.hasClass('wpcf7-validates-as-email') && !child.val().match(option.validates.email.match)) {
            error.append((0, _jquery2.default)('<li>').text(option.validates.email.before + title.replace('必須', '') + option.validates.email.after));
            (0, _jquery2.default)(this).addClass('error');
          }
        } else if (child.get(0).tagName.toLowerCase() == 'textarea') {
          if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
            error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
            (0, _jquery2.default)(this).addClass('error');
          }
        } else if (child.hasClass('wpcf7-number')) {
          if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
            error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
            (0, _jquery2.default)(this).addClass('error');
          }
        } else if (child.hasClass('wpcf7-select')) {
          if (child.hasClass('wpcf7-validates-as-required') && (!child.val() || child.val().length == 0 || child.val() == '---')) {
            error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
            (0, _jquery2.default)(this).addClass('error');
          }
        }if (child.hasClass('wpcf7-radio')) {
          if (child.hasClass('wpcf7-validates-as-required')) {
            var flg = false;
            (0, _jquery2.default)(this).find('input[type="radio"]').each(function () {
              if (this.checked) {
                flg = true;
                return;
              }
            });
            if (!flg) {
              error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
              (0, _jquery2.default)(this).addClass('error');
            }
          }
        }if (child.hasClass('wpcf7-checkbox')) {
          if (child.hasClass('wpcf7-validates-as-required')) {
            var flg = false;
            (0, _jquery2.default)(this).find('input[type="checkbox"]').each(function () {
              if (this.checked) {
                flg = true;
                return;
              }
            });
            if (!flg) {
              error.append((0, _jquery2.default)('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
              (0, _jquery2.default)(this).addClass('error');
            }
          }
        }
      });
      if (error.children().length > 0) {
        error.show();
      } else {
        form.addClass('wpcf7-form-mode-confirm').removeClass('wpcf7-form-mode-edit');
        form.find('.wpcf7-form-control-wrap').hide();
        form.find('.wpcf7-form-control-wrap-confirm').show();
        form.find('.buttons-area-confirm').hide();
        form.find('.buttons-area').show();
      }
      (0, _jquery2.default)('html,body').animate({ scrollTop: form.offset().top - 80 }, 'slow', null);
      return false;
    });
  });
});

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("form").submit(function () {
    var val = (0, _jquery2.default)("input[type=submit][clicked=true]").val();
    (0, _jquery2.default)('.button-rewrite').css('display', 'none');
  });
  (0, _jquery2.default)("form input[type=submit]").click(function () {
    (0, _jquery2.default)("input[type=submit]", (0, _jquery2.default)(this).parents("form")).removeAttr("clicked");
    (0, _jquery2.default)(this).attr("clicked", "true");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDkxNmRjMWQwM2JhZGY1N2MwOTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb250YWN0Zm9ybS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInJlYWR5Iiwib3B0aW9uIiwicGFnZXMiLCJ2YWxpZGF0ZXMiLCJyZXF1aXJlZCIsImJlZm9yZSIsImFmdGVyIiwiZW1haWwiLCJtYXRjaCIsImZsZyIsImkiLCJwYWdlIiwiaiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZWFjaCIsImZpbmQiLCJjaGlsZCIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImNoYW5nZSIsInBhcmVudCIsIm5leHQiLCJ0ZXh0IiwidmFsIiwiZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaHRtbCIsInJlcGxhY2UiLCJwYXJlbnRzIiwiY2hlY2tlZCIsImEiLCJwdXNoIiwiam9pbiIsInByZXBlbmQiLCJoaWRlIiwiYnV0dG9uIiwiYXJlYUNsYXNzTmFtZSIsInJld3JpdGUiLCJjb25maXJtIiwic2hvdyIsInN1Ym1pdCIsImNsaWNrIiwiZm9ybSIsInJlbW92ZUNsYXNzIiwiZW1wdHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiZXJyb3IiLCJ0aXRsZSIsImxlbmd0aCIsImFwcGVuZCIsImNzcyIsInJlbW92ZUF0dHIiLCJhdHRyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsc0JBQUVBLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUU1QixNQUFJQyxTQUFTO0FBQ1hDLFdBQU8sQ0FDTDtBQUNFLGNBQVEsQ0FBQyxhQUFELENBRFY7QUFFRSxnQkFBVTtBQUNSLHlCQUFpQixlQURULEVBQzBCO0FBQ2xDLG1CQUFXLDhEQUZILEVBRW9FO0FBQzVFLG1CQUFXLDZEQUhILENBR2tFO0FBSGxFO0FBRlosS0FESyxDQURJO0FBV1hDLGVBQVc7QUFDVEMsZ0JBQVU7QUFDUkMsZ0JBQVEsRUFEQTtBQUVSQyxlQUFPO0FBRkMsT0FERDtBQUtUQyxhQUFPO0FBQ0xDLGVBQU8sdUVBREY7QUFFTEgsZ0JBQVEsRUFGSDtBQUdMQyxlQUFPO0FBSEY7QUFMRTtBQVhBLEdBQWI7O0FBd0JBLE1BQUlHLE1BQU0sS0FBVjtBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjVCxPQUFPQyxLQUFyQixFQUE0QjtBQUMxQixRQUFJUyxPQUFPVixPQUFPQyxLQUFQLENBQWFRLENBQWIsQ0FBWDtBQUNBLFNBQUssSUFBSUUsQ0FBVCxJQUFjRCxLQUFLRSxJQUFuQixFQUF5QjtBQUN2QixVQUFJQSxPQUFPRixLQUFLRSxJQUFMLENBQVVELENBQVYsQ0FBWDtBQUNBLFVBQUlDLFFBQVFkLFNBQVNlLFFBQVQsQ0FBa0JDLFFBQTlCLEVBQXdDO0FBQ3RDTixjQUFNLElBQU47QUFDQVIsZUFBT1UsSUFBUCxHQUFjQSxJQUFkO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxNQUFJLENBQUNGLEdBQUwsRUFBVTs7QUFFVix3QkFBRSxpQkFBRixFQUNHTyxJQURILENBQ1EsWUFBWTs7QUFFaEIsMEJBQUUsSUFBRixFQUFRQyxJQUFSLENBQWEsMEJBQWIsRUFDR0QsSUFESCxDQUNRLFlBQVk7O0FBRWhCLFVBQUlFLFFBQVEsc0JBQUUsSUFBRixFQUFRQyxRQUFSLENBQWlCLENBQWpCLENBQVo7O0FBRUEsVUFBSUQsTUFBTUUsUUFBTixDQUFlLFlBQWYsQ0FBSixFQUFrQztBQUNoQyw4QkFBRSxJQUFGLEVBQ0dkLEtBREgsQ0FFSSxzQkFBRSxRQUFGLEVBQVllLFFBQVosQ0FBcUIsaUNBQXJCLENBRko7QUFJQUgsY0FDR0ksTUFESCxDQUNVLFlBQVk7QUFDbEIsZ0NBQUUsSUFBRixFQUFRQyxNQUFSLEdBQWlCQyxJQUFqQixHQUF3QkMsSUFBeEIsQ0FDRSxzQkFBRSxJQUFGLEVBQVFDLEdBQVIsRUFERjtBQUdELFNBTEgsRUFNR0osTUFOSDtBQVFELE9BYkQsTUFhTyxJQUFJSixNQUFNUyxHQUFOLENBQVUsQ0FBVixFQUFhQyxPQUFiLENBQXFCQyxXQUFyQixNQUFzQyxVQUExQyxFQUFzRDtBQUMzRCw4QkFBRSxJQUFGLEVBQ0d2QixLQURILENBRUksc0JBQUUsUUFBRixFQUFZZSxRQUFaLENBQXFCLGlDQUFyQixDQUZKO0FBSUFILGNBQ0dJLE1BREgsQ0FDVSxZQUFZO0FBQ2xCLGdDQUFFLElBQUYsRUFBUUMsTUFBUixHQUFpQkMsSUFBakIsR0FBd0JNLElBQXhCLENBQ0Usc0JBQUUsUUFBRixFQUFZTCxJQUFaLENBQWlCLHNCQUFFLElBQUYsRUFBUUMsR0FBUixFQUFqQixFQUFnQ0ksSUFBaEMsR0FBdUNDLE9BQXZDLENBQStDLEtBQS9DLEVBQXNELFFBQXRELENBREY7QUFHRCxTQUxILEVBTUdULE1BTkg7QUFTRCxPQWRNLE1BY0EsSUFBSUosTUFBTUUsUUFBTixDQUFlLGNBQWYsQ0FBSixFQUFvQztBQUN6Qyw4QkFBRSxJQUFGLEVBQ0dkLEtBREgsQ0FFSSxzQkFBRSxRQUFGLEVBQVllLFFBQVosQ0FBcUIsaUNBQXJCLENBRko7QUFJQUgsY0FDR0ksTUFESCxDQUNVLFlBQVk7QUFDbEIsZ0NBQUUsSUFBRixFQUFRQyxNQUFSLEdBQWlCQyxJQUFqQixHQUF3QkMsSUFBeEIsQ0FDRSxzQkFBRSxJQUFGLEVBQVFDLEdBQVIsRUFERjtBQUdELFNBTEgsRUFNR0osTUFOSDtBQVFELE9BYk0sTUFhQSxJQUFJSixNQUFNRSxRQUFOLENBQWUsY0FBZixDQUFKLEVBQW9DO0FBQ3pDLDhCQUFFLElBQUYsRUFDR2QsS0FESCxDQUVJLHNCQUFFLFFBQUYsRUFBWWUsUUFBWixDQUFxQixpQ0FBckIsQ0FGSjtBQUlBSCxjQUNHSSxNQURILENBQ1UsWUFBWTtBQUNsQixnQ0FBRSxJQUFGLEVBQVFDLE1BQVIsR0FBaUJDLElBQWpCLEdBQXdCQyxJQUF4QixDQUNFLHNCQUFFLElBQUYsRUFBUVIsSUFBUixDQUFhLG1CQUFtQixzQkFBRSxJQUFGLEVBQVFTLEdBQVIsRUFBbkIsR0FBbUMsSUFBaEQsRUFBc0RELElBQXRELEVBREY7QUFHRCxTQUxILEVBTUdILE1BTkg7QUFRRCxPQUFDLElBQUlKLE1BQU1FLFFBQU4sQ0FBZSxhQUFmLENBQUosRUFBbUM7QUFDbkMsOEJBQUUsSUFBRixFQUNHZCxLQURILENBRUksc0JBQUUsUUFBRixFQUFZZSxRQUFaLENBQXFCLGlDQUFyQixDQUZKO0FBSUFILGNBQU1ELElBQU4sQ0FBVyxxQkFBWCxFQUNHSyxNQURILENBQ1UsWUFBWTtBQUNsQixnQ0FBRSxJQUFGLEVBQVFVLE9BQVIsQ0FBZ0IsMEJBQWhCLEVBQTRDZixJQUE1QyxDQUFpRCxxQkFBakQsRUFDR0QsSUFESCxDQUNRLFlBQVk7QUFDaEIsZ0JBQUksS0FBS2lCLE9BQVQsRUFBa0I7QUFDaEIsb0NBQUUsSUFBRixFQUFRRCxPQUFSLENBQWdCLDBCQUFoQixFQUE0Q1IsSUFBNUMsR0FBbURDLElBQW5ELENBQ0Usc0JBQUUsSUFBRixFQUFRRixNQUFSLEdBQWlCRSxJQUFqQixFQURGO0FBR0Q7QUFDRixXQVBIO0FBUUQsU0FWSCxFQVdHSCxNQVhIO0FBYUQsT0FBQyxJQUFJSixNQUFNRSxRQUFOLENBQWUsZ0JBQWYsQ0FBSixFQUFzQztBQUN0Qyw4QkFBRSxJQUFGLEVBQ0dkLEtBREgsQ0FFSSxzQkFBRSxRQUFGLEVBQVllLFFBQVosQ0FBcUIsaUNBQXJCLENBRko7QUFJQUgsY0FBTUQsSUFBTixDQUFXLHdCQUFYLEVBQ0dLLE1BREgsQ0FDVSxZQUFZO0FBQ2xCLGNBQUlZLElBQUksRUFBUjtBQUNBLGdDQUFFLElBQUYsRUFBUUYsT0FBUixDQUFnQiwwQkFBaEIsRUFBNENmLElBQTVDLENBQWlELHdCQUFqRCxFQUNHRCxJQURILENBQ1EsWUFBWTtBQUNoQixnQkFBSSxLQUFLaUIsT0FBVCxFQUFrQjtBQUNoQkMsZ0JBQUVDLElBQUYsQ0FBTyxzQkFBRSxRQUFGLEVBQVlWLElBQVosQ0FBaUIsc0JBQUUsSUFBRixFQUFRRixNQUFSLEdBQWlCRSxJQUFqQixFQUFqQixFQUEwQ0ssSUFBMUMsRUFBUDtBQUNEO0FBQ0YsV0FMSDtBQU1BLGdDQUFFLElBQUYsRUFBUUUsT0FBUixDQUFnQiwwQkFBaEIsRUFBNENSLElBQTVDLEdBQW1ETSxJQUFuRCxDQUNFSSxFQUFFRSxJQUFGLENBQU8sUUFBUCxDQURGO0FBR0QsU0FaSCxFQWFHZCxNQWJIO0FBZUQ7QUFFRixLQWxHSDs7QUFvR0EsMEJBQUUsYUFBRixFQUNHZSxPQURILENBRUksc0JBQUUsTUFBRixFQUFVaEIsUUFBVixDQUFtQixnQkFBbkIsRUFBcUNpQixJQUFyQyxFQUZKOztBQUtBLDBCQUFFLElBQUYsRUFBUXJCLElBQVIsQ0FBYSxNQUFNaEIsT0FBT1UsSUFBUCxDQUFZNEIsTUFBWixDQUFtQkMsYUFBdEMsRUFDR25CLFFBREgsQ0FDWSxjQURaOztBQUdBLDBCQUFFLElBQUYsRUFBUUosSUFBUixDQUFhLGVBQWIsRUFDR29CLE9BREgsQ0FFSXBDLE9BQU9VLElBQVAsQ0FBWTRCLE1BQVosQ0FBbUJFLE9BRnZCLEVBSUduQyxLQUpILENBS0ksc0JBQUUsS0FBRixFQUNHZSxRQURILENBQ1ksc0JBRFosRUFFR1MsSUFGSCxDQUVRN0IsT0FBT1UsSUFBUCxDQUFZNEIsTUFBWixDQUFtQkcsT0FGM0IsQ0FMSjs7QUFVQSwwQkFBRSxJQUFGLEVBQVFyQixRQUFSLENBQWlCLHNCQUFqQjtBQUNBLDBCQUFFLElBQUYsRUFBUUosSUFBUixDQUFhLGtDQUFiLEVBQWlEcUIsSUFBakQ7QUFDQSwwQkFBRSxJQUFGLEVBQVFyQixJQUFSLENBQWEsMEJBQWIsRUFBeUMwQixJQUF6QztBQUNBLDBCQUFFLElBQUYsRUFBUTFCLElBQVIsQ0FBYSxlQUFiLEVBQThCcUIsSUFBOUI7QUFDQSwwQkFBRSxJQUFGLEVBQVFyQixJQUFSLENBQWEsdUJBQWIsRUFBc0MwQixJQUF0Qzs7QUFFQSwwQkFBRSxJQUFGLEVBQVFDLE1BQVIsQ0FBZSxZQUFZO0FBQ3pCLDRCQUFFLElBQUYsRUFBUTNCLElBQVIsQ0FBYSxvQ0FBYixFQUFtRHFCLElBQW5EO0FBQ0QsS0FGRDs7QUFJQSwwQkFBRSxJQUFGLEVBQVFyQixJQUFSLENBQWEsK0JBQWIsRUFDRzRCLEtBREgsQ0FDUyxZQUFZO0FBQ2pCLFVBQUlDLE9BQU8sc0JBQUUsSUFBRixFQUFRZCxPQUFSLENBQWdCLGlCQUFoQixDQUFYO0FBQ0FjLFdBQUt6QixRQUFMLENBQWMsc0JBQWQsRUFBc0MwQixXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDQUQsV0FBSzdCLElBQUwsQ0FBVSxvQ0FBVixFQUFnRDBCLElBQWhEO0FBQ0FHLFdBQUs3QixJQUFMLENBQVUsd0JBQVYsRUFBb0MrQixLQUFwQyxHQUE0Q0QsV0FBNUMsQ0FBd0Qsb0JBQXhEO0FBQ0FELFdBQUs3QixJQUFMLENBQVUsa0NBQVYsRUFBOENxQixJQUE5QztBQUNBUSxXQUFLN0IsSUFBTCxDQUFVLDBCQUFWLEVBQXNDMEIsSUFBdEM7QUFDQUcsV0FBSzdCLElBQUwsQ0FBVSxlQUFWLEVBQTJCcUIsSUFBM0I7QUFDQVEsV0FBSzdCLElBQUwsQ0FBVSx1QkFBVixFQUFtQzBCLElBQW5DO0FBQ0EsNEJBQUUsV0FBRixFQUFlTSxPQUFmLENBQXVCLEVBQUVDLFdBQVdKLEtBQUtLLE1BQUwsR0FBY0MsR0FBZCxHQUFvQixFQUFqQyxFQUF2QixFQUE4RCxNQUE5RCxFQUFzRSxJQUF0RTtBQUNBLGFBQU8sS0FBUDtBQUNELEtBWkg7O0FBZUEsMEJBQUUsSUFBRixFQUFRbkMsSUFBUixDQUFhLHVDQUFiLEVBQ0c0QixLQURILENBQ1MsWUFBWTtBQUNqQixVQUFJQyxPQUFPLHNCQUFFLElBQUYsRUFBUWQsT0FBUixDQUFnQixpQkFBaEIsQ0FBWDtBQUFBLFVBQ0lxQixRQUFRUCxLQUFLN0IsSUFBTCxDQUFVLG1CQUFWLENBRFo7QUFFQW9DLFlBQU1MLEtBQU47QUFDQUYsV0FBSzdCLElBQUwsQ0FBVSxVQUFWLEVBQXNCOEIsV0FBdEIsQ0FBa0MsT0FBbEM7QUFDQUQsV0FBSzdCLElBQUwsQ0FBVSwwQkFBVixFQUNHRCxJQURILENBQ1EsWUFBWTtBQUNoQixZQUFJRSxRQUFRLHNCQUFFLElBQUYsRUFBUUMsUUFBUixDQUFpQixDQUFqQixDQUFaO0FBQUEsWUFDSW1DLFFBQVFwQyxNQUFNYyxPQUFOLENBQWMsSUFBZCxFQUFvQmYsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JRLElBQS9CLEVBRFo7QUFFQSxZQUFJNkIsTUFBTUMsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNyQkQsa0JBQVFwQyxNQUFNYyxPQUFOLENBQWMsR0FBZCxFQUFtQmYsSUFBbkIsQ0FBd0IsUUFBeEIsRUFBa0NRLElBQWxDLEVBQVI7QUFDRDtBQUNELFlBQUlQLE1BQU1FLFFBQU4sQ0FBZSxZQUFmLENBQUosRUFBa0M7QUFDaEMsY0FBSUYsTUFBTUUsUUFBTixDQUFlLDZCQUFmLEtBQWlERixNQUFNUSxHQUFOLEdBQVk2QixNQUFaLElBQXNCLENBQTNFLEVBQThFO0FBQzVFRixrQkFBTUcsTUFBTixDQUFhLHNCQUFFLE1BQUYsRUFBVS9CLElBQVYsQ0FBZXhCLE9BQU9FLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxNQUExQixHQUFtQ2lELE1BQU12QixPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixDQUFuQyxHQUE2RDlCLE9BQU9FLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCRSxLQUF0RyxDQUFiO0FBQ0Esa0NBQUUsSUFBRixFQUFRZSxRQUFSLENBQWlCLE9BQWpCO0FBQ0QsV0FIRCxNQUdPLElBQUlILE1BQU1FLFFBQU4sQ0FBZSwwQkFBZixLQUErQyxDQUFDRixNQUFNUSxHQUFOLEdBQVlsQixLQUFaLENBQWtCUCxPQUFPRSxTQUFQLENBQWlCSSxLQUFqQixDQUF1QkMsS0FBekMsQ0FBcEQsRUFBc0c7QUFDM0c2QyxrQkFBTUcsTUFBTixDQUFhLHNCQUFFLE1BQUYsRUFBVS9CLElBQVYsQ0FBZXhCLE9BQU9FLFNBQVAsQ0FBaUJJLEtBQWpCLENBQXVCRixNQUF2QixHQUFnQ2lELE1BQU12QixPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixDQUFoQyxHQUEwRDlCLE9BQU9FLFNBQVAsQ0FBaUJJLEtBQWpCLENBQXVCRCxLQUFoRyxDQUFiO0FBQ0Esa0NBQUUsSUFBRixFQUFRZSxRQUFSLENBQWlCLE9BQWpCO0FBQ0Q7QUFDRixTQVJELE1BUU8sSUFBSUgsTUFBTVMsR0FBTixDQUFVLENBQVYsRUFBYUMsT0FBYixDQUFxQkMsV0FBckIsTUFBc0MsVUFBMUMsRUFBc0Q7QUFDM0QsY0FBSVgsTUFBTUUsUUFBTixDQUFlLDZCQUFmLEtBQWlERixNQUFNUSxHQUFOLEdBQVk2QixNQUFaLElBQXNCLENBQTNFLEVBQThFO0FBQzVFRixrQkFBTUcsTUFBTixDQUFhLHNCQUFFLE1BQUYsRUFBVS9CLElBQVYsQ0FBZXhCLE9BQU9FLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxNQUExQixHQUFtQ2lELE1BQU12QixPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixDQUFuQyxHQUE2RDlCLE9BQU9FLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCRSxLQUF0RyxDQUFiO0FBQ0Esa0NBQUUsSUFBRixFQUFRZSxRQUFSLENBQWlCLE9BQWpCO0FBQ0Q7QUFDRixTQUxNLE1BS0EsSUFBSUgsTUFBTUUsUUFBTixDQUFlLGNBQWYsQ0FBSixFQUFvQztBQUN6QyxjQUFJRixNQUFNRSxRQUFOLENBQWUsNkJBQWYsS0FBaURGLE1BQU1RLEdBQU4sR0FBWTZCLE1BQVosSUFBc0IsQ0FBM0UsRUFBOEU7QUFDNUVGLGtCQUFNRyxNQUFOLENBQWEsc0JBQUUsTUFBRixFQUFVL0IsSUFBVixDQUFleEIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLEdBQW1DaUQsTUFBTXZCLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLENBQW5DLEdBQTZEOUIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJFLEtBQXRHLENBQWI7QUFDQSxrQ0FBRSxJQUFGLEVBQVFlLFFBQVIsQ0FBaUIsT0FBakI7QUFDRDtBQUNGLFNBTE0sTUFLQSxJQUFJSCxNQUFNRSxRQUFOLENBQWUsY0FBZixDQUFKLEVBQW9DO0FBQ3pDLGNBQUlGLE1BQU1FLFFBQU4sQ0FBZSw2QkFBZixNQUFtRCxDQUFDRixNQUFNUSxHQUFOLEVBQUYsSUFBa0JSLE1BQU1RLEdBQU4sR0FBWTZCLE1BQVosSUFBc0IsQ0FBeEMsSUFBNkNyQyxNQUFNUSxHQUFOLE1BQWUsS0FBOUcsQ0FBSixFQUEwSDtBQUN4SDJCLGtCQUFNRyxNQUFOLENBQWEsc0JBQUUsTUFBRixFQUFVL0IsSUFBVixDQUFleEIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLEdBQW1DaUQsTUFBTXZCLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLENBQW5DLEdBQTZEOUIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJFLEtBQXRHLENBQWI7QUFDQSxrQ0FBRSxJQUFGLEVBQVFlLFFBQVIsQ0FBaUIsT0FBakI7QUFDRDtBQUNGLFNBQUMsSUFBSUgsTUFBTUUsUUFBTixDQUFlLGFBQWYsQ0FBSixFQUFtQztBQUNuQyxjQUFJRixNQUFNRSxRQUFOLENBQWUsNkJBQWYsQ0FBSixFQUFtRDtBQUNqRCxnQkFBSVgsTUFBTSxLQUFWO0FBQ0Esa0NBQUUsSUFBRixFQUFRUSxJQUFSLENBQWEscUJBQWIsRUFDR0QsSUFESCxDQUNRLFlBQVk7QUFDaEIsa0JBQUksS0FBS2lCLE9BQVQsRUFBa0I7QUFDaEJ4QixzQkFBTSxJQUFOO0FBQ0E7QUFDRDtBQUNGLGFBTkg7QUFPQSxnQkFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUjRDLG9CQUFNRyxNQUFOLENBQWEsc0JBQUUsTUFBRixFQUFVL0IsSUFBVixDQUFleEIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLEdBQW1DaUQsTUFBTXZCLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLENBQW5DLEdBQTZEOUIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJFLEtBQXRHLENBQWI7QUFDQSxvQ0FBRSxJQUFGLEVBQVFlLFFBQVIsQ0FBaUIsT0FBakI7QUFDRDtBQUNGO0FBQ0YsU0FBQyxJQUFJSCxNQUFNRSxRQUFOLENBQWUsZ0JBQWYsQ0FBSixFQUFzQztBQUN0QyxjQUFJRixNQUFNRSxRQUFOLENBQWUsNkJBQWYsQ0FBSixFQUFtRDtBQUNqRCxnQkFBSVgsTUFBTSxLQUFWO0FBQ0Esa0NBQUUsSUFBRixFQUFRUSxJQUFSLENBQWEsd0JBQWIsRUFDR0QsSUFESCxDQUNRLFlBQVk7QUFDaEIsa0JBQUksS0FBS2lCLE9BQVQsRUFBa0I7QUFDaEJ4QixzQkFBTSxJQUFOO0FBQ0E7QUFDRDtBQUNGLGFBTkg7QUFPQSxnQkFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUjRDLG9CQUFNRyxNQUFOLENBQWEsc0JBQUUsTUFBRixFQUFVL0IsSUFBVixDQUFleEIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLEdBQW1DaUQsTUFBTXZCLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLENBQW5DLEdBQTZEOUIsT0FBT0UsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJFLEtBQXRHLENBQWI7QUFDQSxvQ0FBRSxJQUFGLEVBQVFlLFFBQVIsQ0FBaUIsT0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixPQTdESDtBQThEQSxVQUFJZ0MsTUFBTWxDLFFBQU4sR0FBaUJvQyxNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUMvQkYsY0FBTVYsSUFBTjtBQUNELE9BRkQsTUFFTztBQUNMRyxhQUFLekIsUUFBTCxDQUFjLHlCQUFkLEVBQXlDMEIsV0FBekMsQ0FBcUQsc0JBQXJEO0FBQ0FELGFBQUs3QixJQUFMLENBQVUsMEJBQVYsRUFBc0NxQixJQUF0QztBQUNBUSxhQUFLN0IsSUFBTCxDQUFVLGtDQUFWLEVBQThDMEIsSUFBOUM7QUFDQUcsYUFBSzdCLElBQUwsQ0FBVSx1QkFBVixFQUFtQ3FCLElBQW5DO0FBQ0FRLGFBQUs3QixJQUFMLENBQVUsZUFBVixFQUEyQjBCLElBQTNCO0FBQ0Q7QUFDRCw0QkFBRSxXQUFGLEVBQWVNLE9BQWYsQ0FBdUIsRUFBRUMsV0FBV0osS0FBS0ssTUFBTCxHQUFjQyxHQUFkLEdBQW9CLEVBQWpDLEVBQXZCLEVBQThELE1BQTlELEVBQXNFLElBQXRFO0FBQ0EsYUFBTyxLQUFQO0FBQ0QsS0EvRUg7QUFnRkQsR0FsT0g7QUFtT0QsQ0EzUUQ7O0FBNlFBLHNCQUFFckQsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUIsd0JBQUUsTUFBRixFQUFVNEMsTUFBVixDQUFpQixZQUFZO0FBQzNCLFFBQUlsQixNQUFNLHNCQUFFLGtDQUFGLEVBQXNDQSxHQUF0QyxFQUFWO0FBQ0EsMEJBQUUsaUJBQUYsRUFBcUIrQixHQUFyQixDQUF5QixTQUF6QixFQUFvQyxNQUFwQztBQUNELEdBSEQ7QUFJQSx3QkFBRSx5QkFBRixFQUE2QlosS0FBN0IsQ0FBbUMsWUFBWTtBQUM3QywwQkFBRSxvQkFBRixFQUF3QixzQkFBRSxJQUFGLEVBQVFiLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FBeEIsRUFBaUQwQixVQUFqRCxDQUE0RCxTQUE1RDtBQUNBLDBCQUFFLElBQUYsRUFBUUMsSUFBUixDQUFhLFNBQWIsRUFBd0IsTUFBeEI7QUFDRCxHQUhEO0FBSUQsQ0FURCxFIiwiZmlsZSI6ImNvbnRhY3Rmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDkxNmRjMWQwM2JhZGY1N2MwOTkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIG9wdGlvbiA9IHtcbiAgICBwYWdlczogW1xuICAgICAge1xuICAgICAgICAncGF0aCc6IFsnL2lucXVpcmllcy8nXSxcbiAgICAgICAgJ2J1dHRvbic6IHtcbiAgICAgICAgICAnYXJlYUNsYXNzTmFtZSc6ICdzdWJtaXQtYnV0dG9uJyzCoC8vwqDCoDxwwqBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5bc3VibWl0wqBcIumAgeS/oeOBmeOCi1wiXTwvcD5cbiAgICAgICAgICAnY29uZmlybSc6ICc8aW5wdXTCoGNsYXNzPVwiYnV0dG9uLWNvbmZpcm1cIsKgdHlwZT1cImJ1dHRvblwiwqB2YWx1ZT1cIueiuuiqjeeUu+mdouOBuFwiwqAvPicswqDCoC8vwqDCoGh0bWxcbiAgICAgICAgICAncmV3cml0ZSc6ICc8aW5wdXTCoGNsYXNzPVwiYnV0dG9uLXJld3JpdGVcIsKgdHlwZT1cImJ1dHRvblwiwqB2YWx1ZT1cIuS/ruato+OBmeOCi1wiwqAvPifCoMKgLy/CoMKgaHRtbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICB2YWxpZGF0ZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIGJlZm9yZTogJycsXG4gICAgICAgIGFmdGVyOiAn44Gv5b+F6aCI6aCF55uu44Gn44GZ44CCJ1xuICAgICAgfSxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIG1hdGNoOiAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLFxuICAgICAgICBiZWZvcmU6ICcnLFxuICAgICAgICBhZnRlcjogJ+OBjOato+OBl+OBhOW9ouW8j+OBp+OBr+OBguOCiuOBvuOBm+OCk++8iOODoeODvOODq+OCouODieODrOOCueOBq+OAjC7jgI3jgpLkvb/nlKjjgZnjgovjgZPjgajjga/jgafjgY3jgb7jgZvjgpPvvIknXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbGcgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSBpbiBvcHRpb24ucGFnZXMpIHtcbiAgICB2YXIgcGFnZSA9IG9wdGlvbi5wYWdlc1tpXTtcbiAgICBmb3IgKHZhciBqIGluIHBhZ2UucGF0aCkge1xuICAgICAgdmFyIHBhdGggPSBwYWdlLnBhdGhbal07XG4gICAgICBpZiAocGF0aCA9PSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICBvcHRpb24ucGFnZSA9IHBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWZsZykgcmV0dXJuO1xuXG4gICQoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIHZhciBjaGlsZCA9ICQodGhpcykuY2hpbGRyZW4oMCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXRleHQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZ2V0KDApLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5odG1sKFxuICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+JykudGV4dCgkKHRoaXMpLnZhbCgpKS5odG1sKCkucmVwbGFjZSgvXFxuL2csICc8YnLCoC8+JylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctbnVtYmVyJykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnRleHQoXG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1zZWxlY3QnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnb3B0aW9uW3ZhbHVlPVwiJyArICQodGhpcykudmFsKCkgKyAnXCJdJykudGV4dCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctcmFkaW8nKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LWNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKCQoJzxzcGFuPicpLnRleHQoJCh0aGlzKS5wYXJlbnQoKS50ZXh0KCkpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykubmV4dCgpLmh0bWwoXG4gICAgICAgICAgICAgICAgICBhLmpvaW4oJzxicsKgLz4nKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAkKCcud3JhcF9lcnJvcicpXG4gICAgICAgIC5wcmVwZW5kKFxuICAgICAgICAgICQoJzx1bD4nKS5hZGRDbGFzcygnZXJyb3ItbWVzc2FnZXMnKS5oaWRlKClcbiAgICAgICAgKTtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuJyArIG9wdGlvbi5wYWdlLmJ1dHRvbi5hcmVhQ2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3MoJ2J1dHRvbnMtYXJlYScpO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEnKVxuICAgICAgICAucHJlcGVuZChcbiAgICAgICAgICBvcHRpb24ucGFnZS5idXR0b24ucmV3cml0ZVxuICAgICAgICApXG4gICAgICAgIC5hZnRlcihcbiAgICAgICAgICAkKCc8cD4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdidXR0b25zLWFyZWEtY29uZmlybScpXG4gICAgICAgICAgICAuaHRtbChvcHRpb24ucGFnZS5idXR0b24uY29uZmlybSlcbiAgICAgICAgKTtcblxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKTtcbiAgICAgICQodGhpcykuZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLnNob3coKTtcbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYScpLmhpZGUoKTtcbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuc2hvdygpO1xuXG4gICAgICAkKHRoaXMpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYcKgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmhpZGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWHCoC5idXR0b24tcmV3cml0ZScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0ud3BjZjctZm9ybScpO1xuICAgICAgICAgIGZvcm0uYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1lZGl0JykucmVtb3ZlQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1jb25maXJtJyk7XG4gICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhwqBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuc2hvdygpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LXJlc3BvbnNlLW91dHB1dCcpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3dwY2Y3LW1haWwtc2VudC1vaycpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5zaG93KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhJykuaGlkZSgpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuc2hvdygpO1xuICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGZvcm0ub2Zmc2V0KCkudG9wIC0gMzAgfSwgJ3Nsb3cnLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIDtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm3CoC5idXR0b24tY29uZmlybScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgICAgICAgICAsIGVycm9yID0gZm9ybS5maW5kKCd1bC5lcnJvci1tZXNzYWdlcycpO1xuICAgICAgICAgIGVycm9yLmVtcHR5KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCd0YWJsZcKgdHInKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBjaGlsZCA9ICQodGhpcykuY2hpbGRyZW4oMClcbiAgICAgICAgICAgICAgICAsIHRpdGxlID0gY2hpbGQucGFyZW50cygndHInKS5maW5kKCd0aCcpLnRleHQoKTtcbiAgICAgICAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBjaGlsZC5wYXJlbnRzKCdwJykuZmluZCgnLnRpdGxlJykudGV4dCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtZW1haWwnKSAmJiAoIWNoaWxkLnZhbCgpLm1hdGNoKG9wdGlvbi52YWxpZGF0ZXMuZW1haWwubWF0Y2gpKSkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMuZW1haWwuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZ2V0KDApLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LW51bWJlcicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiAoKCFjaGlsZC52YWwoKSkgfHwgY2hpbGQudmFsKCkubGVuZ3RoID09IDAgfHwgY2hpbGQudmFsKCkgPT0gJy0tLScpKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXJhZGlvJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZmxnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWZsZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctY2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmbGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghZmxnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlcnJvci5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVycm9yLnNob3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWNvbmZpcm0nKS5yZW1vdmVDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpLnNob3coKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuaGlkZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhJykuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBmb3JtLm9mZnNldCgpLnRvcCAtIDgwIH0sICdzbG93JywgbnVsbCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbCA9ICQoXCJpbnB1dFt0eXBlPXN1Ym1pdF1bY2xpY2tlZD10cnVlXVwiKS52YWwoKTtcbiAgICAkKCcuYnV0dG9uLXJld3JpdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9KTtcbiAgJChcImZvcm3CoGlucHV0W3R5cGU9c3VibWl0XVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcImlucHV0W3R5cGU9c3VibWl0XVwiLCAkKHRoaXMpLnBhcmVudHMoXCJmb3JtXCIpKS5yZW1vdmVBdHRyKFwiY2xpY2tlZFwiKTtcbiAgICAkKHRoaXMpLmF0dHIoXCJjbGlja2VkXCIsIFwidHJ1ZVwiKTtcbiAgfSk7XG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb250YWN0Zm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
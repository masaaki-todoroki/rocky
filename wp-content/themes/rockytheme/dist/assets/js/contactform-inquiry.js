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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  var option = {
    pages: [{
      'path': ['/jp/contact/inquiry-cgi/'],
      'button': {
        'areaClassName': 'submit-button', // <p class="submit-button">[submit "送信する"]</p>
        'confirm': '<input class="button-confirm" type="button" value="確認画面へ" />', // html
        'rewrite': '<input class="button-rewrite" type="button" value="修正する" />' // html
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
          (0, _jquery2.default)(this).parent().next().html((0, _jquery2.default)('<span>').text((0, _jquery2.default)(this).val()).html().replace(/\n/g, '<br />'));
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
          (0, _jquery2.default)(this).parents('.wpcf7-form-control-wrap').next().html(a.join('<br />'));
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
      (0, _jquery2.default)(this).find('.buttons-area input[type="submit"]').hide();
    });

    (0, _jquery2.default)(this).find('.buttons-area .button-rewrite').click(function () {
      var form = (0, _jquery2.default)(this).parents('form.wpcf7-form');
      form.addClass('wpcf7-form-mode-edit').removeClass('wpcf7-form-mode-confirm');
      form.find('.buttons-area input[type="submit"]').show();
      form.find('.wpcf7-response-output').empty().removeClass('wpcf7-mail-sent-ok');
      form.find('.wpcf7-form-control-wrap-confirm').hide();
      form.find('.wpcf7-form-control-wrap').show();
      form.find('.buttons-area').hide();
      form.find('.buttons-area-confirm').show();
      (0, _jquery2.default)('html,body').animate({ scrollTop: form.offset().top - 30 }, 'slow', null);
      return false;
    });

    (0, _jquery2.default)(this).find('.buttons-area-confirm .button-confirm').click(function () {
      var form = (0, _jquery2.default)(this).parents('form.wpcf7-form'),
          error = form.find('ul.error-messages');
      error.empty();
      form.find('table tr').removeClass('error');
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
  (0, _jquery2.default)("form input[type=submit]").click(function () {
    (0, _jquery2.default)("input[type=submit]", (0, _jquery2.default)(this).parents("form")).removeAttr("clicked");
    (0, _jquery2.default)(this).attr("clicked", "true");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5NjIxMzAzNWNjOGE5MGJmMjQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb250YWN0Zm9ybS1pbnF1aXJ5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicmVhZHkiLCJvcHRpb24iLCJwYWdlcyIsInZhbGlkYXRlcyIsInJlcXVpcmVkIiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbWFpbCIsIm1hdGNoIiwiZmxnIiwiaSIsInBhZ2UiLCJqIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJlYWNoIiwiZmluZCIsImNoaWxkIiwiY2hpbGRyZW4iLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiY2hhbmdlIiwicGFyZW50IiwibmV4dCIsInRleHQiLCJ2YWwiLCJnZXQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJodG1sIiwicmVwbGFjZSIsInBhcmVudHMiLCJjaGVja2VkIiwiYSIsInB1c2giLCJqb2luIiwicHJlcGVuZCIsImhpZGUiLCJidXR0b24iLCJhcmVhQ2xhc3NOYW1lIiwicmV3cml0ZSIsImNvbmZpcm0iLCJzaG93Iiwic3VibWl0IiwiY2xpY2siLCJmb3JtIiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJlcnJvciIsInRpdGxlIiwibGVuZ3RoIiwiYXBwZW5kIiwiY3NzIiwicmVtb3ZlQXR0ciIsImF0dHIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNM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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjE5NjIxMzAzNWNjOGE5MGJmMjQiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBvcHRpb24gPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgJ3BhdGgnOiBbJy9qcC9jb250YWN0L2lucXVpcnktY2dpLyddLFxuICAgICAgICAnYnV0dG9uJzoge1xuICAgICAgICAgICdhcmVhQ2xhc3NOYW1lJzogJ3N1Ym1pdC1idXR0b24nLCAvLyA8cCBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5bc3VibWl0IFwi6YCB5L+h44GZ44KLXCJdPC9wPlxuICAgICAgICAgICdjb25maXJtJzogJzxpbnB1dCBjbGFzcz1cImJ1dHRvbi1jb25maXJtXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi56K66KqN55S76Z2i44G4XCIgLz4nLCAvLyBodG1sXG4gICAgICAgICAgJ3Jld3JpdGUnOiAnPGlucHV0IGNsYXNzPVwiYnV0dG9uLXJld3JpdGVcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLkv67mraPjgZnjgotcIiAvPicgLy8gaHRtbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICB2YWxpZGF0ZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIGJlZm9yZTogJycsXG4gICAgICAgIGFmdGVyOiAn44Gv5b+F6aCI6aCF55uu44Gn44GZ44CCJ1xuICAgICAgfSxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIG1hdGNoOiAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLFxuICAgICAgICBiZWZvcmU6ICcnLFxuICAgICAgICBhZnRlcjogJ+OBjOato+OBl+OBhOW9ouW8j+OBp+OBr+OBguOCiuOBvuOBm+OCk++8iOODoeODvOODq+OCouODieODrOOCueOBq+OAjC7jgI3jgpLkvb/nlKjjgZnjgovjgZPjgajjga/jgafjgY3jgb7jgZvjgpPvvIknXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbGcgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSBpbiBvcHRpb24ucGFnZXMpIHtcbiAgICB2YXIgcGFnZSA9IG9wdGlvbi5wYWdlc1tpXTtcbiAgICBmb3IgKHZhciBqIGluIHBhZ2UucGF0aCkge1xuICAgICAgdmFyIHBhdGggPSBwYWdlLnBhdGhbal07XG4gICAgICBpZiAocGF0aCA9PSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICBvcHRpb24ucGFnZSA9IHBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWZsZykgcmV0dXJuO1xuXG4gICQoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIHZhciBjaGlsZCA9ICQodGhpcykuY2hpbGRyZW4oMCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXRleHQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZ2V0KDApLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5odG1sKFxuICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+JykudGV4dCgkKHRoaXMpLnZhbCgpKS5odG1sKCkucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1udW1iZXInKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdvcHRpb25bdmFsdWU9XCInICsgJCh0aGlzKS52YWwoKSArICdcIl0nKS50ZXh0KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1yYWRpbycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctY2hlY2tib3gnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGQuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goJCgnPHNwYW4+JykudGV4dCgkKHRoaXMpLnBhcmVudCgpLnRleHQoKSkuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5uZXh0KCkuaHRtbChcbiAgICAgICAgICAgICAgICAgIGEuam9pbignPGJyIC8+JylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgJCgnLndyYXBfZXJyb3InKVxuICAgICAgICAucHJlcGVuZChcbiAgICAgICAgICAkKCc8dWw+JykuYWRkQ2xhc3MoJ2Vycm9yLW1lc3NhZ2VzJykuaGlkZSgpXG4gICAgICAgICk7XG5cbiAgICAgICQodGhpcykuZmluZCgnLicgKyBvcHRpb24ucGFnZS5idXR0b24uYXJlYUNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKCdidXR0b25zLWFyZWEnKTtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhJylcbiAgICAgICAgLnByZXBlbmQoXG4gICAgICAgICAgb3B0aW9uLnBhZ2UuYnV0dG9uLnJld3JpdGVcbiAgICAgICAgKVxuICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgJCgnPHA+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYnV0dG9ucy1hcmVhLWNvbmZpcm0nKVxuICAgICAgICAgICAgLmh0bWwob3B0aW9uLnBhZ2UuYnV0dG9uLmNvbmZpcm0pXG4gICAgICAgICk7XG5cbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1lZGl0Jyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuaGlkZSgpO1xuICAgICAgJCh0aGlzKS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5zaG93KCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEnKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybScpLnNob3coKTtcblxuICAgICAgJCh0aGlzKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmhpZGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEgLmJ1dHRvbi1yZXdyaXRlJylcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybS53cGNmNy1mb3JtJyk7XG4gICAgICAgICAgZm9ybS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKS5yZW1vdmVDbGFzcygnd3BjZjctZm9ybS1tb2RlLWNvbmZpcm0nKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLnNob3coKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1yZXNwb25zZS1vdXRwdXQnKS5lbXB0eSgpLnJlbW92ZUNsYXNzKCd3cGNmNy1tYWlsLXNlbnQtb2snKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuaGlkZSgpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuc2hvdygpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYScpLmhpZGUoKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybScpLnNob3coKTtcbiAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBmb3JtLm9mZnNldCgpLnRvcCAtIDMwIH0sICdzbG93JywgbnVsbCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICA7XG5cbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtIC5idXR0b24tY29uZmlybScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgICAgICAgICAsIGVycm9yID0gZm9ybS5maW5kKCd1bC5lcnJvci1tZXNzYWdlcycpO1xuICAgICAgICAgIGVycm9yLmVtcHR5KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCd0YWJsZSB0cicpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkID0gJCh0aGlzKS5jaGlsZHJlbigwKVxuICAgICAgICAgICAgICAgICwgdGl0bGUgPSBjaGlsZC5wYXJlbnRzKCd0cicpLmZpbmQoJ3RoJykudGV4dCgpO1xuICAgICAgICAgICAgICBpZiAodGl0bGUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGNoaWxkLnBhcmVudHMoJ3AnKS5maW5kKCcudGl0bGUnKS50ZXh0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy10ZXh0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1lbWFpbCcpICYmICghY2hpbGQudmFsKCkubWF0Y2gob3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5tYXRjaCkpKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLmVtYWlsLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5nZXQoMCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmICgoIWNoaWxkLnZhbCgpKSB8fCBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCB8fCBjaGlsZC52YWwoKSA9PSAnLS0tJykpIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctcmFkaW8nKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmbGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghZmxnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1jaGVja2JveCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGZsZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCFmbGcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGVycm9yLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXJyb3Iuc2hvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtLmFkZENsYXNzKCd3cGNmNy1mb3JtLW1vZGUtY29uZmlybScpLnJlbW92ZUNsYXNzKCd3cGNmNy1mb3JtLW1vZGUtZWRpdCcpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuc2hvdygpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEnKS5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGZvcm0ub2Zmc2V0KCkudG9wIC0gODAgfSwgJ3Nsb3cnLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcImZvcm1cIikuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsID0gJChcImlucHV0W3R5cGU9c3VibWl0XVtjbGlja2VkPXRydWVdXCIpLnZhbCgpO1xuICAgICQoJy5idXR0b24tcmV3cml0ZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gIH0pO1xuICAkKFwiZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF1cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIiwgJCh0aGlzKS5wYXJlbnRzKFwiZm9ybVwiKSkucmVtb3ZlQXR0cihcImNsaWNrZWRcIik7XG4gICAgJCh0aGlzKS5hdHRyKFwiY2xpY2tlZFwiLCBcInRydWVcIik7XG4gIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29udGFjdGZvcm0taW5xdWlyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
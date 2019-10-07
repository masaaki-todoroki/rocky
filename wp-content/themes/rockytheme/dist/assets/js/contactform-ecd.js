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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  var option = {
    pages: [{
      'path': ['/jp/contact/ecd-cgi/'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5NjIxMzAzNWNjOGE5MGJmMjQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb250YWN0Zm9ybS1lY2QuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsIm9wdGlvbiIsInBhZ2VzIiwidmFsaWRhdGVzIiwicmVxdWlyZWQiLCJiZWZvcmUiLCJhZnRlciIsImVtYWlsIiwibWF0Y2giLCJmbGciLCJpIiwicGFnZSIsImoiLCJwYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImVhY2giLCJmaW5kIiwiY2hpbGQiLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJjaGFuZ2UiLCJwYXJlbnQiLCJuZXh0IiwidGV4dCIsInZhbCIsImdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImh0bWwiLCJyZXBsYWNlIiwicGFyZW50cyIsImNoZWNrZWQiLCJhIiwicHVzaCIsImpvaW4iLCJwcmVwZW5kIiwiaGlkZSIsImJ1dHRvbiIsImFyZWFDbGFzc05hbWUiLCJyZXdyaXRlIiwiY29uZmlybSIsInNob3ciLCJzdWJtaXQiLCJjbGljayIsImZvcm0iLCJyZW1vdmVDbGFzcyIsImVtcHR5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImVycm9yIiwidGl0bGUiLCJsZW5ndGgiLCJhcHBlbmQiLCJjc3MiLCJyZW1vdmVBdHRyIiwiYXR0ciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFD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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxOTYyMTMwMzVjYzhhOTBiZjI0IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICB2YXIgb3B0aW9uID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICB7XG4gICAgICAgICdwYXRoJzogWycvanAvY29udGFjdC9lY2QtY2dpLyddLFxuICAgICAgICAnYnV0dG9uJzoge1xuICAgICAgICAgICdhcmVhQ2xhc3NOYW1lJzogJ3N1Ym1pdC1idXR0b24nLCAvLyA8cCBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5bc3VibWl0IFwi6YCB5L+h44GZ44KLXCJdPC9wPlxuICAgICAgICAgICdjb25maXJtJzogJzxpbnB1dCBjbGFzcz1cImJ1dHRvbi1jb25maXJtXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi56K66KqN55S76Z2i44G4XCIgLz4nLCAvLyBodG1sXG4gICAgICAgICAgJ3Jld3JpdGUnOiAnPGlucHV0IGNsYXNzPVwiYnV0dG9uLXJld3JpdGVcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLkv67mraPjgZnjgotcIiAvPicgLy8gaHRtbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICB2YWxpZGF0ZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIGJlZm9yZTogJycsXG4gICAgICAgIGFmdGVyOiAn44Gv5b+F6aCI6aCF55uu44Gn44GZ44CCJ1xuICAgICAgfSxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIG1hdGNoOiAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLFxuICAgICAgICBiZWZvcmU6ICcnLFxuICAgICAgICBhZnRlcjogJ+OBjOato+OBl+OBhOW9ouW8j+OBp+OBr+OBguOCiuOBvuOBm+OCk++8iOODoeODvOODq+OCouODieODrOOCueOBq+OAjC7jgI3jgpLkvb/nlKjjgZnjgovjgZPjgajjga/jgafjgY3jgb7jgZvjgpPvvIknXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbGcgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSBpbiBvcHRpb24ucGFnZXMpIHtcbiAgICB2YXIgcGFnZSA9IG9wdGlvbi5wYWdlc1tpXTtcbiAgICBmb3IgKHZhciBqIGluIHBhZ2UucGF0aCkge1xuICAgICAgdmFyIHBhdGggPSBwYWdlLnBhdGhbal07XG4gICAgICBpZiAocGF0aCA9PSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICBvcHRpb24ucGFnZSA9IHBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWZsZykgcmV0dXJuO1xuXG4gICQoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIHZhciBjaGlsZCA9ICQodGhpcykuY2hpbGRyZW4oMCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXRleHQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZ2V0KDApLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5odG1sKFxuICAgICAgICAgICAgICAgICAgJCgnPHNwYW4+JykudGV4dCgkKHRoaXMpLnZhbCgpKS5odG1sKCkucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1udW1iZXInKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdvcHRpb25bdmFsdWU9XCInICsgJCh0aGlzKS52YWwoKSArICdcIl0nKS50ZXh0KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1yYWRpbycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctY2hlY2tib3gnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGQuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goJCgnPHNwYW4+JykudGV4dCgkKHRoaXMpLnBhcmVudCgpLnRleHQoKSkuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5uZXh0KCkuaHRtbChcbiAgICAgICAgICAgICAgICAgIGEuam9pbignPGJyIC8+JylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgJCgnLndyYXBfZXJyb3InKVxuICAgICAgICAucHJlcGVuZChcbiAgICAgICAgICAkKCc8dWw+JykuYWRkQ2xhc3MoJ2Vycm9yLW1lc3NhZ2VzJykuaGlkZSgpXG4gICAgICAgICk7XG5cbiAgICAgICQodGhpcykuZmluZCgnLicgKyBvcHRpb24ucGFnZS5idXR0b24uYXJlYUNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKCdidXR0b25zLWFyZWEnKTtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhJylcbiAgICAgICAgLnByZXBlbmQoXG4gICAgICAgICAgb3B0aW9uLnBhZ2UuYnV0dG9uLnJld3JpdGVcbiAgICAgICAgKVxuICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgJCgnPHA+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYnV0dG9ucy1hcmVhLWNvbmZpcm0nKVxuICAgICAgICAgICAgLmh0bWwob3B0aW9uLnBhZ2UuYnV0dG9uLmNvbmZpcm0pXG4gICAgICAgICk7XG5cbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1lZGl0Jyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuaGlkZSgpO1xuICAgICAgJCh0aGlzKS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5zaG93KCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEnKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybScpLnNob3coKTtcblxuICAgICAgJCh0aGlzKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmhpZGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEgLmJ1dHRvbi1yZXdyaXRlJylcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybS53cGNmNy1mb3JtJyk7XG4gICAgICAgICAgZm9ybS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKS5yZW1vdmVDbGFzcygnd3BjZjctZm9ybS1tb2RlLWNvbmZpcm0nKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLnNob3coKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1yZXNwb25zZS1vdXRwdXQnKS5lbXB0eSgpLnJlbW92ZUNsYXNzKCd3cGNmNy1tYWlsLXNlbnQtb2snKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuaGlkZSgpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuc2hvdygpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYScpLmhpZGUoKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybScpLnNob3coKTtcbiAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBmb3JtLm9mZnNldCgpLnRvcCAtIDMwIH0sICdzbG93JywgbnVsbCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICA7XG5cbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtIC5idXR0b24tY29uZmlybScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0ud3BjZjctZm9ybScpXG4gICAgICAgICAgICAsIGVycm9yID0gZm9ybS5maW5kKCd1bC5lcnJvci1tZXNzYWdlcycpO1xuICAgICAgICAgIGVycm9yLmVtcHR5KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCd0YWJsZSB0cicpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkID0gJCh0aGlzKS5jaGlsZHJlbigwKVxuICAgICAgICAgICAgICAgICwgdGl0bGUgPSBjaGlsZC5wYXJlbnRzKCd0cicpLmZpbmQoJ3RoJykudGV4dCgpO1xuICAgICAgICAgICAgICBpZiAodGl0bGUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGNoaWxkLnBhcmVudHMoJ3AnKS5maW5kKCcudGl0bGUnKS50ZXh0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy10ZXh0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1lbWFpbCcpICYmICghY2hpbGQudmFsKCkubWF0Y2gob3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5tYXRjaCkpKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLmVtYWlsLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5nZXQoMCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmIGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpICYmICgoIWNoaWxkLnZhbCgpKSB8fCBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCB8fCBjaGlsZC52YWwoKSA9PSAnLS0tJykpIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctcmFkaW8nKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmbGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghZmxnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1jaGVja2JveCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGZsZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCFmbGcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGVycm9yLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXJyb3Iuc2hvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtLmFkZENsYXNzKCd3cGNmNy1mb3JtLW1vZGUtY29uZmlybScpLnJlbW92ZUNsYXNzKCd3cGNmNy1mb3JtLW1vZGUtZWRpdCcpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJykuc2hvdygpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEnKS5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGZvcm0ub2Zmc2V0KCkudG9wIC0gODAgfSwgJ3Nsb3cnLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJChcImZvcm1cIikuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsID0gJChcImlucHV0W3R5cGU9c3VibWl0XVtjbGlja2VkPXRydWVdXCIpLnZhbCgpO1xuICAgICQoJy5idXR0b24tcmV3cml0ZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gIH0pO1xuICAkKFwiZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF1cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIiwgJCh0aGlzKS5wYXJlbnRzKFwiZm9ybVwiKSkucmVtb3ZlQXR0cihcImNsaWNrZWRcIik7XG4gICAgJCh0aGlzKS5hdHRyKFwiY2xpY2tlZFwiLCBcInRydWVcIik7XG4gIH0pO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29udGFjdGZvcm0tZWNkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
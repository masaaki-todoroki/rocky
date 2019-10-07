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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

  var option = {
    pages: [{
      'path': ['/jp/ir/inquiries/'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5NjIxMzAzNWNjOGE5MGJmMjQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb250YWN0Zm9ybS1pci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInJlYWR5Iiwib3B0aW9uIiwicGFnZXMiLCJ2YWxpZGF0ZXMiLCJyZXF1aXJlZCIsImJlZm9yZSIsImFmdGVyIiwiZW1haWwiLCJtYXRjaCIsImZsZyIsImkiLCJwYWdlIiwiaiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZWFjaCIsImZpbmQiLCJjaGlsZCIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImNoYW5nZSIsInBhcmVudCIsIm5leHQiLCJ0ZXh0IiwidmFsIiwiZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaHRtbCIsInJlcGxhY2UiLCJwYXJlbnRzIiwiY2hlY2tlZCIsImEiLCJwdXNoIiwiam9pbiIsInByZXBlbmQiLCJoaWRlIiwiYnV0dG9uIiwiYXJlYUNsYXNzTmFtZSIsInJld3JpdGUiLCJjb25maXJtIiwic2hvdyIsInN1Ym1pdCIsImNsaWNrIiwiZm9ybSIsInJlbW92ZUNsYXNzIiwiZW1wdHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiZXJyb3IiLCJ0aXRsZSIsImxlbmd0aCIsImFwcGVuZCIsImNzcyIsInJlbW92ZUF0dHIiLCJhdHRyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNB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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMTk2MjEzMDM1Y2M4YTkwYmYyNCIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIG9wdGlvbiA9IHtcbiAgICBwYWdlczogW1xuICAgICAge1xuICAgICAgICAncGF0aCc6IFsnL2pwL2lyL2lucXVpcmllcy8nXSxcbiAgICAgICAgJ2J1dHRvbic6IHtcbiAgICAgICAgICAnYXJlYUNsYXNzTmFtZSc6ICdzdWJtaXQtYnV0dG9uJywgLy8gPHAgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+W3N1Ym1pdCBcIumAgeS/oeOBmeOCi1wiXTwvcD5cbiAgICAgICAgICAnY29uZmlybSc6ICc8aW5wdXQgY2xhc3M9XCJidXR0b24tY29uZmlybVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIueiuuiqjeeUu+mdouOBuFwiIC8+JywgLy8gaHRtbFxuICAgICAgICAgICdyZXdyaXRlJzogJzxpbnB1dCBjbGFzcz1cImJ1dHRvbi1yZXdyaXRlXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi5L+u5q2j44GZ44KLXCIgLz4nIC8vIGh0bWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgdmFsaWRhdGVzOiB7XG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICBiZWZvcmU6ICcnLFxuICAgICAgICBhZnRlcjogJ+OBr+W/hemgiOmgheebruOBp+OBmeOAgidcbiAgICAgIH0sXG4gICAgICBlbWFpbDoge1xuICAgICAgICBtYXRjaDogL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLyxcbiAgICAgICAgYmVmb3JlOiAnJyxcbiAgICAgICAgYWZ0ZXI6ICfjgYzmraPjgZfjgYTlvaLlvI/jgafjga/jgYLjgorjgb7jgZvjgpPvvIjjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgavjgIwu44CN44KS5L2/55So44GZ44KL44GT44Go44Gv44Gn44GN44G+44Gb44KT77yJJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgZmxnID0gZmFsc2U7XG4gIGZvciAodmFyIGkgaW4gb3B0aW9uLnBhZ2VzKSB7XG4gICAgdmFyIHBhZ2UgPSBvcHRpb24ucGFnZXNbaV07XG4gICAgZm9yICh2YXIgaiBpbiBwYWdlLnBhdGgpIHtcbiAgICAgIHZhciBwYXRoID0gcGFnZS5wYXRoW2pdO1xuICAgICAgaWYgKHBhdGggPT0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgZmxnID0gdHJ1ZTtcbiAgICAgICAgb3B0aW9uLnBhZ2UgPSBwYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFmbGcpIHJldHVybjtcblxuICAkKCdmb3JtLndwY2Y3LWZvcm0nKVxuICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgJCh0aGlzKS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICB2YXIgY2hpbGQgPSAkKHRoaXMpLmNoaWxkcmVuKDApO1xuXG4gICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy10ZXh0JykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnRleHQoXG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmdldCgwKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuaHRtbChcbiAgICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLnRleHQoJCh0aGlzKS52YWwoKSkuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctbnVtYmVyJykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnRleHQoXG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1zZWxlY3QnKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnb3B0aW9uW3ZhbHVlPVwiJyArICQodGhpcykudmFsKCkgKyAnXCJdJykudGV4dCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctcmFkaW8nKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuYWZ0ZXIoXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hpbGQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5uZXh0KCkudGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LWNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKCQoJzxzcGFuPicpLnRleHQoJCh0aGlzKS5wYXJlbnQoKS50ZXh0KCkpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykubmV4dCgpLmh0bWwoXG4gICAgICAgICAgICAgICAgICBhLmpvaW4oJzxiciAvPicpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICQoJy53cmFwX2Vycm9yJylcbiAgICAgICAgLnByZXBlbmQoXG4gICAgICAgICAgJCgnPHVsPicpLmFkZENsYXNzKCdlcnJvci1tZXNzYWdlcycpLmhpZGUoKVxuICAgICAgICApO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy4nICsgb3B0aW9uLnBhZ2UuYnV0dG9uLmFyZWFDbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcygnYnV0dG9ucy1hcmVhJyk7XG5cbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYScpXG4gICAgICAgIC5wcmVwZW5kKFxuICAgICAgICAgIG9wdGlvbi5wYWdlLmJ1dHRvbi5yZXdyaXRlXG4gICAgICAgIClcbiAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICQoJzxwPicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2J1dHRvbnMtYXJlYS1jb25maXJtJylcbiAgICAgICAgICAgIC5odG1sKG9wdGlvbi5wYWdlLmJ1dHRvbi5jb25maXJtKVxuICAgICAgICApO1xuXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCd3cGNmNy1mb3JtLW1vZGUtZWRpdCcpO1xuICAgICAgJCh0aGlzKS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpLmhpZGUoKTtcbiAgICAgICQodGhpcykuZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuc2hvdygpO1xuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhJykuaGlkZSgpO1xuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm0nKS5zaG93KCk7XG5cbiAgICAgICQodGhpcykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5oaWRlKCk7XG4gICAgICB9KTtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhIC5idXR0b24tcmV3cml0ZScpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0ud3BjZjctZm9ybScpO1xuICAgICAgICAgIGZvcm0uYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1lZGl0JykucmVtb3ZlQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1jb25maXJtJyk7XG4gICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5zaG93KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctcmVzcG9uc2Utb3V0cHV0JykuZW1wdHkoKS5yZW1vdmVDbGFzcygnd3BjZjctbWFpbC1zZW50LW9rJyk7XG4gICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpLmhpZGUoKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLnNob3coKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEnKS5oaWRlKCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm0nKS5zaG93KCk7XG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogZm9ybS5vZmZzZXQoKS50b3AgLSAzMCB9LCAnc2xvdycsIG51bGwpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybSAuYnV0dG9uLWNvbmZpcm0nKVxuICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtLndwY2Y3LWZvcm0nKVxuICAgICAgICAgICAgLCBlcnJvciA9IGZvcm0uZmluZCgndWwuZXJyb3ItbWVzc2FnZXMnKTtcbiAgICAgICAgICBlcnJvci5lbXB0eSgpO1xuICAgICAgICAgIGZvcm0uZmluZCgndGFibGUgdHInKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBjaGlsZCA9ICQodGhpcykuY2hpbGRyZW4oMClcbiAgICAgICAgICAgICAgICAsIHRpdGxlID0gY2hpbGQucGFyZW50cygndHInKS5maW5kKCd0aCcpLnRleHQoKTtcbiAgICAgICAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBjaGlsZC5wYXJlbnRzKCdwJykuZmluZCgnLnRpdGxlJykudGV4dCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtZW1haWwnKSAmJiAoIWNoaWxkLnZhbCgpLm1hdGNoKG9wdGlvbi52YWxpZGF0ZXMuZW1haWwubWF0Y2gpKSkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMuZW1haWwuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5lbWFpbC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZ2V0KDApLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LW51bWJlcicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiBjaGlsZC52YWwoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSAmJiAoKCFjaGlsZC52YWwoKSkgfHwgY2hpbGQudmFsKCkubGVuZ3RoID09IDAgfHwgY2hpbGQudmFsKCkgPT0gJy0tLScpKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXJhZGlvJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZmxnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWZsZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctY2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmbGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghZmxnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlcnJvci5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVycm9yLnNob3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWNvbmZpcm0nKS5yZW1vdmVDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpLnNob3coKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuaGlkZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhJykuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBmb3JtLm9mZnNldCgpLnRvcCAtIDgwIH0sICdzbG93JywgbnVsbCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbCA9ICQoXCJpbnB1dFt0eXBlPXN1Ym1pdF1bY2xpY2tlZD10cnVlXVwiKS52YWwoKTtcbiAgICAkKCcuYnV0dG9uLXJld3JpdGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9KTtcbiAgJChcImZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiaW5wdXRbdHlwZT1zdWJtaXRdXCIsICQodGhpcykucGFyZW50cyhcImZvcm1cIikpLnJlbW92ZUF0dHIoXCJjbGlja2VkXCIpO1xuICAgICQodGhpcykuYXR0cihcImNsaWNrZWRcIiwgXCJ0cnVlXCIpO1xuICB9KTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbnRhY3Rmb3JtLWlyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
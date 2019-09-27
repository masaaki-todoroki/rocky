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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log(999);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!(0, _jquery2.default)(e.currentTarget).parents('sub-menu')) {
    (0, _jquery2.default)('.menu > .menu-item.oepn').find('> a > .menu-button').trigger('click');
  }
  (0, _jquery2.default)(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  (0, _jquery2.default)(e.currentTarget).removeClass('open');
});

(0, _jquery2.default)('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = (0, _jquery2.default)(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();
  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});

(0, _jquery2.default)(document).click(function (e) {
  if ((0, _jquery2.default)('.menu-item.open').length) {
    (0, _jquery2.default)('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),
/* 5 */
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
        'areaClassName': 'submit-button', //	<p class="submit-button">[submit "送信する"]</p>
        'confirm': '<input class="button-confirm" type="button" value="確認画面へ" />', //	html
        'rewrite': '<input class="button-rewrite" type="button" value="修正する" />' //	html
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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTMyODJjMmNmMWIxZTk5MzMzNTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29udGFjdGZvcm0uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRzIiwiZmluZCIsInRyaWdnZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtZW51X2J1dHRvbiIsIm1lbnVfbGluayIsInBhcmVudCIsIm1lbnVfaXRlbSIsImhhc0NsYXNzIiwiYWRkIiwiYXR0ciIsInNpYmxpbmdzIiwiZG9jdW1lbnQiLCJjbGljayIsImxlbmd0aCIsInJlYWR5Iiwib3B0aW9uIiwicGFnZXMiLCJ2YWxpZGF0ZXMiLCJyZXF1aXJlZCIsImJlZm9yZSIsImFmdGVyIiwiZW1haWwiLCJtYXRjaCIsImZsZyIsImkiLCJwYWdlIiwiaiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZWFjaCIsImNoaWxkIiwiY2hpbGRyZW4iLCJjaGFuZ2UiLCJuZXh0IiwidGV4dCIsInZhbCIsImdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImh0bWwiLCJyZXBsYWNlIiwiY2hlY2tlZCIsImEiLCJwdXNoIiwiam9pbiIsInByZXBlbmQiLCJoaWRlIiwiYnV0dG9uIiwiYXJlYUNsYXNzTmFtZSIsInJld3JpdGUiLCJjb25maXJtIiwic2hvdyIsInN1Ym1pdCIsImZvcm0iLCJlbXB0eSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJlcnJvciIsInRpdGxlIiwiYXBwZW5kIiwiY3NzIiwicmVtb3ZlQXR0ciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7O0FDN0RBLHdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7QUNIQUEsUUFBUUMsR0FBUixDQUFZLEdBQVosRTs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBLHNCQUFFLGVBQUYsRUFBbUJDLEVBQW5CLENBQXNCLFlBQXRCLEVBQW9DLHlCQUFwQyxFQUErRCxVQUFDQyxDQUFELEVBQU87QUFDcEUsTUFBSSxDQUFDLHNCQUFFQSxFQUFFQyxhQUFKLEVBQW1CQyxPQUFuQixDQUEyQixVQUEzQixDQUFMLEVBQTZDO0FBQzNDLDBCQUFFLHlCQUFGLEVBQTZCQyxJQUE3QixDQUFrQyxvQkFBbEMsRUFBd0RDLE9BQXhELENBQWdFLE9BQWhFO0FBQ0Q7QUFDRCx3QkFBRUosRUFBRUMsYUFBSixFQUFtQkksUUFBbkIsQ0FBNEIsTUFBNUI7QUFDRCxDQUxELEVBS0dOLEVBTEgsQ0FLTSxZQUxOLEVBS29CLHlCQUxwQixFQUsrQyxVQUFDQyxDQUFELEVBQU87QUFDcEQsd0JBQUVBLEVBQUVDLGFBQUosRUFBbUJLLFdBQW5CLENB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dkQsSUFBUixDQUFhLFNBQWIsRUFBd0IsTUFBeEI7QUFDRCxHQUhEO0FBSUQsQ0FURCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzMjgyYzJjZjFiMWU5OTMzMzU5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb250YWN0Zm9ybSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyIsImNvbnNvbGUubG9nKDk5OSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gIGlmICghJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoJ3N1Yi1tZW51JykpIHtcbiAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub2VwbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH1cbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJyk7XG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSk7XG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBsZXQgbWVudV9idXR0b24gPSAkKGUuY3VycmVudFRhcmdldCk7XG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcbiAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKTtcbiAgaWYgKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBvcHRpb24gPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgJ3BhdGgnOiBbJy9pbnF1aXJpZXMvJ10sXG4gICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgJ2FyZWFDbGFzc05hbWUnOiAnc3VibWl0LWJ1dHRvbicsXHQvL1x0PHAgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+W3N1Ym1pdCBcIumAgeS/oeOBmeOCi1wiXTwvcD5cbiAgICAgICAgICAnY29uZmlybSc6ICc8aW5wdXQgY2xhc3M9XCJidXR0b24tY29uZmlybVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIueiuuiqjeeUu+mdouOBuFwiIC8+JyxcdC8vXHRodG1sXG4gICAgICAgICAgJ3Jld3JpdGUnOiAnPGlucHV0IGNsYXNzPVwiYnV0dG9uLXJld3JpdGVcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLkv67mraPjgZnjgotcIiAvPidcdC8vXHRodG1sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIHZhbGlkYXRlczoge1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgYmVmb3JlOiAnJyxcbiAgICAgICAgYWZ0ZXI6ICfjga/lv4XpoIjpoIXnm67jgafjgZnjgIInXG4gICAgICB9LFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgbWF0Y2g6IC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8sXG4gICAgICAgIGJlZm9yZTogJycsXG4gICAgICAgIGFmdGVyOiAn44GM5q2j44GX44GE5b2i5byP44Gn44Gv44GC44KK44G+44Gb44KT77yI44Oh44O844Or44Ki44OJ44Os44K544Gr44CMLuOAjeOCkuS9v+eUqOOBmeOCi+OBk+OBqOOBr+OBp+OBjeOBvuOBm+OCk++8iSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsZyA9IGZhbHNlO1xuICBmb3IgKHZhciBpIGluIG9wdGlvbi5wYWdlcykge1xuICAgIHZhciBwYWdlID0gb3B0aW9uLnBhZ2VzW2ldO1xuICAgIGZvciAodmFyIGogaW4gcGFnZS5wYXRoKSB7XG4gICAgICB2YXIgcGF0aCA9IHBhZ2UucGF0aFtqXTtcbiAgICAgIGlmIChwYXRoID09IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIGZsZyA9IHRydWU7XG4gICAgICAgIG9wdGlvbi5wYWdlID0gcGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghZmxnKSByZXR1cm47XG5cbiAgJCgnZm9ybS53cGNmNy1mb3JtJylcbiAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICQodGhpcykuZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgdmFyIGNoaWxkID0gJCh0aGlzKS5jaGlsZHJlbigwKTtcblxuICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdGV4dCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5nZXQoMCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS50ZXh0KCQodGhpcykudmFsKCkpLmh0bWwoKS5yZXBsYWNlKC9cXG4vZywgJzxiciAvPicpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LW51bWJlcicpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctc2VsZWN0JykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLnRleHQoXG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ29wdGlvblt2YWx1ZT1cIicgKyAkKHRoaXMpLnZhbCgpICsgJ1wiXScpLnRleHQoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXJhZGlvJykpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgLmFmdGVyKFxuICAgICAgICAgICAgICAgICQoJzxzcGFuPicpLmFkZENsYXNzKCd3cGNmNy1mb3JtLWNvbnRyb2wtd3JhcC1jb25maXJtJylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoaWxkLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAgIC5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykubmV4dCgpLnRleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRleHQoKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1jaGVja2JveCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgIC5hZnRlcihcbiAgICAgICAgICAgICAgICAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnd3BjZjctZm9ybS1jb250cm9sLXdyYXAtY29uZmlybScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGlsZC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGEucHVzaCgkKCc8c3Bhbj4nKS50ZXh0KCQodGhpcykucGFyZW50KCkudGV4dCgpKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLm5leHQoKS5odG1sKFxuICAgICAgICAgICAgICAgICAgYS5qb2luKCc8YnIgLz4nKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jaGFuZ2UoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAkKCcud3JhcF9lcnJvcicpXG4gICAgICAgIC5wcmVwZW5kKFxuICAgICAgICAgICQoJzx1bD4nKS5hZGRDbGFzcygnZXJyb3ItbWVzc2FnZXMnKS5oaWRlKClcbiAgICAgICAgKTtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuJyArIG9wdGlvbi5wYWdlLmJ1dHRvbi5hcmVhQ2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3MoJ2J1dHRvbnMtYXJlYScpO1xuXG4gICAgICAkKHRoaXMpLmZpbmQoJy5idXR0b25zLWFyZWEnKVxuICAgICAgICAucHJlcGVuZChcbiAgICAgICAgICBvcHRpb24ucGFnZS5idXR0b24ucmV3cml0ZVxuICAgICAgICApXG4gICAgICAgIC5hZnRlcihcbiAgICAgICAgICAkKCc8cD4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdidXR0b25zLWFyZWEtY29uZmlybScpXG4gICAgICAgICAgICAuaHRtbChvcHRpb24ucGFnZS5idXR0b24uY29uZmlybSlcbiAgICAgICAgKTtcblxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnd3BjZjctZm9ybS1tb2RlLWVkaXQnKTtcbiAgICAgICQodGhpcykuZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLnNob3coKTtcbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYScpLmhpZGUoKTtcbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuc2hvdygpO1xuXG4gICAgICAkKHRoaXMpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICAgICQodGhpcykuZmluZCgnLmJ1dHRvbnMtYXJlYSAuYnV0dG9uLXJld3JpdGUnKVxuICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtLndwY2Y3LWZvcm0nKTtcbiAgICAgICAgICBmb3JtLmFkZENsYXNzKCd3cGNmNy1mb3JtLW1vZGUtZWRpdCcpLnJlbW92ZUNsYXNzKCd3cGNmNy1mb3JtLW1vZGUtY29uZmlybScpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuc2hvdygpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LXJlc3BvbnNlLW91dHB1dCcpLmVtcHR5KCkucmVtb3ZlQ2xhc3MoJ3dwY2Y3LW1haWwtc2VudC1vaycpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKS5oaWRlKCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKS5zaG93KCk7XG4gICAgICAgICAgZm9ybS5maW5kKCcuYnV0dG9ucy1hcmVhJykuaGlkZSgpO1xuICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYS1jb25maXJtJykuc2hvdygpO1xuICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGZvcm0ub2Zmc2V0KCkudG9wIC0gMzAgfSwgJ3Nsb3cnLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIDtcblxuICAgICAgJCh0aGlzKS5maW5kKCcuYnV0dG9ucy1hcmVhLWNvbmZpcm0gLmJ1dHRvbi1jb25maXJtJylcbiAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybS53cGNmNy1mb3JtJylcbiAgICAgICAgICAgICwgZXJyb3IgPSBmb3JtLmZpbmQoJ3VsLmVycm9yLW1lc3NhZ2VzJyk7XG4gICAgICAgICAgZXJyb3IuZW1wdHkoKTtcbiAgICAgICAgICBmb3JtLmZpbmQoJ3RhYmxlIHRyJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgZm9ybS5maW5kKCcud3BjZjctZm9ybS1jb250cm9sLXdyYXAnKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGQgPSAkKHRoaXMpLmNoaWxkcmVuKDApXG4gICAgICAgICAgICAgICAgLCB0aXRsZSA9IGNoaWxkLnBhcmVudHMoJ3RyJykuZmluZCgndGgnKS50ZXh0KCk7XG4gICAgICAgICAgICAgIGlmICh0aXRsZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gY2hpbGQucGFyZW50cygncCcpLmZpbmQoJy50aXRsZScpLnRleHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXRleHQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykgJiYgY2hpbGQudmFsKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLWVtYWlsJykgJiYgKCFjaGlsZC52YWwoKS5tYXRjaChvcHRpb24udmFsaWRhdGVzLmVtYWlsLm1hdGNoKSkpIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLmVtYWlsLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMuZW1haWwuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmdldCgwKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykgJiYgY2hpbGQudmFsKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1udW1iZXInKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykgJiYgY2hpbGQudmFsKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yLmFwcGVuZCgkKCc8bGk+JykudGV4dChvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmJlZm9yZSArIHRpdGxlLnJlcGxhY2UoJ+W/hemgiCcsICcnKSArIG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYWZ0ZXIpKTtcbiAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1zZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oYXNDbGFzcygnd3BjZjctdmFsaWRhdGVzLWFzLXJlcXVpcmVkJykgJiYgKCghY2hpbGQudmFsKCkpIHx8IGNoaWxkLnZhbCgpLmxlbmd0aCA9PSAwIHx8IGNoaWxkLnZhbCgpID09ICctLS0nKSkge1xuICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy1yYWRpbycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NsYXNzKCd3cGNmNy12YWxpZGF0ZXMtYXMtcmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGZsZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCFmbGcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYXBwZW5kKCQoJzxsaT4nKS50ZXh0KG9wdGlvbi52YWxpZGF0ZXMucmVxdWlyZWQuYmVmb3JlICsgdGl0bGUucmVwbGFjZSgn5b+F6aCIJywgJycpICsgb3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5hZnRlcikpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LWNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaGFzQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRlcy1hcy1yZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZmxnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWZsZykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmQoJCgnPGxpPicpLnRleHQob3B0aW9uLnZhbGlkYXRlcy5yZXF1aXJlZC5iZWZvcmUgKyB0aXRsZS5yZXBsYWNlKCflv4XpoIgnLCAnJykgKyBvcHRpb24udmFsaWRhdGVzLnJlcXVpcmVkLmFmdGVyKSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZXJyb3IuY2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlcnJvci5zaG93KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm0uYWRkQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1jb25maXJtJykucmVtb3ZlQ2xhc3MoJ3dwY2Y3LWZvcm0tbW9kZS1lZGl0Jyk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy53cGNmNy1mb3JtLWNvbnRyb2wtd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLWNvbmZpcm0nKS5zaG93KCk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy5idXR0b25zLWFyZWEtY29uZmlybScpLmhpZGUoKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLmJ1dHRvbnMtYXJlYScpLnNob3coKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogZm9ybS5vZmZzZXQoKS50b3AgLSA4MCB9LCAnc2xvdycsIG51bGwpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWwgPSAkKFwiaW5wdXRbdHlwZT1zdWJtaXRdW2NsaWNrZWQ9dHJ1ZV1cIikudmFsKCk7XG4gICAgJCgnLmJ1dHRvbi1yZXdyaXRlJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfSk7XG4gICQoXCJmb3JtIGlucHV0W3R5cGU9c3VibWl0XVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcImlucHV0W3R5cGU9c3VibWl0XVwiLCAkKHRoaXMpLnBhcmVudHMoXCJmb3JtXCIpKS5yZW1vdmVBdHRyKFwiY2xpY2tlZFwiKTtcbiAgICAkKHRoaXMpLmF0dHIoXCJjbGlja2VkXCIsIFwidHJ1ZVwiKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9jb250YWN0Zm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var el = wp.element.createElement,
      blocks = wp.blocks,
      RichText = wp.editor.RichText;

  blocks.registerBlockType('aoi/sub-title', {
    title: 'サブタイトル',
    icon: 'welcome-write-blog',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'span'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'span',
        className: "sub_title",
        style: {
          display: 'block',
          marginBottom: '1.78571em',
          color: '#222',
          textAlign: 'left',
          fontSize: '88%',
          lineHeight: '1.6',
          paddingLeft: '0.6em',
          borderLeft: '8px solid #6695c7'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'span',
        className: "sub_title",
        style: {
          display: 'block',
          marginBottom: '1.78571em',
          color: '#222',
          textAlign: 'left',
          fontSize: '88%',
          lineHeight: '1.6',
          paddingLeft: '0.6em',
          borderLeft: '8px solid #6695c7'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/h2', {
    title: '見出し2',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h2'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'h2',
        className: "h2",
        style: {
          marginTop: '1.42857em',
          marginBottom: '1.78571em',
          color: '#222',
          textAlign: 'left',
          fontSize: '128.57143%',
          lineHeight: '1.38889',
          paddingLeft: '0.5em',
          borderLeft: '8px solid #6695c7'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'h2',
        className: "h2",
        style: {
          marginTop: '1.42857em',
          marginBottom: '1.78571em',
          color: '#222',
          textAlign: 'left',
          fontSize: '128.57143%',
          lineHeight: '1.38889',
          paddingLeft: '0.5em',
          borderLeft: '8px solid #6695c7'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/h3', {
    title: '見出し３',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h3'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'h3',
        className: "h3",
        style: {
          marginTop: '1.07143em',
          marginBottom: '0.85714em',
          color: '#222',
          textAlign: 'left',
          fontSize: '100%',
          lineHeight: '1.71429',
          padding: '4px 8px',
          backgroundColor: '#ccdcec'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'h3',
        className: "h3",
        style: {
          marginTop: '1.07143em',
          marginBottom: '0.85714em',
          color: '#222',
          textAlign: 'left',
          fontSize: '100%',
          lineHeight: '1.71429',
          padding: '4px 8px',
          backgroundColor: '#ccdcec'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/h4', {
    title: '見出し4',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h4'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'h4',
        className: "h4",
        style: {
          marginBottom: '0.85714em',
          color: '#222',
          textAlign: 'left',
          fontSize: '114.28571%',
          lineHeight: '1.375',
          paddingBottom: '0'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'h4',
        className: "h4",
        style: {
          marginBottom: '0.85714em',
          color: '#222',
          textAlign: 'left',
          fontSize: '114.28571%',
          lineHeight: '1.375',
          paddingBottom: '0'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/notice', {
    title: '注意書き',
    icon: 'pressthis',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'p'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'p',
        className: "notice",
        style: {
          display: 'block',
          marginBottom: '1.78571em',
          color: '#555',
          textAlign: 'left',
          fontSize: '100%',
          lineHeight: '1.6',
          boxShadow: '0 0 0 0 rgba(0,0,0,0)',
          margin: '5px 15px 2px 0',
          padding: '1px 12px 1px 0'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'span',
        className: "notice",
        style: {
          display: 'block',
          marginBottom: '1.78571em',
          color: '#555',
          textAlign: 'left',
          fontSize: '100%',
          lineHeight: '1.6'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/box1', {
    title: '囲み記事',
    icon: 'editor-kitchensink',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'div'
      }
    },
    edit: function edit(props) {
      var nowContent = props.attributes.content;
      return el(RichText, {
        tagName: 'div',
        className: "box1",
        style: {
          marginBottom: '1.42857em',
          padding: '15px 15px 5px',
          border: '1px dotted #cfcfcf'
        },
        value: nowContent,
        onChange: function onChange(changedContent) {
          props.setAttributes({ content: changedContent });
        }
      });
    },
    save: function save(props) {
      return el(RichText.Content, {
        tagName: 'div',
        className: "box1",
        style: {
          marginBottom: '1.42857em',
          padding: '15px 15px 5px',
          border: '1px dotted #cfcfcf'
        },
        value: props.attributes.content
      });
    }
  });
  blocks.registerBlockType('aoi/clear', {
    title: '回りこみ解除',
    icon: 'editor-break',
    category: 'common',
    edit: function edit() {
      return el('div', {
        className: "clear",
        style: {
          clear: 'both'
        }
      });
    },
    save: function save(props) {
      return el('div', {
        className: "clear",
        style: {
          clear: 'both'
        }
      });
    }
  });
  blocks.registerBlockType('aoi/hr1', {
    title: '区切り線',
    icon: 'editor-insertmore',
    category: 'common',
    edit: function edit() {
      return el('hr', {
        className: "hr1",
        style: {
          marginBottom: '1.42857em',
          border: 'none',
          borderBottom: '1px dotted #cfcfcf'
        }
      });
    },
    save: function save() {
      return el('hr', {
        className: "hr1",
        style: {
          marginBottom: '1.42857em',
          border: 'none',
          borderBottom: '1px dotted #cfcfcf'
        }
      });
    }
  });
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5NjIxMzAzNWNjOGE5MGJmMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9ibG9jay1lZGl0b3IuanMiXSwibmFtZXMiOlsiZWwiLCJ3cCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYmxvY2tzIiwiUmljaFRleHQiLCJlZGl0b3IiLCJyZWdpc3RlckJsb2NrVHlwZSIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJ0eXBlIiwic291cmNlIiwic2VsZWN0b3IiLCJlZGl0IiwicHJvcHMiLCJub3dDb250ZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJib3JkZXJMZWZ0IiwidmFsdWUiLCJvbkNoYW5nZSIsImNoYW5nZWRDb250ZW50Iiwic2V0QXR0cmlidXRlcyIsInNhdmUiLCJDb250ZW50IiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdCb3R0b20iLCJib3hTaGFkb3ciLCJtYXJnaW4iLCJib3JkZXIiLCJjbGVhciIsImJvcmRlckJvdHRvbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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TixDQUFpQkM7QUFSRSxPQUFyQixDQUFQO0FBVUQ7QUF6Q2tDLEdBQXJDO0FBMkNBUixTQUFPRyxpQkFBUCxDQUF5QixXQUF6QixFQUFzQztBQUNwQ0MsV0FBTyxRQUQ2QjtBQUVwQ0MsVUFBTSxjQUY4QjtBQUdwQ0MsY0FBVSxRQUgwQjtBQUlwQ00sVUFBTSxnQkFBWTtBQUNoQixhQUFPaEIsR0FDTCxLQURLLEVBRUw7QUFDRW9CLG1CQUFXLE9BRGI7QUFFRUMsZUFBTztBQUNMc0IsaUJBQU87QUFERjtBQUZULE9BRkssQ0FBUDtBQVNELEtBZG1DO0FBZXBDVCxVQUFNLGNBQVVqQixLQUFWLEVBQWlCO0FBQ3JCLGFBQU9qQixHQUNMLEtBREssRUFFTDtBQUNFb0IsbUJBQVcsT0FEYjtBQUVFQyxlQUFPO0FBQ0xzQixpQkFBTztBQURGO0FBRlQsT0FGSyxDQUFQO0FBU0Q7QUF6Qm1DLEdBQXRDO0FBMkJBdkMsU0FBT0csaUJBQVAsQ0FBeUIsU0FBekIsRUFBb0M7QUFDbENDLFdBQU8sTUFEMkI7QUFFbENDLFVBQU0sbUJBRjRCO0FBR2xDQyxjQUFVLFFBSHdCO0FBSWxDTSxVQUFNLGdCQUFZO0FBQ2hCLGFBQU9oQixHQUNMLElBREssRUFFTDtBQUNFb0IsbUJBQVcsS0FEYjtBQUVFQyxlQUFPO0FBQ0xFLHdCQUFjLFdBRFQ7QUFFTG1CLGtCQUFRLE1BRkg7QUFHTEUsd0JBQWM7QUFIVDtBQUZULE9BRkssQ0FBUDtBQVdELEtBaEJpQztBQWlCbENWLFVBQU0sZ0JBQVk7QUFDaEIsYUFBT2xDLEdBQ0wsSUFESyxFQUVMO0FBQ0VvQixtQkFBVyxLQURiO0FBRUVDLGVBQU87QUFDTEUsd0JBQWMsV0FEVDtBQUVMbUIsa0JBQVEsTUFGSDtBQUdMRSx3QkFBYztBQUhUO0FBRlQsT0FGSyxDQUFQO0FBV0Q7QUE3QmlDLEdBQXBDO0FBK0JELENBOVdELEkiLCJmaWxlIjoiYmxvY2stZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxOTYyMTMwMzVjYzhhOTBiZjI0IiwiKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQsXG4gICAgICAgIGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICAgICAgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG4gIFxuICBibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ2FvaS9zdWItdGl0bGUnLCB7XG4gICAgdGl0bGU6ICfjgrXjg5bjgr/jgqTjg4jjg6snLFxuICAgIGljb246ICd3ZWxjb21lLXdyaXRlLWJsb2cnLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgc2VsZWN0b3I6ICdzcGFuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlZGl0OiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBub3dDb250ZW50ID0gcHJvcHMuYXR0cmlidXRlcy5jb250ZW50O1xuICAgICAgcmV0dXJuIGVsKFxuICAgICAgICBSaWNoVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgICBjbGFzc05hbWU6IFwic3ViX3RpdGxlXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxLjc4NTcxZW0nLFxuICAgICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgZm9udFNpemU6ICc4OCUnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNicsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNmVtJyxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICc4cHggc29saWQgIzY2OTVjNydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBub3dDb250ZW50LFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoY2hhbmdlZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBjaGFuZ2VkQ29udGVudCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc2F2ZTogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICByZXR1cm4gZWwoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgIGNsYXNzTmFtZTogXCJzdWJfdGl0bGVcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEuNzg1NzFlbScsXG4gICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICBmb250U2l6ZTogJzg4JScsXG4gICAgICAgICAgbGluZUhlaWdodDogJzEuNicsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjZlbScsXG4gICAgICAgICAgYm9yZGVyTGVmdDogJzhweCBzb2xpZCAjNjY5NWM3J1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG4gIGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSgnYW9pL2gyJywge1xuICAgIHRpdGxlOiAn6KaL5Ye644GXMicsXG4gICAgaWNvbjogJ2VkaXQnLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgc2VsZWN0b3I6ICdoMicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICB2YXIgbm93Q29udGVudCA9IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudDtcbiAgICAgIHJldHVybiBlbChcbiAgICAgICAgUmljaFRleHQsXG4gICAgICAgIHtcbiAgICAgICAgICB0YWdOYW1lOiAnaDInLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJoMlwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjQyODU3ZW0nLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMS43ODU3MWVtJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzIyMicsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTI4LjU3MTQzJScsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS4zODg4OScsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWVtJyxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICc4cHggc29saWQgIzY2OTVjNydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBub3dDb250ZW50LFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoY2hhbmdlZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBjaGFuZ2VkQ29udGVudCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc2F2ZTogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICByZXR1cm4gZWwoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICB0YWdOYW1lOiAnaDInLFxuICAgICAgICBjbGFzc05hbWU6IFwiaDJcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjQyODU3ZW0nLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEuNzg1NzFlbScsXG4gICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICBmb250U2l6ZTogJzEyOC41NzE0MyUnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjM4ODg5JyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWVtJyxcbiAgICAgICAgICBib3JkZXJMZWZ0OiAnOHB4IHNvbGlkICM2Njk1YzcnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbiAgYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKCdhb2kvaDMnLCB7XG4gICAgdGl0bGU6ICfopovlh7rjgZfvvJMnLFxuICAgIGljb246ICdlZGl0JyxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICAgIHNlbGVjdG9yOiAnaDMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXQ6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIG5vd0NvbnRlbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQ7XG4gICAgICByZXR1cm4gZWwoXG4gICAgICAgIFJpY2hUZXh0LFxuICAgICAgICB7XG4gICAgICAgICAgdGFnTmFtZTogJ2gzJyxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaDNcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS4wNzE0M2VtJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzAuODU3MTRlbScsXG4gICAgICAgICAgICBjb2xvcjogJyMyMjInLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNzE0MjknLFxuICAgICAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NjZGNlYydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBub3dDb250ZW50LFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoY2hhbmdlZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBjaGFuZ2VkQ29udGVudCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc2F2ZTogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICByZXR1cm4gZWwoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICB0YWdOYW1lOiAnaDMnLFxuICAgICAgICBjbGFzc05hbWU6IFwiaDNcIixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjA3MTQzZW0nLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzAuODU3MTRlbScsXG4gICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjcxNDI5JyxcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NjZGNlYydcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICBibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ2FvaS9oNCcsIHtcbiAgICB0aXRsZTogJ+imi+WHuuOBlzQnLFxuICAgIGljb246ICdlZGl0JyxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXQ6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIG5vd0NvbnRlbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQ7XG4gICAgICByZXR1cm4gZWwoXG4gICAgICAgIFJpY2hUZXh0LFxuICAgICAgICB7XG4gICAgICAgICAgdGFnTmFtZTogJ2g0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaDRcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMC44NTcxNGVtJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzIyMicsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTE0LjI4NTcxJScsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS4zNzUnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IG5vd0NvbnRlbnQsXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChjaGFuZ2VkQ29udGVudCkge1xuICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNoYW5nZWRDb250ZW50IH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHJldHVybiBlbChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIHRhZ05hbWU6ICdoNCcsXG4gICAgICAgIGNsYXNzTmFtZTogXCJoNFwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzAuODU3MTRlbScsXG4gICAgICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICBmb250U2l6ZTogJzExNC4yODU3MSUnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjM3NScsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzAnLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG4gIGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSgnYW9pL25vdGljZScsIHtcbiAgICB0aXRsZTogJ+azqOaEj+abuOOBjScsXG4gICAgaWNvbjogJ3ByZXNzdGhpcycsXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxuICAgICAgICBzZWxlY3RvcjogJ3AnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXQ6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIG5vd0NvbnRlbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQ7XG4gICAgICByZXR1cm4gZWwoXG4gICAgICAgIFJpY2hUZXh0LFxuICAgICAgICB7XG4gICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJub3RpY2VcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEuNzg1NzFlbScsXG4gICAgICAgICAgICBjb2xvcjogJyM1NTUnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNicsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAwIHJnYmEoMCwwLDAsMCknLFxuICAgICAgICAgICAgbWFyZ2luOiAnNXB4IDE1cHggMnB4IDAnLFxuICAgICAgICAgICAgcGFkZGluZzogJzFweCAxMnB4IDFweCAwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IG5vd0NvbnRlbnQsXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChjaGFuZ2VkQ29udGVudCkge1xuICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IGNoYW5nZWRDb250ZW50IH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHJldHVybiBlbChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5vdGljZVwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnMS43ODU3MWVtJyxcbiAgICAgICAgICBjb2xvcjogJyM1NTUnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMTAwJScsXG4gICAgICAgICAgbGluZUhlaWdodDogJzEuNidcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICBibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ2FvaS9ib3gxJywge1xuICAgIHRpdGxlOiAn5Zuy44G/6KiY5LqLJyxcbiAgICBpY29uOiAnZWRpdG9yLWtpdGNoZW5zaW5rJyxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICAgIHNlbGVjdG9yOiAnZGl2JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlZGl0OiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBub3dDb250ZW50ID0gcHJvcHMuYXR0cmlidXRlcy5jb250ZW50O1xuICAgICAgcmV0dXJuIGVsKFxuICAgICAgICBSaWNoVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJib3gxXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEuNDI4NTdlbScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTVweCAxNXB4IDVweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggZG90dGVkICNjZmNmY2YnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogbm93Q29udGVudCxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGNoYW5nZWRDb250ZW50KSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY2hhbmdlZENvbnRlbnQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHNhdmU6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgcmV0dXJuIGVsKFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTmFtZTogXCJib3gxXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnMS40Mjg1N2VtJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNXB4IDE1cHggNXB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBkb3R0ZWQgI2NmY2ZjZidcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuICBibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ2FvaS9jbGVhcicsIHtcbiAgICB0aXRsZTogJ+WbnuOCiuOBk+OBv+ino+mZpCcsXG4gICAgaWNvbjogJ2VkaXRvci1icmVhaycsXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICAgIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlbChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY2xlYXJcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY2xlYXI6ICdib3RoJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHJldHVybiBlbChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY2xlYXJcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY2xlYXI6ICdib3RoJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSxcbiAgfSk7XG4gIGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSgnYW9pL2hyMScsIHtcbiAgICB0aXRsZTogJ+WMuuWIh+OCiue3micsXG4gICAgaWNvbjogJ2VkaXRvci1pbnNlcnRtb3JlJyxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGVsKFxuICAgICAgICAnaHInLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImhyMVwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxLjQyODU3ZW0nLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggZG90dGVkICNjZmNmY2YnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGVsKFxuICAgICAgICAnaHInLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImhyMVwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxLjQyODU3ZW0nLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggZG90dGVkICNjZmNmY2YnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gIH0pO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2Jsb2NrLWVkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
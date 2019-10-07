(function () {
  const el = wp.element.createElement,
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
        selector: 'span',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
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
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
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
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/h2', {
    title: '見出し2',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h2',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
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
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
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
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/h3', {
    title: '見出し３',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h3',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
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
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
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
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/h4', {
    title: '見出し4',
    icon: 'edit',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h4',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
          tagName: 'h4',
          className: "h4",
          style: {
            marginBottom: '0.85714em',
            color: '#222',
            textAlign: 'left',
            fontSize: '114.28571%',
            lineHeight: '1.375',
            paddingBottom: '0',
          },
          value: nowContent,
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
      return el(RichText.Content, {
        tagName: 'h4',
        className: "h4",
        style: {
          marginBottom: '0.85714em',
          color: '#222',
          textAlign: 'left',
          fontSize: '114.28571%',
          lineHeight: '1.375',
          paddingBottom: '0',
        },
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/notice', {
    title: '注意書き',
    icon: 'pressthis',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'p',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
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
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
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
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/box1', {
    title: '囲み記事',
    icon: 'editor-kitchensink',
    category: 'common',
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'div',
      },
    },
    edit: function (props) {
      var nowContent = props.attributes.content;
      return el(
        RichText,
        {
          tagName: 'div',
          className: "box1",
          style: {
            marginBottom: '1.42857em',
            padding: '15px 15px 5px',
            border: '1px dotted #cfcfcf'
          },
          value: nowContent,
          onChange: function (changedContent) {
            props.setAttributes({ content: changedContent });
          },
        }
      );
    },
    save: function (props) {
      return el(RichText.Content, {
        tagName: 'div',
        className: "box1",
        style: {
          marginBottom: '1.42857em',
            padding: '15px 15px 5px',
            border: '1px dotted #cfcfcf'
        },
        value: props.attributes.content,
      });
    },
  });
  blocks.registerBlockType('aoi/clear', {
    title: '回りこみ解除',
    icon: 'editor-break',
    category: 'common',
    edit: function () {
      return el(
        'div',
        {
          className: "clear",
          style: {
            clear: 'both'
          }
        },
      );
    },
    save: function (props) {
      return el(
        'div',
        {
          className: "clear",
          style: {
            clear: 'both'
          }
        },
      );
    },
  });
  blocks.registerBlockType('aoi/hr1', {
    title: '区切り線',
    icon: 'editor-insertmore',
    category: 'common',
    edit: function () {
      return el(
        'hr',
        {
          className: "hr1",
          style: {
            marginBottom: '1.42857em',
            border: 'none',
            borderBottom: '1px dotted #cfcfcf'
          }
        }
      );
    },
    save: function () {
      return el(
        'hr',
        {
          className: "hr1",
          style: {
            marginBottom: '1.42857em',
            border: 'none',
            borderBottom: '1px dotted #cfcfcf'
          }
        }
      );
    },
  });
})();
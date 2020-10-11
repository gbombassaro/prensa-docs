'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Highlight = require('prism-react-renderer');
var carbonComponentsReact = require('carbon-components-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

// Original: https://github.com/sdras/night-owl-vscode-theme
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(173, 219, 103)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(214, 222, 235)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    // This was manually added after the auto-generation
    // so that punctuations are not italicised
    types: ["punctuation"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(255, 203, 139)"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "rgb(127, 219, 202)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["property"],
    style: {
      color: "rgb(128, 203, 196)"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }]
};

var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(Highlight__default['default'], _extends({}, Highlight.defaultProps, {
    theme: theme,
    code: children,
    language: "jsx"
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/React__default['default'].createElement("pre", {
      className: className,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        padding: '20px',
        fontSize: '15px',
        overflowY: 'auto'
      })
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React__default['default'].createElement("div", _extends({
        key: i
      }, getLineProps({
        line: line,
        key: i
      })), line.map(function (token, key) {
        var props = getTokenProps({
          token: token,
          key: key
        });
        return /*#__PURE__*/React__default['default'].createElement("span", {
          key: key,
          className: props.className,
          children: props.children,
          style: _objectSpread2(_objectSpread2({}, props.style), {}, {
            margin: 0,
            padding: 0,
            border: 'unset',
            cursor: 'unset'
          })
        });
      }));
    }));
  });
};

var CSSTable = function CSSTable(props) {
  return /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.DataTable, {
    rows: props.rows,
    headers: props.headers
  }, function (_ref) {
    var rows = _ref.rows,
        headers = _ref.headers,
        getTableProps = _ref.getTableProps,
        getHeaderProps = _ref.getHeaderProps,
        getRowProps = _ref.getRowProps;
    return /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.Table, getTableProps(), /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableHead, null, /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableRow, null, headers.map(function (header) {
      return /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableHeader, getHeaderProps({
        header: header
      }), header.header);
    }))), /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableBody, null, rows.map(function (row) {
      return /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableRow, getRowProps({
        row: row
      }), row.cells.map(function (cell) {
        return /*#__PURE__*/React__default['default'].createElement(carbonComponentsReact.TableCell, {
          key: cell.id
        }, cell.value);
      }));
    })));
  });
};

exports.CSSTable = CSSTable;
exports.CodeBlock = CodeBlock;

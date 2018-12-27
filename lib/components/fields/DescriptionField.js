"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DescriptionField(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    return null;
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "label",
      { id: id },
      description
    )
  );
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: _propTypes2.default.string,
    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };
}

exports.default = DescriptionField;
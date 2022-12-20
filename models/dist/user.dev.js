"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new _mongoose["default"].Schema({
  firstname: {
    type: String,
    required: true,
    unique: true
  },
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  officerType: {
    type: [String]
  },
  divsect: {
    type: [String]
  },
  img: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("User", UserSchema);

exports["default"] = _default;
"use strict";

exports.__esModule = true;
exports.resetID = resetID;
exports["default"] = idgen;
var id = 0;

function resetID() {
  id = 0;
}

function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}
import ReactDOM from 'react-dom';

var ownerDocument = function ownerDocument(node) {
  return node && node.ownerDocument || document;
};

export default function (componentOrElement) {
  // eslint-disable-next-line react/no-find-dom-node
  return ownerDocument(ReactDOM.findDOMNode(componentOrElement));
}
import ReactDOM from 'react-dom';

const ownerDocument = (node) => (node && node.ownerDocument) || document

export default function (componentOrElement) {
  // eslint-disable-next-line react/no-find-dom-node
  return ownerDocument(ReactDOM.findDOMNode(componentOrElement));
}

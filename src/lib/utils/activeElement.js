import ownerDocument from './ownerDocument'

/**
 * Return the actively focused element safely.
 *
 * @param doc the document to checl
 */
export default function activeElement(doc = ownerDocument()) {
  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    const active = doc.activeElement
    // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>
    if (!active || !active.nodeName) return null
    return active
  } catch (e) {
    /* ie throws if no active element */
    return doc.body
  }
}

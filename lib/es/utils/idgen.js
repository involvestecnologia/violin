var id = 0;
export function resetID() {
  id = 0;
}
export default function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}
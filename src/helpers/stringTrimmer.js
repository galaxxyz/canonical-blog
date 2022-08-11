export function trimString(str, length = 50) {
  return str.length > length ? `${str.slice(0, length)}...` : str;
}

function fromHex (hexString: string): string {
  let s = ''
  for (let i = 0; i < hexString.length; i += 2) {
    s += String.fromCharCode(parseInt(hexString.substr(i, 2), 16))
  }
  return decodeURIComponent(escape(s)).replace(/\0/g, '')
}

function toHex (str: string): string {
  // utf8 to latin1
  const s = unescape(encodeURIComponent(str))
  let h = ''
  for (let i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16)
  }
  return h
}

export { fromHex, toHex }

function validSpacing(s) {
  // write your code here
  let t = s.trim();
  if (s === ' ') return false;
  else if (s.length > t.length) return false;
  else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ' && s[i + 1] === ' ') return false;
    }
  }
  return true;
}

validSpacing('gbu  kTbe');

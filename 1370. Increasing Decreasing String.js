/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    const map = new Array(26).fill(0);
  
    for (const char of s) {
      const charCode = char.charCodeAt(0) - 97;
      map[charCode]++;
    }
  
    function appendCharToRes(i) {
      const char = String.fromCharCode(i + 97);
      res += char;
      map[i]--;
    }
  
    let res = "";
  
    while (res.length !== s.length) {
      for (let i = 0; i < map.length; i++) {
        if (!map[i]) continue;
        appendCharToRes(i);
      }
  
      for (let i = map.length - 1; i >= 0; i--) {
        if (!map[i]) continue;
        appendCharToRes(i);
      }
    }
  
    return res;
  };
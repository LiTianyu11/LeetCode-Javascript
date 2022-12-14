/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

//Solution 1
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  const map1 = [256];
  const map2 = [256];

  for (let idx = 0; idx < s.length; idx++) {
    //console.log(map1, s.charAt(idx),map1[s.charAt(idx)] )
    //console.log(map2, t.charAt(idx), map2[t.charAt(idx)])
    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;

    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true;
};

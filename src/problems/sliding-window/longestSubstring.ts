// Length of the longest substring without repeating characters.
// Input: "abcabcbb" -> Output: 3 ("abc")
export function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  var left = 0;
  var maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    var c = s[right];
    if (!lastSeen.has(c)) {
      lastSeen.set(c, right);
    } else if (lastSeen.has(c) && lastSeen.get(c)! >= left) {
      var oldindex = lastSeen.get(c)!;
      lastSeen.set(c, right);
      left = oldindex + 1;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

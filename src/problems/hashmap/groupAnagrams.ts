// Group strings that are anagrams of each other.
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]  (order of groups/elements doesn't matter)
export function groupAnagrams(strs: string[]): string[][] {
  const str_map = new Map<string, string[]>();

  for(const words of strs){
    const key = words.split('').sort().join('')
    if(!str_map.has(key)){
      str_map.set(key,[]);
    }
    str_map.get(key)?.push(words)
  }
  return Array.from(str_map.values())

}

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

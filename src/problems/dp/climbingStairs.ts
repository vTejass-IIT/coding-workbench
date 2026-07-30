// You can climb 1 or 2 steps at a time. Count distinct ways to reach the top of an n-step staircase.
// Input: n=5 -> Output: 8
export function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev2 = 1; // ways to reach step 1
  let prev1 = 2; // ways to reach step 2

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

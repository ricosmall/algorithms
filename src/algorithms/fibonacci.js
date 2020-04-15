export function fibonacciIteration(n) {
  if (n < 1) return 0
  let n1 = 0
  let n2 = 1
  let res = n1 + n2
  for (let i = 2; i < n; i++) {
    n1 = n2
    n2 = res
    res = n2 + n1
  }
  return res
}

export function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

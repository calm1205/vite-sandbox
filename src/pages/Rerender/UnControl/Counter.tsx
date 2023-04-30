type Counter = {
  count: number
}

/**
 * Countした数値を表示するコンポーネント
 */
export const Counter: React.FC<Counter> = ({ count }) => {
  console.log("unControl counter")
  return <p>count: {count}</p>
}

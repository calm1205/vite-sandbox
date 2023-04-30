import { useCountStore } from "./useCountStore"

/**
 * Countした数値を表示するコンポーネント
 */
export const Counter: React.FC = () => {
  const count = useCountStore((state) => state.count)
  console.log("control counter")
  return <p>count: {count}</p>
}

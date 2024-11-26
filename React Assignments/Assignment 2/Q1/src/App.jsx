import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-16 p-12">
      <h1 className="text-4xl font-bold">Counter</h1>
      <Counter />
    </div>
  )
}
export default function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div className="card mb-4">
      <ul className=" text-gray-800">
        {fruits.map((fruit, index) => (
          <li key={fruit}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

import AlertButton from "./components/AlertButton";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";
import NameForm from "./components/NameForm";
import PostList from "./components/PostList";
import SkyBox from "./components/SkyBox";
import ProductCard from "./components/ProductCard";
import { mockProducts } from "./types/product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
      <FruitList />
      <AlertButton />
      <SkyBox />
      <PostList />
      <NameForm />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
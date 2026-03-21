import ProductCard from "../components/ProductCard";
import { products } from "../data/productsList";
export default function Products() {
  return (
    <>
      <div className="flex items-center justify-center m-4">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

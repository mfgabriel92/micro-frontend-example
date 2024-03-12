import { Product } from "./Product";

function Products() {
  return (
    <>
      <h3 className="text-xl font-bold my-2">Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Product
          id={1}
          name="Product #1"
        />
        <Product
          id={2}
          name="Product #2"
        />
        <Product
          id={3}
          name="Product #3"
        />
        <Product
          id={4}
          name="Product #4"
        />
        <Product
          id={5}
          name="Product #5"
        />
        <Product
          id={6}
          name="Product #6"
        />
      </div>
    </>
  );
}

export { Products };

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center bg-gray-500 h-20 px-8 text-gray-100 items-center mb-8">
      <h1 className="flex flex-1">Root-app</h1>
      <div className="flex flex-1 gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
      </div>
    </header>
  );
}

export { Header };

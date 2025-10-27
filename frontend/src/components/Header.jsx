export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">FoodOrder</h1>
        <nav>
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/menu" className="mx-2 hover:underline">Menu</a>
          <a href="/cart" className="mx-2 hover:underline">Cart</a>
          <a href="/login" className="mx-2 hover:underline">Login</a>
        </nav>
      </div>
    </header>
  );
}
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-white/20" />
          <span className="text-lg font-semibold tracking-tight">
            Ecom Store
          </span>
        </div>

        <nav>
          <ul className="flex items-center gap-3 text-lg font-medium">
            <li>
              <Link
                href="/products"
                className="rounded-md px-3 py-2 transition hover:bg-white/20"
              >
                Products
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="rounded-md px-3 py-2 transition hover:bg-white/20"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-md px-3 py-2 transition hover:bg-white/20"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-md px-3 py-2 transition hover:bg-white/20"
              >
                Profile
              </a>
            </li>
            <li>
              <Link
                href="/register"
                className="rounded-md bg-pink-500 px-3 py-2 transition hover:bg-pink-600"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

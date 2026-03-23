"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Shop", href: "#" },
    { name: "Cart", href: "#" },
    { name: "Profile", href: "#" },
    { name: "Sign In", href: "/register" },
    { name: "Articles english", href: "/articles/article-123?lang=en" },
    { name: "Articles french", href: "/articles/article-123?lang=fr" },
  ];
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
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== "/");
              return (
                <li key={item.name} className="mx-4">
                  <Link
                    href={item.href}
                    className={isActive ? "text-red-500" : "text-gray-100"}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

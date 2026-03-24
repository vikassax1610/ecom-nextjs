export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">
        <div>
          <p className="text-sm font-semibold">Ecom Store</p>
          <p className="text-xs text-slate-300">
            © {new Date().getFullYear()} Ecom Store. All rights reserved.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <a href="#" className="text-slate-300 hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white px-8 md:px-12 py-3 md:py-4">
      <div className="mx-auto flex items-center justify-between">
        <img
          src="https://static.nike.com.br/v11-89-0/images/brands/logo.svg"
          alt="Next.js logo"
          className="w-10 h-8 md:w-16"
        />

        <nav className="hidden md:flex gap-6 text-,d font-semibold text-zinc-800">
          <Link href="#">Lançamentos</Link>
          <Link href="#">Masculino</Link>
          <Link href="#">Feminino</Link>
          <Link href="#">Infantil</Link>
          <Link href="#">Ofertas</Link>
          <Link href="#">SNKRS</Link>
        </nav>

        <div className="flex items-center gap-4 text-zinc-600">
          <button className="hover:text-black" title="Favoritos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75a4.5 4.5 0 00-3.18 1.32l-.82.82-.82-.82A4.5 4.5 0 006.5 3.75a4.5 4.5 0 00-4.5 4.5c0 2.07 1.55 4.16 4.32 6.61a37.62 37.62 0 005.18 3.93.75.75 0 00.8 0 37.62 37.62 0 005.18-3.93c2.77-2.45 4.32-4.54 4.32-6.61a4.5 4.5 0 00-4.5-4.5z"
              />
            </svg>
          </button>

          <button className="hover:text-black" title="Conta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </button>

          <button className="hover:text-black" title="Carrinho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .963.306 1.157.783l.82 2.047M7.5 14.25h9.75M7.5 14.25L5.25 6.75m2.25 7.5l1.5 4.5m9.75-4.5l1.5-6H6.309m12.441 6l-1.5 4.5m0 0a1.5 1.5 0 11-3 0m3 0H9.75m0 0a1.5 1.5 0 11-3 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

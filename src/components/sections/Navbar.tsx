import { brand, navLinks } from "@/data/navigation";

export function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-60 bg-olive-dark">
        <div className="mx-auto box-content flex max-w-page flex-wrap items-center justify-between gap-6 px-gutter py-3.5 tablet:px-10 tablet:py-4.5">
          <a
            href="#inicio"
            className="font-serif text-brand-sm font-semibold tracking-subtle whitespace-nowrap text-cream tablet:text-brand"
          >
            {brand}
          </a>
          <nav aria-label="Secciones del panel">
            <ul className="flex flex-wrap items-center gap-4 desktop:gap-6.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block border-b-[1.5px] border-transparent pb-0.75 text-navlink-sm font-medium text-cream-200 transition-colors duration-200 hover:border-ambar hover:text-ambar desktop:text-navlink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className="h-nav" />
    </>
  );
}

// src/components/Header.tsx

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Gerald Ng
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">I build web applications that just make sense.</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max" id="navbar">
            {['about', 'experience'].map((id) => (//, 'projects', 'certifications'
              <li key={id}>
                <a className="group flex items-center py-3" href={`#${id}`}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/raldng"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.305-.536-1.534.117-3.2 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.666.243 2.895.12 3.2.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.431.37.815 1.1.815 2.215v3.285c0 .32.192.694.8.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/gerald-ng-kk/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M4.983 3.5c0 1.38-1.11 2.5-2.49 2.5C1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.493 1c1.38 0 2.49 1.12 2.49 2.5zM.31 8.39H4.65V24H.31V8.39zM8.1 8.39h4.17v2.13h.06c.58-1.1 2-2.25 4.12-2.25 4.41 0 5.23 2.9 5.23 6.68V24h-4.35v-7.82c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.15V24H8.1V8.39z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}

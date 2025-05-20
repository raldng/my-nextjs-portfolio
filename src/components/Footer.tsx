// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Gerald Ng &copy; All rights reserved. <br />
        Loosely designed in
        <a
          href="https://www.figma.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
        &nbsp;Figma&nbsp;
        </a>
        and coded in
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
        &nbsp;Visual Studio Code
        </a>
        . Built with
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
        &nbsp;Next.js&nbsp;
        </a>
        and
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
        >
        &nbsp;Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}

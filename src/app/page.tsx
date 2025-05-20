import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

// src/app/page.tsx example wrapping layout
export default function HomePage() {
  return (
    <div className="__variable_20b187 group/spotlight relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{ background: 'radial-gradient(600px at 1342px 282px, rgba(29, 78, 216, 0.15), transparent 80%)' }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            {/*<Projects />
            <Certifications />*/}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

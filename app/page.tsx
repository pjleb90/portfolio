import NavMenu from "@/components/NavMenu";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Portfolio from "@/components/portfolio";
import ToastProvider from "@/providers/toast-provider";

export default function Home() {

  return (
    <main className=' bg-white px-10 md:px-20 lg:px-10 dark:bg-gray-800 text-teal-500 mt-2'>
      <ToastProvider />
        <NavMenu />
        <Header />
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <ScrollToTopButton />
    </main>
  )
}

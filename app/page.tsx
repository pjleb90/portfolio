import Content from "@/components/content";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Responsive from "@/components/responsive-feature";

export default function Home() {
  return (
    <main className='bg-white px-2 dark:bg-gray-900 text-teal-500 mt-2'>
        <Header />
        <Hero />
        <Responsive />
        <Content />
    </main>
  )
}

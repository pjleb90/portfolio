
import Featured from "@/components/featured";
import Header from "@/components/header";


export default function Home() {

  return (
    <main className=' bg-white px-10 md:px-20 lg:px-10 dark:bg-gray-800 text-teal-500 mt-2'>
        <Header />
        <Featured />
    </main>
  )
}

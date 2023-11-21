import { ContactForm } from "@/components/contact-form";

const contact = () => {

  return (
    <div>
      <ContactForm />
      <section className="relative bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-gray-900 dark:text-teal-500">I&#39;d love to hear from you</h1>
            <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-800 dark:text-white">
              I appreciate each and every inquiry and will always respond within 24 hours. I treat every potential client as if they were already a member of the team and I&#39;m always excited to hear from new partners.
            </p>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  </div>
              </div>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-transparent w-full h-full absolute top-0 left-0 z-0 rounded-t-xl "></div>
      </section>
      <section className="text-center md:text-left md:ml-40">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">A<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> website</span> you can be <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">proud</span> of</h1>
        <p className="text-lg font-normal lg:text-xl text-gray-800 dark:text-white pb-8">I won&#39;t be happy with your website until you are. If there is anything outside of my scope I will make sure to bring in the right people to get it done. </p>
      </section>
    </div>
  );
}

export default contact;

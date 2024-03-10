// Components
import NavBar from '@/components/NavBar/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center bg-white justify-center h-14 px-2 border-b fixed left-0 right-0">
        <NavBar />
      </header>
      <main
        className="flex-1 px-4 py-12 md:px-6 md:py-24 text-center"
        id="about"
      >
        <div className="flex flex-col md:flex-row items-center justify-center mt-16 sm:mt-24 md:space-x-8">
          <div className="max-w-[600px] mb-6 md:mb-0 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
              Hello I'm Jao!
            </h1>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              I'm a passionate developer who loves creating amazing web
              experiences.
            </p>
          </div>
          <Image
            alt="Portfolio Image"
            className="ml-0 md:ml-0 rounded-lg md:order-2"
            height={200}
            src="/media/jao.png"
            style={{
              aspectRatio: '400/300',
              objectFit: 'cover',
              maxWidth: '100%',
            }}
            width={266}
          />
        </div>
      </main>
      <section
        className="py-8 md:py-12 text-center bg-gray-100 dark:bg-gray-800"
        id="projects"
      >
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">
            Projects
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Check out some of my latest projects.
          </p>
        </div>
      </section>
      <section className="py-8 md:py-12 text-center" id="contact">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">
            Contact
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Feel free to reach out to me for any inquiries.
          </p>
        </div>
      </section>
      <footer className="flex items-center justify-center h-14 border-t">
        Made with Love
      </footer>
    </div>
  );
}

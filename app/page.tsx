// This is a page for the home route of the website.
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        
        {/* The Hero Container */}
        <section className="px-6 py-32 text-center max-w-4xl mx-auto">

          <h1 className="text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
            Built for the <br />
            <span className="text-red-600">Perfect Catch.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto font-light tracking-wide">
            Hand-crafted fishing rods built one at a time for the serious angler.
          </p>

          <button className="mt-10 bg-red-600 text-white px-10 py-4 text-sm font-bold uppercase hover:bg-red-700 transition-all">
            Build Your Rod
          </button>

        </section>
      </main>
      </>
  )
}

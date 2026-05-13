// This is a page for the home route of the website.
import Navbar from '@/components/Navbar'
import { rods } from '@/data/rod'
import RodCard from '@/components/RodCard'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        
        {/* The Hero Container */}
        <section className="px-6 pt-32 pb-20 text-center max-w-4xl mx-auto">

          <h1 className="text-7xl font-extrabold uppercase tracking-tighter leading-none text-slate-900">
            Built for the <br />
            <span className="text-red-600">Perfect Catch.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-xl mx-auto font-light tracking-wide">
            Hand-crafted fishing rods built for the serious angler.
          </p>

          <button className="mt-15 bg-red-600 text-white px-10 py-4 text-sm font-bold uppercase hover:bg-red-700 transition-all">
            Build Your Rod
          </button>

        </section>

        {/* Featured Rods Section */}
        <section className="bg-white pb-15 px-6 text-center">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900">
                Featured Rods 
              </h2>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                Each rod is built to order. No two are exactly alike.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {rods.map((rod) => (
                <RodCard key={rod.id} rod={rod} />
              ))}
            </div>

          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-black py-6 px-6 border-b-2 border-red-600">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-center">

            <div>
              <p className="text-white font-bold text-lg">100% Hand-Built</p>
              <p className="text-slate-400 text-sm">Every rod, start to finish.</p>
            </div>

            <div className="w-px h-11 bg-slate-700" />

            <div>
              <p className="text-white font-bold text-lg">Custom Orders</p>
              <p className="text-slate-400 text-sm">Tailored to your specific needs.</p>
            </div>

            <div className="w-px h-11 bg-slate-700" />

            <div>
              <p className="text-white font-bold text-lg">Minnesota Made</p>
              <p className="text-slate-400 text-sm">Local craft, serious quality.</p>
            </div>

          </div>
        </section>

      </main>
      </>
  )
}

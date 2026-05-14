// This is a page for the home route of the website.
import Navbar from '@/components/Navbar'
import { rods } from '@/data/rod'
import RodCard from '@/components/RodCard'
import Footer from '@/components/Footer'
import Image from 'next/image'

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
        <section className="bg-slate-50 pt-15 pb-15 px-6 text-center">
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

        {/* About Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

              {/* Left Text */}
              <div className="flex-1">
                <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900">
                  Built by Hand.<br />
                  <span className="text-red-600">Built to Last.</span>
                </h2>
                <p className="mt-6 text-slate-500 leading-relaxed">
                  Every CMojo rod starts as a raw blank and ends as a finished, fishable work of art. No shortcuts, no assembly lines - just one builder, one rod at a time.
                </p>

                <p className="mt-4 text-slate-500 lead-relaxed">
                  Based out of Minnesota, built for the waters we grew up fishing.
                </p>
                <button className="mt-8 border-2 border-slate-900 text-slate-900 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                  Our Story
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 relative w-full h-80">
                <Image
                  src="/images/PlaceholderImage.jpeg"
                  alt="Rod builder at work"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-black py-6 px-6 border-y-4 border-red-900">
          <div className="max-w-4xl mx-auto justify-between flex flex-col md:flex-row items-center gap-8 md:gap-0 text-center ">

            <div>
              <p className="text-white font-bold text-lg">100% Hand-Built</p>
              <p className="text-slate-400 text-sm">Every rod, start to finish.</p>
            </div>

            <div className="hidden md:block w-px h-11 bg-slate-700" />

            <div>
              <p className="text-white font-bold text-lg">Custom Orders</p>
              <p className="text-slate-400 text-sm">Tailored to your specific needs.</p>
            </div>

            <div className="hidden md:block w-px h-11 bg-slate-700" />

            <div>
              <p className="text-white font-bold text-lg">Minnesota Made</p>
              <p className="text-slate-400 text-sm">Local craft, serious quality.</p>
            </div>

          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-black py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white">
              Ready for a rod <br />
              <span className="text-red-600">Built for you?</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Every CMojo rod is built to order. Tell us what you fish, how you fish it, and we'll build the rod around you.
            </p>
            <button className="mt-8 bg-red-600 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
              Start Your Build 
            </button>  
          </div>
        </section>

      </main>

        {/* Footer */}      
        <Footer />

      </>
  )
}

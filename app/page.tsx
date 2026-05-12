// This is a page for the home route of the website.
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* The Hero Container */}
      <section className="px-6 py-20 text-center">

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Built for the <span className="text-blue-600">Perfect Catch.</span>
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Hand-crafted fishing rods built one at a time for the serious angler.
        </p>

        <button className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-all">
          Build Your Rod
        </button>

      </section>
    </main>
  )
}
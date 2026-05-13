import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="w-full bg-black-900 px-6 py-4 flex items-center justify-between border-b border-zinc-400 ">

            {/* Logo and Site Name */}
            <div className="flex items-center gap-3">
                <Image
                    src="/images/CMojoLogo.jpg"
                    alt="CMojo Custom Rods Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <span className="text-white font-bold text-lg tracking-wide">
                    CMojo Custom Rods
                </span>
            </div>

            <nav className="flex items-center gap-6">
                
                <Link href="/" className="text-white text-sm font-medium hover:text-red-500 transition-colors">
                    Home
                </Link>

                <Link href="/gallery" className="text-white text-sm font-medium hover:text-red-500 transition-colors">
                    Gallery
                </Link>

                <Link href="/contact" className="text-white text-sm font-medium hover:text-red-500 transition-colors">
                    Contact
                </Link>

            </nav>

        </header>
    )
}
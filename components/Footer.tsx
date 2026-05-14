import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-16 border-t-2 border-red-600">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Logo and Tagline */}
                <div className="flex flex-col lg:col-span-1 gap-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/CMojoLogo.jpg"
                            alt="CMojo Custom Rods Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <span className="font-black text-lg uppercase tracking-wide">
                            CMojo Custom Rods 
                        </span>    
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Hand-crafted fishing rods built for the serious angler. Minnesota made, built to last.
                    </p>
                </div>

                {/* Center Quick Links */}
                <div className="flex flex-col gap-3 pl-30">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-red-600">
                        Quick Links
                    </h3>
                    <Link href="/" className="text-slate-400 text-sm hover:text-white transition-colors">Home</Link>
                    <Link href="/gallery" className="text-slate-400 text-sm hover:text-white transition-colors">Gallery</Link>
                    <Link href="/about" className="text-slate-400 text-sm hover:text-white transition-colors">About</Link>
                    <Link href="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">Contact</Link>
                </div>

                {/* Right Contact Info */}
                <div className="flex flex-col gap-3 pl-30">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-red-600">
                        Get in Touch 
                    </h3>
                    <p className="text-slate-400 text-sm">Grand Rapids, Minnesota</p>
                    <a href="mailto:cmjolsness@yahoo.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                        cmjolsness@yahoo.com
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61580993492533" target="_blank" className="text-slate-400 text-sm hover:text-white transition-colors">
                        Facebook 
                    </a>
                </div>
                
            </div>

            {/* Bottom Copyright Notice */}
            <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center">
                <p className="text-slate-600 text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} CMojo Custom Rods. All rights reserved.
                </p>
            </div>

        </footer>        
    )
}
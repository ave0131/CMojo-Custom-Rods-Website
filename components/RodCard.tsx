import Image from "next/image"
import { Rod } from "@/data/rod"

type RodCardProps = {
    rod: Rod
}

export default function RodCard({ rod }: RodCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative w-full h-52">
                <Image 
                    src={rod.image}
                    alt={rod.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">{rod.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{rod.species}</p>
                <p className="text-sm text-slate-400 mt-1">{rod.length} · {rod.action}</p>
                <p className="text-red-600 font-bold mt-3">${rod.price}</p>
                <button className="mt-4 w-full border-2 border-slate-900 text-slate-900 py-2 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                    View Details
                </button>
            </div>
            </div>
    )
}
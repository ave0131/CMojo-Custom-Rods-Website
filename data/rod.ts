export type Rod = {
    id: number
    name: string
    length: string
    description: string
    species: string
    action: string
    price: number
    image: string
}


{/* Fictional Rod Data */}
export const rods: Rod[] = [
    {
        id: 1,
        name: "The River Hunter",
        length: "7'6\"",
        description: "A versatile rod designed for river fishing, offering a perfect balance of sensitivity and strength.",
        species: "Trout, Bass, Walleye",
        action: "Medium-Fast",
        price: 299,
        image: "/images/PlaceholderImage.jpeg"   
    },
    {
        id: 2,
        name: "The Saltwater Slayer",
        length: "8'6\"",
        description: "Built to withstand the harsh conditions of saltwater fishing, this rod is ideal for targeting larger species.",
        species: "Redfish, Snook, Tarpon",
        action: "Fast",
        price: 349,
        image: "/images/PlaceholderImage.jpeg"
    },
    {
        id: 3,
        name: "The Panfish Pro",
        length: "6'0\"",
        description: "A lightweight rod perfect for targeting panfish in lakes and ponds, offering excellent sensitivity.",
        species: "Bluegill, Crappie, Perch",
        action: "Light",
        price: 199,
        image: "/images/PlaceholderImage.jpeg"
    },
    {
        id: 4,
        name: "The Big Game Beast",
        length: "9'0\"",
        description: "Designed for the serious angler targeting big game fish, this rod offers unmatched power and durability.",
        species: "Musky, Pike, Large Bass",
        action: "Extra-Fast",
        price: 399,
        image: "/images/PlaceholderImage.jpeg"
    }
]
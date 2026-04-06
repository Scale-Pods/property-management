export default function PropertiesPage() {
    const properties = [
        {
            name: "The Obsidian Heights",
            location: "Manhattan, NY",
            units: 48,
            owner: "Blackwood Corp",
            occupancy: 75,
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHhFGJq2oseDihJst-LgQvqH4wl-hiMeZj3HiMpkEGhgNvm_nD3jcWtrVmyGzsIgJi_BtEsaNBYw2DHwixIVscXxxnD4zFUiXXruRpbiXD3C8W1UjtYRcUSry4EUZgrTJ-ZPYAQPH4olnWDxNt2nEXzGXd8wKY9EcB079ZSur_roEQ0MjohidcEdETDytN6g9annijLLyrWfKksXLBbE2pVJiUAkxM-nuqMKnsitRLfkZQPwex79dEJZZMVebKEwri9hyLuhcZDRSq",
            statusColor: "bg-tertiary-container/10 text-tertiary-container",
        },
        {
            name: "Azure Business Center",
            location: "Chicago, IL",
            units: 120,
            owner: "Skyline Assets",
            occupancy: 90,
            status: "Maintenance",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYHOU-MnuxJikGiB-DbHb3Zmk-ftNJaTwgHtQxjtAxA8JXhvkA66uacLlKczCBwowWB7Te0dRZybsIQJ9oZufXbW_-L5pcY5T0C36dMCwfZ6UavcYJkprGI4HsnuYCn4vz8VxAjoTY7jrEWtTR1BLPZ4osyDhaYjfNnjAPjGdxsW9VpqJ2k6HwXaS8xZfWbN_SooLe3B8EP9O_zLCEHnKnvOwK5A_42kcwv9Z9E9ad7uHzrCHuj-7QdQDFm8ka7zxxprMpCixh-vCz",
            statusColor: "bg-error-container/10 text-error",
        },
        {
            name: "Echo Valley Lofts",
            location: "Austin, TX",
            units: 16,
            owner: "Nexus Holdings",
            occupancy: 50,
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAowvzk_iTapexI3jrUWGxkYIRXdf5-qItFyyvfJb0d7YaTD8uyDDagEzjPvqpLpZHkhL4hGOFc6BO-S5tL5cpOCgJjf9sxiV33AFHB7D-5rnwXKAPA1XtbZCANZSgRJnn_wqaQiO8XDK67KGbcDIE_9MLVnzdyJCPJD1ouVgvHbaiGAAdMWfVbvX3wN2ph149-sg980tI3YErjD25PWUuMUqd3OIfJKwuUdjPwMeL087vzi8zmhKGcWdv35gwZHoVVnR_mikDuUFjA",
            statusColor: "bg-tertiary-container/10 text-tertiary-container",
        },
        {
            name: "The Marquee Square",
            location: "Seattle, WA",
            units: 34,
            owner: "Marquee Dev Ltd",
            occupancy: 100,
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Q6vBTHukuqt0_K5zTqd-BK1zWowkNF1K9Iri0MbMUOx_wdL8jaGr1xoDU7UTnMlBiKj4UlYlG8bQmNmi5O0q2t6G_QkgMgm7uQA2ZLmrx7wxEQlkd5_C4mMz0iisVWw3JO19xP3dWheYlG_h7SHmqG9D471_q7F8wL0CqyQ6ERjrnHp6dg0xWweiF7pnYt_cd9etCTygF8imsg5qhjoCPLU1X4nx4BXx1eSqGzSDCuUJz8Ww3CehjDThRsEH_KsQtZlz8-L4oEWS",
            statusColor: "bg-tertiary-container/10 text-tertiary-container",
        },
        {
            name: "Foundry Lofts",
            location: "Detroit, MI",
            units: 85,
            owner: "Heritage Real Estate",
            occupancy: 20,
            status: "Vacant",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgqkCylvz3XaONbE28fW0t_38TOoN2kgaf6QUm2FF84pI1r2QC1FAWBnW9AknaEvq2oxuq9MjzO-ETx4N_qEgtuVkjAKIArYChcc3om1g6E10Xmd-y78z423qsNOieuCqxDQOSbdMV56wTdd21pSxOIr4WQZZrU8c-OPZYt1tC8kdZ_igPVojY_EHgiPBzh4n7mo5uawEN40y1hn4dhovE8HwlflpGhEAg-sPLeH2PKMdL23yVaU0nUKhDep7cOW4QbDFErWPHBHiR",
            statusColor: "bg-white/5 text-on-surface-variant",
        },
        {
            name: "Solaris Villas",
            location: "Miami, FL",
            units: 12,
            owner: "Prime Estates",
            occupancy: 65,
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEsuMK9S5i3lQeG1vd7etCaTBLxkxwK6WYGfy8i5y29s6EUlQ6Lq88c7KXzKHiGCiFC1AoRNEn98GBRjmuCpsT8EVUv7kFtOq9ZvN60M6CgdGwK4Tkd5U0YekrygxVU0qHIVh2Rl8B7cwZQXvUe2gITf-CCDD5YJ67UvYBXyuPjNnD-colu30ymznmf12qUOQeipHdwQGBkDRhDeAZal-Sv75FPfzLZxtFhwNOImFCoohasy5M8H0nvpFdnZLTJy1Jmkysbj7jS8RU",
            statusColor: "bg-tertiary-container/10 text-tertiary-container",
        },
    ];

    return (
        <div className="space-y-10 pb-12">
            {/* Breadcrumbs & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <nav className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold tracking-widest uppercase mb-2">
                        <span>Management</span>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span className="text-primary-fixed">Properties</span>
                    </nav>
                    <h2 className="text-3xl font-bold tracking-tight sora text-on-surface">Portfolio Overview</h2>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-primary-dim/20 hover:shadow-primary-dim/40 group">
                    <span className="material-symbols-outlined transition-transform group-hover:rotate-90">add</span>
                    <span>Add Property</span>
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
                <button className="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20">All</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-medium text-sm transition-all">Occupied</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-medium text-sm transition-all">Vacant</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-medium text-sm transition-all">Maintenance</button>

                <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Sort By:</span>
                    <select className="bg-transparent border-none text-sm font-bold text-on-surface focus:ring-0 cursor-pointer p-0">
                        <option>Recent</option>
                        <option>Value</option>
                        <option>Occupancy</option>
                    </select>
                </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((prop, i) => {
                    const dashOffset = 125.6 * (1 - prop.occupancy / 100);
                    return (
                        <div key={i} className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 transition-all hover:bg-surface-container hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    src={prop.image}
                                    alt={prop.name}
                                />
                                <div className={`absolute top-4 right-4 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${prop.statusColor} border border-white/10`}>
                                    {prop.status}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold sora mb-1 text-on-surface group-hover:text-primary transition-colors">{prop.name}</h3>
                                        <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                                            <span className="material-symbols-outlined text-[16px]">location_on</span>
                                            <span className="font-medium">{prop.location}</span>
                                        </div>
                                    </div>
                                    {/* Mini Donut Simulation */}
                                    <div className="relative h-12 w-12 flex items-center justify-center">
                                        <svg className="h-12 w-12 -rotate-90">
                                            <circle className="text-surface-container-highest" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                                            <circle
                                                className="text-primary transition-all duration-1000 ease-out"
                                                cx="24" cy="24"
                                                fill="transparent"
                                                r="20"
                                                stroke="currentColor"
                                                strokeDasharray="125.6"
                                                strokeDashoffset={dashOffset}
                                                strokeWidth="4"
                                            ></circle>
                                        </svg>
                                        <span className="absolute text-[10px] font-bold tabular-nums">{prop.occupancy}%</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest text-[#acaab1] font-bold">Total Units</p>
                                        <p className="text-lg font-bold sora tabular-nums">{prop.units}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest text-[#acaab1] font-bold">Owner</p>
                                        <p className="text-sm font-bold text-on-surface truncate">{prop.owner}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

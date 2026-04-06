import Link from "next/link";

export default function DashboardPage() {
    const stats = [
        { label: "Active Leases", value: "84", change: "+12%", icon: "assignment", color: "text-primary" },
        { label: "Total Revenue", value: "$124,500", change: "+8.4%", icon: "payments", color: "text-tertiary" },
        { label: "Occupancy Rate", value: "94.2%", change: "+2.1%", icon: "home", color: "text-primary-container" },
        { label: "Pending Issues", value: "12", change: "-4", icon: "error_outline", color: "text-error" },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 space-y-4">
                        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                            <span className="material-symbols-outlined fill-1">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#acaab1]">{stat.label}</p>
                            <h3 className="text-2xl font-bold sora tabular-nums">{stat.value}</h3>
                            <p className={`text-[11px] font-bold ${stat.change.startsWith("+") ? "text-primary-container" : "text-error"} flex items-center gap-1 mt-1`}>
                                <span className="material-symbols-outlined text-sm">trending_up</span> {stat.change} vs LY
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
                <section className="glass-card rounded-2xl p-8 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold sora">Recent Activity</h2>
                        <Link href="/reports" className="text-xs text-primary font-bold uppercase hover:underline">View All</Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-2">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#acaab1]">notifications_active</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold group-hover:text-primary transition-colors">Lease renewal for Metropolis Holdings</p>
                                    <p className="text-xs text-on-surface-variant">2 hours ago • Operations</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="glass-card rounded-2xl p-8 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold sora">Quick Links</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "Manage Leases", href: "/leases", icon: "assignment", color: "bg-primary" },
                            { name: "Financial Reports", href: "/reports", icon: "analytics", color: "bg-tertiary" },
                            { name: "All Documents", href: "/documents", icon: "description", color: "bg-primary-container" },
                            { name: "Support Hub", href: "#", icon: "contact_support", color: "bg-on-surface-variant" },
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center gap-4 transition-all hover:bg-white/[0.08] hover:border-white/20 active:scale-95 group">
                                <div className={`w-12 h-12 rounded-2xl ${link.color} flex items-center justify-center text-on-primary shadow-lg shadow-black/20`}>
                                    <span className="material-symbols-outlined">{link.icon}</span>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

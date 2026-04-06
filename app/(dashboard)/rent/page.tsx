"use client";

export default function RentPage() {
    const transactions = [
        {
            initials: "AS",
            name: "Adrian Sterling",
            unit: "Penthouse B",
            property: "Skyline Tower",
            amount: 4250,
            dueDate: "Oct 01, 2023",
            status: "Paid",
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
        {
            initials: "EM",
            name: "Elena Moretti",
            unit: "Unit 402",
            property: "Verdant Heights",
            amount: 2800,
            dueDate: "Oct 05, 2023",
            status: "Overdue",
            color: "text-error",
            bgColor: "bg-error-container/20",
        },
        {
            initials: "JK",
            name: "Julian Kase",
            unit: "Unit 12C",
            property: "The Atrium",
            amount: 3150,
            dueDate: "Oct 12, 2023",
            status: "Pending",
            color: "text-tertiary",
            bgColor: "bg-tertiary-container/20",
        },
        {
            initials: "SL",
            name: "Sarah Lopez",
            unit: "Studio 10",
            property: "Neo Lofts",
            amount: 1950,
            dueDate: "Oct 01, 2023",
            status: "Paid",
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase font-bold text-on-surface-variant">
                <span>Finance</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary">Rent Tracker</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold sora tracking-tighter text-on-surface">Financial Ledger</h2>
                    <p className="text-on-surface-variant mt-2 text-sm max-w-md">Oversee collection performance and manage accounts receivable across your portfolio.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-3 px-5 py-3 bg-surface-container-high rounded-xl text-sm font-medium border border-white/5 hover:bg-surface-container-highest transition-all group">
                        <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                        October 2023
                        <span className="material-symbols-outlined text-xs group-hover:translate-y-0.5 transition-transform">expand_more</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold rounded-xl text-sm shadow-xl shadow-primary/10 active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Record Payment
                    </button>
                </div>
            </div>

            {/* Summary Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Receivable", value: "$142,500.00", sub: "+4.2% vs LY", icon: "account_balance_wallet", color: "text-on-surface-variant" },
                    { label: "Collected", value: "$98,240.00", progress: 68, icon: "check_circle", color: "text-primary", highlight: "bg-primary/5 border-primary/20 invisible md:visible" },
                    { label: "Pending", value: "$32,160.00", sub: "14 Tenants remaining", icon: "pending_actions", color: "text-tertiary" },
                    { label: "Overdue", value: "$12,100.00", sub: "Critical Action Required", icon: "warning", color: "text-error", highlight: "bg-error/5 border-error/20" },
                ].map((chip, i) => (
                    <div key={i} className={`glass-card p-6 rounded-2xl relative overflow-hidden group ${chip.highlight || ""}`}>
                        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${chip.color}`}>
                            <span className="material-symbols-outlined text-5xl">{chip.icon}</span>
                        </div>
                        <p className={`text-[10px] uppercase tracking-widest font-extrabold mb-1 ${chip.color === "text-error" ? "text-error-dim" : "text-on-surface-variant"}`}>{chip.label}</p>
                        <h3 className="text-2xl font-bold sora text-on-surface tabular-nums">{chip.value}</h3>
                        <div className="mt-4 flex items-center gap-2">
                            {chip.progress ? (
                                <>
                                    <div className="h-1 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: `${chip.progress}%` }}></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-primary">{chip.progress}%</span>
                                </>
                            ) : (
                                <span className={`text-[10px] font-bold ${chip.color === "text-error" ? "text-error" : "text-on-surface-variant"}`}>{chip.sub}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Rent Ledger Table */}
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <div className="p-6 flex items-center justify-between border-b border-white/5 bg-surface-container-low/30 backdrop-blur-md">
                    <h4 className="font-bold sora text-lg">Transaction Ledger</h4>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined">filter_list</span></button>
                        <button className="p-2 text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined">download</span></button>
                    </div>
                </div>
                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-extrabold text-on-surface-variant">Tenant & Unit</th>
                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-extrabold text-on-surface-variant">Amount</th>
                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-extrabold text-on-surface-variant text-center">Due Date</th>
                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-extrabold text-on-surface-variant">Status</th>
                                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-extrabold text-on-surface-variant text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {transactions.map((tx, i) => (
                                <tr key={i} className={`hover:bg-white/[0.02] transition-colors group ${tx.status === "Overdue" ? "bg-error/5" : ""}`}>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl ${tx.bgColor} flex items-center justify-center ${tx.color} font-bold text-sm`}>{tx.initials}</div>
                                            <div>
                                                <p className="font-bold text-sm text-on-surface underline decoration-white/0 group-hover:decoration-primary/40 transition-all">{tx.name}</p>
                                                <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">{tx.unit} • {tx.property}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-mono text-sm tabular-nums">${tx.amount.toLocaleString()}.00</td>
                                    <td className="px-6 py-5 text-sm text-center font-medium">
                                        <span className={tx.status === "Overdue" ? "text-error-dim font-bold" : "text-on-surface-variant"}>{tx.dueDate}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${tx.bgColor} ${tx.color}`}>{tx.status}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {tx.status === "Overdue" ? (
                                                <>
                                                    <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 text-[10px] font-extrabold uppercase rounded-lg transition-all">
                                                        <span className="material-symbols-outlined text-sm">chat</span> Reminder
                                                    </button>
                                                    <button className="flex items-center gap-1 px-3 py-1.5 bg-primary text-on-primary text-[10px] font-extrabold uppercase rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95">
                                                        Mark Paid
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                                    <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-white"><span className="material-symbols-outlined text-lg">visibility</span></button>
                                                    <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-white"><span className="material-symbols-outlined text-lg">edit</span></button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card rounded-3xl p-8 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <h5 className="font-bold sora text-xl">Collection Velocity</h5>
                        <span className="text-[10px] font-bold bg-primary/20 text-primary px-3 py-1 rounded-full uppercase">High Performance</span>
                    </div>
                    <div className="h-48 flex items-end justify-between gap-3">
                        {[30, 55, 85, 95, 60, 40, 25].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3 group translate-y-2 hover:translate-y-0 transition-transform cursor-pointer">
                                <div className={`w-full rounded-t-xl transition-all duration-500 ${h > 80 ? "bg-primary" : "bg-surface-container-highest group-hover:bg-primary/40"}`} style={{ height: `${h}%` }}></div>
                                <span className="text-[9px] font-extrabold text-[#acaab1] uppercase tracking-widest">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-on-surface-variant font-medium">64% of payments are received within the first 3 days of the month.</p>
                </div>
                <div className="bg-surface-container-high rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                    <div className="relative z-10">
                        <h5 className="font-bold sora text-xl mb-4">Export Ledger</h5>
                        <p className="text-sm text-on-surface-variant mb-8 font-medium">Generate a detailed CSV or PDF report for tax compliance and auditing with 1-click archiving.</p>
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group/btn">
                                <span className="text-sm font-bold uppercase tracking-widest text-on-surface">Download CSV</span>
                                <span className="material-symbols-outlined text-primary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group/btn">
                                <span className="text-sm font-bold uppercase tracking-widest text-on-surface">Download PDF</span>
                                <span className="material-symbols-outlined text-primary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="absolute -bottom-12 -right-8 opacity-5 rotate-12 pointer-events-none transition-all group-hover:scale-110 group-hover:-rotate-2">
                        <span className="material-symbols-outlined text-[12rem] fill-1">description</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

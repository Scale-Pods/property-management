export default function LeasesPage() {
    const leases = [
        { tenant: "Lumina Creative", unit: "Studio A-12", start: "Oct 12, 2023", end: "Oct 11, 2024", remaining: "28 Days", status: "Active", critical: true },
        { tenant: "Atlas Logistics", unit: "Warehouse 7", start: "Jan 01, 2021", end: "Jan 01, 2024", remaining: "--", status: "Expired", critical: false },
        { tenant: "Horizon Ventures", unit: "Suite 900", start: "Mar 15, 2024", end: "Mar 14, 2026", remaining: "520 Days", status: "Renewed", critical: false },
        { tenant: "Nova Fintech", unit: "Floor 12", start: "Jun 20, 2023", end: "Jun 19, 2025", remaining: "252 Days", status: "Active", critical: false },
    ];

    return (
        <div className="space-y-8">
            {/* Red Alert Banner */}
            <section className="relative overflow-hidden bg-error-container/20 border border-error/20 rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center text-error">
                        <span className="material-symbols-outlined fill-1">warning</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-on-surface">Urgent: Leases Expiring Soon</h3>
                        <p className="text-sm text-on-surface-variant">There are <span className="text-error font-bold">12 leases</span> expiring within the next 30 days that require immediate action.</p>
                    </div>
                </div>
                <button className="bg-error hover:bg-error-dim text-on-error font-bold px-6 py-2 rounded-lg transition-all text-sm w-fit">
                    View Critical Leases
                </button>
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-8 w-32 h-32 bg-error/5 blur-3xl rounded-full"></div>
            </section>

            {/* LeaseTimeline Visualization */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 glass-card rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-on-surface">Lease Lifecycle</h2>
                            <p className="text-sm text-on-surface-variant uppercase tracking-widest mt-1">Key Tenant Timeline</p>
                        </div>
                        <button className="text-primary text-sm font-bold flex items-center gap-1">
                            Full Schedule <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </button>
                    </div>
                    <div className="space-y-8">
                        {/* Timeline Row 1 */}
                        <div className="relative">
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">apartment</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold">Metropolis Holdings</span>
                                        <span className="text-xs text-on-surface-variant">Unit 402 • Commercial</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-tertiary">22 Days Remaining</span>
                            </div>
                            <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "85%" }}></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-mono">
                                <span>AUG 2022</span>
                                <span>EXP: SEP 2024</span>
                            </div>
                        </div>
                        {/* Timeline Row 2 */}
                        <div className="relative">
                            <div className="flex justify-between items-end mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">store</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold">Zenith Retail Group</span>
                                        <span className="text-xs text-on-surface-variant">Ground Floor • Retail</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-primary">148 Days Remaining</span>
                            </div>
                            <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full bg-primary-dim rounded-full" style={{ width: "40%" }}></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-mono">
                                <span>JAN 2024</span>
                                <span>EXP: JAN 2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Card: Quick Stats */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="glass-card rounded-2xl p-6 flex-1 flex flex-col justify-between">
                        <span className="material-symbols-outlined text-tertiary-container text-4xl fill-1">assignment_late</span>
                        <div>
                            <span className="text-4xl font-bold text-glow">89%</span>
                            <p className="text-on-surface-variant text-sm mt-1">Retention Rate (Q3)</p>
                        </div>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                        <span className="material-symbols-outlined text-primary text-4xl fill-1">history_edu</span>
                        <div>
                            <span className="text-4xl font-bold">4</span>
                            <p className="text-on-surface-variant text-sm mt-1">Pending Renewals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lease Table */}
            <section className="glass-card rounded-2xl overflow-hidden">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold">Active Inventory</h2>
                    <div className="flex gap-2">
                        <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">Export CSV</button>
                        <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">filter_list</span> Filters
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Tenant & Unit</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lease Start</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lease End</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Remaining</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leases.map((lease, i) => (
                                <tr key={i} className="hover:bg-surface-container-high transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="font-bold">{lease.tenant}</div>
                                        <div className="text-xs text-on-surface-variant">{lease.unit}</div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-mono text-on-surface-variant">{lease.start}</td>
                                    <td className="px-8 py-6 text-sm font-mono text-on-surface-variant">{lease.end}</td>
                                    <td className="px-8 py-6">
                                        <span className={`text-sm font-bold ${lease.critical ? "text-error" : "text-on-surface-variant"}`}>{lease.remaining}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${lease.status === "Expired" ? "bg-error/10 text-error" :
                                                lease.status === "Renewed" ? "bg-tertiary-container/20 text-tertiary-container" :
                                                    "bg-primary/10 text-primary"
                                            }`}>
                                            {lease.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="bg-primary hover:bg-primary-dim text-on-primary text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-tighter transition-all opacity-0 group-hover:opacity-100">Renewal Workflow</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center">
                    <span className="text-xs text-on-surface-variant">Showing 4 of 124 records</span>
                    <div className="flex gap-4">
                        <button className="text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                        <button className="text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
            </section>
        </div>
    );
}

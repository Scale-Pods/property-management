export default function ReportsPage() {
    return (
        <div className="w-full space-y-8">
            {/* Bento Grid: KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border-t border-white/5">
                    <span className="text-on-surface-variant uppercase tracking-[0.1em] text-[10px] font-bold">Monthly Income</span>
                    <div className="mt-4">
                        <h3 className="sora text-2xl font-bold tabular-nums">$42,850</h3>
                        <p className="text-[11px] text-primary-container flex items-center gap-1 mt-1 font-medium">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +12.4% vs LY
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border-t border-white/5">
                    <span className="text-on-surface-variant uppercase tracking-[0.1em] text-[10px] font-bold">Total Expenses</span>
                    <div className="mt-4">
                        <h3 className="sora text-2xl font-bold tabular-nums">$14,210</h3>
                        <p className="text-[11px] text-error flex items-center gap-1 mt-1 font-medium">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +2.1% higher
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border-t border-white/5">
                    <span className="text-on-surface-variant uppercase tracking-[0.1em] text-[10px] font-bold">Net Income</span>
                    <div className="mt-4">
                        <h3 className="sora text-2xl font-bold tabular-nums text-primary">$28,640</h3>
                        <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1 font-medium">
                            Within target margin
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border-t border-white/5">
                    <span className="text-on-surface-variant uppercase tracking-[0.1em] text-[10px] font-bold">Outstanding Dues</span>
                    <div className="mt-4">
                        <h3 className="sora text-2xl font-bold tabular-nums text-tertiary">$3,400</h3>
                        <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1 font-medium underline">
                            View 4 tenants
                        </p>
                    </div>
                </div>
            </div>

            {/* Charts & Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Income Chart Section */}
                <div className="lg:col-span-2 glass-card rounded-2xl p-8 border border-white/5">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h2 className="sora text-xl font-bold">Income Performance</h2>
                            <p className="text-sm text-on-surface-variant">Annual cash flow projection vs actual receipts</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary-dim"></div>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Income</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-tertiary-dim"></div>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Target</span>
                            </div>
                        </div>
                    </div>

                    {/* Mock Chart Visualization */}
                    <div className="h-64 flex items-end justify-between gap-2 pt-4 relative">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 800 200">
                            <path d="M0,150 Q100,120 200,140 T400,100 T600,110 T800,80" fill="none" stroke="#ff8ed2" strokeDasharray="4 4" strokeWidth="2"></path>
                        </svg>
                        {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"].map((month, i) => {
                            const heights = ["40%", "55%", "48%", "75%", "60%", "65%", "80%", "90%"];
                            return (
                                <div key={month} className="flex-1 flex flex-col items-center gap-2 group">
                                    <div
                                        className={`w-full rounded-t-sm ${month === "APR" ? "bg-primary-dim" : "bg-surface-container-highest group-hover:bg-primary-dim"} transition-colors`}
                                        style={{ height: heights[i] }}
                                    ></div>
                                    <span className="text-[10px] text-on-surface-variant font-bold">{month}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Property ROI List */}
                <div className="bg-surface-container rounded-2xl p-6 border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="sora text-sm font-bold uppercase tracking-wider">Property Yield</h2>
                        <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: "The Zenith Heights", type: "Luxury Res.", yield: "8.2%", color: "primary" },
                            { name: "Harbor View Apts", type: "Mixed Use", yield: "6.5%", color: "primary" },
                            { name: "Starlight Suites", type: "Boutique Hotel", yield: "4.1%", color: "tertiary" },
                            { name: "Oasis Park Villas", type: "Residential", yield: "9.4%", color: "primary" },
                        ].map((prop, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-sm font-bold truncate w-32">{prop.name}</h4>
                                        <span className="text-[10px] text-on-surface-variant">{prop.type}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-${prop.color} sora font-bold`}>{prop.yield}</span>
                                        <p className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tighter">Net Yield</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                    <div className={`h-full bg-${prop.color}`} style={{ width: prop.yield }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors rounded-lg border border-primary/20">
                        Download Full Report
                    </button>
                </div>
            </div>

            {/* Secondary Analysis Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                <div className="bg-surface-container-low rounded-xl p-6">
                    <h3 className="sora font-bold mb-4">Expense Breakdown</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">plumbing</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">Maintenance</span>
                                    <span className="text-sm tabular-nums">$6,450</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-highest rounded-full">
                                    <div className="h-full bg-primary-container" style={{ width: "45%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary">shield</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">Insurance</span>
                                    <span className="text-sm tabular-nums">$3,200</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-highest rounded-full">
                                    <div className="h-full bg-tertiary" style={{ width: "22%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-dim/20 to-transparent p-8 border border-white/5">
                    <div className="relative z-10">
                        <h3 className="sora font-bold text-xl mb-2">Optimize Your Portfolio</h3>
                        <p className="text-sm text-on-surface-variant max-w-xs mb-6">Our AI suggests consolidating maintenance vendors to save up to 12% on annual operational costs.</p>
                        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all hover:gap-3">
                            View Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                    <div className="absolute -right-12 -bottom-12 opacity-10">
                        <span className="material-symbols-outlined text-[160px] fill-1">insights</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

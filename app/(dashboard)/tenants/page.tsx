"use client";

export default function TenantsPage() {
    const tenants = [
        {
            name: "Alexander Vance",
            email: "alex.v@protonmail.com",
            unit: "#402-B",
            property: "Skyline Heights",
            type: "Luxury Penthouse",
            kyc: "Complete",
            kycColor: "bg-tertiary-container/15 text-tertiary",
            kycDot: "bg-tertiary",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdeLrj77pZmmD13Jxs3EAdMSMPZpDxO4w5qqFEtBsoAjJfxdekWWWjaX4sAniE61eQEYhYAbhlSlILuiO8d0X_QsjIItPKJcSNZsi7b5l58RJ27W8y7Zi43fX6EUJiuDgQuGOOi__jr-3hOUMsTHdqAL2XIr5K_uA2VPeBHES3BZxbdlR9qcKuMTsJmQkE3XtlRnTf_0m2e14VCqYMFtHK46fVCBM8AK-axpGSCh-wGgpASnM2QbGNyaQLur3uAv04J1OAjZWMBXQk",
        },
        {
            name: "Elena Rodriguez",
            email: "elena.rod@work.com",
            unit: "#1201",
            property: "The Marquee",
            type: "Studio Suite",
            kyc: "Pending",
            kycColor: "bg-primary-container/15 text-primary",
            kycDot: "bg-primary",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjSbHBkswgoC3TCyI1tEq2apUt9ghHBteGqiNuBou8_XiQbGGQOlKnM2-IBrhXxmnFJxnYlNaisHgBtBEN5JUm5NKyKhdWfDKigIqYTZRObDt20a22lr6Voq4DSQRk3d_8pyQGP8-dCNsydQaNx1nHBq_F5JsqTeuapjjL1zqktPG9f_9cgmVcqp3ZRn94f03GwrHELYsxLNtgBpn0XcD6WWSEdJdCDu3BkNxX0CdNYHAexhRNZE0s_5O_pTum4hg7gbAiW_WSuOv",
        },
        {
            name: "Marcus Thorne",
            email: "m.thorne@design.co",
            unit: "#88-C",
            property: "Vantage Point",
            type: "2BR Apartment",
            kyc: "Missing",
            kycColor: "bg-error-container/20 text-error",
            kycDot: "bg-error",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBngCOJJ-Vgrdl9OFCR17DD8Zcgz2W98CqvHDArrlr18B3-MibkpdlKM7J2dQstNNXwEwDC5ZmcUgg8Q8eKS_VhHYL5X_8cdYokOPoYw3O_wXitgE0ae_TEinAfqb0asgG6euRgZe1VsLmlDQ0uvZGMZGr2g_H7iSTaSHevsVeOAOr0lrUj5EfrQERiGAQC89Bu0x6116pBJpNOnrC-ilTQxyvYBUYDbSAI5XHcBHz4mk6TtYQwHB-CzyrznPMfQ4Jz4I8Zgi9wOXJC",
        },
        {
            name: "Sienna West",
            email: "sienna@creative.io",
            unit: "#202",
            property: "Skyline Heights",
            type: "Luxury Penthouse",
            kyc: "Complete",
            kycColor: "bg-tertiary-container/15 text-tertiary",
            kycDot: "bg-tertiary",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD7uVl29vrcghg1fdQTiEqu6VbKtefpri7XzACZMW3T7P47UJxH9UkDcFgQQmC_Tz1rk3PrXxBiiCOFuHAWwg0slU5-z5BdyPayC1BkYJfQYMUbtbKydFSot9njnt2YoNeiytuM54O4gDKJQfoTBjVPuYtMCcyPAUmoyD621u2iEVzPjBDMF4imheoMueBvA9hkN-0tUVx4Z_qWCTcrNJaxAS_ZgYaNrE2OfxQ1JmTh-xhbbwRiyJj2z7JDzeD_cERTwqAuD9Cw0ux",
        },
        {
            name: "Julian Chen",
            email: "jchen@tech.com",
            unit: "#505",
            property: "The Marquee",
            type: "Studio Suite",
            kyc: "Pending",
            kycColor: "bg-primary-container/15 text-primary",
            kycDot: "bg-primary",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjIdTPJ6_rBRiJh1xA_3cYn33htMTc9YGkq86zcg8IPqLNH-zMuA-4MuAGlq71O8PV3foOI7zeLk7WQH8pOvUYHYd8yjzB7M09ySIfZbvJtyd__uPyLyKg4GjnW5QRN1Qv7lIjl9AVr1VOuZyJeD_cVUJ3zZxlpBnC9MpXZPPaJTMapvJZi9ufU7IaExNNMm1-DCoqZEsTDesuipOb5_kB31wP8PPFt3K5aPl-4lpiRJJoEZ-5FUeSEPeTO4-p6xS59PkNOCfuVWnU",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {/* Breadcrumbs & Header */}
            <div className="space-y-6">
                <nav aria-label="Breadcrumb" className="flex">
                    <ol className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        <li>Management</li>
                        <li><span className="material-symbols-outlined text-[12px] opacity-50">chevron_right</span></li>
                        <li className="text-primary tracking-widest">Tenants</li>
                    </ol>
                </nav>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold sora mb-1">Tenant Directory</h2>
                        <p className="text-on-surface-variant text-sm max-w-lg">Monitor lease statuses, KYC compliance, and occupancy across your portfolio in real-time.</p>
                    </div>
                    <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 self-start transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">add</span>
                        Add Tenant
                    </button>
                </div>
            </div>

            {/* Actions Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                    <input
                        className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant transition-all hover:bg-surface-container-low/80"
                        placeholder="Search by name, email, or unit..."
                        type="text"
                    />
                </div>
                <div className="md:col-span-4 flex gap-4">
                    <div className="flex-1 relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">filter_list</span>
                        <select className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-xl py-4 pl-12 pr-4 text-on-surface appearance-none cursor-pointer hover:bg-surface-container-low/80 transition-all">
                            <option>All Properties</option>
                            <option>Skyline Heights</option>
                            <option>The Marquee</option>
                            <option>Vantage Point</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Tenant Table */}
            <div className="glass-card rounded-2xl overflow-hidden overflow-x-auto no-scrollbar">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-surface-container-low/50">
                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">Tenant</th>
                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant text-center">Unit</th>
                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">Property</th>
                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant">KYC Status</th>
                            <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {tenants.map((tenant, i) => (
                            <tr key={i} className="hover:bg-white/[0.03] transition-all group border-l-4 border-transparent hover:border-primary">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <img className="w-10 h-10 rounded-full object-cover border border-white/5" src={tenant.avatar} alt={tenant.name} />
                                        <div>
                                            <div className="font-bold text-on-surface">{tenant.name}</div>
                                            <div className="text-xs text-on-surface-variant">{tenant.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-center font-mono text-sm text-primary uppercase font-bold">{tenant.unit}</td>
                                <td className="px-6 py-5">
                                    <div className="text-sm font-bold">{tenant.property}</div>
                                    <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">{tenant.type}</div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${tenant.kycColor}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${tenant.kycDot}`}></span>
                                        {tenant.kyc}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Showing 5 of 124 Tenants</p>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary border border-primary/20 font-bold">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 transition-colors">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 transition-colors">3</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

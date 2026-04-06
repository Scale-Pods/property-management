export default function DocumentsPage() {
    const documents = [
        { name: "Lease_Agreement_Unit_402.pdf", type: "AGREEMENTS", user: "Marcus Thome", size: "1.2 MB", icon: "forum", iconColor: "text-pink-500", bgColor: "bg-pink-500/10" },
        { name: "Passport_Scan_Main.jpg", type: "KYC", user: "Elena Rodriguez", size: "482 KB", icon: "badge", iconColor: "text-blue-500", bgColor: "bg-blue-500/10" },
        { name: "Police_Clearance_2024.pdf", type: "POLICE VERIFICATION", user: "David Kim", size: "2.1 MB", icon: "verified_user", iconColor: "text-purple-500", bgColor: "bg-purple-500/10" },
        { name: "Maintenance_Terms_V2.docx", type: "AGREEMENTS", user: "PropFlow Corp", size: "81 KB", icon: "description", iconColor: "text-white/60", bgColor: "bg-white/5" },
        { name: "Tax_ID_Verification.pdf", type: "KYC", user: "Sophia Martin", size: "1.9 MB", icon: "assignment_ind", iconColor: "text-indigo-500", bgColor: "bg-indigo-500/10" },
    ];

    return (
        <div className="space-y-8 pb-12">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold sora">Repository</h2>
                <p className="text-sm text-on-surface-variant">Manage and audit all property legalities and compliance files.</p>
            </div>

            {/* Upload Area */}
            <section className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center border-2 border-dashed border-white/10 text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold sora">Drop files to upload</h3>
                    <p className="text-sm text-on-surface-variant mt-1">PDF, PNG, JPG or DOCX (Max 10MB)</p>
                </div>
                <button className="bg-primary-container text-on-primary-container font-bold px-8 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                    Select Files
                </button>
            </section>

            {/* Filter Tabs */}
            <nav className="flex gap-8 border-b border-white/5 px-2">
                {["All Documents", "Agreements", "KYC"].map((tab, i) => (
                    <button
                        key={tab}
                        className={`pb-4 text-sm font-bold transition-all relative ${i === 0 ? "text-primary" : "text-on-surface-variant hover:text-white"
                            }`}
                    >
                        {tab}
                        {i === 0 && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
                    </button>
                ))}
            </nav>

            {/* Document List */}
            <section className="space-y-4">
                {documents.map((doc, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 flex flex-col gap-6 group hover:bg-white/[0.04] transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className={`w-12 h-12 rounded-xl ${doc.bgColor} flex items-center justify-center`}>
                                <span className={`material-symbols-outlined ${doc.iconColor} fill-1`}>{doc.icon}</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-[#acaab1] hover:text-white transition-colors cursor-pointer">visibility</span>
                                <span className="material-symbols-outlined text-[#acaab1] hover:text-white transition-colors cursor-pointer">download</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{doc.name}</h4>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">{doc.type}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden">
                                    <img src="https://i.pravatar.cc/100" alt="avatar" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs text-on-surface-variant">{doc.user}</span>
                            </div>
                            <span className="text-xs font-mono text-on-surface-variant">{doc.size}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer Info */}
            <section className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                    <h3 className="text-xl font-bold sora">Data Density & Auditing</h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                        Showing 5 of 128 documents. Use the advanced filters to narrow down your search results for specific tenant history.
                    </p>
                </div>
                <div className="flex justify-center gap-2">
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white/5"><span className="material-symbols-outlined">chevron_left</span></button>
                    <button className="w-10 h-10 rounded-lg bg-[#1f1f26] flex items-center justify-center text-primary font-bold">1</button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white/5">2</button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white/5">3</button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white/5"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
            </section>
        </div>
    );
}

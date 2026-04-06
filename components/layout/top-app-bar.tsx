"use client";

import { usePathname } from "next/navigation";

export function TopAppBar() {
    const pathname = usePathname();

    const getPageTitle = (path: string) => {
        const titles: Record<string, string> = {
            "/dashboard": "Overview",
            "/leases": "Lease Management",
            "/reports": "Financial Reports",
            "/documents": "Documents Repository",
            "/properties": "Portfolio Overview",
            "/tenants": "Tenant Directory",
            "/rent": "Financial Ledger",
        };
        return titles[path] || "Analytics";
    };

    const getBreadcrumb = (path: string) => {
        if (path === "/leases" || path === "/documents") return { group: "Operations", page: path === "/leases" ? "Leases" : "Documents" };
        if (path === "/reports" || path === "/rent") return { group: "Finance", page: path === "/reports" ? "Reports" : "Rent Tracker" };
        if (path === "/tenants" || path === "/properties") return { group: "Management", page: path === "/tenants" ? "Tenants" : "Properties" };
        return { group: "Dashboard", page: "Summary" };
    };

    const { group, page } = getBreadcrumb(pathname);

    return (
        <header className="fixed top-0 right-0 left-0 md:left-60 z-30 flex justify-between items-center px-6 h-16 w-full bg-[#0e0e13]/60 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#acaab1] md:hidden">menu</span>
                <div className="flex flex-col">
                    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#acaab1] mb-0.5">
                        <span>{group}</span>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span className="text-primary">{page}</span>
                    </nav>
                    <h1 className="text-xl font-bold text-[#a3a6ff] sora">{getPageTitle(pathname)}</h1>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {pathname === "/reports" && (
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest border border-white/10 text-sm">
                            <span className="text-xs text-on-surface-variant font-bold tracking-tighter uppercase">Owner:</span>
                            <span className="font-medium">Vanguard Assets</span>
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                    </div>
                )}
                <span className="material-symbols-outlined text-[#acaab1] hover:bg-white/5 p-2 rounded-full cursor-pointer transition-colors">search</span>
                <div className="relative">
                    <span className="material-symbols-outlined text-[#acaab1] hover:bg-white/5 p-2 rounded-full cursor-pointer transition-colors">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#25252d] border border-white/10 overflow-hidden">
                    <img
                        alt="User Profile"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjYEvYTmRIVNeEDI6siDxIZ5eMIBDbvQb8lgoZv8XRqzWNEgw2ZeCdS4SbUCEaRbKuTgmQWnd0wkaq3mLFjxDKXiMAPlp-J56bKzAmIqae6gKJSLvKVZgg4Drequ8eBfIzzBXCcp4EKi_qVEX6I0pZaqmvrYMr9782CcwH9FNV4f4Xpj1QX3P5lJlDwwNhn8j2VrY57WRvHYTpdDV8epitLA2_GjNqR-91CrrPR3Vg7FLzgJdNlvqCCayi_sHhSqI3jtT7d_Uyf8zB"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

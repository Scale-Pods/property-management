"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Properties", href: "/properties", icon: "domain" },
    { name: "Tenants", href: "/tenants", icon: "group" },
    { name: "Rent", href: "/rent", icon: "payments" },
    { name: "Documents", href: "/documents", icon: "description" },
    { name: "Leases", href: "/leases", icon: "assignment" },
    { name: "Reports", href: "/reports", icon: "analytics" },
    { name: "Profile", href: "/profile", icon: "account_circle" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-60 z-40 hidden md:flex flex-col border-r border-white/5 bg-[#0e0e13]">
            <div className="px-6 py-8">
                <span className="text-2xl font-bold tracking-tighter text-[#a3a6ff] sora">PropFlow</span>
            </div>
            <nav className="flex-1 px-3 space-y-1">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all group ${pathname === item.href
                            ? "text-[#a3a6ff] bg-[#1f1f26]"
                            : "text-[#acaab1] hover:text-white hover:bg-[#1f1f26]"
                            }`}
                    >
                        <span className={`material-symbols-outlined ${pathname === item.href ? "fill-1" : ""}`}>
                            {item.icon}
                        </span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

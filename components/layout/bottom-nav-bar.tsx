"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Properties", href: "/properties", icon: "domain" },
    { name: "Leases", href: "/leases", icon: "assignment" },
    { name: "Rent", href: "/rent", icon: "payments" },
    { name: "Profile", href: "/profile", icon: "person" },
];

export function BottomNavBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 w-full z-50 md:hidden flex justify-around items-center h-16 px-4 border-t border-white/5 bg-[#0e0e13]/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`flex flex-col items-center justify-center transition-all ${pathname === item.href ? "text-[#a3a6ff] scale-110" : "text-[#acaab1] active:scale-110"
                        }`}
                >
                    <span className={`material-symbols-outlined ${pathname === item.name ? "fill-1" : ""}`}>
                        {item.icon}
                    </span>
                    <span className="text-[10px] mt-1 font-medium">{item.name}</span>
                </Link>
            ))}
        </nav>
    );
}

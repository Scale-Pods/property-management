import { Sidebar } from "@/components/layout/sidebar";
import { TopAppBar } from "@/components/layout/top-app-bar";
import { BottomNavBar } from "@/components/layout/bottom-nav-bar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-on-surface">
            <Sidebar />
            <div className="md:ml-60">
                <TopAppBar />
                <main className="pt-24 pb-24 md:pb-8 px-6 min-h-screen">
                    {children}
                </main>
            </div>
            <BottomNavBar />
            {/* Floating Action Button (Mobile Contextual) */}
            <button className="fixed bottom-20 right-6 md:hidden w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-40 transition-transform active:scale-90">
                <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>add</span>
            </button>
        </div>
    );
}

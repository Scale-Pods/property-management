"use client";

import React from 'react';

export default function ProfilePage() {
    const user = {
        name: "Alex Sterling",
        role: "Senior Portfolio Manager",
        email: "alex.sterling@propflow.com",
        phone: "+1 (555) 012-3456",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjYEvYTmRIVNeEDI6siDxIZ5eMIBDbvQb8lgoZv8XRqzWNEgw2ZeCdS4SbUCEaRbKuTgmQWnd0wkaq3mLFjxDKXiMAPlp-J56bKzAmIqae6gKJSLvKVZgg4Drequ8eBfIzzBXCcp4EKi_qVEX6I0pZaqmvrYMr9782CcwH9FNV4f4Xpj1QX3P5lJlDwwNhn8j2VrY57WRvHYTpdDV8epitLA2_GjNqR-91CrrPR3Vg7FLzgJdNlvqCCayi_sHhSqI3jtT7d_Uyf8zB",
        cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        bio: "Dedicated real estate professional with over 10 years of experience in managing high-value commercial and residential portfolios. Committed to maximizing investor returns and enhancing tenant satisfaction through data-driven strategies.",
        stats: [
            { label: "Properties", value: "48", icon: "domain" },
            { label: "Leases Active", value: "156", icon: "assignment" },
            { label: "Growth", value: "+12.4%", icon: "trending_up" }
        ]
    };

    return (
        <div className="space-y-8 pb-12 animate-in fade-in duration-700">
            {/* Header / Breadcrumbs */}
            <div className="flex flex-col gap-2">
                <nav className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold tracking-widest uppercase mb-2">
                    <span>Account</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span className="text-primary-fixed">Profile</span>
                </nav>
                <h2 className="text-3xl font-bold sora text-on-surface">User Profile</h2>
            </div>

            {/* Profile Card */}
            <div className="bg-surface-container-low rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
                {/* Cover Image */}
                <div className="h-48 w-full relative overflow-hidden">
                    <img
                        src={user.cover}
                        alt="Cover"
                        className="w-full h-full object-cover opacity-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                </div>

                {/* Profile Info Section */}
                <div className="px-8 pb-8 -mt-16 relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
                        <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-surface-container-low shadow-2xl bg-surface-container relative group">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                <span className="material-symbols-outlined text-white">photo_camera</span>
                            </div>
                        </div>
                        <div className="text-center md:text-left space-y-2 mb-2">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <h1 className="text-3xl font-extrabold sora text-[#a3a6ff]">{user.name}</h1>
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">Verified</span>
                            </div>
                            <p className="text-on-surface-variant font-medium text-sm flex items-center gap-2 justify-center md:justify-start">
                                <span className="material-symbols-outlined text-sm">badge</span>
                                {user.role}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-surface-container-highest border border-white/10 text-on-surface font-bold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
                            <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">edit</span>
                            Edit Profile
                        </button>
                        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">share</span>
                            Share
                        </button>
                    </div>
                </div>

                <div className="px-8 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold sora flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                About Me
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm bg-white/5 p-6 rounded-2xl border border-white/5">
                                {user.bio}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-surface-container border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</p>
                                    <p className="text-sm font-bold">{user.email}</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-surface-container border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff9de2]/10 flex items-center justify-center text-[#ff9de2]">
                                    <span className="material-symbols-outlined text-xl">phone</span>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Phone Number</p>
                                    <p className="text-sm font-bold">{user.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold sora flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">insights</span>
                            Key Performance
                        </h3>
                        <div className="space-y-3">
                            {user.stats.map((stat, i) => (
                                <div key={i} className="group p-5 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high border border-white/5 flex items-center justify-between transition-all hover:border-primary/30">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">{stat.icon}</span>
                                        </div>
                                        <p className="text-sm font-medium text-on-surface-variant">{stat.label}</p>
                                    </div>
                                    <p className="text-xl font-bold sora">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-3xl bg-primary-container/5 border border-primary/10 space-y-4">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest text-center">Manager Ranking</p>
                            <div className="flex justify-center flex-col items-center">
                                <div className="text-4xl font-extrabold sora text-primary">#4</div>
                                <p className="text-[10px] text-on-surface-variant font-bold mt-1 uppercase tracking-tighter">Top 5% of Portfolio Managers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


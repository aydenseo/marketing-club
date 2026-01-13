import React from "react";

export function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-serif font-bold text-slate-900">Self Marketing Club</h3>
                    <p className="mt-2 text-sm text-slate-500">
                        For Small Brand Founders
                    </p>
                </div>
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Self Marketing Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

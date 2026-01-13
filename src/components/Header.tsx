import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-secondary/10 bg-white/80 backdrop-blur-md dark:bg-primary/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-serif font-bold tracking-tight text-foreground hover:text-accent transition-colors">
                        Self Marketing Club
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#philosophy" className="text-sm font-medium text-secondary hover:text-foreground transition-colors">
                        Philosophy
                    </Link>
                    <Link href="#process" className="text-sm font-medium text-secondary hover:text-foreground transition-colors">
                        Process
                    </Link>
                    <Link href="#target" className="text-sm font-medium text-secondary hover:text-foreground transition-colors">
                        Target
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#join"
                        className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-all hover:bg-accent ring-offset-2 focus:ring-2 focus:ring-accent"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </header>
    );
}

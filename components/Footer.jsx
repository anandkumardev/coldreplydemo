export default function Footer() {
    return (
        <>
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-neutral-900 text-white/70">
                <p>Copyright © 2026 ColdReply. All rights Reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-all">
                        Terms
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-white transition-all">
                        Privacy Policy
                    </a>
                    <div className="h-8 w-px bg-white/20"></div>
                    <a href="#" className="hover:text-white transition-all">
                        Contact Us
                    </a>
                </div>
            </footer>
        </>
    );
};
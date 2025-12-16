export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] border-t border-neutral-200 py-12 px-6 md:px-16 pb-24 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-light tracking-wider gap-6">
                <div className="text-center md:text-left">
                    &copy; 2024 LUMIÈRE SPA. All Rights Reserved.
                </div>
                <div className="flex gap-8">
                    <a
                        href="#"
                        className="hover:text-neutral-800 transition-colors uppercase"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className="hover:text-neutral-800 transition-colors uppercase"
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        className="hover:text-neutral-800 transition-colors uppercase"
                    >
                        Line
                    </a>
                </div>
            </div>
        </footer>
    );
}

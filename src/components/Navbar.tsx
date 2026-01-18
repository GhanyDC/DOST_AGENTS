import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-6">
                <Link href="/" className="font-semibold text-lg text-gray-900 dark:text-white">DOST AGENTS</Link>
                <ul className="flex gap-4 list-none m-0 p-0">
                    <li><Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300">Home</Link></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300">About</Link></li>
                    <li><Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300">Services</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/contact" className="text-primary-color hover:opacity-90">Contact</Link>
            </div>
        </nav>
    );
}
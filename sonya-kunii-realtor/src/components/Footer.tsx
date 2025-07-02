import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div className="font-semibold text-gray-900">Sonya Kunii, REALTOR®</div>
          <div>HomeSmart Connect Real Estate</div>
          <div>7240 W Devon Ave, Chicago, IL 60631</div>
          <div>Phone: <a href="tel:7739515807" className="text-primary hover:underline">(773) 951-5807</a></div>
          <div>Email: <a href="mailto:skuniire@gmail.com" className="text-primary hover:underline">skuniire@gmail.com</a></div>
          <div className="mt-1 text-xs text-gray-500">License # [placeholder]</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Link href="/listings" className="hover:underline">Listings</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-primary"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r="1"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M7 10v7M7 7v.01M12 10v7m0-7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v7"/></svg></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} Sonya Kunii. All rights reserved.</div>
    </footer>
  );
} 
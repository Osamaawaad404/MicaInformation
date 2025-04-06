import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            أكاديمية مصر الدولية للحاسبات
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 space-x-reverse">
          <Link href="/" className="px-3 py-2 hover:text-secondary transition-colors">
            الرئيسية
          </Link>
          <Link href="/about" className="px-3 py-2 hover:text-secondary transition-colors">
            عن الأكاديمية
          </Link>
          <Link href="/programs" className="px-3 py-2 hover:text-secondary transition-colors">
            البرامج الدراسية
          </Link>
          <Link href="/resources" className="px-3 py-2 hover:text-secondary transition-colors">
            المواد التعليمية
          </Link>
          <Link href="/contact" className="px-3 py-2 hover:text-secondary transition-colors">
            اتصل بنا
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

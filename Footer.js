const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">أكاديمية مصر الدولية للحاسبات</h3>
            <p className="mb-4">
              أول أكاديمية في مصر والشرق الأوسط متخصصة في تعليم البرمجة والذكاء الاصطناعي للطلاب بعد المرحلة الإعدادية.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-secondary transition-colors">الرئيسية</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">عن الأكاديمية</a></li>
              <li><a href="/programs" className="hover:text-secondary transition-colors">البرامج الدراسية</a></li>
              <li><a href="/resources" className="hover:text-secondary transition-colors">المواد التعليمية</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">معلومات الاتصال</h3>
            <p className="mb-2">العنوان: 7 شارع محمود سامى البارودى - الهرم - امام مبنى محافظة الجيزة، الجيزة، مصر</p>
            <p className="mb-2">الهاتف: 11 13002633 20+</p>
            <p className="mb-2">البريد الإلكتروني: info@micaegypt.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

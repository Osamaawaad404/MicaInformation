import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي</title>
        <meta name="description" content="الموقع الرسمي لأكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي - أول أكاديمية في مصر والشرق الأوسط متخصصة في تعليم البرمجة والذكاء الاصطناعي للطلاب بعد المرحلة الإعدادية" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

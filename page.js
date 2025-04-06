import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* قسم الترحيب */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي</h1>
          <p className="text-xl mb-8">أول أكاديمية في مصر والشرق الأوسط متخصصة في تعليم البرمجة والذكاء الاصطناعي للطلاب بعد المرحلة الإعدادية</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/programs" className="btn-secondary">
              البرامج الدراسية
            </Link>
            <Link href="/contact" className="btn-primary">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* نبذة مختصرة */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">نبذة عن الأكاديمية</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              تعد أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي (MICA) من المؤسسات التعليمية الرائدة في مصر التي تقدم تعليماً متخصصاً في مجال تكنولوجيا المعلومات للطلاب بعد المرحلة الإعدادية، وتعتبر بديلاً مميزاً للثانوية العامة.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              تتميز الأكاديمية بتقديم برامج دراسية متخصصة تواكب التطورات التكنولوجية الحديثة، وتهدف إلى إعداد جيل من المبرمجين والمتخصصين في مجال الحاسبات والذكاء الاصطناعي قادر على المنافسة في سوق العمل المحلي والعالمي.
            </p>
            <div className="text-center mt-8">
              <Link href="/about" className="btn-primary">
                المزيد عن الأكاديمية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* البرامج الدراسية */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">البرامج الدراسية</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">قسم برمجة تطبيقات الحاسب الآلي</h3>
              <p className="mb-4">أول قسم من نوعه في مصر والشرق الأوسط، يركز على تعليم البرمجة والذكاء الاصطناعي ويؤهل الطلاب للعمل في مجال البرمجة وتطوير التطبيقات.</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>نظام الدراسة: 3 سنوات بعد الشهادة الإعدادية</li>
                <li>يحصل الطالب على دبلوم التلمذة الصناعية تخصص برمجة الحاسب الآلي</li>
                <li>المسمى الوظيفي المعتمد: فني مبرمج</li>
              </ul>
              <Link href="/programs#programming" className="text-primary font-bold hover:text-secondary transition-colors">
                المزيد من التفاصيل &larr;
              </Link>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">قسم صيانة الحاسب الآلي والشبكات</h3>
              <p className="mb-4">يركز على تعليم صيانة أجهزة الكمبيوتر وإدارة الشبكات، ويؤهل الطلاب للعمل في مجال الدعم الفني وصيانة الأجهزة.</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>نظام الدراسة: 3 سنوات بعد الشهادة الإعدادية</li>
                <li>يحصل الطالب على دبلوم التلمذة الصناعية تخصص صيانة الحاسب الآلي</li>
                <li>تدريب عملي على أحدث التقنيات</li>
              </ul>
              <Link href="/programs#maintenance" className="text-primary font-bold hover:text-secondary transition-colors">
                المزيد من التفاصيل &larr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إحصائيات الأكاديمية</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">+500</div>
              <div className="text-xl">طالب وطالبة</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">+20</div>
              <div className="text-xl">مدرس متخصص</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">+10</div>
              <div className="text-xl">معامل مجهزة</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">+90%</div>
              <div className="text-xl">نسبة توظيف الخريجين</div>
            </div>
          </div>
        </div>
      </section>

      {/* آخر الأخبار والفعاليات */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">آخر الأخبار والفعاليات</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">26 يونيو 2024</div>
              <h3 className="text-xl font-bold mb-2 text-primary">طلاب الأكاديمية يحصدون المركز الأول في مسابقة الدوري المصري للروبوت</h3>
              <p className="mb-4">نجح طلاب أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي في تحويل لغة الإشارة لحديث مسموع وحصدوا المركز الأول في مسابقة الدوري المصري للروبوت.</p>
              <Link href="/news/1" className="text-primary font-bold hover:text-secondary transition-colors">
                قراءة المزيد &larr;
              </Link>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">15 مايو 2024</div>
              <h3 className="text-xl font-bold mb-2 text-primary">فتح باب التسجيل للعام الدراسي الجديد 2024-2025</h3>
              <p className="mb-4">تعلن أكاديمية مصر الدولية للحاسبات والذكاء الاصطناعي عن فتح باب التسجيل للعام الدراسي الجديد 2024-2025 لطلاب الشهادة الإعدادية.</p>
              <Link href="/news/2" className="text-primary font-bold hover:text-secondary transition-colors">
                قراءة المزيد &larr;
              </Link>
            </div>
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">10 أبريل 2024</div>
              <h3 className="text-xl font-bold mb-2 text-primary">زيارة وزير التعليم الفني لجناح الأكاديمية في المعرض الدولي</h3>
              <p className="mb-4">أعرب وزير التعليم الفني عن إعجابه العميق بالتقنيات المبتكرة التي قدمها طلاب الأكاديمية خلال زيارته لجناح الأكاديمية في المعرض الدولي للتعليم الفني.</p>
              <Link href="/news/3" className="text-primary font-bold hover:text-secondary transition-colors">
                قراءة المزيد &larr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج التواصل السريع */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-4 text-lg">لديك استفسار؟ يمكنك التواصل معنا مباشرة من خلال النموذج التالي</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary">إرسال</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

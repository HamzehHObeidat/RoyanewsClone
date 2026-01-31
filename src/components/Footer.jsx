function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl space-y-6 px-6 py-10 text-center">
        <div className="flex justify-center">
          <img
            src="/05.png"
            alt="رؤيا الإخباري"
            className="h-16 object-contain"
          />
        </div>

        <p className="text-sm text-sky-950">جميع الحقوق محفوظة رؤيا © 2025</p>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-sky-950">
          موقع إخباري أردني تابع لقناة رؤيا الفضائية ينقل لكم الأخبار المحلية
          الأردنية وأخبار فلسطين وأبرز الأخبار العربية والدولية.
        </p>

        <div className="flex justify-center gap-4">
          <a>
            <img src="/apple.webp" alt="Apple Store" className="h-10" />
          </a>
          <a>
            <img src="/google.webp" alt="Google Play" className="h-10" />
          </a>
        </div>
        <div className="flex justify-center gap-6 pt-4 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-white">
            سياسة الخصوصية
          </a>
          <a href="/copyright" className="hover:text-white">
            الملكية الفكرية
          </a>
          <a href="/correction-criteria" className="hover:text-white">
            معايير التصحيح
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

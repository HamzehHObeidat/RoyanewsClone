function TopBar() {
  return (
    <div className="mx-auto flex max-w-7xl justify-between py-2">
      <p className="flex-auto text-black">
        مرحبا بك في موقع رؤيا الإخباري لتطلع على آخر الأحداث والمستجدات في
        الأردن والعالم
      </p>
      <div className="flex w-68 gap-2">
        <button className="flex-1 rounded-sm bg-blue-700 px-4 py-2 text-white hover:bg-white hover:text-black">
          تسجيل الدخول
        </button>

        <button className="flex-1 rounded-sm bg-red-700 px-4 py-2 text-white hover:bg-white hover:text-black">
          البث المباشر
        </button>
      </div>
    </div>
  )
}

export default TopBar

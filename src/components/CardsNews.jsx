function CardsNews() {
  return (
    <div
      className="relative w-90 flex-auto overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/6.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/90 via-[#0a1a3a]/40 to-transparent"></div>

      <div className="absolute bottom-0 z-10 p-4 text-white">
        <h2 className="mb-2 text-lg font-bold">
          الأردنيون يحتفلون الجمعة بعيد ميلاد الملك.. فرح يعم الأردن
        </h2>

        <p className="text-sm">
          <span>منذ 9 ساعات</span> |{' '}
          <span className="text-blue-300">الأردن</span>
        </p>
      </div>
    </div>
  )
}

export default CardsNews

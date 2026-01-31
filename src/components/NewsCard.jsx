function NewsCard() {
  return (
    <div className="mb-2 flex w-110 flex-col bg-white p-3 transition hover:bg-gray-50">
      <div className="flex flex-1 flex-row justify-between border-b border-gray-200 px-3 pb-2">
        <div className="flex flex-col gap-2 text-xs text-gray-400">
          <div className="flex flex-row gap-1 text-right">
            <span>منذ ساعتين</span>|
            <span className="cursor-pointer text-blue-500 hover:underline">
              عربي دولي
            </span>
          </div>
          <h2 className="line-clamp-2 text-sm leading-snug font-bold text-gray-800">
            طائرة "كاشفة النووي" الأمريكية تهبط في بريطانيا وسط تصاعد التوتر مع
            إيران
          </h2>
        </div>

        <div
          className="h-20 w-28 flex-shrink-0 rounded-md bg-cover bg-center"
          style={{ backgroundImage: "url('/7.jpg')" }}
        />
      </div>

      <div className="flex items-center gap-4 pt-1 text-sm text-gray-400">
        <button className="hover:text-gray-600">🔖</button>
        <button className="hover:text-gray-600">🔁</button>
        <button className="hover:text-gray-600">👎 0</button>
        <button className="hover:text-gray-600">👍 0</button>
      </div>
    </div>
  )
}

export default NewsCard

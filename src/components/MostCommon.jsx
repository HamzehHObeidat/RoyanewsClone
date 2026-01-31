import VideoSection from './VideoSection.jsx'
import NewsCard from './NewsCard.jsx'
function MostCommon() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-2">
        <div className="flex flex-row justify-between">
          <div className="text-2xl font-bold text-black">الأكثر شيوعا</div>
          <button className="text-1xl bg-[#e1f1ff] p-4 font-bold text-gray-500">
            المزيد
          </button>
        </div>
        <div className="mt-4 flex flex-row gap-2">
          <div className="h-auto flex-auto">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="h-auto flex-auto">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
      <div className="mt-18 flex h-70 flex-1 gap-2">
        <VideoSection />
      </div>
    </div>
  )
}

export default MostCommon

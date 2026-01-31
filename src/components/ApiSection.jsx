import VideoSection from './VideoSection.jsx'
import NewsCard from './NewsCard.jsx'

function ApiSection() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-2">
        <div className="flex flex-row gap-2">
          <div className="h-auto flex-auto">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="flex h-auto flex-1 gap-2">
            <VideoSection />
          </div>
          <div className="h-auto flex-auto">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiSection

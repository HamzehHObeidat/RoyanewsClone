import ImportantEvent from './ImportantEvent'
import VideoSection from './VideoSection'
import NewsCard from './NewsCard'

function ImportantSection() {
  return (
    <div className="justify-space-between flex h-full gap-2">
      <ImportantEvent />
      <VideoSection />
      <div className="h-auto">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default ImportantSection

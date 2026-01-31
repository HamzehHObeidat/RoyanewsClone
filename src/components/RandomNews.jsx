import ImportantEvent from './ImportantEvent'
import VideoSection from './VideoSection'
function RandomNews() {
  return (
    <div className="flex gap-3">
      <VideoSection />
      <ImportantEvent />
      <VideoSection />
    </div>
  )
}

export default RandomNews

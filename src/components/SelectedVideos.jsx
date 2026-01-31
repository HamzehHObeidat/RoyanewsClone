import VideoCards from './VideoCards.jsx'

function SelectedVideos() {
  return (
    <div className="flex">
      <button className="p-4 text-3xl">&lt;</button>
      <div className="flex flex-col bg-blue-950 py-5 text-white">
        <button className="p-2 text-right font-bold"> فيديوهات مختارة</button>
        <div className="my-4 mt-4 mb-4 flex h-45 gap-2">
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
        </div>
      </div>
      <button className="p-4 text-3xl">&gt;</button>
    </div>
  )
}

export default SelectedVideos

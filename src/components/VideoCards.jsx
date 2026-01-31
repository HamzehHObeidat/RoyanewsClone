function VideoCards() {
  return (
    <div
      className="relative w-73 flex-auto overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/9.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3a]/90 via-[#0a1a3a]/40 to-transparent"></div>
      <p className="absolute top-2 left-2 bg-black px-1 py-0.5 text-sm text-white">
        <span>00:77</span>
      </p>
      <div className="absolute bottom-0 z-10 p-4 text-white">
        <h2 className="mb-2 text-lg font-bold">
          بكين ترد على تصريحات ترمب بشأن "خطر" تعامل بريطانيا مع الصين
        </h2>
      </div>
    </div>
  )
}

export default VideoCards

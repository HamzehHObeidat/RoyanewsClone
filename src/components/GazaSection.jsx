import CardsNews from './CardsNews.jsx'

function GazaSection() {
  return (
    <div className="">
      <div className="px-15">
        <div className="flex flex-row justify-between">
          <button className="rounded-sm bg-blue-950 px-4 py-1 font-bold text-white">
            قطاع غزه
          </button>
          <div className='className="p-4 text-4xl font-bold text-black'>
            ...
          </div>
        </div>
      </div>
      <div className="mt-4 flex h-45 gap-2">
        <button className="p-4 text-3xl">&lt;</button>
        <CardsNews />
        <CardsNews />
        <CardsNews />
        <CardsNews />
        <button className="p-4 text-3xl">&gt;</button>
      </div>
    </div>
  )
}

export default GazaSection

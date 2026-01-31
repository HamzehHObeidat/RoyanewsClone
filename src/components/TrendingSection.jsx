import CardsNews from './CardsNews.jsx'
function TrendingSection() {
  return (
    <div className="flex-1">
      <div className="my-4 mt-4 flex h-45 gap-2">
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

export default TrendingSection

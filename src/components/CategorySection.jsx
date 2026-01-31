import CategoryCards from './CategoryCards'
function CategorySection() {
  return (
    <div className="flex">
      <button className="p-4 text-3xl">&lt;</button>
      <div className="flex flex-col bg-blue-950 py-3 text-white">
        <button className="p-1 text-right">الأقسام المختارة</button>
        <div className="my-2 flex gap-2">
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>
      </div>
      <button className="p-4 text-3xl">&gt;</button>
    </div>
  )
}

export default CategorySection

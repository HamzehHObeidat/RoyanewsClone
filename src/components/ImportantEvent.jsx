function ImportantEvent() {
  return (
    <div className="h-100 h-auto w-full max-w-sm overflow-hidden bg-[#1f2f52] text-white">
      <div className="px-6 py-4 text-xl font-bold">حدث مهم</div>

      <div className="group relative h-52 overflow-hidden p-4">
        <img
          src={'/5.jpg'}
          alt={'جيش الاحتلال يشن عدواناً على الضفة الغربية'}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2 className="pt-4 pr-4 font-bold">
          جيش الاحتلال يشن عدواناً على الضفة الغربية
        </h2>

        <div className="px-4 text-xs text-gray-300">
          <span>12:00 2024-06-01 </span>
        </div>
        <div className="border-t border-gray-400 pt-4 pr-4 text-sm">
          <button>
            <span>شارك</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImportantEvent

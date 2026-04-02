import { GuestSelector } from "./components/GuestSelector"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-lg border border-gray-200 flex items-center">
          {/* 여행지 */}
          <div className="flex-1 px-6 py-4 cursor-not-allowed opacity-60">
            <p className="text-xs font-semibold text-[#222]">여행지</p>
            <p className="text-sm text-gray-400">여행지 검색</p>
          </div>

          <div className="w-px h-8 bg-gray-200" />

          {/* 날짜 */}
          <div className="flex-1 px-6 py-4 cursor-not-allowed opacity-60">
            <p className="text-xs font-semibold text-[#222]">날짜</p>
            <p className="text-sm text-gray-400">날짜 추가</p>
          </div>

          <div className="w-px h-8 bg-gray-200" />

          {/* 여행자 — 아직 클릭 동작 없음 */}
          <div className="flex-1 px-6 py-4">
            <p className="text-xs font-semibold text-[#222]">여행자</p>
            <p className="text-sm text-gray-400">게스트 추가</p>
          </div>

          {/* 검색 버튼 */}
          <button
            className="bg-[#ff385c] hover:bg-[#e31c5f] text-white p-3 rounded-full mr-2 transition-colors"
            aria-label="검색"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface GameAIProject {
  id: number
  title: string
  description: string
  images: string[]
}

export default function GameAIProjectCard({ project }: { project: GameAIProject }) {
  const [expanded, setExpanded] = useState(false)
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c - 1 + project.images.length) % project.images.length)
  const next = () => setCurrent((c) => (c + 1) % project.images.length)

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition mb-6">
      {/* 제목 줄 클릭하면 펼쳐집니다 */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-gray-500">{expanded ? '−' : '+'}</span>
      </div>

      {expanded && (
        <div className="mt-4">
          {/* 설명 */}
          <p className="text-gray-700 mb-4">{project.description}</p>

          {/* 이미지 캐러셀 */}
          <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-2 p-2 bg-white rounded-full shadow"
            >
              ‹
            </button>

            <div className="w-64 h-40 relative">
              <Image
                src={project.images[current]}
                alt={`${project.title} 이미지 ${current + 1}`}
                fill
                className="object-cover rounded"
                placeholder="blur"
                unoptimized
              />
            </div>

            <button
              onClick={next}
              className="absolute right-2 p-2 bg-white rounded-full shadow"
            >
              ›
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-2">
            {current + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  )
}

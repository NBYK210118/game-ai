// app/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import CollaboratorsSection from '@/app/CollaboratorsSection'
import ProjectsSection from '@/app/ProjectsSection'
import { Project } from '@/app/ProjectCard'
import GameAIProjectCard, { GameAIProject } from '@/app/GameAIProjectCard'

export default function Page() {
  const tabs = ['Medical AI', 'AI Security', 'Fund', 'Game-AI'] as const
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Medical AI')

  // --- Medical AI 데이터 ------------------------------------------------
  const medicalCollaborators: string[] = [
    'https://placehold.co/80x80?text=강남성심병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=춘천성심병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=동탄성심병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=강동성심병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=한림성심병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=서울성모병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=인천성모병원&bg=eeeeee&fg=333333',
    'https://placehold.co/80x80?text=강북삼성병원&bg=eeeeee&fg=333333',
  ]

  const ongoingProjects: Project[] = [
    {
      id: 13,
      title:
        '건갑골 운동이상증 증상 타입별 분석을 위한 인공지능 진단 모델 개발',
      institution: '춘천성심병원 정형외과 황정택 교수',
      tags: ['Video Processing', 'Skeleton Extraction', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+13&bg=eeeeee&fg=333333',
    },
    {
      id: 12,
      title:
        '간종양 조직비 특징을 분류하는 AI 기반 세그멘테이션 시스템 개발',
      institution: '동탄성심병원 외과 김동완 교수',
      tags: ['Segmentation', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+12&bg=eeeeee&fg=333333',
    },
    {
      id: 11,
      title:
        '담낭암과 담낭염을 판별할 수 있는 딥러닝 진단 모델 개발',
      institution: '한림성심병원 외과 권재현 교수',
      tags: ['Segmentation', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+11&bg=eeeeee&fg=333333',
    },
    {
      id: 10,
      title:
        '대장 용종 절제시 완전 절제 여부 판별 의료 인공지능 개발',
      institution: '강남성심병원 소화기내과 오창교 교수',
      tags: ['Image Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+10&bg=eeeeee&fg=333333',
    },
    {
      id: 9,
      title:
        '심폐소생술 술기 교육 피드백 모델 탑재 어플리케이션 개발 및 검증',
      institution: '동탄성심병원 응급의학과 이경아 교수',
      tags: ['Video Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+9&bg=eeeeee&fg=333333',
    },
    {
      id: 8,
      title:
        '[한국연구재단] 3차원 홀로그래피·딥러닝 이용 담도암 진단 모델 개발',
      institution: '동탄성심병원 소화기내과 박세우 교수',
      tags: ['Image Processing', '3D Tomography'],
      thumbnail:
        'https://placehold.co/150x150?text=Project+8&bg=eeeeee&fg=333333',
      projectPage: '#',
      paperLink: '#',
    },
  ]

  const completedProjects: Project[] = [
    {
      id: 8,
      title:
        '[2024, 한국연구재단] 환자 사진의 머신러닝을 통한 기도 평가 및 예측 도구 개발',
      institution:
        '춘천성심병원 마취통증의학과 권영석 교수 / 김종호 교수',
      tags: ['Image Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+8&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
    {
      id: 7,
      title:
        '[2024, 한국연구재단] 딥러닝 이용 수술진로 복강경 수술 개발 및 적용',
      institution: '동탄성심병원 외과 유태석 교수',
      tags: ['Image Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+7&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
    {
      id: 6,
      title:
        '[2024, 한국연구재단] 심폐소생술 술기 교육 피드백 모델 개발 및 적용',
      institution: '동탄성심병원 응급의학과 이경아 교수',
      tags: ['Video Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+6&bg=eeeeee&fg=333333',
      projectPage: '#',
      paperLink: '#',
    },
    {
      id: 5,
      title:
        '[2024, 한국연구재단] 3차원 홀로그래피·딥러닝 이용 췌장암 진단 모델 개발',
      institution:
        '동탄성심병원 외과 박세우 교수 / 강북삼성병원 이관호 교수',
      tags: ['Image Processing', '3D', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+5&bg=eeeeee&fg=333333',
      projectPage: '#',
      paperLink: '#',
    },
    {
      id: 4,
      title: '[2023] 딥러닝 이용 위암발생 예측모델 개발',
      institution: '서울성모병원 소화기내과 박재영 교수',
      tags: [
        'Structured Data',
        'Image Processing',
        'AutoML',
        'Deep Learning',
      ],
      thumbnail:
        'https://placehold.co/150x150?text=Done+4&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
    {
      id: 3,
      title: '[2023] 딥러닝 기반 위감염 상태 예측모델 개발',
      institution: '서울성모병원 소화기내과 박재영 교수',
      tags: [
        'Structured Data',
        'Image Processing',
        'AutoML',
        'Deep Learning',
      ],
      thumbnail:
        'https://placehold.co/150x150?text=Done+3&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
    {
      id: 2,
      title:
        '[2022, 한국연구재단] X-ray 사진 기반 요추 추간판 탈출증 예측 연구',
      institution: '춘천성심병원 마취통증의학과 권영석 교수',
      tags: ['Image Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+2&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
    {
      id: 1,
      title:
        '[2021, 한국연구재단] MRCP 영상 기반 담관 결석 자동 진단 시스템',
      institution: '동탄성심병원 소화기내과 박세우 교수',
      tags: ['Image Processing', 'Deep Learning'],
      thumbnail:
        'https://placehold.co/150x150?text=Done+1&bg=eeeeee&fg=333333',
      paperLink: '#',
    },
  ]

  // --- Game-AI 데이터 ------------------------------------------------
  const gameAICollaborators = ['/highend_games.png']

  const gameAIProjects: GameAIProject[] = [
    {
      id: 1,
      title: 'AI-driven NPC Behavior',
      description:
        '강화학습 기반으로 NPC가 플레이어 행동을 학습하고, 다양한 시나리오에 맞춰 동적 반응을 생성합니다.',
      images: [
        'https://placehold.co/300x200?text=NPC+Behavior+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=NPC+Behavior+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=NPC+Behavior+3&bg=eeeeee&fg=333333',
      ],
    },
    {
      id: 2,
      title: 'Procedural Level Generation',
      description:
        '신경망 기반의 절차적 레벨 생성 엔진으로, 매 번 새로운 맵과 도전 요소를 자동 생성합니다.',
      images: [
        'https://placehold.co/300x200?text=Level+Gen+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Level+Gen+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Level+Gen+3&bg=eeeeee&fg=333333',
      ],
    },
    {
      id: 3,
      title: 'Intelligent Matchmaking System',
      description:
        '플레이어 실력과 선호도 데이터를 종합해 최적의 매칭을 제공하며, 실시간 통계로 품질을 모니터링합니다.',
      images: [
        'https://placehold.co/300x200?text=Matchmaking+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Matchmaking+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Matchmaking+3&bg=eeeeee&fg=333333',
      ],
    },
    {
      id: 4,
      title: 'Real-time Strategy AI Opponents',
      description:
        'RTS 장르 전용 AI로 자원 관리·유닛 컨트롤·전략 기획을 종합 수행하며, 시뮬레이션으로 밸런스를 조정합니다.',
      images: [
        'https://placehold.co/300x200?text=RTS+AI+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=RTS+AI+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=RTS+AI+3&bg=eeeeee&fg=333333',
      ],
    },
    {
      id: 5,
      title: 'Emotion Recognition in Gameplay',
      description:
        '플레이어 표정/음성 분석으로 AI가 적절한 난이도와 이벤트를 제안하는 실험적 프로토타입입니다.',
      images: [
        'https://placehold.co/300x200?text=Emotion+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Emotion+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Emotion+3&bg=eeeeee&fg=333333',
      ],
    },
    {
      id: 6,
      title: 'Adaptive Difficulty Controller',
      description:
        '실시간 성능 기반으로 난이도를 동적으로 조정하여, 모든 플레이어에게 균형 잡힌 경험을 제공합니다.',
      images: [
        'https://placehold.co/300x200?text=Adaptive+1&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Adaptive+2&bg=eeeeee&fg=333333',
        'https://placehold.co/300x200?text=Adaptive+3&bg=eeeeee&fg=333333',
      ],
    },
  ]


  return (
    <>
      {/* 배너 */}
      <div className="relative h-60">
        <Image
          src="https://placehold.co/1200x300?text=Banner&bg=eeeeee&fg=333333"
          alt={activeTab}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{activeTab}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow mt-6 p-6">
        {/* 탭 네비게이션 */}
        <ul className="flex space-x-8 border-b mb-6">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 cursor-pointer ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Medical AI */}
        {activeTab === 'Medical AI' && (
          <>
            <CollaboratorsSection logos={medicalCollaborators} activeTab={activeTab}/>
            <ProjectsSection title="Ongoing" projects={ongoingProjects} />
            <ProjectsSection
              title="Completed"
              projects={completedProjects}
            />
          </>
        )}

        {/* AI Security */}
        {activeTab === 'AI Security' && (
          <div className="py-20 text-center text-gray-500">
            AI Security 관련 콘텐츠가 여기에 표시됩니다.
          </div>
        )}

        {/* Fund */}
        {activeTab === 'Fund' && (
          <div className="py-20 text-center text-gray-500">
            Fund 관련 콘텐츠가 여기에 표시됩니다.
          </div>
        )}

        {/* Game-AI */}
        {activeTab === 'Game-AI' && (
          <>
            <CollaboratorsSection logos={gameAICollaborators} activeTab={activeTab}/>
            <section className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Ongoing Projects
              </h2>
              {gameAIProjects.map((p) => (
                <GameAIProjectCard key={p.id} project={p} />
              ))}
            </section>
          </>
        )}
      </div>
    </>
  )
}

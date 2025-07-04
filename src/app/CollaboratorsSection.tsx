import Image from 'next/image'

interface Props {
  logos: string[]
  activeTab: string
}

export default function CollaboratorsSection({ logos, activeTab }: Props) {
    const size = activeTab === 'Game-AI' ? 250 : 80
  return (
    <section className='mb-5'>
      <h2 className="text-xl font-semibold mb-2">Collaborating Institution</h2>
      <hr className="mb-4 border-gray-300" />
      <div className="flex justify-center items-center gap-6 overflow-x-auto py-2">
        {logos.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={src}
              alt={`logo-${idx}`}
              width={size}
              height={size}
              className="object-contain rounded"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

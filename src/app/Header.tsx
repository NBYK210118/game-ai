// src/app/Header.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const nav = [
    { label: 'NEWS', href: '#' },
    { label: 'PEOPLE ▼', href: '#' },
    { label: 'RESEARCH ▼', href: '#', active: true },
    { label: 'PUBLICATION ▼', href: '#' },
    { label: 'BOARD ▼', href: '#' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="한림대학교" width={160} height={40} />
        </Link>

        {/* 네비게이션 */}
        <ul className="flex space-x-6 text-sm">
          {nav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={
                  'hover:text-blue-600 ' +
                  (item.active
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700')
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

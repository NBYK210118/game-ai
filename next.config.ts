// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    // 외부 이미지 허용 패턴
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',       // 기본 포트
        pathname: '/**' // placehold.co 이하 모든 경로 허용
      },
    ],
    // domains: ['placehold.co'], // ← Next.js 14부터 deprecated
  },
};

export default nextConfig;

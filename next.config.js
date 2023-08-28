/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // html 파일 형식으로 만듬
  generateBuildId: () => "codecamp-depoly-project", // .next 폴더와 out 폴더의 _next 아이디를 고정시킴 함수형태로 사용

  // 아래 주소들만 out폴더에 만들어줘! getServerSideProps 있는 페이지는 제외
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;

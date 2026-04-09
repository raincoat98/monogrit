// JSON-LD Structured Data — 구글 리치 결과(별점, FAQ, 로컬 비즈니스) 대응

const organization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Monogrit',
  url: 'https://monogrit.co.kr',
  logo: 'https://monogrit.co.kr/logo.png',
  description:
    '미국·캐나다·영국·호주 명문대 입학부터 어학연수, 영어캠프까지. 18년 경력의 유학 전문 컨설팅.',
  foundingDate: '2006',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '테헤란로 123',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    postalCode: '06133',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.5044,
    longitude: 127.0497,
  },
  telephone: '+82-2-1599-1234',
  email: 'info@monogrit.co.kr',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '4200',
  },
  sameAs: [
    'https://www.instagram.com/monogrit',
    'https://blog.naver.com/monogrit',
  ],
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '유학 상담은 무료인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 초기 상담은 완전 무료입니다. 컨설팅비 100% 면제로 부담 없이 상담받으실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '상담 후 얼마나 빨리 연락이 오나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '영업시간 기준 평균 3분 이내 연락드립니다. 온라인 신청 후 24시간 이내 전담 컨설턴트가 배정됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어떤 국가로 유학을 보낼 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '미국, 캐나다, 영국, 호주, 뉴질랜드, 필리핀, 독일 등 12개국 현지 네트워크를 보유하고 있으며, 350개 이상의 파트너 대학과 협력하고 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '영어캠프는 몇 학년부터 참가할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '초등 3학년부터 고등 1학년까지 참가 가능합니다. 레벨별 맞춤 커리큘럼으로 운영되며, 인솔 교사 동반 출국으로 안전하게 진행됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '지방에 거주해도 상담이 가능한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '서울 강남, 부산, 대구, 대전 4개 지점에서 방문 상담이 가능하며, 온라인·전화·카카오톡 비대면 상담도 제공합니다.',
      },
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '홈',
      item: 'https://monogrit.co.kr',
    },
  ],
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

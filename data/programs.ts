export type ProgramType =
  | '명문대입학'
  | '어학연수'
  | '영어캠프'
  | '조기유학'
  | 'MBA·대학원'
  | '워킹홀리데이'

export interface ProgramItem {
  id: string
  country: string
  flag: string
  type: ProgramType
  title: string
  desc: string
  duration: string
  cost: string
  target: string
  tags: string[]
  featured?: boolean
}

export const countries = [
  { name: '전체', flag: '🌏' },
  { name: '미국', flag: '🇺🇸' },
  { name: '캐나다', flag: '🇨🇦' },
  { name: '영국', flag: '🇬🇧' },
  { name: '호주', flag: '🇦🇺' },
  { name: '뉴질랜드', flag: '🇳🇿' },
  { name: '필리핀', flag: '🇵🇭' },
  { name: '독일', flag: '🇩🇪' },
  { name: '싱가포르', flag: '🇸🇬' },
]

export const programTypes: { label: string; value: ProgramType | '전체' }[] = [
  { label: '전체', value: '전체' },
  { label: '명문대 입학', value: '명문대입학' },
  { label: '어학연수', value: '어학연수' },
  { label: '영어캠프', value: '영어캠프' },
  { label: '조기유학', value: '조기유학' },
  { label: 'MBA·대학원', value: 'MBA·대학원' },
  { label: '워킹홀리데이', value: '워킹홀리데이' },
]

export const typeStyle: Record<ProgramType, { bg: string; text: string }> = {
  명문대입학:   { bg: 'bg-blue-100',   text: 'text-blue-700' },
  어학연수:    { bg: 'bg-green-100',  text: 'text-green-700' },
  영어캠프:    { bg: 'bg-amber-100',  text: 'text-amber-700' },
  조기유학:    { bg: 'bg-purple-100', text: 'text-purple-700' },
  'MBA·대학원': { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  워킹홀리데이: { bg: 'bg-teal-100',   text: 'text-teal-700' },
}

export const programs: ProgramItem[] = [
  // ── 미국 ──────────────────────────────────────────
  {
    id: 'us-ivy',
    country: '미국', flag: '🇺🇸',
    type: '명문대입학',
    title: '아이비리그 입학 컨설팅',
    desc: 'Harvard·MIT·Stanford 등 Top 10 대학 입시 전략. SAT·ACT 준비부터 에세이, 인터뷰, 추천서까지 토탈 케어. 합격률 업계 최고 수준.',
    duration: '6개월 ~ 2년',
    cost: '별도 협의',
    target: '고등학생 · 재수생',
    tags: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Columbia'],
    featured: true,
  },
  {
    id: 'us-lang',
    country: '미국', flag: '🇺🇸',
    type: '어학연수',
    title: '미국 어학연수',
    desc: '뉴욕·LA·보스턴·샌프란시스코 현지 어학원. ESL 집중 과정부터 대학 부설 프로그램까지 목적에 맞게 설계.',
    duration: '4주 ~ 12개월',
    cost: '월 $1,800 ~',
    target: '성인 (18세 이상)',
    tags: ['뉴욕', 'LA', '보스턴', '샌프란시스코'],
  },
  {
    id: 'us-camp',
    country: '미국', flag: '🇺🇸',
    type: '영어캠프',
    title: '미국 여름 영어캠프',
    desc: '명문 대학 캠퍼스(UCLA·NYU)에서 3주 집중 몰입. 원어민 1:8 소수 수업, 뮤지컬·스포츠 액티비티 포함.',
    duration: '3주 ~ 6주',
    cost: '₩3,490,000 ~',
    target: '초등 3년 ~ 고등 1년',
    tags: ['UCLA', 'NYU', '기숙사', '원어민 교사'],
    featured: true,
  },
  {
    id: 'us-early',
    country: '미국', flag: '🇺🇸',
    type: '조기유학',
    title: '미국 조기유학',
    desc: '보딩스쿨(기숙학교)부터 공립 교환학생까지. 홈스테이 매칭, 현지 가디언 케어, 학부모 보고서 정기 제공.',
    duration: '1년 ~ 졸업까지',
    cost: '연 $25,000 ~',
    target: '중·고등학생',
    tags: ['보딩스쿨', '공립학교', '홈스테이'],
  },

  // ── 캐나다 ─────────────────────────────────────────
  {
    id: 'ca-univ',
    country: '캐나다', flag: '🇨🇦',
    type: '명문대입학',
    title: '캐나다 명문대 입학 컨설팅',
    desc: 'UBC·Toronto·McGill 등 세계 50위권 대학 입시. 영어권 이민 친화 국가로 졸업 후 PR 취득까지 장기 플랜 수립.',
    duration: '6개월 ~ 1년',
    cost: '별도 협의',
    target: '고등학생 · 대학 편입',
    tags: ['UBC', 'Toronto', 'McGill', 'Waterloo'],
    featured: true,
  },
  {
    id: 'ca-lang',
    country: '캐나다', flag: '🇨🇦',
    type: '어학연수',
    title: '캐나다 어학연수',
    desc: '밴쿠버·토론토·빅토리아 어학원. 안전하고 쾌적한 환경, 미국보다 저렴한 비용. Co-op(인턴십 연계) 과정 인기.',
    duration: '4주 ~ 12개월',
    cost: '월 CAD $1,200 ~',
    target: '성인 (18세 이상)',
    tags: ['밴쿠버', '토론토', '빅토리아', 'Co-op'],
  },
  {
    id: 'ca-camp',
    country: '캐나다', flag: '🇨🇦',
    type: '영어캠프',
    title: '캐나다 겨울·여름 영어캠프',
    desc: '밴쿠버 UBC 캠퍼스 내 기숙 캠프. 스키·스노보드 등 캐나다 자연 체험과 영어 수업을 동시에.',
    duration: '2주 ~ 4주',
    cost: '₩2,900,000 ~',
    target: '초등 3년 ~ 고등 1년',
    tags: ['UBC', '밴쿠버', '스키', '기숙사'],
  },
  {
    id: 'ca-wh',
    country: '캐나다', flag: '🇨🇦',
    type: '워킹홀리데이',
    title: '캐나다 워킹홀리데이',
    desc: '비자 발급부터 입국, 취업 연계, 정착 지원까지. 호텔·농장·IT 업계 취업 매칭 서비스 포함.',
    duration: '최대 2년',
    cost: '₩990,000 ~',
    target: '만 18~30세',
    tags: ['밴쿠버', '토론토', '취업연계', '정착지원'],
  },

  // ── 영국 ──────────────────────────────────────────
  {
    id: 'uk-russell',
    country: '영국', flag: '🇬🇧',
    type: '명문대입학',
    title: 'Russell Group 입학 컨설팅',
    desc: 'Oxford·Cambridge·LSE·Imperial 등 Russell Group 24개교 입시. UCAS 지원서·Personal Statement 전문 코칭.',
    duration: '6개월 ~ 1년',
    cost: '별도 협의',
    target: '고등학생 · A-Level 이수자',
    tags: ['Oxford', 'Cambridge', 'LSE', 'Imperial', 'UCL'],
    featured: true,
  },
  {
    id: 'uk-lang',
    country: '영국', flag: '🇬🇧',
    type: '어학연수',
    title: '영국 어학연수',
    desc: '런던·옥스퍼드·에든버러 명문 어학원. 정통 영국식 영어와 문화 체험. 캠브리지 시험(FCE·CAE) 준비 과정 운영.',
    duration: '4주 ~ 6개월',
    cost: '월 £1,400 ~',
    target: '성인 (16세 이상)',
    tags: ['런던', '옥스퍼드', '에든버러', 'IELTS'],
  },
  {
    id: 'uk-camp',
    country: '영국', flag: '🇬🇧',
    type: '영어캠프',
    title: '영국 정통 기숙 영어캠프',
    desc: '영국 명문 사립학교 캠퍼스에서 진행. 옥스퍼드·캠브리지 투어 포함. 정통 영국식 영어 습득.',
    duration: '2주 ~ 4주',
    cost: '₩4,200,000 ~',
    target: '초등 5년 ~ 고등 2년',
    tags: ['옥스퍼드', '사립학교', '기숙사', '영국문화'],
  },
  {
    id: 'uk-mba',
    country: '영국', flag: '🇬🇧',
    type: 'MBA·대학원',
    title: 'London MBA 컨설팅',
    desc: 'LBS·Said·Judge·Imperial MBA 입학 전략. GMAT/GRE 준비, 에세이, 추천서, 인터뷰 코칭까지 전담 관리.',
    duration: '6개월 ~ 1년 준비',
    cost: '별도 협의',
    target: '직장인 (3년 이상 경력)',
    tags: ['LBS', 'Said', 'Judge', 'GMAT'],
    featured: true,
  },

  // ── 호주 ──────────────────────────────────────────
  {
    id: 'au-g8',
    country: '호주', flag: '🇦🇺',
    type: '명문대입학',
    title: '호주 G8 명문대 입학',
    desc: 'Melbourne·ANU·Sydney·UNSW 등 Group of Eight 입학 컨설팅. 졸업 후 영주권(PR) 연계 플랜까지 제공.',
    duration: '3개월 ~ 6개월',
    cost: '별도 협의',
    target: '고등학생 · 대학 편입',
    tags: ['Melbourne', 'ANU', 'UNSW', 'Sydney'],
  },
  {
    id: 'au-lang',
    country: '호주', flag: '🇦🇺',
    type: '어학연수',
    title: '호주 어학연수',
    desc: '시드니·멜버른·브리즈번·골드코스트. ELICOS 공인 어학원, 비자 신청 대행, 숙소 연계 원스톱 서비스.',
    duration: '4주 ~ 12개월',
    cost: '월 AUD $1,500 ~',
    target: '성인 (18세 이상)',
    tags: ['시드니', '멜버른', '브리즈번', 'IELTS'],
  },
  {
    id: 'au-wh',
    country: '호주', flag: '🇦🇺',
    type: '워킹홀리데이',
    title: '호주 워킹홀리데이',
    desc: '비자 두 번 거절도 합격시킨 전문 팀. 농장·호텔·카페 취업 매칭. 세컨드 비자(2년 체류) 조건 달성 지원.',
    duration: '최대 3년 (세컨드·서드 비자)',
    cost: '₩890,000 ~',
    target: '만 18~30세',
    tags: ['시드니', '농장취업', '세컨드비자', '정착지원'],
    featured: true,
  },

  // ── 뉴질랜드 ───────────────────────────────────────
  {
    id: 'nz-lang',
    country: '뉴질랜드', flag: '🇳🇿',
    type: '어학연수',
    title: '뉴질랜드 어학연수',
    desc: '오클랜드·퀸스타운·웰링턴 어학원. 깨끗한 자연환경, 안전한 치안, 합리적인 비용. 소규모 학급 개인 맞춤.',
    duration: '4주 ~ 6개월',
    cost: '월 NZD $1,300 ~',
    target: '성인 (16세 이상)',
    tags: ['오클랜드', '퀸스타운', '웰링턴', '소규모수업'],
  },
  {
    id: 'nz-early',
    country: '뉴질랜드', flag: '🇳🇿',
    type: '조기유학',
    title: '뉴질랜드 조기유학',
    desc: '세계 최고 수준의 공교육 시스템. 국제학생 친화적 환경. 홈스테이 매칭부터 학교 선정, 정착 지원까지.',
    duration: '1년 ~ 졸업까지',
    cost: '연 NZD $15,000 ~',
    target: '초·중·고등학생',
    tags: ['오클랜드', '크라이스트처치', '공립학교', '홈스테이'],
  },
  {
    id: 'nz-wh',
    country: '뉴질랜드', flag: '🇳🇿',
    type: '워킹홀리데이',
    title: '뉴질랜드 워킹홀리데이',
    desc: '뉴질랜드 자연과 함께하는 워홀. 와이너리·농장·관광업 취업 매칭. 번지점프·스카이다이빙 등 액티비티 연계.',
    duration: '최대 23개월',
    cost: '₩790,000 ~',
    target: '만 18~30세',
    tags: ['오클랜드', '퀸스타운', '와이너리', '액티비티'],
  },

  // ── 필리핀 ─────────────────────────────────────────
  {
    id: 'ph-lang',
    country: '필리핀', flag: '🇵🇭',
    type: '어학연수',
    title: '필리핀 집중 ESL 어학연수',
    desc: '세부·바기오 어학원 1:1 집중 수업. 하루 8시간 원어민 1:1 + 그룹 수업. 비용 대비 영어 실력 향상 최고 효율.',
    duration: '4주 ~ 6개월',
    cost: '월 ₩800,000 ~',
    target: '성인 (18세 이상)',
    tags: ['세부', '바기오', '1:1수업', '최저비용'],
    featured: true,
  },
  {
    id: 'ph-camp',
    country: '필리핀', flag: '🇵🇭',
    type: '영어캠프',
    title: '필리핀 영어캠프',
    desc: '세부 리조트형 어학원 영어캠프. 수영장·스포츠 시설 갖춘 쾌적한 환경. 원어민·현지 강사 병행 수업.',
    duration: '2주 ~ 4주',
    cost: '₩1,500,000 ~',
    target: '초등 4년 ~ 고등 2년',
    tags: ['세부', '리조트', '1:1수업', '스쿠버다이빙'],
  },

  // ── 독일 ──────────────────────────────────────────
  {
    id: 'de-univ',
    country: '독일', flag: '🇩🇪',
    type: '명문대입학',
    title: '독일 공립대학 입학',
    desc: 'TU Munich·Heidelberg·Berlin 등 세계 100위권 대학 무상 교육. 독일어 준비(B2 이상)부터 지원 서류까지 토탈 케어.',
    duration: '6개월 ~ 1년 준비',
    cost: '연 €400 ~ (학비 거의 무료)',
    target: '대학 입시생 · 대학원 지망생',
    tags: ['TU Munich', 'Heidelberg', 'LMU', '무상교육'],
    featured: true,
  },
  {
    id: 'de-wh',
    country: '독일', flag: '🇩🇪',
    type: '워킹홀리데이',
    title: '독일 워킹홀리데이',
    desc: '유럽 최대 경제 대국 독일에서 일과 여행. IT·제조·요식업 취업 연계. 유럽 여행 베이스캠프로 활용.',
    duration: '최대 1년',
    cost: '₩890,000 ~',
    target: '만 18~30세',
    tags: ['베를린', '뮌헨', '프랑크푸르트', 'IT취업'],
  },

  // ── 싱가포르 ────────────────────────────────────────
  {
    id: 'sg-early',
    country: '싱가포르', flag: '🇸🇬',
    type: '조기유학',
    title: '싱가포르 조기유학',
    desc: '아시아 최고 교육 허브. 영어+중국어 이중 언어 환경. NUS·NTU 피더 스쿨 입학 전략 수립 포함.',
    duration: '1년 ~ 졸업까지',
    cost: '연 SGD $15,000 ~',
    target: '초·중·고등학생',
    tags: ['국제학교', '영어+중국어', 'NUS', '안전한환경'],
    featured: true,
  },
  {
    id: 'sg-lang',
    country: '싱가포르', flag: '🇸🇬',
    type: '어학연수',
    title: '싱가포르 어학연수',
    desc: '아시아 금융·비즈니스 중심지에서 영어 연수. 비즈니스 영어 특화 과정 운영. 동남아 네트워크 구축 기회.',
    duration: '4주 ~ 3개월',
    cost: '월 SGD $2,000 ~',
    target: '성인 · 비즈니스 종사자',
    tags: ['마리나베이', '비즈니스영어', '금융허브'],
  },
]

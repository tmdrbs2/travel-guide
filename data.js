// 여기만 수정하면 사이트 전체가 바뀝니다. (JSON 문법: 쉼표/따옴표 주의)
// 핀이 필요한 항목(맛집/호텔/관광지)에는 lat, lng 를 넣으세요. (구글맵에서 우클릭 → 좌표 복사)
window.DATA = {
  "siteTitle": "여행 가이드 모음",
  "siteDesc": "지역을 골라 호텔·맛집·관광지 정보를 한눈에 보세요",
  "regions": [
    {
      "id": "asia", "name": "아시아", "emoji": "🌏",
      "countries": [
        { "id": "japan", "name": "일본", "emoji": "🇯🇵", "cities": ["osaka", "tokyo"] }
      ]
    }
  ],
  "cities": {
    "osaka": {
      "name": "오사카", "center": [34.6937, 135.5023], "zoom": 12,
      "info": [
        { "title": "일본 입국신고서(Visit Japan Web) 작성 팁", "url": "https://blog.naver.com/gilbomm" }
      ],
      "food": [
        { "title": "도톤보리 맛집 소개", "url": "https://blog.naver.com/gilbomm", "lat": 34.6687, "lng": 135.5013 }
      ],
      "hotel": [
        { "title": "크로스 호텔 오사카", "url": "https://www.trip.com/", "lat": 34.6727, "lng": 135.5011 }
      ],
      "spot": [
        { "title": "유니버설 스튜디오 재팬", "url": "https://www.klook.com/", "lat": 34.6654, "lng": 135.4323 }
      ]
    },
    "tokyo": {
      "name": "도쿄", "center": [35.6762, 139.6503], "zoom": 11,
      "info": [], "food": [], "hotel": [], "spot": []
    }
  }
};

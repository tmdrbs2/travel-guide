// 이 파일은 naver_automation/travel_guide/update.mjs 가 네이버 블로그 글을 보고 자동으로 만듭니다.
// 직접 넣을 항목(예: 맛집)은 naver_automation/travel_guide/manual.json 에 적으면 유지됩니다.
window.DATA = {
  "siteTitle": "여행 가이드 모음",
  "siteDesc": "지역을 골라 호텔·맛집·관광지 정보를 한눈에 보세요",
  "regions": [
    {
      "id": "asia",
      "name": "아시아",
      "emoji": "🌏",
      "countries": [
        {
          "id": "japan",
          "name": "일본",
          "emoji": "🇯🇵",
          "cities": [
            "tokyo",
            "fukuoka"
          ]
        },
        {
          "id": "taiwan",
          "name": "대만",
          "emoji": "🇹🇼",
          "cities": [
            "taipei"
          ]
        },
        {
          "id": "hongkong",
          "name": "홍콩",
          "emoji": "🇭🇰",
          "cities": [
            "hongkong"
          ]
        },
        {
          "id": "thailand",
          "name": "태국",
          "emoji": "🇹🇭",
          "cities": [
            "bangkok"
          ]
        },
        {
          "id": "vietnam",
          "name": "베트남",
          "emoji": "🇻🇳",
          "cities": [
            "danang",
            "nhatrang"
          ]
        },
        {
          "id": "philippines",
          "name": "필리핀",
          "emoji": "🇵🇭",
          "cities": [
            "cebu"
          ]
        },
        {
          "id": "singapore",
          "name": "싱가포르",
          "emoji": "🇸🇬",
          "cities": [
            "singapore"
          ]
        }
      ]
    },
    {
      "id": "europe",
      "name": "유럽",
      "emoji": "🌍",
      "countries": [
        {
          "id": "spain",
          "name": "스페인",
          "emoji": "🇪🇸",
          "cities": [
            "barcelona"
          ]
        }
      ]
    },
    {
      "id": "oceania",
      "name": "오세아니아",
      "emoji": "🌏",
      "countries": [
        {
          "id": "australia",
          "name": "호주",
          "emoji": "🇦🇺",
          "cities": [
            "sydney"
          ]
        },
        {
          "id": "guam",
          "name": "괌",
          "emoji": "🇬🇺",
          "cities": [
            "guam"
          ]
        }
      ]
    }
  ],
  "cities": {
    "fukuoka": {
      "name": "후쿠오카",
      "center": [
        33.5902,
        130.4017
      ],
      "zoom": 13,
      "info": [],
      "food": [
        {
          "title": "나카스·텐진 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444592801",
          "lat": 33.593,
          "lng": 130.404
        }
      ],
      "hotel": [
        {
          "title": "더 블라썸 하카타 프리미어",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=16216159",
          "lat": 33.590247,
          "lng": 130.414007
        }
      ],
      "spot": []
    },
    "nhatrang": {
      "name": "나트랑",
      "center": [
        12.2388,
        109.1967
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "빈펄 리조트 나트랑",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=65153",
          "lat": 12.224533,
          "lng": 109.239683
        }
      ],
      "spot": []
    },
    "singapore": {
      "name": "싱가포르",
      "center": [
        1.2903,
        103.8519
      ],
      "zoom": 12,
      "info": [
        {
          "title": "싱가포르 창이 공항에서 시내 가는 법, MRT·버스·그랩·택시",
          "url": "https://blog.naver.com/gilbomm/224444332531"
        }
      ],
      "food": [],
      "hotel": [],
      "spot": []
    },
    "guam": {
      "name": "괌",
      "center": [
        13.515,
        144.805
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "롯데호텔 괌",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=564711",
          "lat": 13.520281,
          "lng": 144.807165
        }
      ],
      "spot": []
    },
    "hongkong": {
      "name": "홍콩",
      "center": [
        22.3027,
        114.1772
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [],
      "spot": [
        {
          "title": "홍콩 피크트램 티켓",
          "url": "https://3ha.in/r/795329",
          "lat": 22.27772,
          "lng": 114.15955
        }
      ]
    },
    "taipei": {
      "name": "타이베이",
      "center": [
        25.0478,
        121.517
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "시저 파크 호텔 타이베이",
          "url": "https://3ha.in/r/795297",
          "lat": 25.046111,
          "lng": 121.516295
        }
      ],
      "spot": []
    },
    "bangkok": {
      "name": "방콕",
      "center": [
        13.7466,
        100.5393
      ],
      "zoom": 12,
      "info": [
        {
          "title": "방콕 수완나품 공항에서 시내 가는 법 공항철도·버스·그랩·택시",
          "url": "https://blog.naver.com/gilbomm/224444187302"
        }
      ],
      "food": [],
      "hotel": [],
      "spot": []
    },
    "danang": {
      "name": "다낭",
      "center": [
        16.0544,
        108.2022
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "신라 모노그램 다낭",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=10789475",
          "lat": 15.963471,
          "lng": 108.289382
        },
        {
          "title": "다낭 가성비 호텔 TOP5",
          "url": "https://blog.naver.com/gilbomm/224438006971",
          "lat": 16.075625,
          "lng": 108.246878
        }
      ],
      "spot": []
    },
    "cebu": {
      "name": "세부",
      "center": [
        10.3157,
        123.96
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "제이파크 아일랜드 리조트",
          "url": "https://3ha.in/r/782396",
          "lat": 10.282778,
          "lng": 123.995585
        }
      ],
      "spot": []
    },
    "barcelona": {
      "name": "바르셀로나",
      "center": [
        41.3874,
        2.1686
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 레지나 바르셀로나",
          "url": "https://3ha.in/r/763510",
          "lat": 41.385902,
          "lng": 2.168192
        }
      ],
      "spot": []
    },
    "tokyo": {
      "name": "도쿄",
      "center": [
        35.6812,
        139.7671
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 그레이서리 신주쿠",
          "url": "https://3ha.in/r/760856",
          "lat": 35.695563,
          "lng": 139.702277
        }
      ],
      "spot": []
    },
    "sydney": {
      "name": "시드니",
      "center": [
        -33.8688,
        151.2093
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "샹그릴라 시드니",
          "url": "https://3ha.in/r/757038",
          "lat": -33.861292,
          "lng": 151.206592
        }
      ],
      "spot": []
    }
  }
};

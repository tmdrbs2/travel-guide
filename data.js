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
            "osaka",
            "tokyo",
            "kyoto",
            "fukuoka",
            "sapporo",
            "okinawa",
            "hakone",
            "nagoya"
          ]
        },
        {
          "id": "korea",
          "name": "한국",
          "emoji": "🇰🇷",
          "cities": [
            "busan"
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
          "id": "macau",
          "name": "마카오",
          "emoji": "🇲🇴",
          "cities": [
            "macau"
          ]
        },
        {
          "id": "thailand",
          "name": "태국",
          "emoji": "🇹🇭",
          "cities": [
            "bangkok",
            "phuket",
            "chiangmai"
          ]
        },
        {
          "id": "vietnam",
          "name": "베트남",
          "emoji": "🇻🇳",
          "cities": [
            "danang",
            "nhatrang",
            "phuquoc",
            "hanoi",
            "hochiminh",
            "hoian"
          ]
        },
        {
          "id": "philippines",
          "name": "필리핀",
          "emoji": "🇵🇭",
          "cities": [
            "cebu",
            "boracay",
            "manila"
          ]
        },
        {
          "id": "singapore",
          "name": "싱가포르",
          "emoji": "🇸🇬",
          "cities": [
            "singapore"
          ]
        },
        {
          "id": "malaysia",
          "name": "말레이시아",
          "emoji": "🇲🇾",
          "cities": [
            "kualalumpur",
            "kotakinabalu"
          ]
        },
        {
          "id": "indonesia",
          "name": "인도네시아",
          "emoji": "🇮🇩",
          "cities": [
            "bali",
            "ubud"
          ]
        },
        {
          "id": "uae",
          "name": "아랍에미리트",
          "emoji": "🇦🇪",
          "cities": [
            "dubai"
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
          "id": "france",
          "name": "프랑스",
          "emoji": "🇫🇷",
          "cities": [
            "paris"
          ]
        },
        {
          "id": "uk",
          "name": "영국",
          "emoji": "🇬🇧",
          "cities": [
            "london"
          ]
        },
        {
          "id": "italy",
          "name": "이탈리아",
          "emoji": "🇮🇹",
          "cities": [
            "rome",
            "milan",
            "florence",
            "venice"
          ]
        },
        {
          "id": "spain",
          "name": "스페인",
          "emoji": "🇪🇸",
          "cities": [
            "barcelona",
            "madrid"
          ]
        },
        {
          "id": "czech",
          "name": "체코",
          "emoji": "🇨🇿",
          "cities": [
            "prague"
          ]
        },
        {
          "id": "netherlands",
          "name": "네덜란드",
          "emoji": "🇳🇱",
          "cities": [
            "amsterdam"
          ]
        },
        {
          "id": "portugal",
          "name": "포르투갈",
          "emoji": "🇵🇹",
          "cities": [
            "lisbon"
          ]
        },
        {
          "id": "turkey",
          "name": "튀르키예",
          "emoji": "🇹🇷",
          "cities": [
            "istanbul"
          ]
        },
        {
          "id": "austria",
          "name": "오스트리아",
          "emoji": "🇦🇹",
          "cities": [
            "vienna"
          ]
        },
        {
          "id": "hungary",
          "name": "헝가리",
          "emoji": "🇭🇺",
          "cities": [
            "budapest"
          ]
        },
        {
          "id": "greece",
          "name": "그리스",
          "emoji": "🇬🇷",
          "cities": [
            "athens"
          ]
        },
        {
          "id": "switzerland",
          "name": "스위스",
          "emoji": "🇨🇭",
          "cities": [
            "zurich"
          ]
        },
        {
          "id": "germany",
          "name": "독일",
          "emoji": "🇩🇪",
          "cities": [
            "munich",
            "berlin"
          ]
        }
      ]
    },
    {
      "id": "america",
      "name": "아메리카",
      "emoji": "🌎",
      "countries": [
        {
          "id": "usa",
          "name": "미국",
          "emoji": "🇺🇸",
          "cities": [
            "newyork",
            "lasvegas",
            "losangeles",
            "sanfrancisco",
            "honolulu",
            "sandiego",
            "maui",
            "chicago",
            "oahu",
            "miami"
          ]
        },
        {
          "id": "canada",
          "name": "캐나다",
          "emoji": "🇨🇦",
          "cities": [
            "toronto",
            "vancouver"
          ]
        },
        {
          "id": "mexico",
          "name": "멕시코",
          "emoji": "🇲🇽",
          "cities": [
            "cancun"
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
            "sydney",
            "melbourne"
          ]
        },
        {
          "id": "guam",
          "name": "괌",
          "emoji": "🇬🇺",
          "cities": [
            "guam"
          ]
        },
        {
          "id": "saipan",
          "name": "사이판",
          "emoji": "🇲🇵",
          "cities": [
            "saipan"
          ]
        },
        {
          "id": "newzealand",
          "name": "뉴질랜드",
          "emoji": "🇳🇿",
          "cities": [
            "auckland"
          ]
        }
      ]
    }
  ],
  "cities": {
    "tokyo": {
      "name": "도쿄",
      "center": [
        35.6812,
        139.7671
      ],
      "zoom": 11,
      "info": [
        {
          "title": "일본 택스프리 받는 법, 11월부터 바뀐 환급 방식 정리",
          "url": "https://blog.naver.com/gilbomm/224484097374"
        },
        {
          "title": "일본 여행 eSIM·유심 고르는 법, 포켓와이파이 비교와 설치법",
          "url": "https://blog.naver.com/gilbomm/224481604699"
        },
        {
          "title": "일본 신칸센 표 사는 법, 스마트EX·좌석 종류·큰 짐 규정",
          "url": "https://blog.naver.com/gilbomm/224459983907"
        },
        {
          "title": "도쿄 지하철 승차권 고르는 법, 서브웨이 티켓·1회권·IC카드 비교",
          "url": "https://blog.naver.com/gilbomm/224459774356"
        },
        {
          "title": "도쿄 나리타공항에서 시내 가는 법, 스카이라이너·N'EX·리무진·택시",
          "url": "https://blog.naver.com/gilbomm/224453629887"
        },
        {
          "title": "도쿄 하네다공항에서 시내 가는 법, 모노레일·게이큐·리무진버스·택시",
          "url": "https://blog.naver.com/gilbomm/224451372587"
        },
        {
          "title": "일본 교통카드 스이카·이코카 사는 법, 충전·개찰 터치·정산",
          "url": "https://blog.naver.com/gilbomm/224444366225"
        },
        {
          "title": "일본 입국 비짓재팬웹 등록 방법, QR 하나로 입국심사·세관 통과",
          "url": "https://blog.naver.com/gilbomm/224438229754"
        }
      ],
      "food": [
        {
          "title": "쓰키지 장외시장 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224460009602",
          "lat": 35.6655,
          "lng": 139.7707
        },
        {
          "title": "아사쿠사 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459692760",
          "lat": 35.7111,
          "lng": 139.796
        },
        {
          "title": "도쿄 시부야·하라주쿠 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224454754449",
          "lat": 35.658,
          "lng": 139.702
        },
        {
          "title": "신주쿠 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444609111",
          "lat": 35.691,
          "lng": 139.702
        }
      ],
      "hotel": [
        {
          "title": "미쓰이 가든 호텔 긴자 고초메",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=6884484"
        },
        {
          "title": "시부야 스트림 호텔",
          "url": "https://3ha.in/r/930365"
        },
        {
          "title": "더 도쿄 스테이션 호텔",
          "url": "https://3ha.in/r/889992",
          "lat": 35.6814,
          "lng": 139.7671
        },
        {
          "title": "게이오 플라자 호텔 도쿄 (hotelId 994639)",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=7263"
        },
        {
          "title": "아키하바라·우에노 호텔 TOP3",
          "url": "https://3ha.in/r/891593",
          "lat": 35.6984,
          "lng": 139.7731
        },
        {
          "title": "팰리스 호텔 도쿄",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=10567649"
        },
        {
          "title": "파크 하얏트 도쿄",
          "url": "https://3ha.in/r/836120",
          "lat": 35.6853,
          "lng": 139.691
        },
        {
          "title": "호텔 선루트 플라자 신주쿠",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=9072885",
          "lat": 35.687091,
          "lng": 139.698881
        },
        {
          "title": "호텔 메트로폴리탄 도쿄 이케부쿠로",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=6063",
          "lat": 35.728339,
          "lng": 139.708001
        },
        {
          "title": "미츠이 가든 호텔 긴자 프리미어",
          "url": "https://3ha.in/r/778428",
          "lat": 35.667112,
          "lng": 139.763179
        },
        {
          "title": "더 게이트 호텔 가미나리몬",
          "url": "https://3ha.in/r/767004",
          "lat": 35.71087,
          "lng": 139.795216
        },
        {
          "title": "호텔 그레이서리 신주쿠",
          "url": "https://3ha.in/r/760856",
          "lat": 35.695563,
          "lng": 139.702277
        }
      ],
      "spot": [
        {
          "title": "팀랩 보더리스 티켓: 모리 빌딩 디지털 아트 뮤지엄 (20707)",
          "url": "https://3ha.in/r/939050"
        },
        {
          "title": "도쿄 출발 후지산 당일 버스투어",
          "url": "https://3ha.in/r/856880",
          "lat": 35.5016,
          "lng": 138.801
        },
        {
          "title": "도쿄타워 전망대 입장권",
          "url": "https://blog.naver.com/gilbomm/224459942599",
          "lat": 35.6586,
          "lng": 139.7454
        },
        {
          "title": "도쿄 스카이트리 입장권",
          "url": "https://3ha.in/r/823677",
          "lat": 35.7101,
          "lng": 139.8107
        },
        {
          "title": "팀랩 플래닛 도쿄 티켓",
          "url": "https://3ha.in/r/795734",
          "lat": 35.64938,
          "lng": 139.789728
        },
        {
          "title": "도쿄 디즈니 리조트 티켓",
          "url": "https://blog.naver.com/gilbomm/224437921592",
          "lat": 35.632659,
          "lng": 139.881417
        },
        {
          "title": "시부야 스카이 입장권",
          "url": "https://3ha.in/r/761099",
          "lat": 35.658379,
          "lng": 139.702216
        }
      ]
    },
    "sapporo": {
      "name": "삿포로",
      "center": [
        43.0621,
        141.3544
      ],
      "zoom": 13,
      "info": [
        {
          "title": "신치토세 공항에서 삿포로 시내 가는 법, JR 쾌속·버스·택시 비교",
          "url": "https://blog.naver.com/gilbomm/224490715527"
        }
      ],
      "food": [
        {
          "title": "삿포로 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224453639652",
          "lat": 43.0605,
          "lng": 141.3566
        }
      ],
      "hotel": [
        {
          "title": "더 비 삿포로 (44402748)",
          "url": "https://3ha.in/r/943089"
        },
        {
          "title": "JR타워 호텔 닛코 삿포로",
          "url": "https://blog.naver.com/gilbomm/224434629293",
          "lat": 43.068218,
          "lng": 141.352382
        }
      ],
      "spot": []
    },
    "oahu": {
      "name": "오아후 코올리나(하와이)",
      "center": [
        21.335,
        -158.12
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "아울라니 디즈니 리조트 코올리나",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=2811274",
          "lat": 21.338,
          "lng": -158.128
        }
      ],
      "spot": [
        {
          "title": "하와이 폴리네시안 문화센터 (8582)",
          "url": "https://3ha.in/r/953094"
        }
      ]
    },
    "fukuoka": {
      "name": "후쿠오카",
      "center": [
        33.5902,
        130.4017
      ],
      "zoom": 13,
      "info": [
        {
          "title": "후쿠오카 공항에서 하카타·텐진 가는 법, 지하철·버스·택시",
          "url": "https://blog.naver.com/gilbomm/224474084664"
        }
      ],
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
          "title": "힐튼 후쿠오카 씨호크",
          "url": "https://3ha.in/r/953098",
          "lat": 33.594829,
          "lng": 130.359171
        },
        {
          "title": "후쿠오카 하카타역 근처 호텔 TOP3 비교",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=9125",
          "lat": 33.590041,
          "lng": 130.419903
        },
        {
          "title": "더 블라썸 하카타 프리미어",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=16216159",
          "lat": 33.590247,
          "lng": 130.414007
        },
        {
          "title": "후쿠오카 공항 근처 vs 하카타 시내 호텔",
          "url": "https://3ha.in/r/782164",
          "lat": 33.590041,
          "lng": 130.419903
        },
        {
          "title": "호텔 닛코 후쿠오카",
          "url": "https://3ha.in/r/757007",
          "lat": 33.591509,
          "lng": 130.417192
        }
      ],
      "spot": [
        {
          "title": "유후인 벳푸 가마도 지옥 다자이후 한국어 가이드 일일 투어 (94584046)",
          "url": "https://blog.naver.com/gilbomm/224490674935"
        }
      ]
    },
    "hongkong": {
      "name": "홍콩",
      "center": [
        22.3027,
        114.1772
      ],
      "zoom": 12,
      "info": [
        {
          "title": "홍콩 옥토퍼스 카드 사는 법, 종류·충전·환불 한눈에",
          "url": "https://blog.naver.com/gilbomm/224459676685"
        },
        {
          "title": "홍콩 공항에서 시내 가는 법, 공항철도·A21 버스·택시·우버 비교",
          "url": "https://blog.naver.com/gilbomm/224444411938"
        }
      ],
      "food": [
        {
          "title": "홍콩 완차이·코즈웨이베이 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224484139575",
          "lat": 22.2775,
          "lng": 114.1795
        },
        {
          "title": "홍콩 몽콕 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224473633542",
          "lat": 22.3193,
          "lng": 114.1694
        },
        {
          "title": "홍콩 센트럴·침사추이 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224453070971",
          "lat": 22.282,
          "lng": 114.158
        }
      ],
      "hotel": [
        {
          "title": "코디스 홍콩 (344939)",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=48636"
        },
        {
          "title": "그랜드 하얏트 홍콩",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=5913"
        },
        {
          "title": "하얏트 리젠시 홍콩 침사추이",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=168898"
        },
        {
          "title": "더 페닌슐라 홍콩",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=9729",
          "lat": 22.2951,
          "lng": 114.1724
        },
        {
          "title": "카오룽 샹그릴라",
          "url": "https://3ha.in/r/795714",
          "lat": 22.297054,
          "lng": 114.177002
        },
        {
          "title": "호텔 아이콘 홍콩",
          "url": "https://3ha.in/r/782395",
          "lat": 22.300802,
          "lng": 114.179654
        },
        {
          "title": "하얏트 리젠시 홍콩 침사추이",
          "url": "https://3ha.in/r/761072",
          "lat": 22.297517,
          "lng": 114.173844
        }
      ],
      "spot": [
        {
          "title": "빅토리아 하버 야경 크루즈 럭셔리 드리머 (10690)",
          "url": "https://3ha.in/r/930334"
        },
        {
          "title": "홍콩 마담 투소 입장권 (액티비티 42)",
          "url": "https://3ha.in/r/888696"
        },
        {
          "title": "홍콩 오션파크 입장권",
          "url": "https://3ha.in/r/843118",
          "lat": 22.2465,
          "lng": 114.1757
        },
        {
          "title": "옹핑 360 케이블카 티켓",
          "url": "https://3ha.in/r/795753",
          "lat": 22.289148,
          "lng": 113.94098
        },
        {
          "title": "홍콩 피크트램 티켓",
          "url": "https://3ha.in/r/795329",
          "lat": 22.27772,
          "lng": 114.15955
        },
        {
          "title": "홍콩 디즈니랜드 티켓",
          "url": "https://blog.naver.com/gilbomm/224437842774",
          "lat": 22.31307,
          "lng": 114.040985
        }
      ]
    },
    "london": {
      "name": "런던",
      "center": [
        51.5074,
        -0.1278
      ],
      "zoom": 12,
      "info": [
        {
          "title": "런던 오이스터 카드·컨택트리스 지하철·버스 이용법",
          "url": "https://blog.naver.com/gilbomm/224460265306"
        },
        {
          "title": "런던 히드로 공항에서 시내 가는 법, 엘리자베스 라인·익스프레스·택시",
          "url": "https://blog.naver.com/gilbomm/224453214773"
        }
      ],
      "food": [
        {
          "title": "런던 소호·코벤트 가든 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459530930",
          "lat": 51.513,
          "lng": -0.131
        }
      ],
      "hotel": [
        {
          "title": "샹그릴라 더 샤드 런던",
          "url": "https://3ha.in/r/888683",
          "lat": 51.5045,
          "lng": -0.0865
        },
        {
          "title": "더 사보이",
          "url": "https://3ha.in/r/836151",
          "lat": 51.51,
          "lng": -0.12
        },
        {
          "title": "스트랜드 팰리스",
          "url": "https://3ha.in/r/763549",
          "lat": 51.511076,
          "lng": -0.120933
        }
      ],
      "spot": [
        {
          "title": "런던탑 입장권 (액티비티 3491)",
          "url": "https://3ha.in/r/943094"
        },
        {
          "title": "해리포터 스튜디오 투어",
          "url": "https://3ha.in/r/839270",
          "lat": 51.69,
          "lng": -0.419
        },
        {
          "title": "런던 아이 입장권",
          "url": "https://3ha.in/r/823611",
          "lat": 51.5033,
          "lng": -0.1196
        }
      ]
    },
    "okinawa": {
      "name": "오키나와",
      "center": [
        26.3344,
        127.8056
      ],
      "zoom": 10,
      "info": [
        {
          "title": "오키나와 유이레일 이용법, 1일권·OKICA·시각표",
          "url": "https://blog.naver.com/gilbomm/224487624200"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "힐튼 오키나와 차탄 리조트",
          "url": "https://3ha.in/r/762032",
          "lat": 26.318669,
          "lng": 127.75485
        }
      ],
      "spot": [
        {
          "title": "츄라우미 수족관",
          "url": "https://3ha.in/r/839142",
          "lat": 26.6942,
          "lng": 127.8779
        }
      ]
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
        },
        {
          "title": "싱가포르 입국카드 SG Arrival Card 작성 방법·제출 시기",
          "url": "https://blog.naver.com/gilbomm/224438277189"
        }
      ],
      "food": [
        {
          "title": "싱가포르 시내 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224453241895",
          "lat": 1.2903,
          "lng": 103.852
        }
      ],
      "hotel": [
        {
          "title": "더 풀러턴 호텔 싱가포르",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=10589",
          "lat": 1.286202,
          "lng": 103.853073
        },
        {
          "title": "래플스 호텔 싱가포르",
          "url": "https://3ha.in/r/836593",
          "lat": 1.2949,
          "lng": 103.8545
        },
        {
          "title": "샹그릴라 싱가포르",
          "url": "https://3ha.in/r/795722",
          "lat": 1.311479,
          "lng": 103.826444
        },
        {
          "title": "팬 퍼시픽 오차드",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=59913000",
          "lat": 1.307345,
          "lng": 103.829862
        },
        {
          "title": "파크로열 컬렉션 피커링",
          "url": "https://3ha.in/r/782138",
          "lat": 1.285657,
          "lng": 103.846257
        },
        {
          "title": "마리나 베이 샌즈",
          "url": "https://3ha.in/r/757106",
          "lat": 1.283697,
          "lng": 103.860723
        }
      ],
      "spot": [
        {
          "title": "싱가포르 리버 크루즈 (3846)",
          "url": "https://3ha.in/r/935379"
        },
        {
          "title": "센토사 오셔너리움(S.E.A. 아쿠아리움) 입장권",
          "url": "https://3ha.in/r/888687",
          "lat": 1.2582,
          "lng": 103.8205
        },
        {
          "title": "싱가포르 동물원 입장권",
          "url": "https://3ha.in/r/856899",
          "lat": 1.4043,
          "lng": 103.793
        },
        {
          "title": "나이트 사파리 입장권",
          "url": "https://3ha.in/r/824156",
          "lat": 1.4022,
          "lng": 103.7897
        },
        {
          "title": "가든스 바이 더 베이 티켓",
          "url": "https://3ha.in/r/795744",
          "lat": 1.27914,
          "lng": 103.867928
        },
        {
          "title": "유니버설 스튜디오 싱가포르 티켓",
          "url": "https://3ha.in/r/795326",
          "lat": 1.254201,
          "lng": 103.822667
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
      "info": [
        {
          "title": "타이베이 이지카드·MRT 이용법, 구입·충전·개찰구 카드 결제",
          "url": "https://blog.naver.com/gilbomm/224459858470"
        },
        {
          "title": "타이베이 타오위안공항에서 시내 가는 법, 공항 MRT·버스·택시",
          "url": "https://blog.naver.com/gilbomm/224453687440"
        },
        {
          "title": "대만 입국신고서 TWAC 작성 방법, 입국 7일 전부터 온라인 제출",
          "url": "https://blog.naver.com/gilbomm/224438531547"
        }
      ],
      "food": [
        {
          "title": "아종면선 곱창국수 시먼딩 (10451)",
          "url": "https://blog.naver.com/gilbomm/224473727234"
        },
        {
          "title": "스린 야시장 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459876375",
          "lat": 25.0879,
          "lng": 121.5243
        },
        {
          "title": "융캉제 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444526215",
          "lat": 25.033,
          "lng": 121.5297
        }
      ],
      "hotel": [
        {
          "title": "타이베이 곽원익 고병박물관 펑리수 만들기 (57963)",
          "url": "https://blog.naver.com/gilbomm/224485479229"
        },
        {
          "title": "그랜드 하얏트 타이베이",
          "url": "https://3ha.in/r/857277",
          "lat": 25.0346,
          "lng": 121.5617
        },
        {
          "title": "시티즌M 타이베이 노스 게이트",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=2079109",
          "lat": 25.047297,
          "lng": 121.510604
        },
        {
          "title": "시저 파크 호텔 타이베이",
          "url": "https://3ha.in/r/795297",
          "lat": 25.046111,
          "lng": 121.516295
        },
        {
          "title": "험블 하우스 타이베이",
          "url": "https://3ha.in/r/767007",
          "lat": 25.038606,
          "lng": 121.567378
        },
        {
          "title": "코스모스 호텔 타이베이",
          "url": "https://3ha.in/r/757055",
          "lat": 25.046356,
          "lng": 121.518336
        }
      ],
      "spot": [
        {
          "title": "타이베이 지우펀·스펀 당일투어",
          "url": "https://3ha.in/r/857331",
          "lat": 25.1089,
          "lng": 121.8442
        },
        {
          "title": "타이베이 101 전망대 입장권",
          "url": "https://3ha.in/r/842934",
          "lat": 25.034,
          "lng": 121.5645
        }
      ]
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
          "title": "방콕 BTS·MRT 이용법, 표 종류·래빗 카드·MRT 결제",
          "url": "https://blog.naver.com/gilbomm/224473779138"
        },
        {
          "title": "방콕 수완나품 공항에서 시내 가는 법 공항철도·버스·그랩·택시",
          "url": "https://blog.naver.com/gilbomm/224444187302"
        },
        {
          "title": "태국 입국신고서 TDAC 작성 방법, 도착 3일 전 온라인 제출 순서",
          "url": "https://blog.naver.com/gilbomm/224438253356"
        }
      ],
      "food": [
        {
          "title": "방콕 야오와랏 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224464086289",
          "lat": 13.74,
          "lng": 100.51
        }
      ],
      "hotel": [
        {
          "title": "센타라 그랜드 앳 센트럴월드",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=108196"
        },
        {
          "title": "방콕 실롬 타이 쿠킹 클래스 (3965)",
          "url": "https://3ha.in/r/924696"
        },
        {
          "title": "시암 켐핀스키 호텔 방콕",
          "url": "https://3ha.in/r/888692",
          "lat": 13.7469,
          "lng": 100.5348
        },
        {
          "title": "만다린 오리엔탈 방콕",
          "url": "https://3ha.in/r/836336",
          "lat": 13.7236,
          "lng": 100.5147
        },
        {
          "title": "아바니+ 리버사이드 방콕",
          "url": "https://3ha.in/r/795696",
          "lat": 13.705025,
          "lng": 100.491371
        },
        {
          "title": "빠툼완 프린세스 호텔",
          "url": "https://3ha.in/r/782251",
          "lat": 13.743459,
          "lng": 100.529695
        },
        {
          "title": "그랜드 센터 포인트 터미널 21",
          "url": "https://3ha.in/r/780367",
          "lat": 13.738245,
          "lng": 100.560731
        },
        {
          "title": "방콕 BTS역 근처 호텔 TOP5",
          "url": "https://3ha.in/r/757173",
          "lat": 13.745625,
          "lng": 100.534213
        },
        {
          "title": "센타라 그랜드 앳 센트럴월드",
          "url": "https://3ha.in/r/756923",
          "lat": 13.747523,
          "lng": 100.538361
        }
      ],
      "spot": [
        {
          "title": "방콕 왕궁·사원 투어",
          "url": "https://3ha.in/r/857118",
          "lat": 13.75,
          "lng": 100.4913
        },
        {
          "title": "아유타야 당일 투어",
          "url": "https://3ha.in/r/836674",
          "lat": 14.357,
          "lng": 100.56
        },
        {
          "title": "짜오프라야 디너 크루즈",
          "url": "https://3ha.in/r/823938",
          "lat": 13.704,
          "lng": 100.503
        }
      ]
    },
    "osaka": {
      "name": "오사카",
      "center": [
        34.6937,
        135.5023
      ],
      "zoom": 12,
      "info": [
        {
          "title": "간사이 공항에서 오사카·교토 가는 법, 하루카·라피트·버스 비교",
          "url": "https://blog.naver.com/gilbomm/224473717344"
        },
        {
          "title": "오사카 시내에서 유니버설 스튜디오 재팬 가는 법, JR·난바·버스",
          "url": "https://blog.naver.com/gilbomm/224443806446"
        },
        {
          "title": "간사이 공항 난바 라피트 티켓 예약, 좌석 지정·가격 안내",
          "url": "https://blog.naver.com/gilbomm/224438563935"
        },
        {
          "title": "오사카 주유패스 1일권·2일권 비교, 이용 가능 시설·교통 범위·사용법 총정리",
          "url": "https://blog.naver.com/gilbomm/224431683297"
        }
      ],
      "food": [
        {
          "title": "도톤보리 푸드투어·쿠킹클래스 비교",
          "url": "https://blog.naver.com/gilbomm/224474212520",
          "lat": 34.6687,
          "lng": 135.5013
        },
        {
          "title": "오사카 신세카이 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224464163231",
          "lat": 34.6525,
          "lng": 135.5063
        },
        {
          "title": "오사카 우메다 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224453700982",
          "lat": 34.7025,
          "lng": 135.4959
        },
        {
          "title": "도톤보리 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444558832",
          "lat": 34.668533,
          "lng": 135.503204
        }
      ],
      "hotel": [
        {
          "title": "힐튼 오사카",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=43099",
          "lat": 34.699804,
          "lng": 135.495207
        },
        {
          "title": "세인트 레지스 오사카",
          "url": "https://3ha.in/r/888716"
        },
        {
          "title": "시타딘스 난바 오사카",
          "url": "https://3ha.in/r/891578"
        },
        {
          "title": "콘래드 오사카",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=2190881",
          "lat": 34.6933,
          "lng": 135.4925
        },
        {
          "title": "호텔 한큐 레스파이어 오사카",
          "url": "https://3ha.in/r/795695",
          "lat": 34.704587,
          "lng": 135.496012
        },
        {
          "title": "더 파크 프런트 호텔 앳 USJ",
          "url": "https://3ha.in/r/782261",
          "lat": 34.66776,
          "lng": 135.437197
        },
        {
          "title": "스위소텔 난카이 오사카",
          "url": "https://3ha.in/r/780362",
          "lat": 34.664168,
          "lng": 135.501328
        },
        {
          "title": "크로스 호텔 오사카",
          "url": "https://3ha.in/r/756851",
          "lat": 34.669705,
          "lng": 135.500819
        }
      ],
      "spot": [
        {
          "title": "우메다 스카이 빌딩 & 공중정원 전망대 티켓 (35861)",
          "url": "https://3ha.in/r/935384"
        },
        {
          "title": "오사카성 천수각",
          "url": "https://3ha.in/r/920475"
        },
        {
          "title": "오사카 가이유칸 입장권",
          "url": "https://3ha.in/r/824214",
          "lat": 34.6545,
          "lng": 135.4289
        },
        {
          "title": "하루카스 300 전망대 티켓",
          "url": "https://3ha.in/r/795769",
          "lat": 34.645769,
          "lng": 135.514007
        },
        {
          "title": "유니버설 스튜디오 재팬 입장권",
          "url": "https://3ha.in/r/756956",
          "lat": 34.665639,
          "lng": 135.432453
        }
      ]
    },
    "paris": {
      "name": "파리",
      "center": [
        48.8566,
        2.3522
      ],
      "zoom": 12,
      "info": [
        {
          "title": "파리 샤를 드 골 공항에서 시내 가는 법, RER B·버스·택시",
          "url": "https://blog.naver.com/gilbomm/224453048599"
        },
        {
          "title": "파리 지하철·버스 표 사는 법, 나비고 이지·개찰·벌금 정리",
          "url": "https://blog.naver.com/gilbomm/224444626685"
        }
      ],
      "food": [
        {
          "title": "파리 마레 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444968063",
          "lat": 48.8575,
          "lng": 2.359
        }
      ],
      "hotel": [
        {
          "title": "샹그릴라 파리",
          "url": "https://3ha.in/r/856863",
          "lat": 48.8657,
          "lng": 2.2945
        },
        {
          "title": "르 뫼리스 파리",
          "url": "https://3ha.in/r/836382",
          "lat": 48.8654,
          "lng": 2.3283
        },
        {
          "title": "풀만 파리 타워 에펠",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=7266",
          "lat": 48.855502,
          "lng": 2.292683
        },
        {
          "title": "노보텔 파리 센터 투어 에펠",
          "url": "https://3ha.in/r/756905",
          "lat": 48.849957,
          "lng": 2.283276
        }
      ],
      "spot": [
        {
          "title": "파리 물랑루즈 공연 티켓 (8406)",
          "url": "https://3ha.in/r/930345"
        },
        {
          "title": "파리 세느강 크루즈 에펠탑 전망 바토 파리지앵 (225984)",
          "url": "https://3ha.in/r/924653"
        },
        {
          "title": "디즈니랜드 파리 입장권(1일 1파크·2파크, 날짜 지정·미지정)",
          "url": "https://3ha.in/r/888686"
        },
        {
          "title": "오르세 미술관 입장권",
          "url": "https://3ha.in/r/842935",
          "lat": 48.86,
          "lng": 2.3266
        },
        {
          "title": "베르사유 궁전",
          "url": "https://3ha.in/r/836449",
          "lat": 48.8049,
          "lng": 2.1204
        },
        {
          "title": "에펠탑 입장권",
          "url": "https://3ha.in/r/823745",
          "lat": 48.8584,
          "lng": 2.2945
        },
        {
          "title": "루브르 박물관 입장권",
          "url": "https://3ha.in/r/767018",
          "lat": 48.861147,
          "lng": 2.338028
        }
      ]
    },
    "kyoto": {
      "name": "교토",
      "center": [
        35.0116,
        135.7681
      ],
      "zoom": 13,
      "info": [
        {
          "title": "교토 지하철·란덴 1일권 가격·교환 방법과 아라시야마 가는 법",
          "url": "https://blog.naver.com/gilbomm/224484078446"
        },
        {
          "title": "교토 기모노 대여 예약 방법, 기요미즈데라·기온 한국어·헤어 비교",
          "url": "https://blog.naver.com/gilbomm/224482785227"
        }
      ],
      "food": [
        {
          "title": "교토 가와라마치·기온 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224453562591",
          "lat": 35.005,
          "lng": 135.768
        }
      ],
      "hotel": [
        {
          "title": "힐튼 교토 (hotelId 107955554)",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=55527408"
        },
        {
          "title": "하얏트 리젠시 교토",
          "url": "https://3ha.in/r/889976",
          "lat": 34.9878,
          "lng": 135.7718
        },
        {
          "title": "더 리츠칼튼 교토",
          "url": "https://3ha.in/r/824191",
          "lat": 35.012,
          "lng": 135.771
        },
        {
          "title": "미츠이 가든 호텔 교토 산조 프리미어",
          "url": "https://3ha.in/r/761008",
          "lat": 35.008315,
          "lng": 135.761911
        }
      ],
      "spot": [
        {
          "title": "사가노 도롱코 열차",
          "url": "https://3ha.in/r/839593",
          "lat": 35.017,
          "lng": 135.676
        }
      ]
    },
    "sydney": {
      "name": "시드니",
      "center": [
        -33.8688,
        151.2093
      ],
      "zoom": 13,
      "info": [
        {
          "title": "시드니 공항에서 시내 가는 법, 기차·버스·택시·우버 비교",
          "url": "https://blog.naver.com/gilbomm/224454722245"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "포시즌스 호텔 시드니",
          "url": "https://3ha.in/r/889979",
          "lat": -33.8617,
          "lng": 151.2087
        },
        {
          "title": "파크 하얏트 시드니",
          "url": "https://3ha.in/r/824161",
          "lat": -33.8574,
          "lng": 151.2086
        },
        {
          "title": "샹그릴라 시드니",
          "url": "https://3ha.in/r/757038",
          "lat": -33.861292,
          "lng": 151.206592
        }
      ],
      "spot": [
        {
          "title": "블루 마운틴 투어 (페더데일 동물원, 시닉 월드, 한국인 가이드) (167648, Zig Zag Tours, 한국어 가이드)",
          "url": "https://3ha.in/r/924788"
        },
        {
          "title": "시드니 오페라하우스 가이드 투어",
          "url": "https://3ha.in/r/843210",
          "lat": -33.8568,
          "lng": 151.2153
        }
      ]
    },
    "kotakinabalu": {
      "name": "코타키나발루",
      "center": [
        5.9804,
        116.0735
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "하얏트 리젠시 키나발루",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=10396",
          "lat": 5.985092,
          "lng": 116.075214
        },
        {
          "title": "샹그릴라 탄중 아루 리조트",
          "url": "https://3ha.in/r/767150",
          "lat": 5.955622,
          "lng": 116.042089
        }
      ],
      "spot": [
        {
          "title": "코타키나발루 카와카와 리버 크루즈 반딧불 투어",
          "url": "https://3ha.in/r/920476"
        }
      ]
    },
    "macau": {
      "name": "마카오",
      "center": [
        22.1655,
        113.56
      ],
      "zoom": 13,
      "info": [],
      "food": [
        {
          "title": "마카오 세나도 광장 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224481545863"
        }
      ],
      "hotel": [
        {
          "title": "파리지앵 마카오",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=1269921",
          "lat": 22.147,
          "lng": 113.56
        },
        {
          "title": "그랜드 하얏트 마카오",
          "url": "https://3ha.in/r/762003",
          "lat": 22.148754,
          "lng": 113.567637
        }
      ],
      "spot": []
    },
    "newyork": {
      "name": "뉴욕",
      "center": [
        40.758,
        -73.9855
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "더 세인트 레지스 뉴욕",
          "url": "https://3ha.in/r/889978",
          "lat": 40.7615,
          "lng": -73.9739
        },
        {
          "title": "더 플라자 뉴욕",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=3018399",
          "lat": 40.7646,
          "lng": -73.9744
        },
        {
          "title": "뉴욕 메리어트 마르퀴스",
          "url": "https://3ha.in/r/780389",
          "lat": 40.758597,
          "lng": -73.986193
        },
        {
          "title": "쉐라톤 뉴욕 타임스 스퀘어",
          "url": "https://3ha.in/r/762076",
          "lat": 40.762379,
          "lng": -73.981451
        }
      ],
      "spot": [
        {
          "title": "엠파이어 스테이트 빌딩 전망대 입장권",
          "url": "https://blog.naver.com/gilbomm/224459956647",
          "lat": 40.7484,
          "lng": -73.9857
        },
        {
          "title": "자유의 여신상 페리",
          "url": "https://3ha.in/r/836237",
          "lat": 40.6892,
          "lng": -74.0445
        },
        {
          "title": "탑 오브 더 락 입장권",
          "url": "https://3ha.in/r/824072",
          "lat": 40.7593,
          "lng": -73.9794
        }
      ]
    },
    "vienna": {
      "name": "비엔나",
      "center": [
        48.2082,
        16.3738
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 자허 빈",
          "url": "https://3ha.in/r/889985",
          "lat": 48.2039,
          "lng": 16.3693
        },
        {
          "title": "비엔나 메리어트 호텔",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=870951",
          "lat": 48.2056,
          "lng": 16.3786
        }
      ],
      "spot": []
    },
    "bali": {
      "name": "발리",
      "center": [
        -8.727,
        115.175
      ],
      "zoom": 11,
      "info": [
        {
          "title": "발리 응우라라이 공항에서 시내 가는 법, 택시·그랩·버스 정리",
          "url": "https://blog.naver.com/gilbomm/224460126825"
        }
      ],
      "food": [
        {
          "title": "우붓 쿠킹 클래스 (액티비티 17260)",
          "url": "https://blog.naver.com/gilbomm/224474350011"
        },
        {
          "title": "스미냑 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224460147454",
          "lat": -8.6913,
          "lng": 115.1683
        }
      ],
      "hotel": [
        {
          "title": "파드마 리조트 레기안",
          "url": "https://3ha.in/r/795731",
          "lat": -8.704944,
          "lng": 115.166492
        },
        {
          "title": "아야나 리조트 발리",
          "url": "https://3ha.in/r/767154",
          "lat": -8.788151,
          "lng": 115.136585
        }
      ],
      "spot": [
        {
          "title": "발리 누사페니다 당일 투어",
          "url": "https://3ha.in/r/843120",
          "lat": -8.7503,
          "lng": 115.4741
        }
      ]
    },
    "honolulu": {
      "name": "호놀룰루(하와이)",
      "center": [
        21.2793,
        -157.8293
      ],
      "zoom": 13,
      "info": [
        {
          "title": "호놀룰루 공항에서 와이키키 가는 법, 버스·택시 정리",
          "url": "https://blog.naver.com/gilbomm/224473612180"
        }
      ],
      "food": [
        {
          "title": "와이키키 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224451406462",
          "lat": 21.2766,
          "lng": -157.8267
        }
      ],
      "hotel": [
        {
          "title": "할레쿨라니",
          "url": "https://3ha.in/r/888717"
        },
        {
          "title": "쉐라톤 와이키키 비치 리조트",
          "url": "https://3ha.in/r/795708",
          "lat": 21.27762,
          "lng": -157.830244
        },
        {
          "title": "힐튼 하와이안 빌리지 와이키키",
          "url": "https://3ha.in/r/782151",
          "lat": 21.283032,
          "lng": -157.836962
        },
        {
          "title": "하얏트 리젠시 와이키키 비치 리조트",
          "url": "https://3ha.in/r/756988",
          "lat": 21.276067,
          "lng": -157.82509
        }
      ],
      "spot": [
        {
          "title": "진주만 애리조나 메모리얼 투어",
          "url": "https://3ha.in/r/857303",
          "lat": 21.365,
          "lng": -157.94
        }
      ]
    },
    "dubai": {
      "name": "두바이",
      "center": [
        25.1972,
        55.2744
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "로브 다운타운 두바이",
          "url": "https://3ha.in/r/778438",
          "lat": 25.190133,
          "lng": 55.27137
        }
      ],
      "spot": [
        {
          "title": "두바이 아쿠아리움 & 언더워터 주 티켓 (액티비티 9648)",
          "url": "https://3ha.in/r/888721"
        },
        {
          "title": "두바이 사막 사파리",
          "url": "https://3ha.in/r/839895",
          "lat": 25.1972,
          "lng": 55.2744
        },
        {
          "title": "부르즈 칼리파 전망대 티켓",
          "url": "https://3ha.in/r/819440",
          "lat": 25.1972,
          "lng": 55.2744
        }
      ]
    },
    "kualalumpur": {
      "name": "쿠알라룸푸르",
      "center": [
        3.1579,
        101.7116
      ],
      "zoom": 13,
      "info": [],
      "food": [
        {
          "title": "쿠알라룸푸르 잘란 알로 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224473793415",
          "lat": 3.1458,
          "lng": 101.7084
        }
      ],
      "hotel": [
        {
          "title": "만다린 오리엔탈 쿠알라룸푸르",
          "url": "https://3ha.in/r/824029",
          "lat": 3.1565,
          "lng": 101.7127
        },
        {
          "title": "그랜드 하얏트 쿠알라룸푸르",
          "url": "https://3ha.in/r/774640",
          "lat": 3.153611,
          "lng": 101.712137
        }
      ],
      "spot": []
    },
    "losangeles": {
      "name": "로스앤젤레스",
      "center": [
        34.0522,
        -118.2437
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "로우스 할리우드 호텔",
          "url": "https://3ha.in/r/774628",
          "lat": 34.103266,
          "lng": -118.33958
        }
      ],
      "spot": [
        {
          "title": "유니버설 스튜디오 할리우드 입장권",
          "url": "https://3ha.in/r/888691",
          "lat": 34.1381,
          "lng": -118.3534
        }
      ]
    },
    "amsterdam": {
      "name": "암스테르담",
      "center": [
        52.3676,
        4.9041
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "파크 플라자 빅토리아 암스테르담",
          "url": "https://3ha.in/r/774635",
          "lat": 52.377367,
          "lng": 4.897178
        }
      ],
      "spot": [
        {
          "title": "암스테르담 국립미술관 입장권·운하 크루즈 통합권",
          "url": "https://3ha.in/r/888688"
        }
      ]
    },
    "barcelona": {
      "name": "바르셀로나",
      "center": [
        41.3874,
        2.1686
      ],
      "zoom": 13,
      "info": [
        {
          "title": "바르셀로나 공항에서 시내 가는 법, 에어로버스·메트로 정리",
          "url": "https://blog.naver.com/gilbomm/224464153797"
        }
      ],
      "food": [
        {
          "title": "고딕지구·보른 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459744048",
          "lat": 41.3825,
          "lng": 2.1769
        }
      ],
      "hotel": [
        {
          "title": "호텔 아츠 바르셀로나",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=149803",
          "lat": 41.3855,
          "lng": 2.1971
        },
        {
          "title": "호텔 레지나 바르셀로나",
          "url": "https://3ha.in/r/763510",
          "lat": 41.385902,
          "lng": 2.168192
        }
      ],
      "spot": [
        {
          "title": "구엘공원 입장권",
          "url": "https://3ha.in/r/823854",
          "lat": 41.4145,
          "lng": 2.1527
        },
        {
          "title": "사그라다 파밀리아 입장권",
          "url": "https://3ha.in/r/767086",
          "lat": 41.403505,
          "lng": 2.174428
        }
      ]
    },
    "venice": {
      "name": "베네치아",
      "center": [
        45.4408,
        12.3155
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "다니엘리 베네치아 포시즌스",
          "url": "https://3ha.in/r/823649",
          "lat": 45.4339,
          "lng": 12.3433
        }
      ],
      "spot": [
        {
          "title": "베네치아 두칼레 궁전 입장권",
          "url": "https://3ha.in/r/857090",
          "lat": 45.4337,
          "lng": 12.3403
        }
      ]
    },
    "danang": {
      "name": "다낭",
      "center": [
        16.0544,
        108.2022
      ],
      "zoom": 12,
      "info": [
        {
          "title": "다낭 공항에서 시내 가는 법, 택시·버스·그랩 한눈에",
          "url": "https://blog.naver.com/gilbomm/224454843187"
        },
        {
          "title": "베트남 입국 준비, 사전 입국 정보 PAI 작성법과 무비자 45일",
          "url": "https://blog.naver.com/gilbomm/224438575713"
        }
      ],
      "food": [
        {
          "title": "다낭 한시장 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444576058",
          "lat": 16.068,
          "lng": 108.224
        }
      ],
      "hotel": [
        {
          "title": "인터컨티넨탈 다낭 선 페닌슐라",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=287965",
          "lat": 16.12,
          "lng": 108.3
        },
        {
          "title": "아 라 카르트 다낭 비치",
          "url": "https://3ha.in/r/795705",
          "lat": 16.068716,
          "lng": 108.244639
        },
        {
          "title": "신라 모노그램 다낭",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=10789475",
          "lat": 15.963471,
          "lng": 108.289382
        },
        {
          "title": "노보텔 다낭 프리미어 한 리버",
          "url": "https://3ha.in/r/782283",
          "lat": 16.077461,
          "lng": 108.223563
        },
        {
          "title": "다낭 가성비 호텔 TOP5",
          "url": "https://blog.naver.com/gilbomm/224438006971",
          "lat": 16.075625,
          "lng": 108.246878
        },
        {
          "title": "하얏트 리젠시 다낭 리조트 앤 스파",
          "url": "https://3ha.in/r/756534",
          "lat": 16.012589,
          "lng": 108.263775
        }
      ],
      "spot": [
        {
          "title": "바나힐 입장권",
          "url": "https://3ha.in/r/782428",
          "lat": 15.995857,
          "lng": 107.989071
        }
      ]
    },
    "hanoi": {
      "name": "하노이",
      "center": [
        21.0285,
        105.8542
      ],
      "zoom": 13,
      "info": [
        {
          "title": "하노이 노이바이 공항에서 시내 가는 법, 버스·택시·픽업 정리",
          "url": "https://blog.naver.com/gilbomm/224464066655"
        }
      ],
      "food": [
        {
          "title": "하노이 구시가지 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444542145",
          "lat": 21.034,
          "lng": 105.85
        }
      ],
      "hotel": [
        {
          "title": "롯데호텔 하노이",
          "url": "https://3ha.in/r/795305",
          "lat": 21.032168,
          "lng": 105.812493
        },
        {
          "title": "소피텔 레전드 메트로폴 하노이",
          "url": "https://3ha.in/r/763569",
          "lat": 21.025488,
          "lng": 105.855978
        }
      ],
      "spot": []
    },
    "istanbul": {
      "name": "이스탄불",
      "center": [
        41.0256,
        28.9744
      ],
      "zoom": 12,
      "info": [
        {
          "title": "이스탄불 공항에서 시내 가는 법, 지하철·버스·택시 한눈에",
          "url": "https://blog.naver.com/gilbomm/224459732452"
        }
      ],
      "food": [
        {
          "title": "술탄아흐메트 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224460288376",
          "lat": 41.0082,
          "lng": 28.9784
        }
      ],
      "hotel": [
        {
          "title": "페라 팰리스 호텔",
          "url": "https://3ha.in/r/778433",
          "lat": 41.031048,
          "lng": 28.973474
        }
      ],
      "spot": []
    },
    "phuket": {
      "name": "푸켓",
      "center": [
        7.8804,
        98.3923
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "센타라 그랜드 비치 리조트 푸켓",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=237219",
          "lat": 7.8447,
          "lng": 98.2976
        }
      ],
      "spot": [
        {
          "title": "푸켓 피피섬 스피드보트 투어",
          "url": "https://3ha.in/r/843191",
          "lat": 7.6781,
          "lng": 98.7667
        }
      ]
    },
    "cancun": {
      "name": "칸쿤",
      "center": [
        21.1619,
        -86.8515
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "JW 메리어트 칸쿤",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=83461",
          "lat": 21.1,
          "lng": -86.77
        }
      ],
      "spot": []
    },
    "rome": {
      "name": "로마",
      "center": [
        41.9028,
        12.4964
      ],
      "zoom": 12,
      "info": [
        {
          "title": "로마 피우미치노 공항에서 시내 가는 법, 레오나르도 익스프레스·택시",
          "url": "https://blog.naver.com/gilbomm/224453540925"
        },
        {
          "title": "이탈리아 기차표·버스표 사는 법과 개찰 방법, 종이표 안 찍으면 벌금",
          "url": "https://blog.naver.com/gilbomm/224444310455"
        }
      ],
      "food": [
        {
          "title": "트라스테베레 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459790316",
          "lat": 41.889,
          "lng": 12.469
        }
      ],
      "hotel": [
        {
          "title": "하슬러 로마",
          "url": "https://3ha.in/r/836626",
          "lat": 41.9061,
          "lng": 12.4828
        },
        {
          "title": "호텔 퀴리날레",
          "url": "https://3ha.in/r/757127",
          "lat": 41.901636,
          "lng": 12.494837
        }
      ],
      "spot": [
        {
          "title": "콜로세움",
          "url": "https://3ha.in/r/839174",
          "lat": 41.8902,
          "lng": 12.4922
        },
        {
          "title": "이탈리아 남부 1박2일 투어(포지타노·카프리)",
          "url": "https://blog.naver.com/gilbomm/224437949566",
          "lat": 40.628658,
          "lng": 14.485496
        },
        {
          "title": "바티칸 박물관 입장권",
          "url": "https://3ha.in/r/763525",
          "lat": 41.904961,
          "lng": 12.454662
        }
      ]
    },
    "lasvegas": {
      "name": "라스베이거스",
      "center": [
        36.1147,
        -115.1728
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "벨라지오",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=9316",
          "lat": 36.1126,
          "lng": -115.1767
        },
        {
          "title": "베네치안 리조트 라스베이거스",
          "url": "https://3ha.in/r/767066",
          "lat": 36.121208,
          "lng": -115.162067
        }
      ],
      "spot": []
    },
    "miami": {
      "name": "마이애미",
      "center": [
        25.7617,
        -80.1918
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "퐁텐블로 마이애미 비치",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=2402740",
          "lat": 25.82,
          "lng": -80.1224
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
      "info": [
        {
          "title": "필리핀 eTravel 작성 방법, 입국 72시간 전 무료 등록과 QR",
          "url": "https://blog.naver.com/gilbomm/224438589578"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "크림슨 리조트 앤 스파 막탄",
          "url": "https://3ha.in/r/795715",
          "lat": 10.297134,
          "lng": 124.014014
        },
        {
          "title": "제이파크 아일랜드 리조트",
          "url": "https://3ha.in/r/782396",
          "lat": 10.282778,
          "lng": 123.995585
        },
        {
          "title": "샹그릴라 막탄 세부",
          "url": "https://3ha.in/r/761047",
          "lat": 10.307959,
          "lng": 124.020848
        }
      ],
      "spot": [
        {
          "title": "세부 호핑투어",
          "url": "https://3ha.in/r/839472",
          "lat": 10.25,
          "lng": 123.95
        },
        {
          "title": "오슬롭 고래상어·바디안 캐녀닝 투어",
          "url": "https://3ha.in/r/757087",
          "lat": 9.462088,
          "lng": 123.378636
        }
      ]
    },
    "phuquoc": {
      "name": "푸꾸옥",
      "center": [
        10.227,
        103.967
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "JW 메리어트 푸꾸옥 에메랄드 베이",
          "url": "https://3ha.in/r/795724",
          "lat": 10.033482,
          "lng": 104.02817
        },
        {
          "title": "인터컨티넨탈 푸꾸옥 롱비치 리조트",
          "url": "https://3ha.in/r/762066",
          "lat": 10.112635,
          "lng": 103.983524
        }
      ],
      "spot": [
        {
          "title": "푸꾸옥 호핑투어",
          "url": "https://3ha.in/r/839399",
          "lat": 10,
          "lng": 104
        }
      ]
    },
    "florence": {
      "name": "피렌체",
      "center": [
        43.7696,
        11.2558
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "그랜드 호텔 발리오니 피렌체",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=3157169",
          "lat": 43.7766,
          "lng": 11.2486
        }
      ],
      "spot": [
        {
          "title": "우피치 갤러리",
          "url": "https://3ha.in/r/839354",
          "lat": 43.7677,
          "lng": 11.2553
        }
      ]
    },
    "berlin": {
      "name": "베를린",
      "center": [
        52.52,
        13.405
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 아들론 켐핀스키 베를린",
          "url": "https://3ha.in/r/824224",
          "lat": 52.516,
          "lng": 13.379
        }
      ],
      "spot": []
    },
    "madrid": {
      "name": "마드리드",
      "center": [
        40.4168,
        -3.7038
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "하얏트 센트릭 그란 비아 마드리드",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=4454071",
          "lat": 40.42,
          "lng": -3.705
        }
      ],
      "spot": []
    },
    "hochiminh": {
      "name": "호치민",
      "center": [
        10.7769,
        106.7009
      ],
      "zoom": 13,
      "info": [
        {
          "title": "호치민 탄손낫공항에서 시내 가는 법, 택시·그랩·버스 비교",
          "url": "https://blog.naver.com/gilbomm/224459500799"
        }
      ],
      "food": [
        {
          "title": "호치민 1군 시내 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224459609310",
          "lat": 10.776,
          "lng": 106.702
        }
      ],
      "hotel": [
        {
          "title": "카라벨 사이공",
          "url": "https://3ha.in/r/774630",
          "lat": 10.776148,
          "lng": 106.70361
        }
      ],
      "spot": []
    },
    "manila": {
      "name": "마닐라",
      "center": [
        14.5995,
        120.9842
      ],
      "zoom": 12,
      "info": [
        {
          "title": "마닐라 공항에서 시내 가는 법, 쿠폰택시·그랩·버스 비교",
          "url": "https://blog.naver.com/gilbomm/224459576129"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "오카다 마닐라",
          "url": "https://3ha.in/r/823910",
          "lat": 14.5197,
          "lng": 120.9801
        }
      ],
      "spot": []
    },
    "hakone": {
      "name": "하코네",
      "center": [
        35.233,
        139.107
      ],
      "zoom": 11,
      "info": [],
      "food": [],
      "hotel": [],
      "spot": [
        {
          "title": "하코네 프리패스",
          "url": "https://3ha.in/r/824263",
          "lat": 35.6905,
          "lng": 139.6985
        }
      ]
    },
    "nagoya": {
      "name": "나고야",
      "center": [
        35.1815,
        136.9066
      ],
      "zoom": 12,
      "info": [],
      "food": [
        {
          "title": "나고야 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224454857913",
          "lat": 35.1709,
          "lng": 136.8815
        }
      ],
      "hotel": [
        {
          "title": "나고야 메리어트 아소시아 호텔",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=6984",
          "lat": 35.1706,
          "lng": 136.8816
        }
      ],
      "spot": []
    },
    "toronto": {
      "name": "토론토",
      "center": [
        43.6532,
        -79.3832
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "샹그릴라 호텔 토론토",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=38074492",
          "lat": 43.6498,
          "lng": -79.3868
        }
      ],
      "spot": []
    },
    "milan": {
      "name": "밀라노",
      "center": [
        45.4642,
        9.19
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "아르마니 호텔 밀라노",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=309273",
          "lat": 45.4688,
          "lng": 9.1925
        }
      ],
      "spot": []
    },
    "ubud": {
      "name": "우붓(발리)",
      "center": [
        -8.5069,
        115.2625
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "카만달루 우붓",
          "url": "https://3ha.in/r/824099",
          "lat": -8.477,
          "lng": 115.2598
        }
      ],
      "spot": []
    },
    "munich": {
      "name": "뮌헨",
      "center": [
        48.1374,
        11.5755
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "소피텔 뮌헨 바이어포스트",
          "url": "https://3ha.in/r/823964",
          "lat": 48.1417,
          "lng": 11.5565
        }
      ],
      "spot": []
    },
    "chicago": {
      "name": "시카고",
      "center": [
        41.8781,
        -87.6298
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "팔머 하우스 힐튼 시카고",
          "url": "https://3ha.in/r/823946",
          "lat": 41.8802,
          "lng": -87.6264
        }
      ],
      "spot": []
    },
    "zurich": {
      "name": "취리히",
      "center": [
        47.3769,
        8.5417
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 슈바이처호프 취리히",
          "url": "https://3ha.in/r/823897",
          "lat": 47.3777,
          "lng": 8.5402
        }
      ],
      "spot": []
    },
    "maui": {
      "name": "마우이(하와이)",
      "center": [
        20.7984,
        -156.3319
      ],
      "zoom": 10,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "그랜드 와일레아 마우이",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=80378",
          "lat": 20.683,
          "lng": -156.4399
        }
      ],
      "spot": []
    },
    "athens": {
      "name": "아테네",
      "center": [
        37.9838,
        23.7275
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "호텔 그란데 브레타뉴 아테네",
          "url": "https://3ha.in/r/823802",
          "lat": 37.9753,
          "lng": 23.7346
        }
      ],
      "spot": []
    },
    "sandiego": {
      "name": "샌디에이고",
      "center": [
        32.7157,
        -117.1611
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "맨체스터 그랜드 하얏트 샌디에이고",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=46997",
          "lat": 32.7084,
          "lng": -117.1696
        }
      ],
      "spot": []
    },
    "auckland": {
      "name": "오클랜드",
      "center": [
        -36.8485,
        174.7633
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "스카이시티 호텔 오클랜드",
          "url": "https://3ha.in/r/823716",
          "lat": -36.8483,
          "lng": 174.7618
        }
      ],
      "spot": []
    },
    "budapest": {
      "name": "부다페스트",
      "center": [
        47.4979,
        19.0402
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "인터컨티넨탈 부다페스트",
          "url": "https://3ha.in/r/823710",
          "lat": 47.4968,
          "lng": 19.0486
        }
      ],
      "spot": []
    },
    "boracay": {
      "name": "보라카이",
      "center": [
        11.9674,
        121.9248
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "디스커버리 보라카이",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=84317",
          "lat": 11.9577,
          "lng": 121.9115
        }
      ],
      "spot": []
    },
    "hoian": {
      "name": "호이안",
      "center": [
        15.8801,
        108.338
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "아난타라 호이안 리조트",
          "url": "https://3ha.in/r/823620",
          "lat": 15.8773,
          "lng": 108.3279
        }
      ],
      "spot": []
    },
    "vancouver": {
      "name": "밴쿠버",
      "center": [
        49.2827,
        -123.1207
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "페어몬트 호텔 밴쿠버",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=2607",
          "lat": 49.2842,
          "lng": -123.1214
        }
      ],
      "spot": []
    },
    "chiangmai": {
      "name": "치앙마이",
      "center": [
        18.7883,
        98.9853
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "샹그릴라 치앙마이",
          "url": "https://3ha.in/r/823575",
          "lat": 18.7826,
          "lng": 99.0016
        }
      ],
      "spot": []
    },
    "melbourne": {
      "name": "멜버른",
      "center": [
        -37.8136,
        144.9631
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "소피텔 멜버른 온 콜린스",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=4823",
          "lat": -37.8147,
          "lng": 144.9704
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
        },
        {
          "title": "쉐라톤 나트랑 호텔 & 스파",
          "url": "https://3ha.in/r/757140",
          "lat": 12.246256,
          "lng": 109.19588
        }
      ],
      "spot": [
        {
          "title": "나트랑 빈원더스 입장권",
          "url": "https://3ha.in/r/795765",
          "lat": 12.217396,
          "lng": 109.241218
        }
      ]
    },
    "guam": {
      "name": "괌",
      "center": [
        13.515,
        144.805
      ],
      "zoom": 12,
      "info": [
        {
          "title": "괌 렌터카 예약 가이드, 공항 픽업·차종·가격·보험 확인 포인트 총정리",
          "url": "https://blog.naver.com/gilbomm/224430145659"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "롯데호텔 괌",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=564711",
          "lat": 13.520281,
          "lng": 144.807165
        },
        {
          "title": "두짓타니 괌 리조트",
          "url": "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1977467&hl=ko-kr&hid=870053",
          "lat": 13.513799,
          "lng": 144.805006
        },
        {
          "title": "힐튼 괌 리조트 & 스파",
          "url": "https://3ha.in/r/757157",
          "lat": 13.505904,
          "lng": 144.785805
        }
      ],
      "spot": []
    },
    "lisbon": {
      "name": "리스본",
      "center": [
        38.7139,
        -9.1394
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "마이 스토리 호텔 테호",
          "url": "https://3ha.in/r/782119",
          "lat": 38.71373,
          "lng": -9.136663
        }
      ],
      "spot": []
    },
    "sanfrancisco": {
      "name": "샌프란시스코",
      "center": [
        37.788,
        -122.4075
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "힐튼 샌프란시스코 유니언 스퀘어",
          "url": "https://3ha.in/r/778419",
          "lat": 37.785734,
          "lng": -122.410437
        }
      ],
      "spot": []
    },
    "saipan": {
      "name": "사이판",
      "center": [
        15.21,
        145.72
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "크라운 플라자 리조트 사이판",
          "url": "https://3ha.in/r/767148",
          "lat": 15.213985,
          "lng": 145.71687
        }
      ],
      "spot": []
    },
    "prague": {
      "name": "프라하",
      "center": [
        50.0875,
        14.4213
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "힐튼 프라하 올드 타운",
          "url": "https://3ha.in/r/766985",
          "lat": 50.08877,
          "lng": 14.431934
        }
      ],
      "spot": []
    },
    "busan": {
      "name": "부산",
      "center": [
        35.1796,
        129.0756
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "파크 하얏트 부산",
          "url": "https://3ha.in/r/767009",
          "lat": 35.156825,
          "lng": 129.14143
        }
      ],
      "spot": []
    }
  }
};

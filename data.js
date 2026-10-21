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
            "okinawa"
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
            "bangkok"
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
            "hochiminh"
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
            "bali"
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
            "rome"
          ]
        },
        {
          "id": "spain",
          "name": "스페인",
          "emoji": "🇪🇸",
          "cities": [
            "barcelona"
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
            "honolulu"
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
        },
        {
          "id": "saipan",
          "name": "사이판",
          "emoji": "🇲🇵",
          "cities": [
            "saipan"
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
      "food": [],
      "hotel": [
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
      "spot": []
    },
    "honolulu": {
      "name": "호놀룰루(하와이)",
      "center": [
        21.2793,
        -157.8293
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
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
      "spot": []
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
      "food": [],
      "hotel": [
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
          "title": "대만 입국신고서 TWAC 작성 방법, 입국 7일 전부터 온라인 제출",
          "url": "https://blog.naver.com/gilbomm/224438531547"
        }
      ],
      "food": [
        {
          "title": "융캉제 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444526215",
          "lat": 25.033,
          "lng": 121.5297
        }
      ],
      "hotel": [
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
      "spot": []
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
    "osaka": {
      "name": "오사카",
      "center": [
        34.6937,
        135.5023
      ],
      "zoom": 12,
      "info": [
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
          "title": "도톤보리 맛집 TOP5",
          "url": "https://blog.naver.com/gilbomm/224444558832",
          "lat": 34.668533,
          "lng": 135.503204
        }
      ],
      "hotel": [
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
          "title": "유니버설 스튜디오 재팬 입장권",
          "url": "https://3ha.in/r/756956",
          "lat": 34.665639,
          "lng": 135.432453
        }
      ]
    },
    "tokyo": {
      "name": "도쿄",
      "center": [
        35.6812,
        139.7671
      ],
      "zoom": 11,
      "info": [
        {
          "title": "일본 입국 비짓재팬웹 등록 방법, QR 하나로 입국심사·세관 통과",
          "url": "https://blog.naver.com/gilbomm/224438229754"
        }
      ],
      "food": [],
      "hotel": [
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
        },
        {
          "title": "태국 입국신고서 TDAC 작성 방법, 도착 3일 전 온라인 제출 순서",
          "url": "https://blog.naver.com/gilbomm/224438253356"
        }
      ],
      "food": [],
      "hotel": [
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
      "spot": []
    },
    "hanoi": {
      "name": "하노이",
      "center": [
        21.0285,
        105.8542
      ],
      "zoom": 13,
      "info": [],
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
    "rome": {
      "name": "로마",
      "center": [
        41.9028,
        12.4964
      ],
      "zoom": 12,
      "info": [
        {
          "title": "이탈리아 기차표·버스표 사는 법과 개찰 방법, 종이표 안 찍으면 벌금",
          "url": "https://blog.naver.com/gilbomm/224444310455"
        }
      ],
      "food": [],
      "hotel": [
        {
          "title": "호텔 퀴리날레",
          "url": "https://3ha.in/r/757127",
          "lat": 41.901636,
          "lng": 12.494837
        }
      ],
      "spot": [
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
    "hongkong": {
      "name": "홍콩",
      "center": [
        22.3027,
        114.1772
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
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
    "paris": {
      "name": "파리",
      "center": [
        48.8566,
        2.3522
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
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
          "title": "루브르 박물관 입장권",
          "url": "https://3ha.in/r/767018",
          "lat": 48.861147,
          "lng": 2.338028
        }
      ]
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
          "title": "오슬롭 고래상어·바디안 캐녀닝 투어",
          "url": "https://3ha.in/r/757087",
          "lat": 9.462088,
          "lng": 123.378636
        }
      ]
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
      "spot": []
    },
    "istanbul": {
      "name": "이스탄불",
      "center": [
        41.0256,
        28.9744
      ],
      "zoom": 12,
      "info": [],
      "food": [],
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
    "hochiminh": {
      "name": "호치민",
      "center": [
        10.7769,
        106.7009
      ],
      "zoom": 13,
      "info": [],
      "food": [],
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
      "spot": []
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
      "spot": []
    },
    "sapporo": {
      "name": "삿포로",
      "center": [
        43.0621,
        141.3544
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "JR타워 호텔 닛코 삿포로",
          "url": "https://blog.naver.com/gilbomm/224434629293",
          "lat": 43.068218,
          "lng": 141.352382
        }
      ],
      "spot": []
    },
    "kualalumpur": {
      "name": "쿠알라룸푸르",
      "center": [
        3.1579,
        101.7116
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "그랜드 하얏트 쿠알라룸푸르",
          "url": "https://3ha.in/r/774640",
          "lat": 3.153611,
          "lng": 101.712137
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
      "spot": [
        {
          "title": "사그라다 파밀리아 입장권",
          "url": "https://3ha.in/r/767086",
          "lat": 41.403505,
          "lng": 2.174428
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
          "title": "베네치안 리조트 라스베이거스",
          "url": "https://3ha.in/r/767066",
          "lat": 36.121208,
          "lng": -115.162067
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
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "아야나 리조트 발리",
          "url": "https://3ha.in/r/767154",
          "lat": -8.788151,
          "lng": 115.136585
        }
      ],
      "spot": []
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
          "title": "샹그릴라 탄중 아루 리조트",
          "url": "https://3ha.in/r/767150",
          "lat": 5.955622,
          "lng": 116.042089
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
    },
    "london": {
      "name": "런던",
      "center": [
        51.5074,
        -0.1278
      ],
      "zoom": 12,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "스트랜드 팰리스",
          "url": "https://3ha.in/r/763549",
          "lat": 51.511076,
          "lng": -0.120933
        }
      ],
      "spot": []
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
          "title": "인터컨티넨탈 푸꾸옥 롱비치 리조트",
          "url": "https://3ha.in/r/762066",
          "lat": 10.112635,
          "lng": 103.983524
        }
      ],
      "spot": []
    },
    "macau": {
      "name": "마카오",
      "center": [
        22.1655,
        113.56
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "그랜드 하얏트 마카오",
          "url": "https://3ha.in/r/762003",
          "lat": 22.148754,
          "lng": 113.567637
        }
      ],
      "spot": []
    },
    "okinawa": {
      "name": "오키나와",
      "center": [
        26.3344,
        127.8056
      ],
      "zoom": 10,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "힐튼 오키나와 차탄 리조트",
          "url": "https://3ha.in/r/762032",
          "lat": 26.318669,
          "lng": 127.75485
        }
      ],
      "spot": []
    },
    "kyoto": {
      "name": "교토",
      "center": [
        35.0116,
        135.7681
      ],
      "zoom": 13,
      "info": [],
      "food": [],
      "hotel": [
        {
          "title": "미츠이 가든 호텔 교토 산조 프리미어",
          "url": "https://3ha.in/r/761008",
          "lat": 35.008315,
          "lng": 135.761911
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
          "title": "쉐라톤 나트랑 호텔 & 스파",
          "url": "https://3ha.in/r/757140",
          "lat": 12.246256,
          "lng": 109.19588
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

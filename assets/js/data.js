/*
{
    "name": 店名,
    "metro_line": 捷運線路,
    "metro_station": 捷運站,
    "evaluation": google評價,
    "address": 地址,
    "contact": 電話,
    "business_hour": 營業時間,
    "rest": 公休日期
}
*/
var data = [
    {
        "name": "二月拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "淡水站",
        "evaluation": "4.3",
        "address": "新北市淡水區中山北路一段70號",
        "contact": none,
        "business_hour": [
            "11:00-14:00", 
            "17:00-21:00"
        ] ,
        "rest": "每週二"
    },
    {
        "name": "樂山窄巷拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "北投站",
        "evaluation": "4.1",
        "address": "台北市北投區大同街27號",
        "contact": "02-2892-6265",
        "business_hour": [
            "11:00-14:30", 
            "17:00-21:00"
        ],
        "rest": none
    },
    {
        "name": "黑曜麵屋",
        "metro_line": "淡水信義線",
        "metro_station": "芝山站",
        "evaluation": "4.7",
        "address": "台北市北投區尊賢街206巷2號",
        "contact": "0979-047-907",
        "business_hour": [
            "11:00-21:00"
        ],
        "rest": none
    },
    {
        "name": "隱家拉麵士林店",
        "metro_line": "淡水信義線",
        "metro_station": "士林站",
        "evaluation": "4.8",
        "address": "台北市士林區中山北路五段505巷22號",
        "contact": "02-2880-1011",
        "business_hour": [
            "11:30-14:00", 
            "16:30-22:00"
        ],
        "rest": none
    },
    {
        "name": "山形心心拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "劍潭站",
        "evaluation": "4.4",
        "address": "台北市士林區小東街25號",
        "contact": "02-2881-8558",
        "business_hour": [
            "16:30-23:59",
        ],
        "rest": none
    },
    {
        "name": "黑田屋Kurodaya",
        "metro_line": "淡水信義線",
        "metro_station": "民權西路站",
        "evaluation": "4.7",
        "address": "台北市中山區錦西街31號",
        "contact": "02-2393-8893",
        "business_hour": [
            none
        ],
        "rest": none
    },
    {
        "name": "特濃屋",
        "metro_line": "淡水信義線",
        "metro_station": "雙連站",
        "evaluation": "4.7",
        "address": "台北市中山區錦西街31號",
        "contact": "02-2393-8893",
        "business_hour": [
            "11:30-15:00", 
            "17:00-21:00"
        ],
        "rest": none
    },
    {
        "name": "勝王",
        "metro_line": "淡水信義線",
        "metro_station": "雙連站",
        "evaluation": "4.2",
        "address": "台北市中山區林森北路306號",
        "contact": none,
        "business_hour": [
            "11:30-14:00", 
            "17:00-20:30"
        ],
        "rest": none
    },
    {
        "name": "烹星",
        "metro_line": "淡水信義線",
        "metro_station": "雙連站",
        "evaluation": "4.6",
        "address": "台北市中山區中山北路二段59巷67號",
        "contact": none,
        "business_hour": [
            "11:30-14:00", 
            "17:00-20:30"
        ],
        "rest": none
    },
    {
        "name": "隱家拉麵赤峰店",
        "metro_line": "淡水信義線",
        "metro_station": "雙連站",
        "evaluation": "4.1",
        "address": "台北市大同區南京西路25巷28號",
        "contact": "02-2559-5970",
        "business_hour": [
            "11:30-14:00", 
            "16:30-22:00"
        ],
        "rest": none
    },
    {
        "name": "蘭丸拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "3.7",
        "address": "台北市大同區南京西路18巷6-3號",
        "contact": none,
        "business_hour": [
            "11:30-13:30", 
            "17:30-22:00"
        ],
        "rest": none
    },
    {
        "name": "鬼金棒拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.2",
        "address": "台北市大同區南京西路18巷6-3號",
        "contact": none,
        "business_hour": [
            "11:30-14:00", 
            "17:00-20:30"
        ],
        "rest": none
    },
    {
        "name": "京都柚子豚骨拉麵研究中心",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "3.9",
        "address": "台北市中山區長安西路19巷2弄的23號",
        "contact": "02-2563-0689",
        "business_hour": [
            "11:30-15:00", 
            "17:00-20:30"
        ],
        "rest": none
    },
    {
        "name": "千雲拉麵",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.4",
        "address": "台北市中山區林森北路105-1號",
        "contact": "02-2523-3198",
        "business_hour": [
            "12:00-15:30", 
            "17:00-03:00"
        ],
        "rest": none
    },
    {
        "name": "麵屋武藏-神山",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.2",
        "address": "台北市中山區中山北路一段121巷18號",
        "contact": "02-2542-8222",
        "business_hour": [
            "11:30-21:30"
        ],
        "rest": none
    },
    {
        "name": "麵屋一燈",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "3.9",
        "address": "台北市中山區南京東路一段29號",
        "contact": "02-2511-6161",
        "business_hour": [
            "11:00-01:00"
        ],
        "rest": none
    },
    {
        "name": "屯京拉麵-中山店",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.1",
        "address": "台北市中山區中山北路一段141號",
        "contact": "02-2562-5066",
        "business_hour": [
            "11:00-22:30"
        ],
        "rest": none
    },
    {
        "name": "半熟堂",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.1",
        "address": "台北市中山區南京西路14號號B1",
        "contact": "02-2581-3358 #1814",
        "business_hour": [
            "11:30-14:00", 
            "17:30-20:30"
        ],
        "rest": none
    },
    {
        "name": "一風堂",
        "metro_line": "淡水信義線",
        "metro_station": "中山站",
        "evaluation": "4.2",
        "address": "台北市中山區中山北路一段85號",
        "contact": "02-2562-9222",
        "business_hour": [
            "11:30-23:59", 
        ],
        "rest": none
    },
    {
        "name": "麵屋武藏-本店",
        "metro_line": "淡水信義線",
        "metro_station": "台北車站",
        "evaluation": "4.3",
        "address": "台北市中正區忠孝西路一段36號B1",
        "contact": "02-2371-1889",
        "business_hour": [
            "11:30-20:30", 
        ],
        "rest": none
    },
    {
        "name": "屯京拉麵-台北站前店",
        "metro_line": "淡水信義線",
        "metro_station": "台北車站",
        "evaluation": "4.2",
        "address": "台北市中正區忠孝西路一段38號B1",
        "contact": "02-2388-7166",
        "business_hour": [
            "11:00-22:00", 
        ],
        "rest": none
    },
]
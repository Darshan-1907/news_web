import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article =  [
      {
          "source": {
              "id": null,
              "name": "NPR"
          },
          "author": "Malaka Gharib",
          "title": "Giving up alcohol for Dry January? Our newsletter can help you reach your goal",
          "description": "If your New Year's resolution is to drink less alcohol, Life Kit is here to help. Sign up for our Dry January newsletter series, and get tips and strategies to help you stay alcoholfree for a month.",
          "url": "https://www.npr.org/2024/12/26/gs136783/giveupalcoholdryjanuaryoctobersobercurious",
          "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4500x2531+0+126/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnprbrightspot.s3.amazonaws.com%2Fad%2F44%2F7aa4d8a1489d960c3b79a1822b82%2Flkdryjanuarynewsletterharlan11.jpg",
          "publishedAt": "20241226T10:00:00Z",
          "content": "So you want to take a break from drinking alcohol. Maybe it's your New Year's resolution. Or maybe you just want a clearer mind, a stronger body and, yeah, fewer hangovers! \r\nWhatever your reason may… [+3463 chars]"
      },
      {
          "source": {
              "id": "businessinsider",
              "name": "Business Insider"
          },
          "author": "Tom Carter",
          "title": "BYD makes much more than cars. These 5 side hustles also helped turn the Chinese EV giant into a challenger to Elon Musk's Tesla.",
          "description": "Like its rival Tesla, BYD makes and sells a range of products alongside its electric vehicles, from solar panels to buses.",
          "url": "https://www.businessinsider.com/bydteslasidehustlesbatteriesrailbusesenergy202412",
          "urlToImage": "https://i.insider.com/67604557cf8d1359a2e02724?width=1200&format=jpeg",
          "publishedAt": "20241226T10:01:01Z",
          "content": "BYD has rapidly become one of the world's largest sellers of EVs.INA FASSBENDER/AFP via Getty Images\r\n<ul><li>BYD is chasing down Tesla on EV sales, but the Chinese giant is much more than just a car… [+4711 chars]"
      },
      {
          "source": {
              "id": "businessinsider",
              "name": "Business Insider"
          },
          "author": "Kwan Wei Kevin Tan",
          "title": "Trump's defense policy pick once called for the US to destroy TSMC if China takes Taiwan",
          "description": "\"Disabling or destroying TSMC is table stakes if China is taking over Taiwan,\" former senior Pentagon official Elbridge Colby said in February.",
          "url": "https://www.businessinsider.com/trumpdefensepickusdestroytsmcifchinatakestaiwan202412",
          "urlToImage": "https://i.insider.com/676ce1f7a3e82c791204612c?width=1024&format=jpeg",
          "publishedAt": "20241226T09:00:07Z",
          "content": "\"Disabling or destroying TSMC is table stakes if China is taking over Taiwan,\" Elbridge Colby wrote in an X post in February. Presidentelect Donald Trump picked Colby as his next undersecretary of d… [+3631 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Hipertextual"
          },
          "author": "Quelian Sanz",
          "title": "Samsung le ha robado al iPhone su mejor idea en años, y los Galaxy S25 van a disfrutarla desde el primer día",
          "description": "Si todo sale como está previsto, Samsung revelará todo sobre los Galaxy S25 el día 22 de enero de 2025. Todavía quedan unas semanas para dicha fecha, pero esto no es motivo suficiente para detener las filtraciones y rumores. Hay ciertos detalles sobre estos n…",
          "url": "http://hipertextual.com/2024/12/samsungleharobadoaliphonesumejorideaenanosylosgalaxys25vanadisfrutarladesdeelprimerdia",
          "urlToImage": "https://imgs.hipertextual.com/wpcontent/uploads/2024/12/GlaxyS5.jpg",
          "publishedAt": "20241226T09:18:12Z",
          "content": "Si todo sale como está previsto, Samsung revelará todo sobre los Galaxy S25 el día 22 de enero de 2025. Todavía quedan unas semanas para dicha fecha, pero esto no es motivo suficiente para detener la… [+2093 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Gizmodo.jp"
          },
          "author": "高橋真紀",
          "title": "ソニーとアップルが手を組む？ VRコントローラを開発中らしい",
          "description": "Image:ArtemGolub/MichelleEhrhardt/GizmodoUSApple、本気でVRゲーミング市場も狙い始めてるのか。ソニーがPlayStationのVR2コントローラーを、Apple「VisionPro」のオプショナルアクセサリーとして提供するかもという噂が出回っています。米メディア、BloombergのMarkGurman記者は12月8日のニュースレターにて、Apple",
          "url": "https://www.gizmodo.jp/2024/12/visionprocontrollerwithsony.html",
          "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2024/12/24/PlayStationVR2VisionPro896x5971.jpeg?w=1280&h=630&f=jpg",
          "publishedAt": "20241226T01:00:00Z",
          "content": "AppleVR\r\nPlayStationVR2AppleVision Pro\r\nBloombergMark Gurman128AppleVRGurmanPlayStation VR2Vision Pro\r\nVision Pro\r\nMetaQuest 35VRVision Pro\r\nVision ProVR\r\nVision ProPS5XboxVR6DoFXYZ\r\nVision Pro\r\nPlay… [+314 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Gizmodo.jp"
          },
          "author": "岡本玄介",
          "title": "スマートなデザインがツボ。Apple三種の神器を同時充電できるスタンド",
          "description": "Image:SANWADIRECT一緒にしとけば「どこだっけ？」もないし。iPhoneを持っているなら、腕にはAppleWatch、耳にはAirPodsというコンボをキメている人は多かろうと思います。それらは個別に充電もできますが、どうせなら一カ所でまとめたいですよね。3つ同時に充電しようサンワサプライの「700WLC006」は、それら三種の神器を同時にワイヤレス充電できる3in1スタンド。iP",
          "url": "https://www.gizmodo.jp/2024/12/sanwa3in1standforapple.html",
          "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2024/12/26/700WLC006_MO5DX.JPG?w=1280&h=630&f=jpg",
          "publishedAt": "20241226T06:00:00Z",
          "content": "iPhoneApple WatchAir Pods\r\n3\r\n700WLC0063in1\r\niPhone15WApple Watch5WAir Pods5W\r\nVideo: / YouTube\r\niPhone4030\r\nLED\r\nImage: SANWA DIRECT\r\nApple StoreBelkin2280014800\r\nSource: YouTube via SANWA DIRECT, … [+10 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Yanko Design"
          },
          "author": "Sarang Sheth",
          "title": "Top Wearable Tech Trends for 2025",
          "description": "Top Wearable Tech Trends for 2025Wearable technology has come a long way from the days of clunky pedometers and fitness bands that tracked steps but not much else. Today, wearables...",
          "url": "https://www.yankodesign.com/2024/12/25/topwearabletechtrendsfor2025/",
          "urlToImage": "https://www.yankodesign.com/images/design_news/2024/12/topwearabletechtrendsfor2025/wearable_tech_trends_2025_2.jpeg",
          "publishedAt": "20241226T02:45:21Z",
          "content": "Wearable technology has come a long way from the days of clunky pedometers and fitness bands that tracked steps but not much else. Today, wearables have become essential lifestyle gadgets, seamlessly… [+10553 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Journal du geek"
          },
          "author": "Thomas Estimbre",
          "title": "Samsung Galaxy S25, S25+ et S25 Ultra : tout ce qu’il faut vraiment savoir",
          "description": "Les Galaxy S25, S25 Plus et S25 Ultra sont les prochains smartphones haut de gamme de Samsung, prévus pour début 2025. Voici tout ce que l'on sait sur la série.",
          "url": "https://www.journaldugeek.com/dossier/samsunggalaxys25s25ets25ultratoutcequilfautvraimentsavoir/",
          "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/12/samsunggalaxys25s25pluss25ultra.jpg",
          "publishedAt": "20241226T08:22:24Z",
          "content": "La présentation des Samsung Galaxy S25 approche et de nombreuses informations circulent au sujet de cette gamme très attendue. Après avoir placé les Galaxy S24, S24 Plus et surtout le Galaxy S24 Ultr… [+10545 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applesfera.com"
          },
          "author": "Álvaro García M.",
          "title": "Apple no quiere ser Google. No lanzarán un buscador y lo más curioso es el motivo",
          "description": "A medida que la inteligencia artificial revoluciona los buscadores con propuestas como SearchGPT, es normal que surjan dudas acerca de si Apple lanzará su propio buscador. Más cuando hace años que se tienen ciertas evidencias de que trabajan en ello. Sin emba…",
          "url": "https://www.applesfera.com/apple1/applenoquieresergooglenolanzaranbuscadorcuriosomotivo",
          "urlToImage": "https://i.blogs.es/4fdb60/appleygoogle/840_560.jpeg",
          "publishedAt": "20241226T08:01:30Z",
          "content": "A medida que la inteligencia artificial revoluciona los buscadores con propuestas como SearchGPT, es normal que surjan dudas acerca de si Apple lanzará su propio buscador. Más cuando hace años que se… [+3836 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applesfera.com"
          },
          "author": "Álvaro García M.",
          "title": "Apple está ya trabajando en \"el iPhone definitivo\". Es el sueño de Steve Jobs, aunque aún tiene un enorme problema",
          "description": "Es una obviedad de gran calibre decir que el iPhone 16 Pro Max es el mejor iPhone de la historia, al igual que lo será su sucesor de la serie de iPhone 17. Sin embargo, ninguno de ellos se puede considerar el iPhone definitivo. No al menos si tenemos en cuent…",
          "url": "https://www.applesfera.com/rumores/appleestatrabajandoiphonedefinitivosuenostevejobstieneenormeproblema",
          "urlToImage": "https://i.blogs.es/aa0159/iphone/840_560.jpeg",
          "publishedAt": "20241226T09:01:34Z",
          "content": "Es una obviedad de gran calibre decir que el iPhone 16 Pro Max es el mejor iPhone de la historia, al igual que lo será su sucesor de la serie de iPhone 17. Sin embargo, ninguno de ellos se puede cons… [+3733 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Pressecitron"
          },
          "author": "Tristan Carballeda",
          "title": "Apple : voici les 3 produits les plus attendus pour 2025",
          "description": "Apple devrait encore commercialiser de nombreux produits en 2025, mais 5 ont particulièrement retenu notre attention, les voici.",
          "url": "https://www.pressecitron.net/appleproduitsattendus2025/",
          "urlToImage": "https://www.pressecitron.net/app/uploads/2024/09/ApplePark.jpg",
          "publishedAt": "20241226T09:01:02Z",
          "content": "Tous les ans Apple propose de nouveaux produits à ses clients. En plus des iPhone, dont la sortie au début du mois de septembre est un évènement planétaire, dautres appareils devraient faire leur ent… [+2564 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Android Authority"
          },
          "author": "Aamir Siddiqui",
          "title": "Apple’s bezelless iPhone dream continues to face significant challenges",
          "description": "Apple dreams of a bezelless iPhone, but technological hurdles are delaying the timeline. So don't expect a zerobezel iPhone even in 2026.",
          "url": "https://www.androidauthority.com/applebezellessiphonedelayed3511294/",
          "urlToImage": "https://www.androidauthority.com/wpcontent/uploads/2024/09/AppleiPhone16andiPhone15screens.jpg",
          "publishedAt": "20241226T09:06:31Z",
          "content": "<ul><li>Apples rumored bezelless iPhone was expected to be released in 2025 or 2026, but the display tech is facing technological hurdles.</li><li>Apple has yet to conclude technical discussions wit… [+2588 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NPR"
          },
          "author": "Ramtin Arablouei",
          "title": "History of the Self: Love",
          "description": "How did love – this thing that's supposed to be beautiful, magical, transformative – turn into a neverending slog? We went searching for answers, and we found them in surprising places. On today's show: a timehopping, philosophical journey into the origins o…",
          "url": "https://www.npr.org/2024/12/26/1221596357/historyoftheselflove",
          "urlToImage": "https://media.npr.org/assets/img/2024/12/20/squareeparttemplatec_widef3c853d711e22c7a62e49aa380e3784779c9092b.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "20241226T08:00:59Z",
          "content": "How did love this thing that's supposed to be beautiful, magical, transformative turn into a neverending slog? We went searching for answers, and we found them in surprising places. On today's show: … [+618 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Habr.com"
          },
          "author": "ValdikSS",
          "title": "Умный принтсервер: печать и скан без драйверов на старых принтерах + финансирование опенсорса",
          "description": "TL;DR: изза отсутствия «умных» принтсерверов на рынке сделал собственное устройство, позволяющее печатать и сканировать на старых USBпринтерах через WiFi и Ethernet, с любого смартфона и компьютера под любой ОС, без установки драйверов (AirPrint/Mopria). …",
          "url": "https://habr.com/ru/articles/843898/#postcontentbody",
          "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/bb2/a75/843/bb2a7584388264a443bf51c272ade2c0.png",
          "publishedAt": "20241226T02:56:03Z",
          "content": "TL;DR:  «»  , USB WiFi Ethernet, , (AirPrint/Mopria). , , x86, plug&amp;play. : CUPS SANE/AirSane $2 , , .\r\n! , , , , . , : , .\r\n , , 20 . / . /?\r\n<ul><li> 20012009 , , , ;\r\n</li><li>: , ( ) … [+5632 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Caschys Blog"
          },
          "author": "caschy",
          "title": "Neue deutsche KrankenhausSerie „Berlin ER“ startet auf Apple TV+",
          "description": "Eine neue deutsche Krankenhausserie wird ab Februar 2025 bei Apple TV+ zu sehen sein. Die Serie „Berlin ER“, die ursprünglich unter dem Arbeitstitel „KRANK Berlin“ entwickelt wurde, entstand unter der kreativen Leitung des ehemaligen Notfallmediziners Samuel …",
          "url": "https://stadtbremerhaven.de/neuedeutschekrankenhausserieberlinerstartetaufappletv/",
          "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2024/12/120424_Berlin_ER_Big_Image_012.jpg",
          "publishedAt": "20241226T05:30:09Z",
          "content": "Eine neue deutsche Krankenhausserie wird ab Februar 2025 bei Apple TV+ zu sehen sein. Die Serie „Berlin ER“, die ursprünglich unter dem Arbeitstitel „KRANK Berlin“ entwickelt wurde, entstand unter de… [+1789 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Frandroid"
          },
          "author": "Marie Lizak",
          "title": "Le nouveau SUV électrique de Xiaomi a déjà été aperçu sur les routes",
          "description": "Officiellement dévoilé au début du mois de décembre, le nouveau Xiaomi YU7 vient tout juste d’être aperçu en liberté sur les routes de Chine. L’occasion d’avoir un aperçu de son style définitif, et d’en savoir plus à son sujet.",
          "url": "https://www.frandroid.com/marques/xiaomi/2451178_lenouveausuvelectriquedexiaomiadejaeteapercusurlesroutes",
          "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wpcontent/uploads/2024/12/autohomecarchxkpwdk5kcacwcabo1200x7761.jpg?key=35150255&watermark",
          "publishedAt": "20241226T08:15:35Z",
          "content": "Officiellement dévoilé au début du mois de décembre, le nouveau Xiaomi YU7 vient tout juste d’être aperçu en liberté sur les routes de Chine. L’occasion d’avoir un aperçu de son style définitif, et d… [+4044 chars]"
      },
      {
          "source": {
              "id": "lenta",
              "name": "Lenta"
          },
          "author": "Евгений Силаев",
          "title": "Apple объяснила удаление приложений СМИ из App Store",
          "description": "Американская компания Apple объяснила удаление приложений СМИ и VPNсервисов из App Store требованиями российского законодательства. Об этом говорится в ответе корпорации на соответствующий запрос организации «Репортеры без границ» (RSF)",
          "url": "https://lenta.ru/news/2024/12/26/appleobyasnilaudalenieprilozheniysmiizappstore/",
          "urlToImage": "https://icdn.lenta.ru/images/2024/12/26/06/20241226061604751/share_72c1f6e0c49816286611e08bc0142ce0.jpg",
          "publishedAt": "20241226T03:07:00Z",
          "content": "Apple VPN App Store . « » (RSF).\r\n« , Apple App Store . , , », Apple.\r\n, 100 VPN. App Store , , .\r\n , iOS, , ."
      },
      {
          "source": {
              "id": "lenta",
              "name": "Lenta"
          },
          "author": "Андрей Ставицкий",
          "title": "iPhone 16 подешевел в России в конце года",
          "description": "Стоимость самого нового базового смартфона Apple снизилась на российском рынке. На это обратило внимание издание HiTech Mail.ru",
          "url": "https://lenta.ru/news/2024/12/26/podeshevel/",
          "urlToImage": "https://icdn.lenta.ru/images/2024/12/26/12/20241226120408039/share_efaad57c3be1b13f8d7084e4167d862e.jpg",
          "publishedAt": "20241226T09:04:17Z",
          "content": "Apple . HiTech Mail.ru.\r\n , iPhone 16 114 . 7580 . 40 .\r\n« , . iPhone 15 70 », . , .\r\n HiTech Mail.ru , iPhone 16 90 .\r\n Apple 6,1 Super Retina XDR OLED 60 2000 . A18, 8 , 128 . iPhone 16 48 12 .… [+36 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ifanr.com"
          },
          "author": "柯 铭源",
          "title": "余承东：华为明年有大家想不到的产品/京东客服全员平均涨薪 2 个月/小米官宣与「蔚小理」合作，共享充电桩",
          "description": "· Sakana AI 推出全新算法，AI 首次自主发现人工生命\n· 智己汽车完成 94 亿元 B 轮融资\n· 如祺出行「全无人」Robotaxi 上线#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
          "url": "https://www.ifanr.com/1610354",
          "urlToImage": "https://s3.ifanr.com/images/ep/coverimages/jian_zhu_wu_qian_de_xin_shang_zhe_cover.jpg",
          "publishedAt": "20241226T00:36:35Z",
          "content": "AI Sakana AI \r\nTransformer Sakana AI MITOpenAI AI IDSIA \r\nASAL \r\nASAL BoidsParticle LifeGame of LifeLenia Neural Cellular Automata\r\nASAL \r\nALife\r\nAI Sakana AI AI GPU AI \r\nNASA 12 24 7 53 Parker Sola… [+1573 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Touchlab.jp"
          },
          "author": "Nakimo",
          "title": "【最大30%OFF】Amazonで「Fire TV シリーズ」がセール中",
          "description": "Amazonで、「Fire TV Sticksシリーズ」が最大30%OFFで販売されています。 【リンク】Amazon.co.jp – Fire TVシリーズがお買い得 Fire TV Stickは、テレビ等 […]©2019 \"Touch Lab  タッチ ラボ\".",
          "url": "https://touchlab.jp/2024/12/amazonfiretvsticksale/",
          "urlToImage": "https://touchlab.jp/wpcontent/uploads/2024/04/firetvstick_4kmax_30.jpg",
          "publishedAt": "20241226T02:59:27Z",
          "content": "Amazonで、「Fire TV Sticksシリーズ」が最大30%OFFで販売されています。\n【リンク】Amazon.co.jp – Fire TVシリーズがお買い得\n\nFire TV Stickは、テレビ等のHDMI端子に接続するストリーミングメディア端末で、Prime Video・YouTube・Netflix・TVer・UNEXT・DAZN・Disney+・FOD・Apple TV+な… [+624 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "GSMArena.com"
          },
          "author": "Michail",
          "title": "2024 Winners and losers: Apple",
          "description": "The past year was a weird one for Apple, as it primarily focused on maintaining its smartphone market dominance while dipping its toes in XR and AI. Regulators from around the world came knocking on the doors of Cupertino’s walled garden and we saw the first …",
          "url": "https://www.gsmarena.com/2024_winners_and_losers_applenews65731.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/12/2024winnerslosersapple/952x498w6/gsmarena_00.jpg",
          "publishedAt": "20241226T01:02:01Z",
          "content": "The past year was a weird one for Apple, as it primarily focused on maintaining its smartphone market dominance while dipping its toes in XR and AI. Regulators from around the world came knocking on … [+5173 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "GSMArena.com"
          },
          "author": "Michail",
          "title": "Xiaomi Smart Band 9 Active review",
          "description": "Xiaomi’s Smart Band lineup (formerly Mi Band) is now in its ninth generation, and the Smart Band 9 Active is the most affordable out of the bunch. With its €25/£20 suggested retail price, this plastic nugget is one of the most affordable smartbands on the mar…",
          "url": "https://www.gsmarena.com/xiaomi_smart_band_9_active_reviewnews65828.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/12/xiaomismartband9activereview/952x498w6/gsmarena_000.jpg",
          "publishedAt": "20241226T07:54:01Z",
          "content": "Xiaomis Smart Band lineup (formerly Mi Band) is now in its ninth generation, and the Smart Band 9 Active is the most affordable out of the bunch. With its 25/£20 suggested retail price, this plastic … [+9398 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Geekissimo.com"
          },
          "author": "Antonio Mele",
          "title": "Apple chiude l’anno in bellezza con una quota di mercato degli smartphone del 27,7%",
          "description": "Ottimo trend per la mela morsicata, con il il 4,5% in più di Samsung",
          "url": "https://geekissimo.com/2024/12/26/applechiudelannoinbellezzaconunaquotadimercatodeglismartphonedel277/",
          "urlToImage": null,
          "publishedAt": "20241226T09:54:47Z",
          "content": "Per quasi 15 anni, i giganti della tecnologia Apple e Samsung si sono contesi il titolo di più grande fornitore di smartphone al mondo. Samsung ha mantenuto il primato per la maggior parte del tempo,… [+2225 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Smartworld.it"
          },
          "author": "Alessandro Nodari",
          "title": "Altro che ecosistema Apple: ecco le nuove funzioni tra telefoni e Galaxy Book in arrivo con One UI 7",
          "description": "Tra le funzioni in arrivo con la One UI 7 (a proposito, avete visto la nostra prova in anteprima?), ce...\r\nL'articolo Altro che ecosistema Apple: ecco le nuove funzioni tra telefoni e Galaxy Book in arrivo con One UI 7 sembra essere il primo su Smartworld.",
          "url": "https://www.smartworld.it/news/funzionicontinuitygalaxyoneui7.html",
          "urlToImage": "https://www.smartworld.it/images/2024/12/26/samsungalaxycontinuity_1200x675.jpg",
          "publishedAt": "20241226T09:37:00Z",
          "content": "Tra le funzioni in arrivo con la One UI 7 (a proposito, avete visto la nostra prova in anteprima?), ce ne sono alcune particolarmente interessanti per chi possiede sia uno dei migliori smartphone che… [+2720 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Creative Bloq"
          },
          "author": "Alan Wen",
          "title": "The best VR games I played in 2024, including Batman: Arkham Shadow, Vendetta Forever and a surprise PSVR 2 entry",
          "description": "From new releases to worthwhile updates, it's been a surprising year for VR.",
          "url": "https://www.creativebloq.com/entertainment/thebestvrgamesiplayedin2024includingbatmanarkhamshadowvendettaforeverandasurprisepsvr2entry",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/bqikmouApvEELdwU4iL63T120080.jpg",
          "publishedAt": "20241226T07:00:10Z",
          "content": "VR gaming has had a busy year in 2024, even if it hasn't always looked like it, with some platforms opting to use other words like mixed reality or 'spatial computing', in the case of Apple, that lau… [+6712 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "La Vanguardia"
          },
          "author": "Ilan Cherre",
          "title": "No, Apple no tiene previsto crear su propio motor de búsqueda, y estos son los motivos",
          "description": "Apple acaba de arrojar un jarro de agua fría sobre las constantes filtraciones acerca de la creación de un buscador propio. La compañía de Cupertino ha decidido publicar los motivos por los cuales no tiene previsto crear su propio motor de búsqueda. La explic…",
          "url": "https://www.lavanguardia.com/andro4all/apple/noapplenotieneprevistocrearsupropiomotordebusquedayestossonlosmotivos",
          "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/12/noapplenotieneprevistocrearsupropiomotordebusquedayestossonlosmotivos.jpg?width=1200",
          "publishedAt": "20241226T07:44:29Z",
          "content": "Los cuatro motivos por los que Apple no creará su propio motor de búsqueda\r\nApple acaba de arrojar un jarro de agua fría sobre las constantes filtraciones acerca de la creación de un buscador propio.… [+2468 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Impress.co.jp"
          },
          "author": "影山 巧",
          "title": "【本日みつけたお買い得品】Apple Watch SE(第2世代)が2,939円引き",
          "description": "Amazonにおいて、「Apple Watch SE(第2世代)」(GPSモデル)が直近価格からの2,939円引きで、40mmケース版が3万1,158円、44mmケース版が3万6,057円にて購入可能だ。",
          "url": "https://pc.watch.impress.co.jp/docs/news/todays_sales/1650899.html",
          "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1650/899/01.jpg",
          "publishedAt": "20241226T00:49:09Z",
          "content": "AmazonApple Watch SE(2)(GPS)2,93940mm31,15844mm36,057 \r\n Apple Watch SE(2)LTPO OLED Retina20%S8 SiPApple PaySuica \r\n WiFi 4Bluetooth 5.350m18 \r\n /40mm40×34×10.7mm/26.4g44mm44×38×10.7mm/32.9g"
      },
      {
          "source": {
              "id": null,
              "name": "Deadline"
          },
          "author": "Dessi Gomez",
          "title": "‘Bad Sisters’ Creator Sharon Horgan Unpacks Season 2 Ending: “Life Continues”",
          "description": "SPOILER ALERT: This piece contains spoilers for the finale of Bad Sisters Season 2. Though the beginning of Season 2 of Bad Sisters might have had viewers convinced that another dead body would be disposed of by the final episode, such was not the case this t…",
          "url": "http://deadline.com/2024/12/badsistersseason2endingexplainedinterview1236241803/",
          "urlToImage": "https://deadline.com/wpcontent/uploads/2024/12/Bad_Sisters_Photo_020801.jpg?w=1024",
          "publishedAt": "20241226T00:30:00Z",
          "content": "SPOILER ALERT: This piece contains spoilers for the finale ofBad SistersSeason 2.\r\nThough the beginning of Season 2 of Bad Sisters might have had viewers convinced that another dead body would be dis… [+5253 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Nextpit.de"
          },
          "author": "Jade Bryan",
          "title": "Neues Feature für Google Fotos unter iOS: Besser als Apple Fotos?",
          "description": "Google Fotos für iOS bekommt neue ShortcutButtons. Hier lest Ihr, was dahintersteckt und wieso Google Fotos damit evtl. besser ist als Apples eigene App.",
          "url": "https://www.nextpit.de/googlefotosiosneueshortcuts",
          "urlToImage": "https://fs.npstatic.com/userfiles/7734655/image/GooglePhotosAIfeature.jpg",
          "publishedAt": "20241226T08:00:00Z",
          "content": "In der neuesten Version von Google Fotos für iPhones (9to5Google berichtete) hat Google das Layout des Hauptbildschirms überarbeitet. Im Zentrum stehen dabei vier ShortcutButtons am oberen Bildschir… [+2036 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Numerama"
          },
          "author": "Salammbô Marie",
          "title": "Les 25 meilleurs films de Noël à voir en streaming",
          "description": "Vous souhaitez prolonger la magie des fêtes de fin d'année ? Voici donc la sélection parfaite pour vous : celle des meilleurs films de Noël, disponibles sur les plateformes de streaming. Vous sentez ce bon parfum de vin chaud, mêlé à celui des gaufres, lorsqu…",
          "url": "https://www.numerama.com/popculture/1855170les25meilleursfilmsdenoelavoirenstreaming.html",
          "urlToImage": "https://c0.lestechnophiles.com/www.numerama.com/wpcontent/uploads/2024/12/1111242cenoellarichardcurtissigneunecomediedanimationpleinedemagiesurnetflix.jpg?resize=1600,900&key=06e9efc3&watermark",
          "publishedAt": "20241226T10:03:11Z",
          "content": "Vous souhaitez prolonger la magie des fêtes de fin d’année ? Voici donc la sélection parfaite pour vous : celle des meilleurs films de Noël, disponibles sur les plateformes de streaming.\r\nVous sentez… [+51816 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Markezine.jp"
          },
          "author": null,
          "title": "2024年最も聴かれたアーティストはMrs. GREEN APPLE【GEM Partners調査】",
          "description": "エンターテインメント業界に向けたデータ×デジタルマーケティングサービスを提供するGEM Partners（ジェムパートナーズ）は、2024年に最も聴かれた音楽アーティスト・サービスを発表した。  同ラ...",
          "url": "https://markezine.jp/article/detail/47898",
          "urlToImage": "https://markezine.jp/static/images/article/47898/47898_fb.png",
          "publishedAt": "20241226T03:15:00Z",
          "content": "×GEM Partners2024\r\npt\r\n2024Mrs. GREEN APPLE\r\n132,445ptMrs. GREEN APPLE202477\r\n2YOASOBI1230,000pt39Snow Man2315Vaundy7520\r\nYouTube\r\nWebYouTube263,896pt2SpotifyApple Music\r\nCDYouTubeYOASOBI\r\npt1Mrs. GR… [+178 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Techbang.com"
          },
          "author": "KKJ",
          "title": "可摺疊 iPad Pro 和 OLED iPad Air 預計將於 2027 年發佈，還有一款「巨型摺疊平板」",
          "description": "可摺疊 iPad Pro 和 OLED iPad Air 預計將於 2027 年發佈\n據分析公司 Display Supply Chain Consultants (DSCC) 指出，蘋果正在努力將 OLED 螢幕技術擴展到其他幾款iPad 上，包括未來的可摺疊iPad。8.5 英吋 OLED iPad mini 計畫於 2026 年推出，而 11 英吋和 13 英吋 OLED iPad Air 型號預計將於 2027 年推出。\n由於 iPad Air 和 iPad mini 將採用 OLED 螢幕技術，預計到 …",
          "url": "https://www.techbang.com/posts/120298thefoldableipadproandoledipadairareexpectedtobe",
          "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/120298/original/79661ccebe189a4b4111cc32817d6fca.jpg?1734516350",
          "publishedAt": "20241226T06:00:00Z",
          "content": "Display Supply Chain Consultants (DSCC)  OLED iPad iPad8.5 OLED iPad mini 2026 11 13 OLED iPad Air 2027 \r\n iPad Air iPad mini OLED 2027 iPad OLED DSCC OLED 18.8 iPad Pro 2027  \r\n iPad MacBook WSJ 19 … [+117 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Inside.com.tw"
          },
          "author": "Sisley",
          "title": "2024 App Store 下載量台灣榜單公布！Threads、酷澎都上榜",
          "description": "台灣的榜單也同時公布了，從中可以觀察到不少有趣的現象，也能好好回顧 2024 年。",
          "url": "https://www.inside.com.tw/article/371562024taiwanappstoredownloadrankingthreadscoupang",
          "urlToImage": "https://bucketimage.inkmaginecms.com/version/social/1/image/2024/12/63f9234421bd46778aa966dc642fcf71.jpg",
          "publishedAt": "20241226T06:11:26Z",
          "content": "2024 Apple iPhoneiPad Apple Arcade App 30 2024 \r\napp app Threads Threads \r\nMeta Threads Z Threads YouTuber Joeman Threads  \r\n TikTok app 6 2019 TikTok \r\n OpenAI ChatGPT\r\n Linkedin 2024 AI AI 84% AI 7… [+103 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Inside.com.tw"
          },
          "author": "Sisley",
          "title": "蘋果為何不自己做搜尋引擎？高層親自說明 3 大關鍵原因！",
          "description": "蘋果服務部門資深副總裁 Eddy Cue 在文件中解釋了為什麼蘋果不會自行開發搜尋引擎。",
          "url": "https://www.inside.com.tw/article/37155whyappledoesntbuildsearchengine3keyreasons",
          "urlToImage": "https://bucketimage.inkmaginecms.com/version/social/1/image/2024/12/26e903569cad48339f9626aab812bff4.jpg",
          "publishedAt": "20241226T03:28:48Z",
          "content": "Google 200 iPhone Google\r\nReuters Eddy Cue \r\n Google Google Cue \r\nCue \r\n Google Google Google \r\n Google Chrome Google ChromeAndroid Google Apple Mozilla \r\nJocelyn\r\n INSIDE INSIDE"
      },
      {
          "source": {
              "id": null,
              "name": "Geekpark.net"
          },
          "author": null,
          "title": "李想：理想汽车大模型进入手机市场；吴柳芳被禁言，抖音：根据法规要求；三星 XR 头显产品或叫「Switch」",
          "description": "李想：大语言模型「理想同学」将从汽车进入手机市场\n12 月 25 日消息，今晚的直播中，李想宣布：理想同学将进入手机，手机 APP 将于 12 月 27 日上线。\n李想表示，理想同学从车机进入手机，主要有两方面原因。\n首先，从长远来看，在掌握基座模型的前提下，一个真正的大模型产品，一定是能够自主使用所有设备的，并且拥有所有的服务。这才是真正的人工智能。\n其次，从用户需求角度来看，很多理想用户的孩子，第一个接触的人工智能产品就是理想同学。在和理想同学对话的过程中，他们可以解决一些问题，比如用理想同学来画画，或者和理…",
          "url": "https://www.geekpark.net/news/344649",
          "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/be/b8/beb8f64930862fd3e8522fea0c9954ef.jpg",
          "publishedAt": "20241226T00:23:16Z",
          "content": "12 25 APP 12 27 \r\n……\r\n 100 300500 \r\nAI\r\n TechCrunch Claude Gemini AI \r\n AI Gemini Anthropic Claude Claude : Anthropic Claude\r\nAnthropic Anthropic Claude Anthropic \r\n 94 B \r\n12 25 B1 B 94 3 1 80 B \r\n… [+555 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Netaful.jp"
          },
          "author": "コグレマサト",
          "title": "セブンイレブン、レジのApple Accountチャージで交通系電子マネー10%還元キャンペーンを実施中（1/5まで）",
          "description": "セブンイレブンが、レジでApple Accountチャージをすると、交通系電子マネーを10%還元するキャンペーンを実施中です。Apple AccountチャージはApple製品やApp Storeで利用可能で、期間は20...\n投稿 セブンイレブン、レジのApple Accountチャージで交通系電子マネー10%還元キャンペーンを実施中（1/5まで） は ネタフル に最初に表示されました。",
          "url": "https://netaful.jp/neta2024/0165402.html",
          "urlToImage": "https://netaful.jp/wpcontent/uploads/2024/12/711appleaccountycharge.jpg",
          "publishedAt": "20241226T00:00:00Z",
          "content": "Apple Account10%Apple AccountAppleApp Store202515\r\n5,000Apple Account10%10,000\r\n20241223202515202516"
      },
      {
          "source": {
              "id": null,
              "name": "3dnews.ru"
          },
          "author": null,
          "title": "Apple намерена полностью разорвать отношения с Nvidia",
          "description": "Apple наращивает темпы исследований и разработки собственных ускорителей искусственного интеллекта, чтобы снизить зависимость от сторонних производителей — компания намеревается полностью разорвать отношения с Nvidia, которые никогда не были особенно тёплыми.…",
          "url": "https://3dnews.ru/1115965/otnosheniyaapplesnvidiaostalisnapryagyonnimiposeyden",
          "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/12/26/1115965/apple.jpg",
          "publishedAt": "20241226T08:27:00Z",
          "content": "Apple , — Nvidia, .\r\n: BoliviaInteligente / unsplash.com\r\n2020 Apple M1 — Mac. Intel, Apple. Apple — Nvidia.  Apple Intelligence. Nvidia , , 70 % 95 % .  , Apple. , Apple Nvidia , Amazon Microsoft… [+368 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Futura"
          },
          "author": "Edward Back, Journaliste hitech",
          "title": "Ils promettaient de révolutionner nos vies : voici les 7 flops technologiques qui ont marqué 2024",
          "description": "L’année a été marquée par une actualité hightech particulièrement riche. Bien qu'une grande part des innovations se soit concentrée autour de l’intelligence artificielle, de nombreux produits ont été lancés, avec ou sans lien direct avec elle. Si certains on…",
          "url": "https://www.futurasciences.com/tech/actualites/technologieilspromettaientrevolutionnernosviesvoici7flopstechnologiquesontmarque2024118329/",
          "urlToImage": "https://cdn.futurasciences.com/buildsv6/images/largeoriginal/9/4/9/949de5a0d8_50225025_flopstech2024.jpg",
          "publishedAt": "20241226T08:14:30Z",
          "content": "Peu importe le nombre d'années et les sommes d'argentargent que les entreprises investissent pour développer leur produit, le résultat final ne correspond pas nécessairement aux attentes des acheteur… [+4459 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Roomie.jp"
          },
          "author": "machiya commerce（かいサポ）",
          "title": "iPhone・Apple Watchと相性抜群！ こんなにスリムなのに3in1な「スゴい充電器 Pro」",
          "description": "※こちらは「かいサポ（お買いものサポーターチーム）」が編集・執筆した記事です。 Photographed by TORITEMP LLC 自宅でも外出先でもケーブル1本ですっきり充電！ スマホをはじめ充電が必要なデバイスが溢れる昨今。同時にケーブルも増えると持ち運びも煩雑になるのでイヤですよね……。 そんな時に便利なのが1台で複数端末を充電できるマルチ充電器ですが、今回はその中から「スゴい充電器",
          "url": "https://www.roomie.jp/2024/12/1381592/",
          "urlToImage": "https://media.loomapp.com/roomie/dist/images/2024/12/sugoipro.jpg?w=1200",
          "publishedAt": "20241226T08:45:24Z",
          "content": "Photographed by TORITEMP LLC \r\n1\r\n1 Pro\r\nApple3iPhoneApple WatchAirPods1\r\n3in1Pro9.5mm\r\nApple 31\r\nProAppleiPhoneApple WatchAirPods1OK\r\nMagSafe\r\nQiiPhoneOKMagSafe\r\nPro\r\n3in11Apple3 Pro"
      },
      {
          "source": {
              "id": null,
              "name": "Roomie.jp"
          },
          "author": "ROOMIE編集部",
          "title": "イヤホン買おうとしてる人ちょっと待って！2025年もAmazonの初売りが開催されそうだよ",
          "description": "※本記事は2024年11月14日に公開された記事を再編集して公開しています。 一年で最初のビッグセール「Amazon初売り」が2025年も開催されそうな予感。どんな製品が安くなるのか今のうちから予習しておきたい人もいるのでは？ そこでAnkerやAppleなど、毎年注目度が高いイヤホンやヘッドホンについて、セールになりそうな目玉アイテムをブランド別にピックアップしてご紹介します。 情報が出たら、随",
          "url": "https://www.roomie.jp/2024/12/1383708/",
          "urlToImage": "https://media.loomapp.com/roomie/dist/images/2024/11/earphonetop.jpg?w=1200",
          "publishedAt": "20241226T06:00:00Z",
          "content": "Amazon2025\r\nAnker\r\nAnker Soundcore Liberty 4\r\nAnker Soundcore C40iBluetooth 5.4\r\nAnker Soundcore C40i\r\nAnker Soundcore AeroFit 2 (Bluetooth 5.4)\r\nAnker Soundcore AeroFit ProBluetooth 5.3\r\nAnker Sound… [+1112 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Elespanol.com"
          },
          "author": "César Rebolledo",
          "title": "FREE FIRE MAX | Códigos de hoy jueves 26 de diciembre de 2024  Recompensas gratis",
          "description": "<!cache>Estos son todos los códigos gratis de Garena Free Fire MAX que podrás canjear hoy, jueves 26 de diciembre de 2024. Consigue recompensas como skins, diamantes y mucho más.<!aa>El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recib…",
          "url": "https://vandal.elespanol.com/noticia/1350776826/freefiremaxcodigosdehoyjueves26dediciembrede2024recompensasgratis/",
          "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/12/122024/26/202412269164174_1.jpg",
          "publishedAt": "20241226T08:17:00Z",
          "content": "El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nuevos códigos diarios para hoy jueves 26 de diciembre de 2024.\r\nLos jugadores pueden canjear estos códigos para recibir recompe… [+2702 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Sspai.com"
          },
          "author": "少数派编辑部",
          "title": "派早报：Apple 公开申明不做搜索服务的缘由、《Halide》公布 2025 年更新计划等",
          "description": "LG 推出免费音频流媒体服务 LG Radio+、Outlook 将支持 PST 文件等。查看全文",
          "url": "https://sspai.com/post/95156",
          "urlToImage": "https://cdnfile.sspai.com/2024/12/26/article/76d3baaf5f9279e8366014d93c79a5a4.png",
          "publishedAt": "20241226T00:35:48Z",
          "content": "Apple \r\nApple Eddy Cue Apple \r\n<ul><li>Apple </li><li> AI Apple </li><li>Apple Apple Apple </li><li>Apple </li></ul>Eddy Cue Apple Google Safari Eddy Cue Apple Google \r\nLG LG Radio+\r\n12 25 LG LG Radi… [+731 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Sspai.com"
          },
          "author": "宛潼",
          "title": "正是入坑好时节：在米家官方支持之际，再聊新人 Home Assistant 入门",
          "description": "Home Assistant 是什么、有什么用以及怎么用，这篇文章回答你所有的问题。查看全文",
          "url": "https://sspai.com/post/95117",
          "urlToImage": "https://cdnfile.sspai.com/12/26/2024/article/da5f44ee1206b5c68988f5eb198d0a39.jpeg",
          "publishedAt": "20241226T07:00:00Z",
          "content": "Home Assistant Home Assistant Home Assistant\r\n Home Assistant 2024 Home Assistant Home Assistant \r\nHome Assistant \r\nHome Assistant HAHome Assistant Apple Google Home \r\n Home Assistant Apple Google Ho… [+8479 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Hwupgrade.it"
          },
          "author": null,
          "title": "Spendere bene i buoni Amazon con le offerte: da 19 in su, ecco tutti gli sconti imperdibili, aggiornatissimi!",
          "description": "Ecco tutte le offerte Amazon aggiornate a partire da 19: sono ottime idee o per spendere i buoni Amazon ricevuti a Natale, o per acquisti che sono comunque delle fantastiche occasioni di risparmio. C'è veramente di tutto.",
          "url": "https://www.hwupgrade.it/news/multimedia/spenderebeneibuoniamazonconleofferteda19insueccotuttigliscontiimperdibiliaggiornatissimi_134102.html",
          "urlToImage": "https://www.hwupgrade.it/i/n/amazon_money_720.jpg",
          "publishedAt": "20241226T07:01:01Z",
          "content": "Questo caricatore può fornire fino a \r\n220W complessivi e fino a 65W su 2 porte in contemporanea, ed è del tutto adatto ad alimentare e caricare la \r\nbatteria di moltissimi portatili, compresi molti … [+7778 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Sapo.pt"
          },
          "author": "Pedro Simões",
          "title": "A Apple prepara um motor de pesquisa? Tudo pode ter sido revelado agora",
          "description": "Há muito que se fala que a Apple poderá ter o seu motor de pesquisa a ser preparado. Por diversas vezes surgiram informações e provas de que isso era real, mas agora tudo poderá...",
          "url": "https://pplware.sapo.pt/apple/aapplepreparaummotordepesquisatudopodetersidoreveladoagora/",
          "urlToImage": "https://pplware.sapo.pt/wpcontent/uploads/2024/12/pesquisa_apple_1.jpg",
          "publishedAt": "20241226T08:00:14Z",
          "content": "Há muito que se fala que a Apple poderá ter o seu motor de pesquisa a ser preparado. Por diversas vezes surgiram informações e provas de que isso era real, mas agora tudo poderá ter sido esclarecido.… [+2334 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "InfoQ.com"
          },
          "author": "Christopher Luu",
          "title": "Presentation: Serverdriven UI for Mobile and Beyond",
          "description": "Christopher Luu discusses what problems they were trying to solve with ServerDriven UI, how they extended their solution beyond mobile, what kinds of issues still persist, and their future outlook. By Christopher Luu",
          "url": "https://www.infoq.com/presentations/serveruimobile/",
          "urlToImage": "https://res.infoq.com/presentations/serveruimobile/en/mediumimage/ChristopherLuumedium1733828126120.jpeg",
          "publishedAt": "20241226T09:56:00Z",
          "content": "Transcript\r\nLuu: My name is Christopher Luu. I do work at Netflix. I work on the growth engineering team. What that means is that we work on the customer lifecycle, anything that happens for Netflix … [+42203 chars]"
      },
      {
          "source": {
              "id": "nbcnews",
              "name": "NBC News"
          },
          "author": "David Ingram",
          "title": "Trump is surrounding himself with a tightknit group of rightwing tech barons",
          "description": "Presidentelect Donald Trump has surrounded himself with a tightknit group of wealthy tech barons who will help define his second term in the White House.",
          "url": "https://www.nbcnews.com/tech/technews/mappingtrumpsconnectionstechsrightwingbrotherhoodrcna180693",
          "urlToImage": "https://mediacldnry.snbcnews.com/image/upload/t_nbcnewsfp1200630,f_auto,q_auto:best/rockcms/202411/241126trumpstechconnectionsfeaturelra2a394.jpg",
          "publishedAt": "20241226T07:29:43Z",
          "content": "Theyve turned profits into power, said Rob Lalka, author of the book The Venture Alchemists, which came out this year and profiled many of the figures who are headed into the administration. \r\nLalka,… [+10094 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Vedomosti.ru"
          },
          "author": null,
          "title": "Apple объяснила удаление приложений СМИ положениями законодательства РФ",
          "description": "",
          "url": "https://www.vedomosti.ru/technology/news/2024/12/26/1083814appleobyasnilaudalenieprilozhenii",
          "urlToImage": "https://sharing.vedomosti.ru/1735185818/vedomosti.ru/technology/news/2024/12/26/1083814appleobyasnilaudalenieprilozhenii.jpg",
          "publishedAt": "20241226T04:03:38Z",
          "content": "vedomosti.ru\r\n, , , ,  . \r\n ( , , «», ). \r\n  «2», vedomosti.ru\r\n © , / 7712108141/771501001, 1027739124775, 127018, . , ... , . , . 3, . 1 19992024"
      },
      {
          "source": {
              "id": null,
              "name": "Iphones.ru"
          },
          "author": "Артём Баусов",
          "title": "МТС: родители стали чаще дарить свои смартфоны детям",
          "description": "МТС проанализировала использование смартфонов, зарегистрированных в её сети за последние три года. Выяснилось, что в 2024 году родители подарили своим детям на 20% больше своих смартфонов по сравнению с 2023 годом. Эксперты компании объясняют это несколькими …",
          "url": "https://www.iphones.ru/iNotes/mtsroditelistalichashchedaritsvoismartfonydetyam",
          "urlToImage": "https://www.iphones.ru/wpcontent/plugins/wonderm00nssimplefacebookopengraphtags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwpcontent%2Fuploads%2F2024%2F12%2FIMG_8960.jpeg",
          "publishedAt": "20241226T07:51:28Z",
          "content": ", . , 2024 20% 2023 .\r\n . , , .\r\n, , .\r\n5 , \r\n1. iPhone 11: 3,8%2. iPhone 7: 2,2%3. Redmi 9A: 1,9%4. iPhone XR: 1,9%5. iPhone X: 1,4%\r\n1. Xiaomi: 24%2. Apple: 23%3. Samsung: 17%4. Huawei: 10%5. Re… [+58 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Expansion.com"
          },
          "author": "expansion.com",
          "title": "La Primera de Expansión sobre BBVA, Sabadell, capital riesgo, Acciona, Sacyr y Decathlon",
          "description": "También hablaremos sobre el capital riesgo, que sufre un gran atasco de 9,4 billones de euros en empresas sin vender y sobre Hacienda, que seguirá teniendo margen para vigilar...",
          "url": "https://www.expansion.com/podcasts/laprimeradeexpansion/2024/12/26/676cefdb468aeba93c8b457e.html",
          "urlToImage": "https://phantomexpansion.unidadeditorial.es/b6bdda346be461bb3df7e7d99d451fbe/f/webp/assets/multimedia/imagenes/2024/12/26/17351928577978.jpg",
          "publishedAt": "20241226T06:30:13Z",
          "content": "Este jueves les contamos que BBVA y Sabadell tienen 3.800 millones de euros para disparar los dividendos en la opa.También hablaremos sobre el capital riesgo, que sufre un gran atasco de 9,4 billones… [+829 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Screen Rant"
          },
          "author": "Graeme Guttmann",
          "title": "Squid Game Season 2 Review: Netflix's HighStakes Epic Takes Its Action To Bold New Heights",
          "description": "Squid Game season 2 introduces new dynamics with engrossing new set pieces, and proves that three years was worth the wait for another round.",
          "url": "https://screenrant.com/squidgameseason2tvreview/",
          "urlToImage": "https://static1.srcdn.com/wordpress/wpcontent/uploads/2024/12/gihunlooksdirectlyatasquidgameguardasweseetheguardinhispinkoutfitfrombehindinsquidgameseason2.jpg",
          "publishedAt": "20241226T08:01:17Z",
          "content": "When Squid Game season 2 premieres, it will have been over three years since the first season hit Netflix like a freight train. It sounds outrageous the streamer waited this long to follow up the int… [+4566 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Screen Rant"
          },
          "author": "Greg MacArthur",
          "title": "Squid Game Season 2 Cast & Character Guide",
          "description": "Squid Game season 2 sees the return of several key season 1 characters and also introduces many new additions in brand new supporting roles.",
          "url": "https://screenrant.com/squidgameseason2castcharactersguide/",
          "urlToImage": "https://static1.srcdn.com/wordpress/wpcontent/uploads/2024/12/imageryfromsquidgameseason24.jpg",
          "publishedAt": "20241226T04:50:17Z",
          "content": "Squid Gameseason 2 sees the return of several key season 1 characters and also introduces many new additions. After becoming Netflix's mostwatched series of all time with its September 2021 premiere… [+7845 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ipadizate.com"
          },
          "author": "Ángel Roca",
          "title": "¿Por qué Apple no ha lanzado un buscador? Estos son los tres motivos oficiales",
          "description": "Durante años se ha rumoreado sobre la posibilidad de que Apple lance su propio buscador como alternativa a Google. Una opción que sería muy interesante y que Apple podría expandir rápidamente entre todos sus millones de usuarios. Sin embargo, esto nunca ha su…",
          "url": "https://ipadizate.com/apple/porqueapplenohalanzadounbuscadorestossonlostresmotivosoficiales",
          "urlToImage": "https://ipadizate.com/hero/2024/12/buscadorapple.jpeg?width=1200",
          "publishedAt": "20241226T07:04:33Z",
          "content": "¿Debería Apple crear su propio buscador?\r\nDurante años se ha rumoreado sobre la posibilidad de que Apple lance su propio buscador como alternativa a Google. Una opción que sería muy interesante y que… [+3158 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T02:42:27Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T08:53:02Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T05:32:35Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T02:49:08Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T02:45:09Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T08:43:46Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T02:37:03Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T08:00:00Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T05:49:24Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "20241226T09:12:06Z",
          "content": "[Removed]"
      },
      {
          "source": {
              "id": null,
              "name": "Begeek.fr"
          },
          "author": "Benjamin",
          "title": "Apple s’invite dans le procès antitrust de Google",
          "description": "Face aux accusations de monopole portées contre Google, Apple entre dans la bataille juridique pour défendre un partenariat financier essentiel à son modèle économique.",
          "url": "https://www.begeek.fr/applesinvitedansleprocesantitrustdegoogle408901",
          "urlToImage": "https://www.begeek.fr/wpcontent/uploads/2024/12/Apple.jpg",
          "publishedAt": "20241226T07:00:04Z",
          "content": "Face aux accusations de monopole portées contre Google, Apple entre dans la bataille juridique pour défendre un partenariat financier essentiel à son modèle économique.\r\nTl;dr\r\n<ul><li>Apple intervie… [+2884 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Tabilabo.com"
          },
          "author": "TABI LABO編集部",
          "title": "ロストバゲージの不安にサヨナラ。旅の常識を変える「持ち物を探す」機能",
          "description": "ユナイテッド航空はAppleの「アイテムの位置情報を共有」機能を導入し、乗客が紛失した手荷物の位置を迅速に特定できるようにアップデート。手荷物が目的地に到着しない場合、乗客は航空会社のアプリを通じて遅延報告を行い「AirTag」を利用して位置情報を共有することができるという。",
          "url": "https://tabilabo.com/310926/wtgnomorelostbaggage",
          "urlToImage": "https://image.tabilabo.com/jp/277003/5988788100661248.jpg",
          "publishedAt": "20241226T03:00:00Z",
          "content": "TRAVEL NOIREAirTag\r\nAirTagApple\"\"AirTagDavid Kinzelman"
      },
      {
          "source": {
              "id": null,
              "name": "Iphon.fr"
          },
          "author": "Tristan Carballeda",
          "title": "Pourquoi l’année 2026 constituera un tournant pour l’iPhone",
          "description": "Apple devrait présenter un iPhone révolutionnaire en 2026, avec un design encore jamais vu.",
          "url": "https://www.iphon.fr/post/2026iphonerevolutionrumeurs",
          "urlToImage": "https://www.iphon.fr/app/uploads/2024/10/iphonese4rumeurs.jpg",
          "publishedAt": "20241226T06:16:18Z",
          "content": "Apple sort de nouveaux iPhone tous les ans, mais certains modèles marquent plus leur temps que les autres. Cela pourrait être le cas de l’iPhone 18, dont la sortie est prévue pour septembre 2026. Sel… [+1721 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Wallpaper*"
          },
          "author": "Jonathan Bell",
          "title": "Year in review: top 10 gadgets and tech of 2024, as chosen by technology editor Jonathan Bell",
          "description": "The very best of 2024’s gadget and technology launches and stories, from emerging AI to retro gaming, laser projectors and musician’s side projects",
          "url": "https://www.wallpaper.com/tech/top10gadgetsandtechof2024",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/HvybTrSP8Q3CvWh5W5cAD9120080.jpg",
          "publishedAt": "20241226T07:30:00Z",
          "content": "In the month that saw Apple Intelligence open its doors and Google DeepMind release the 2.0 version of Gemini, celebrating tech with no AI component whatsoever seems rather churlish. But 2024 wasn’t … [+3103 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Securityaffairs.com"
          },
          "author": "Pierluigi Paganini",
          "title": "Apache fixed a critical SQL Injection in Apache Traffic Control",
          "description": "Apache Software Foundation (ASF) addressed a critical SQL Injection vulnerability, tracked as CVE202445387, in Apache Traffic Control. The Apache Software Foundation (ASF) released security updates to address a critical security vulnerability, tracked as CV…",
          "url": "https://securityaffairs.com/172307/security/apachetrafficcontrolcriticalflaw.html",
          "urlToImage": "https://securityaffairs.com/wpcontent/uploads/2013/04/apachebackdoor.jpg",
          "publishedAt": "20241226T00:43:20Z",
          "content": "Apache fixed a critical SQL Injection in Apache Traffic Control\r\n | BellaCPP, Charming Kitten's BellaCiao variant written in C++\r\n | DMM Bitcoin $308M Bitcoin heist linked to North Korea\r\n | Adobe is… [+126134 chars]"
      },
      {
          "source": {
              "id": "rt",
              "name": "RT"
          },
          "author": "RT",
          "title": "Apple explains blocking VPNs and media apps in Russia",
          "description": "Apple has removed a number of apps in line with “lawful orders” from the Russian regulator, the tech giant has said Read Full Article at RT.com",
          "url": "https://www.rt.com/russia/609994appleremovingmediaappsrussia/",
          "urlToImage": "https://mf.b37mrtl.ru/files/2024.12/article/676d245285f54072d80a56fe.jpg",
          "publishedAt": "20241226T10:01:05Z",
          "content": "Apple is removing VPN services, some media apps and podcasts from the AppStore in Russia due to legal requirements. Ignoring them would hinder its operations in the country, the US tech giant has sai… [+2804 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "heise online"
          },
          "author": "Inge Schwabe",
          "title": "iPad gemeinsam nutzen: So geht's",
          "description": "Viele Familien und andere Wohngemeinschaften möchten sich ein iPad teilen. Apple sieht allerdings keinen Mehrbenutzermodus vor. Unsere Tipps helfen.",
          "url": "https://www.heise.de/ratgeber/iPadgemeinsamnutzenSogehts10183690.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/7/5/4/9/7/1/familien_ipad_aufmacher_digital098bb47ab5f0f8a3.jpg",
          "publishedAt": "20241226T07:00:00Z",
          "content": "Inhaltsverzeichnis\r\nDas iPad eignet sich hervorragend, um schnell mal was im Internet zu recherchieren, Musik und Streamingdienste gemeinsam zu nutzen und für die Termine aller Personen im Haushalt.… [+2147 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NPR"
          },
          "author": "Adrian Ma",
          "title": "How video games become more accessible (Encore)",
          "description": "Gaming provides entertainment and community for billions of people worldwide. However, video games haven't always been accessible to those with disabilities. But this is changing. Today we explain how accessibility has become an increasingly important priorit…",
          "url": "https://www.npr.org/2024/12/26/1221596349/designingdisabilityvideogamingaccessibilityencore",
          "urlToImage": "https://media.npr.org/assets/img/2024/12/18/christmas2_wide10c6d16b1fb73176407c9bbcf8eaca27efbca90e.jpg?s=1400&c=100&f=jpeg",
          "publishedAt": "20241226T08:00:59Z",
          "content": "Gaming provides entertainment and community for billions of people worldwide. However, video games haven't always been accessible to those with disabilities. But this is changing. Today we explain ho… [+499 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Amyporterfield.com"
          },
          "author": "Amy",
          "title": "#744: How to Stop People’s Opinions From Impacting Your Life with Mel Robbins",
          "description": "Listen on…     Click here to listen! Rate, Review, & Follow on Apple Podcasts “I love Amy and Online Marketing Made Easy.” \r\n\nThe post #744: How to Stop People’s Opinions From Impacting Your Life with Mel Robbins appeared first on Amy Porterfield | Online Mar…",
          "url": "https://www.amyporterfield.com/2024/12/744/",
          "urlToImage": "https://www.amyporterfield.com/wpcontent/uploads/2024/12/OMME_745_GuestSocialShare_NEW.png",
          "publishedAt": "20241226T08:01:52Z",
          "content": "Listen on…\r\n   \r\nClick here to listen!\r\nRate, Review, &amp; Follow on Apple Podcasts\r\n“I love Amy and Online Marketing Made Easy.” &lt;– If that sounds like you, please consider rating and reviewing … [+459 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Geeky Gadgets"
          },
          "author": "Roland Hutchinson",
          "title": "Is This the Apple Ring? New Leak Points to Groundbreaking Device",
          "description": "Apple, known for its innovative products and seamless ecosystem integration, is rumored to be exploring a new frontier in wearable technology: the smart ring. Reports suggest that the tech giant is developing a device that combines health tracking, activity m…",
          "url": "https://www.geekygadgets.com/isthistheappleringnewleakpointstogroundbreakingdevice/",
          "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/12/AppleRing.jpg",
          "publishedAt": "20241226T08:00:36Z",
          "content": "Apple, known for its innovative products and seamless ecosystem integration, is rumored to be exploring a new frontier in wearable technology: the smart ring. Reports suggest that the tech giant is d… [+6181 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Geeky Gadgets"
          },
          "author": "Roland Hutchinson",
          "title": "OMG! I Forgot My iPhone Passcode! Don’t Worry, Do This…",
          "description": "Forgetting your iPhone passcode can be a frustrating experience, leaving you locked out of your device and unable to access your important data. However, it’s not an insurmountable problem. Whether you’re running the latest iOS 17 or an earlier version, there…",
          "url": "https://www.geekygadgets.com/omgiforgotmyiphonepasscodedontworrydothis/",
          "urlToImage": "https://www.geekygadgets.com/wpcontent/uploads/2024/12/iPhonePasscode.jpg",
          "publishedAt": "20241226T06:00:24Z",
          "content": "Forgetting your iPhone passcode can be a frustrating experience, leaving you locked out of your device and unable to access your important data. However, it’s not an insurmountable problem. Whether y… [+6988 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Huffingtonpost.jp"
          },
          "author": "ハフポスト日本版編集部",
          "title": "NHK紅白歌合戦2024、出演者の曲順・順番一覧。Mrs. GREEN APPLE やCreepy Nutsは後半に登場",
          "description": "【こちらも読みたい】NHK紅白歌合戦2024、出場歌手の曲目一覧\r\n第75回NHK紅白歌合戦の曲順が発表されました。\r\nMrs. GREEN APPLEやこっちのけんと、BE:FIRST、Creepy Nutsなど、出場アーティストが歌う順番を紹介します。\r\n第75回NHK紅白歌合戦の曲順・出場歌手・曲目\r\n《前半》\r\nME:I「Click」\r\n天童よしみ「あんたの花道」\r\nこっちのけんと「はいよろこんで」\r\nOmoinotake「幾億光年」\r\nDaiCE「I wonder」\r\nILLIT「Magnetic」\r…",
          "url": "https://www.huffingtonpost.jp/entry/story_jp_676cae98e4b0d0ae76de0c2a",
          "urlToImage": "https://img.huffingtonpost.com/asset/676cc3dc18000014005fa620.jpeg?cache=w0POja267d&ops=1200_630",
          "publishedAt": "20241226T02:31:11Z",
          "content": "NHK2024\r\n75NHK\r\nMrs. GREEN APPLEBE:FIRSTCreepy Nuts\r\nME:IClick\r\nOmoinotake\r\nDaiCEI wonder\r\nILLITMagnetic\r\n100 KIDS SHOWILLIT IROHA  MOKANumber_iME:I KEIKO  SHIZUKU3MISIA\r\n46\r\nJO1Love seeker\r\nHY366\r\n… [+383 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Webnews.it"
          },
          "author": "Riccardo Montarini",
          "title": "App Store di Apple accusato di ospitare app inappropriate per bambini",
          "description": "App Store sotto accusa: app inadeguate classificate 12+ e persino per bimbi di 4 anni.",
          "url": "https://www.webnews.it/appstorediappleaccusatodiospitareappinappropriateperbambini/",
          "urlToImage": "https://cdn.webnews.it/XV0poMS5waAuvG87621LjRh7CY8=/1792x1024/filters:format(webp)/https://www.webnews.it/app/uploads/2024/12/app_store_bambini.jpg",
          "publishedAt": "20241226T10:00:21Z",
          "content": "L’App Store di Apple è al centro di un acceso dibattito per aver ospitato numerose app inappropriate, nonostante siano classificate come sicure per bambini a partire dai 12 anni. Un recente rapporto … [+2315 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Smzdm.com"
          },
          "author": null,
          "title": "Apple 苹果 Watch Ultra2 智能手表 GPS+蜂窝版 49mm 钛金属黑色表壳 黑色米兰尼斯表带 M 6161.51元（需用券）",
          "description": "Apple 苹果 Watch Ultra2 智能手表 GPS+蜂窝版 49mm 钛金属黑色表壳 黑色米兰尼斯表带 M 6161.51元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
          "url": "https://www.smzdm.com/p/137467411/",
          "urlToImage": "https://qny.smzdm.com/202409/10/66dfe31be4f4f1085.jpg_d250.jpg",
          "publishedAt": "20241226T01:29:55Z",
          "content": "Apple Watch Ultra 2 95% Modular Ultra 3000 \r\nApple Watch Ultra 2 S9 Apple Watch Ultra S8 60% 30%2 Apple Watch Ultra iPhone\r\nApple Watch Ultra 2 Double TapDouble Tap \r\nApple Watch Ultra 2 36 72"
      },
      {
          "source": {
              "id": null,
              "name": "Smzdm.com"
          },
          "author": null,
          "title": "Apple 苹果 Mac mini 2024款 迷你台式机 银色（M4 10+10核、核芯显卡、16GB、512GB SSD） 4799.2元",
          "description": "Apple 苹果 Mac mini 2024款 迷你台式机 银色（M4 10+10核、核芯显卡、16GB、512GB SSD） 4799.2元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
          "url": "https://www.smzdm.com/p/137464166/",
          "urlToImage": "https://qny.smzdm.com/202410/30/67219a315e5713375.png_d250.jpg",
          "publishedAt": "20241226T00:02:08Z",
          "content": "Mac mini 20241029 Mac mini M4 M4 Pro 3nm M4 M4 461010M3CPUM250%M48%25%16 120GB/s H.264HEVCProRes ProRes RAW ProRes \r\n M2 Pro M2 Pro 12 8 4 16 14 CPU + 20 GPU273GB/ s8GB16GB16GBAIAI 64GB 8TB\r\n Mac min… [+210 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Smzdm.com"
          },
          "author": null,
          "title": "Apple 苹果 Watch Series 9 智能手表 GPS+蜂窝网络款 45mm 午夜色铝金属表壳 午夜色橡胶表带 S/M MRP53CH/A 2486.51元",
          "description": "Apple 苹果 Watch Series 9 智能手表 GPS+蜂窝网络款 45mm 午夜色铝金属表壳 午夜色橡胶表带 S/M MRP53CH/A 2486.51元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
          "url": "https://www.smzdm.com/p/137509660/",
          "urlToImage": "https://y.zdmimg.com/202309/14/65026c7d112dd9240.jpg_d250.jpg",
          "publishedAt": "20241226T09:07:47Z",
          "content": "Apple Watch Series 9 Apple S9 56Series 8 60%GPU30%siriAppleiPhone\r\nApple Watch Series 9200013256G\r\nApple Watch Series 9 3618"
      },
      {
          "source": {
              "id": null,
              "name": "Smzdm.com"
          },
          "author": null,
          "title": "Apple 苹果 iPhone 16 256GB 白色 支持移动联通电信5G 双卡双待手机 6199元（需用券）",
          "description": "Apple 苹果 iPhone 16256GB 白色 支持移动联通电信5G 双卡双待手机 6199元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
          "url": "https://www.smzdm.com/p/137514123/",
          "urlToImage": "https://qny.smzdm.com/202409/10/66df4692773693034.jpg_d250.jpg",
          "publishedAt": "20241226T10:06:30Z",
          "content": "iPhone 16 iPhone 16  6.1 \r\niPhone 16   A18 3 17%A18 6 CPU 2 4  iPhone 15  CPU 30% 30%GPU iPhone 15 GPU 40%\r\niPhone 16 48MP Fusion4800120026480012002400iPhone 1612004K 60 2.6 \r\niPhone 16  Taptic Engin… [+33 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "CinemaBlend"
          },
          "author": "Carly Levy",
          "title": "Like Matthew McConaughey, Florence Pugh And More, Home Alone‘s Daniel Stern Left Hollywood. What He’s Doing Now",
          "description": "Daniel Stern’s making out like a Wet Bandit.",
          "url": "https://www.cinemablend.com/movies/likematthewmcconaugheyflorencepughhomealonedanielsternlefthollywoodwhathesdoingnow",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/5jptNdg2oHbTkZwgnFTxoP120080.jpg",
          "publishedAt": "20241226T01:26:00Z",
          "content": "Daniel Stern has been known to make audiences laugh by playing Marv in the cast of \r\nHome Alone\r\n and giving heartwarming feels as The Wonder Years’ narrator. But as time went on, the American actor … [+4267 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Predge.jp"
          },
          "author": "PR EDGE編集部",
          "title": "はじめて聴く愛娘の歌声。聴覚補助機能にフォーカスしたAppleの感動的な長尺CM",
          "description": "スマートフォンの代名詞とも言えるiPhoneからノートパソコン界の重鎮Macbook、音楽サブスクサービスのApple Musicにいたるまで、さまざまな商品とサービスを展開するアップル。そんなアップルのワイヤレスイヤホンAirpods Pro 2は、従来のノイズキャンセリング機能に加えて聴覚補助機能も兼ね備えており、普段使い以外の用途がある新世代のイヤホンとして2022年の発売以降多くのユーザーの注目を集め続けています。今年公開されたCMでは、特にその聴覚補助機能にフォーカスすることでこれまでのイヤホンの広告と…",
          "url": "https://predge.jp/306895/",
          "urlToImage": "https://predge.jp/wpcontent/uploads/2024/12/735c96939c6627036925fd3dbf5f7d83.png",
          "publishedAt": "20241226T03:00:33Z",
          "content": "iPhoneMacbookApple MusicAppleAirpods Pro 22022\r\n2024CM\r\nHeartstringsAirPods Pro 2\r\nCMApple"
      },
      {
          "source": {
              "id": null,
              "name": "Tomshardware.fr"
          },
          "author": "Charles GouinPeyrot",
          "title": "Apple toujours au top de la bourse, une valorisation bientôt inédite",
          "description": "Apple est sur le point d'atteindre une valorisation boursière encore jamais vue. Le géant américain squatte la première place à la bourse mondiale.\nL’article Apple toujours au top de la bourse, une valorisation bientôt inédite est apparu en premier sur Tom’s …",
          "url": "https://www.tomshardware.fr/appletoujoursautopdelabourseunevalorisationbientotinedite/",
          "urlToImage": "https://www.tomshardware.fr/content/uploads/sites/3/2024/12/applevalorisation4000milliards.jpg",
          "publishedAt": "20241226T07:10:00Z",
          "content": "Apple est sur le point d’atteindre une valorisation boursière encore jamais vue. Le géant américain squatte la première place à la bourse mondiale.Apple est sur le point d’atteindre une capitalisatio… [+2438 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ozbargain.com.au"
          },
          "author": "pd111",
          "title": "Up to 10% off Refurbished (Excellent Condition) iPhones @ amaysim",
          "description": "Seems to be up to 10% off on select models and capacity iPhones. Prices look on par or better than Reebelo and OzMobile.\n\nExample:\n\n\n Apple iPhone 11 Starting from $400.00 $445.00\r\n\n Apple iPhone 13 Starting from $605.00 $665.00",
          "url": "https://www.ozbargain.com.au/node/886218",
          "urlToImage": "https://files.ozbargain.com.au/n/18/886218x.jpg?h=41cc7d1f",
          "publishedAt": "20241226T00:08:06Z",
          "content": "All trademarks are owned by their respective owners.OzBargain is an independent community website which has no association with nor endorsement by the respective trademark owners.\r\nCopyright © 20062… [+32 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ozbargain.com.au"
          },
          "author": "Batman110",
          "title": "SanDisk Ultra 128GB Dual Flash Drive USBA and USBC $18.95+Shipping @Smoothsales (Price Match at JbHifi)",
          "description": "I have price matched it at jbhifi and used my $10 perks to bring it down to $8.95 click and collect.\n\nIt can be used with Android phones and USB C apple devices.",
          "url": "https://www.ozbargain.com.au/node/886277",
          "urlToImage": "https://files.ozbargain.com.au/n/77/886277l.jpg?h=a7b80faf",
          "publishedAt": "20241226T03:31:05Z",
          "content": "I have price matched it at jbhifi and used my $10 perks to bring it down to $8.95 click and collect.\r\nIt can be used with Android phones and USB C apple devices."
      },
      {
          "source": {
              "id": null,
              "name": "Ozbargain.com.au"
          },
          "author": "galileo",
          "title": "Apple Watch Ultra 2 GPS +Cellular 49mm Titanium with Trail Loop $1,149 + Delivery ($0 with Prime/ $59 Spend) @ Amazon AU",
          "description": "18% discount on the Apple Watch Ultra 2\n\nAvailable colours:\nGreen/Grey\nOrange/Beige\n\nConfiguration:\nTitanium\n\nSize:\nS/M\n\nTechnical Details\nApple Watch Ultra 2 (GPS + Cellular)\nCase Size\n49mm\nFeatures\nCarbonneutral combinations available, AlwaysOn Retina dis…",
          "url": "https://www.ozbargain.com.au/node/886294",
          "urlToImage": "https://files.ozbargain.com.au/n/94/886294l.jpg?h=7b160775",
          "publishedAt": "20241226T05:08:10Z",
          "content": "This post contains affiliate links. OzBargain might earn commissions when you click through and make purchases. Please see this page for more information.\r\n18% discount on the Apple Watch Ultra 2\r\nAv… [+742 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Ozbargain.com.au"
          },
          "author": "Apostle0748",
          "title": "10% off Airalo travel eSIM plans @Airalo Mobile",
          "description": "10% off Airalo travel mobile eSIM plans, use the code.\n\nHave used it across a few countries and haven’t had issues, one app to manage/make payments via Apple Pay/install the eSIM makes it easy to organise wherever we go.",
          "url": "https://www.ozbargain.com.au/node/886338",
          "urlToImage": "https://files.ozbargain.com.au/n/38/886338l.jpg?h=a4322699",
          "publishedAt": "20241226T09:11:17Z",
          "content": "10% off Airalo travel mobile eSIM plans, use the code.\r\nHave used it across a few countries and havent had issues, one app to manage/make payments via Apple Pay/install the eSIM makes it easy to orga… [+19 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "3dnews.ru"
          },
          "author": null,
          "title": "Apple объяснила, почему не хочет создавать собственный поисковик на замену Google",
          "description": "Недавно стало известно, что Apple намерена собственными силами защищать свои интересы в антимонопольном расследовании властей США относительно Google. Одной из причин подобной мотивации называлось отсутствие у Apple намерений создавать собственный поисковый д…",
          "url": "https://3dnews.ru/1115958/appleobyasnilapochemunegelaetsozdavatsobstvenniypoiskoviydvigok",
          "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/12/26/1115958/search_01.jpg",
          "publishedAt": "20241226T07:02:00Z",
          "content": ", Apple Google. Apple . , .\r\n: Unsplash, Souvik Banerjee\r\n, ,  Apple (Eddy Cue) . , , , Apple, .\r\n, , , Apple . , Apple , .\r\n, Apple , . Google Apple. , Google. Apple, , . 2022 Apple Google $20 A… [+21 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applech2.com"
          },
          "author": "applech2",
          "title": "Qi2ワイヤレス充電器とApple Watch充電器を搭載した折りたたみ式2in1ワイヤレス充電器「Twelve South ButterFly SE」が日本でも発売開始。",
          "description": "Qi2ワイヤレス充電器とApple Watch充電器を搭載した折りたたみ式ワイヤレス充電器「Twelve South ButterFly SE」が日本でも発売されています。詳細は以下から。 　米Twelve South […]\nThe post Qi2ワイヤレス充電器とApple Watch充電器を搭載した折りたたみ式2in1ワイヤレス充電器「Twelve South ButterFly SE」が日本でも発売開始。 first appeared on AAPL Ch..",
          "url": "https://applech2.com/archives/20241226twelvesouthbutterflysenowavailable.html",
          "urlToImage": "https://applech2.com/wpcontent/uploads/2024/12/TwelveSouthButterFlySEavailableinjapanHero.jpg",
          "publishedAt": "20241226T00:07:16Z",
          "content": "Qi2Apple WatchTwelve South ButterFly SE\r\nTwelve South202408Qi2Apple Watch2in1ButterFly SE 2in1 Qi2 Charger (TWSOT0000xx)12252in1\r\nButterFly SE is an ultra compact, 2in1 Qi2 charger that mak… [+436 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "3dnews.ru"
          },
          "author": null,
          "title": "Apple призналась, что выполняет требования российского законодательства",
          "description": "Apple по требованию Роскомнадзора начала удалять из App Store приложения VPNсервисов и СМИ, поскольку в случае неисполнения этих требований бизнес компании в стране может оказаться под угрозой. Об этом пишет РБК со ссылкой на данные организации «Репортеры бе…",
          "url": "https://3dnews.ru/1115963/appleudalyaetizrossiyskogoappstorevpnprilogeniyavprotivnomsluchaeploshchadkumogutzablokirovat",
          "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/12/26/1115963/830.jpg",
          "publishedAt": "20241226T08:00:00Z",
          "content": "Apple App Store VPN , . « ».\r\n: Amin Zabardast / Unsplash\r\n« , Apple App Store . , », — Apple.\r\n , « » Apple « » , « ». , Apple : « ?»  ( 2022 ), «The Insider Live» ( The Insider , ) «» ( « » ). ,… [+43 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Agektmr.com"
          },
          "author": "Tender Surrender",
          "title": "パスキーとうまく付き合うコツ",
          "description": "最近、パスキーが使いづらい、という声を目にします。作ったはずのパスキーが見つからないために、使いたいサービスにログインできず困った、という人の投稿も何度か観測しました。 そこでこのブログ記事では、どうしてそういうことが起こってしまうのか、どうすればそういう状況を回避できるのか、ユーザーが取れる対策...",
          "url": "https://blog.agektmr.com/2024/12/passkeystips.html",
          "urlToImage": "https://blog.agektmr.com/images/2024/passkeystips.jpg",
          "publishedAt": "20241226T02:15:26Z",
          "content": "OSRelying Party RP\r\n<ol><li></li><li></li><li></li><li></li><li></li></ol>1. #\r\nWindows Edge Android Edge Windows Edge Windows Hello Android Edge Google \r\n2. #\r\n Chrome Chrome Google Google Google Ch… [+2395 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Applech2.com"
          },
          "author": "applech2",
          "title": "セブンイレブンやファミリーマート、ローソンでApple Gift CardやApple Accountチャージキャンペーンが開催中。",
          "description": "セブンイレブンやファミリーマート、ローソンでApple Gift CardやApple Accountチャージキャンペーンが開催されています。詳細は以下から。 　アメリカのApple Storeではクリスマスセールを終 […]\nThe post セブンイレブンやファミリーマート、ローソンでApple Gift CardやApple Accountチャージキャンペーンが開催中。 first appeared on AAPL Ch..",
          "url": "https://applech2.com/archives/20241226applegiftcardandaccountcampaign.html",
          "urlToImage": "https://applech2.com/wpcontent/uploads/2024/12/AppleGiftCardandAccountCampaignDec2024Hero2.jpg",
          "publishedAt": "20241226T01:29:37Z",
          "content": "Apple Gift CardApple Account\r\nApple StoreApple Store(2025)Apple StoreApple Gift CardApple Account5~10%\r\n(2024)Apple\r\n320241223()20250105()Apple Gift Cardnanaco5,000(10)5%\r\nApple Account10%/giftee Box… [+17 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "netzwelt"
          },
          "author": "Katharina Grothkopp",
          "title": "Intergalaktisches Weihnachten heute im TV: Epische Schlachten und dunkle Geheimnisse versüßen \"Star Wars\"Fans die Weihnachtszeit!",
          "description": "Heute läuft im TV die achte Episode der \"Star Wars\"Saga, die Luke Skywalker aus seinem Ruhestand holt. Der epische SciFiKracher ist ein wahres Highlight!\nDieser Artikel wurde einsortiert unter \nProSieben,Entertainment,Serien,Disney+,Neu im TV: Alle Show u…",
          "url": "https://www.netzwelt.de/news/237216intergalaktischesweihnachtenheutetvepischeschlachtendunklegeheimnisseversuessenstarwarsfansweihnachtszeit.html",
          "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1600_sh900_sx0_sy41_sr16x9_nu2/picture/original/2017/10/starwarsletztenjedilaeuftende2017deutschenkinosdisneyveroeffentlichterstengrossentrailerstartetvorverkauftickets219689.jpeg",
          "publishedAt": "20241226T05:00:00Z",
          "content": "ENTERTAINMENT\r\nHeute läuft im TV die achte Episode der \"Star Wars\"Saga, die Luke Skywalker aus seinem Ruhestand holt. Der epische SciFiKracher ist ein wahres Highlight!\r\n\"Star Wars  Die letzten J… [+3453 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "netzwelt"
          },
          "author": "Katharina Grothkopp",
          "title": "Heute im TV gibt es sexy Monster: Die berühmteste Kreatur der Filmgeschichte ist sinnlich und attraktiv!",
          "description": "Heute seht ihr im TV ein Monster mit \"Sinnlichkeit.\" In den Neunzigerjahren war Roland Emmerich der König des USBlockbusterkinos und brachte 1998 ein japanisches KultMonster in die USA, das besonders sexy sein sollte. \nDieser Artikel wurde einsortiert unter…",
          "url": "https://www.netzwelt.de/news/237166heutetvgibtsexymonsterberuehmtestekreaturfilmgeschichtesinnlichattraktiv.html",
          "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw3840_sh2160_sx0_sy0_sr16x9_nu2/picture/original/2024/04/godzilla401840.jpeg",
          "publishedAt": "20241226T06:00:00Z",
          "content": "ENTERTAINMENT\r\nHeute seht ihr im TV ein Monster mit \"Sinnlichkeit.\" In den Neunzigerjahren war Roland Emmerich der König des USBlockbusterkinos und brachte 1998 ein japanisches KultMonster in die U… [+3695 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "netzwelt"
          },
          "author": "Katharina Grothkopp",
          "title": "Heute im TV ist Henry Cavill ein Geheimagent: Chance verpasst  so hätte er sich als James Bond gemacht",
          "description": "Heute im TV beweist Henry Cavill, dass er das Zeug zum neuen James Bond hätte. Coole Agenten, spannende Action und lässige Sprüche sorgen in diesem Filmhit mit Starbesetzung für beste Unterhaltung. \nDieser Artikel wurde einsortiert unter \nSat.1,Netflix,Entert…",
          "url": "https://www.netzwelt.de/news/237115heutetvhenrycavillgeheimagentchanceverpasstsohaettejamesbondgemacht.html",
          "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1536_sh864_sx0_sy80_sr16x9_nu2/picture/original/2024/05/codenameuncle405129.jpeg",
          "publishedAt": "20241226T08:15:00Z",
          "content": "ENTERTAINMENT\r\nHeute im TV beweist Henry Cavill, dass er das Zeug zum neuen James Bond hätte. Coole Agenten, spannende Action und lässige Sprüche sorgen in diesem Filmhit mit Starbesetzung für beste … [+2982 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "netzwelt"
          },
          "author": "Katharina Grothkopp",
          "title": "Heute im TV kämpfen Literaturfiguren gegen das Böse: Aber Sean Connery hat die Nase voll davon!",
          "description": "Bei dieser Comicverfilmung, die heute im TV läuft, hatte nicht nur das Publikum keinen Spaß, auch Hauptdarsteller Sean Connery verlor für immer die Leidenschaft an der Schauspielerei.\nDieser Artikel wurde einsortiert unter \nEntertainment.",
          "url": "https://www.netzwelt.de/news/237164heutetvkaempfenliteraturfigurengegenboeseseanconnerynasevolldavon.html",
          "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1600_sh900_sx0_sy0_sr16x9_nu2/picture/original/2024/05/ligaaussergewoehnlichengentlemen403377.jpeg",
          "publishedAt": "20241226T06:15:00Z",
          "content": "ENTERTAINMENT\r\nBei dieser Comicverfilmung, die heute im TV läuft, hatte nicht nur das Publikum keinen Spaß, auch Hauptdarsteller Sean Connery verlor für immer die Leidenschaft an der Schauspielerei.\r… [+5488 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Svetandroida.cz"
          },
          "author": "Jana Skálová",
          "title": "Povánoční výprodej na DATARTu: PlayStation 5, iPhone, kávovary i elektrické zubní kartáčky s velkými slevami",
          "description": "Povánoční výprodeje právě startují DATART spustil lavinu slev už nyní Výhodně můžete nakoupit mobily, kávovary i další elektroniku Mnoho prodejců elektroniky spouští už předvánoční výprodeje. Hned po nich následují povánoční slevové akce. Na eshopu DATARTu m…",
          "url": "https://www.svetandroida.cz/povanocnivyprodejdatartslevy/",
          "urlToImage": "https://www.svetandroida.cz/media/2024/12/datartslevy.webp",
          "publishedAt": "20241226T05:00:22Z",
          "content": "<ul><li>Povánoní výprodeje práv startují</li><li>DATART spustil lavinu slev u nyní</li><li>Výhodn mete nakoupit mobily, kávovary i dalí elektroniku</li></ul>Mnoho prodejc elektroniky spoutí u pedváno… [+3694 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Www.abc.es"
          },
          "author": "(abc)",
          "title": "Beirut, «la Suiza de Oriente» de los años 70",
          "description": "Beirut fue, hasta los años 70, el centro financiero de Oriente Próximo. Algo impensable a día de hoy. La capital de Líbano fue bautizada como «la Suiza de Oriente», pero quedó arrasado por más de una década de guerra civil. A pesar de eso consiguió reconstrui…",
          "url": "https://www.abc.es/voz/noticiasdeldia/reportajesobrebeirutresiliencia20241226201019nt.html",
          "urlToImage": "https://s2.abcstatics.com/abc/www/multimedia/voz/2024/12/26/plantillapodcastboletowebU42755418237rVt1024x512@diario_abc.jpg",
          "publishedAt": "20241226T05:15:55Z",
          "content": "Beirut fue, hasta los años 70, el centro financiero de Oriente Próximo. Algo impensable a día de hoy. \r\nLa capital de Líbano fue bautizada como «la Suiza de Oriente», pero quedó arrasado por más de u… [+379 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Cnews.ru"
          },
          "author": null,
          "title": "«МегаФон»: россияне выбирают онлайнбанки",
          "description": "Владельцы смартфонов Apple намного активнее пользуются услугами онлайнбанкинга, чем владельцы гаджетов на базе...",
          "url": "https://www.cnews.ru/news/line/20241226_megafon_rossiyane_vybirayut",
          "urlToImage": "https://www.cnews.ru/img/design2008/logocnews_f.png",
          "publishedAt": "20241226T05:30:00Z",
          "content": "Apple , Android, 2024 . 2023 . , , , . CNews «».\r\n ( ), , 2024 . 15% 2023 .. «» .\r\n Google Play AppStore ,  , , . , 6170 23%, 70  42%, .\r\n  iPhone. 2024 . 2023 . Android, , 13%.\r\n   2024 . 91… [+165 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Cossa.ru"
          },
          "author": null,
          "title": "Топ слов года у российских телеграмблогеров",
          "description": "«Человек» стало главным словом среди российских блогеров по итогам 2024 года.",
          "url": "https://www.cossa.ru/news/337548/",
          "urlToImage": "http://www.cossa.ru/upload/iblock/0ce/ny46w2b0q2g6mp7x8q92tvmb7yb4nwe4/image2.png",
          "publishedAt": "20241226T09:14:00Z",
          "content": "Vinci Agency   Social Stars 1000 \r\n  2024 .   ,   «».\r\n20\r\n , «», «», «», «», «», «», «», «», «», «», «», «», «», «», «», «», «»  «».\r\n 2024   ,  ,      . :  ,  , \r\n  ,  ,   Apple.\r\n<ol><li>     :… [+750 chars]"
      }
  ]
  constructor(){
    super();
    console.log("hello");
    this.state={
      articles: this.article,
      loading: false

    }
  }
  render() {
    return (
        <div className= "container my-3">
            <h1>News 24/7 Tops Headlines</h1>
            <div className= "row">
                <div className="col-md-4">
             <NewsItem Title="mytile" Description="mydescription"/>
             </div>
                <div className="col-md-4">
             <NewsItem Title="mytile" Description="mydescription"/>
            </div>
                 <div className="col-md-4">
            <NewsItem Title="mytile" Description="mydescription"/>
            </div>
                    
 </div>
      </div>
      
    )
  }
}

export default News
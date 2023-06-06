const dataByState = [];
// load data
d3.json('data/team.json', type).then(res => {
  //const dataByState = {}; // 用於存儲根據地區分組的資料

  // 遍歷 CSV 數據，將資料按照地區分組
  res.forEach(d => {
    const state = d.state_abb;
    const team = d.full_name;
    if (!dataByState[state]) {
      dataByState[state] = [];
    }
    dataByState[state].push(team);
  });
  console.log(dataByState);
  console.log(dataByState["AZ"][0]);


});

//----------------------------------------------------------------------

function type(d) {
  return {
    state_abb: d.state_abb.toString(),
    full_name: d.full_name.toString()
  }
}


var simplemaps_usmap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",

    //State defaults
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#88A4BC",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    //manual_zoom: "yes",
    //back_image: "no",
    //arrow_box: "no",
    //navigation_size: "40",
    //navigation_color: "#f7f7f7",
    //navigation_border_color: "#636363",
    //initial_back: "no",
    //initial_zoom: -1,
    //initial_zoom_solo: "no",
    //region_opacity: 1,
    //region_hover_opacity: 0.6,
    //zoom_out_incrementally: "yes",
    //zoom_percentage: 0.99,
    //zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    //link_text: "View Website"
  },

  // load data



  state_specific: {
    //HI: {
    //name: "Hawaii",
    //description: "default",
    //color: "default",
    //hover_color: "default",
    //url: "default"
    //},

    FL: {
      name: "Florida",
      description: "<br>Miami Heat 邁阿密熱火 (MIA):<br><img src='Image/miami-heat-logo-vector.png' width=60 height=60 ><br>是一支位於美國佛羅里達州邁阿密的職業籃球隊，分屬於NBA東區的東南組，主場為FTX球館。球隊成立於1988年，在2006年、2012年和2013年獲得NBA總冠軍。2012-2013 NBA例行賽自2013年2月1日不敵溜馬後，近兩個月未嘗一敗，熱火連贏27場，成為歷史上最長連勝記錄第2名。<br><br> Orlando Magic 奧蘭多魔術 (ORL):<br><img src='Image/orlando-magic-logo-vector.png' width=60 height=60 ><br>是一支位於美國佛羅里達州奧蘭多的NBA籃球隊，分屬於東區的東南組，主場為安麗中心。球隊的擁有者是理查·狄維士(已故)，現任總教練是賈邁爾·莫斯利。",
      //description:dataByState[0]['FL'][0],
      color: "#98002E",
      hover_color: "#000000",
      url: "https://www.nba.com/heat",
    },
    NY: {
      name: "New York",
      description: "<br>Brooklyn Nets 布魯克林籃網 (BKN):<br>\
      <img src='Image/brooklyn-nets-logo-vector.png' width=60 height=60 ><br>是一支位於美國紐約州紐約市布魯克林區的NBA籃球隊，分屬於東區的大西洋組，主場為巴克萊中心，現任球隊老闆是加拿大及中華民國籍商人蔡崇信。球隊曾在1974年和1976年奪得ABA總冠軍。在1976年加入NBA聯盟後，最佳成績是在2002年和2003年的季後賽獲得東區的冠軍，殺入總決賽，但未能奪得總冠軍。球隊的最大宿敵是相同位於紐約市的紐約尼克(New York Knicks)<br>\
      <br> New York Knicks 紐約尼克隊 (NYK):\
      <br><img src='Image/new-york-knicks-logo-vector.png' width=60 height=60 ><br>是一支隸屬於紐約市的 NBA 籃球隊。成立於 1946 年並加入 NBA，同時也是創始球隊之一，主場在麥迪遜花園廣場。在威利斯·瑞德、華特·弗雷澤、戴夫·狄博學、厄爾·孟洛和比爾·布拉德利等優秀選手拼搏下， 曾於 1970 年與1973 年奪得 NBA 總冠軍。",
      color: "#006bb6",
      hover_color: "#f58426",
      url: "https://www.nba.com/knicks"
    },
    PA: {
      name: "Pennsylvania",
      description: "<br>Philadelphia 76ers 費城76人 (PHI):<br>\
      <img src='Image/philadelphia-76ers-logo-vector.png' width=60 height=60 ><br>\
      是一支位於美國賓夕法尼亞州費城的NBA籃球隊，分屬於東區的大西洋組，主場為富國銀行中心球場。費城76人是NBA中的老牌球隊，球隊前身為國家籃球聯盟（NBL）的雪城國民（Syracuse Nationals），成立於1946年，隨著國家籃球聯盟與美國籃球協會（BAA）的合併，於1949年加入合併後的NBA。雪城國民於1963年遷至費城，改易新名。此隊名得名於1776年簽署獨立宣言的人。球隊經常被簡稱為「76人」（Sixers）。",
      color: "#ED174C",
      hover_color: "#006BB6",
      url: "https://www.nba.com/sixers"
    },
    OH: {
      name: "Ohio",
      description: "<br>Cleveland Cavaliers 克里夫蘭騎士 (Cavs) :<br>\
      <img src='Image/cleveland-cavaliers-logo-vector.png' width=60 height=60 ><br>\
      是位於美國俄亥俄州克里夫蘭的NBA球隊，成立於1970年，主球館為速貸球館。<br>\
      2006-07年，騎士隊首次進入NBA總決賽，被聖安東尼奧馬刺以直落4橫掃。<br>\
      2007-08年，騎士隊再度進入季後賽，在首輪面對華盛頓巫師，以4:2擊敗對手。在東區準決賽面對波士頓塞爾提克，騎士隊和綠衫軍打滿7場，但在第7戰不敵綠衫軍，未能再進一步。<br>2008-09年，騎士隊以NBA戰績為全聯盟第一的狀況進入季後賽，騎士隊以不敗的姿態先擊退底特律活塞，再擊敗亞特蘭大老鷹率先晉級東區NBA決賽，決賽對手是奧蘭多魔術，可惜在首輪和第2輪騎士隊折損許多球員，導致不幸在東區決賽2:4敗給魔術隊。<br>2009年5月，黃健華所在投資集團收購了騎士隊15%的股份，成為騎士隊和速貸球館的所有人之一。<br>Cleveland Cavaliers的世仇球隊有聖安東尼奧馬刺、波士頓塞爾提克、芝加哥公牛、奧蘭多魔術、底特律活塞 。",
      color: "#860038",
      hover_color: "#FDBB30",
      url: "dhttps://www.nba.com/cavaliers"
    },
    IN: {
      name: "Indiana",
      description: "<br>Indiana Pacers 印第安納溜馬 (IND) :<br>\
      <img src='Image/indiana-pacers-logo-vector.png' width=60 height=60 ><br>是一支以印第安納州印第安納波利斯為基地的NBA籃球隊，印第安納州亦被譽為美國的傳統籃球之都。。球隊身處東岸中部賽區，主場館是銀行家生命球館，球隊主顏色是藍色、金色、銀色及白色。現時的教練是Frank Vogel，球隊擁有者為Pacers Sports & Entertainment、Melvin Simon和Herb Simon。",
      color: "#002D62",
      hover_color: "#FDBB30",
      url: "https://www.nba.com/pacers"
    },
    IL: {
      name: "Illinois",
      description: "<br>Chicago Bulls 芝加哥公牛隊 (CHI):<br>\
      <img src='Image/chicago-bulls-logo-vector.png' width=60 height=60 ><br>成立於1966年，目前所在城市是美國伊利諾州芝加哥（Chicago, Illinois），主場為聯合中心球館（United Center）。芝加哥是肉食加工業發達的城市，公牛對人們來說是力量的象徵，所以球隊以此命名。",
      color: "#CE1141",
      hover_color: "#000000",
      url: "https://www.nba.com/bulls"
    },
    WI: {
      name: "Wisconsin",
      description: "<br>Milwaukee Bucks 密爾瓦基公鹿 (MIL) :<br>\
      <img src='Image/milwaukee-bucks-logo-vector.png' width=60 height=60 ><br>是一支位於美國威斯康辛州密爾瓦基的職業籃球隊，分屬於NBA東區中央組，主場為第一服務廣場 。公鹿1968年成立（當年NBA另於鳳凰城擴編球隊）。僅加盟三個球季，公鹿1970-71賽季在卡里姆·阿布都-賈霸及奧斯卡·羅伯森率領下奪得總冠軍。50年後的2020-21賽季在揚尼斯-安戴德昆波的率領下奪得隊史第二座總冠軍2014年，公鹿當時的擁有者赫伯·科爾（同時為該州參議員）與億萬富翁衛斯特利·艾登斯和馬克·拉斯里達成協議，以5.5億美元的價格轉讓球隊。",
      color: "#00471B",
      hover_color: "#EEE1C6",
      url: "https://www.nba.com/bucks"
    },
    NC: {
      name: "North Carolina",
      description: "<br>Charlotte Hornets 夏洛特黃蜂 (CHA):<br>\
      <img src='Image/chr.png' width=60 height=60 ><br>是一支位於美國北卡羅來納州夏洛特的NBA籃球隊，分屬於東區的東南組，主場為光譜中心。球隊目前的擁有者為NBA傳奇球星麥可·喬丹。原先的夏洛特黃蜂成立於1988年，於2002年遷至紐奧良，改名為紐奧良黃蜂。2004年，聯盟於夏洛特成立一支新球隊：夏洛特山貓（Charlotte Bobcats）。2013年，紐奧良黃蜂改名紐奧良鵜鶘，願將黃蜂隊隊名與原夏洛特黃蜂在1988年至2002年的球季記錄，回歸至夏洛特。2014年，山貓隊正式更名為夏洛特黃蜂，並接收球季記錄，自2014-15年賽季起以新隊名出賽。",
      color: "#00788C",
      hover_color: "#1D1160",
      url: "https://www.nba.com/hornets"
    },
    MA: {
      name: "Massachusetts",
      description: "<br>Boston Celtics 波士頓塞爾提克 (BOS):<br>\
      <img src='Image/boston-celtics-logo-vector.png' width=60 height=60 ><br>是位於馬薩諸塞州波士頓的一支美國職業籃球隊。球隊作為東部聯盟大西洋賽區參加美國職業籃球聯賽的比賽。與洛杉磯湖人同為17座NBA冠軍金盃的隊伍，與湖人的綠黃對決中又以大鳥與魔術師的交鋒最為經典。",
      color: "#007A33",
      hover_color: "#BA9653",
      url: "https://www.nba.com/celtics"
    },
    TN: {
      name: "Tennessee",
      description: "<br>Memphis Grizzlies 曼非斯灰熊 (MEM) :<br>\
      <img src='Image/memphis-grizzlies-logo-vector.png' width=60 height=60 ><br>是一支位於美國田納西州曼非斯的NBA籃球隊，分屬於西區的西南組，主場為聯邦快遞廣場。現任總教練為泰勒·詹金斯。1995年，球隊創立於溫哥華，命名溫哥華灰熊（Vancouver Grizzlies），是第二支非美國本土的NBA球隊（第一支是多倫多暴龍）。2001年，球隊遷至美國曼非斯，更名為現今的曼非斯灰熊。之後非美國本土的NBA球隊只剩下多倫多暴龍。",
      color: "#5D76A9",
      hover_color: "#12173F",
      url: "https://www.nba.com/grizzlies"
    },
    GA: {
      name: "Georgia",
      description: "<br>Atlanta Hawks 亞特蘭大老鷹 (ATL):<br>\
      <img src='Image/atlanta-hawks-logo-vector.png' width=60 height=60 ><br>部區: 東區<br>分區: 東南組<br>建隊時間: 1946年<br>球隊歷史:	<br>三城黑鷹隊(1946年至1951年)<br>密爾瓦基鷹隊(1951年至1955年)<br>聖路易鷹隊(1955年至1968年)<br>亞特蘭大老鷹隊(1968年至今)<br>球館:	菲利普球場<br>所在城市:	喬治亞州亞特蘭大市<br>球隊顏色:	海軍藍、紅、銀和白<br>擁有者:	Atlanta Spirit, LLC<br>總教練:	Mike Woodson<br>NBA總冠軍:	1次(1958年)<br>部區冠軍:	4次 (1957年, 1958年, 1960年, 1961年)<br>分區冠軍:	14次<br>(1956年, 1957年, 1958年, 1959年, 1960年, 1961年,<br>1963年, 1964年, 1966年, 1967年, 1970年,1980年, 1987年, 1994年)",
      color: "#C8102E",
      hover_color: "#ffffff",
      url: "https://www.nba.com/hawks"
    },
    LA: {
      name: "Louisiana",
      description: "<br>New Orleans Pelicans 紐奧良鵜鶘 (NOP):<br>\
      <img src='Image/New_Orleans_Pelicans_logo.png' width=60 height=60 ><br>是一支位於美國路易斯安那州紐奧良的NBA籃球隊，分屬於西區的西南組，主場為冰沙國王中心。目前球隊的擁有者是汽車業界大亨蓋爾·本森，現任總教練是威利·格林。紐奧良鵜鶘的前身為紐奧良黃蜂（New Orleans Hornets），為2002年夏洛特黃蜂遷至紐奧良時所改名成立的。2005年，由於紐奧良受到颶風卡崔娜侵襲而嚴重損毀，球隊一度遷移主場至奧克拉荷馬城，直到2007年才重返紐奧良。2013年4月，球隊更名為現今的紐奧良鵜鶘。2014年，球隊將原先所擁有的夏洛特黃蜂隊名與1988年至2002年的球季記錄，回歸至夏洛特，由夏洛特山貓接收。",
      color: "#0C2340",
      hover_color: "#85714D",
      url: "https://www.nba.com/pelicans"
    },
    MN: {
      name: "Minnesota",
      description: "<br>Minnesota Timberwolves 明尼蘇達灰狼 (MIN):<br>\
      <img src='Image/minnesota-timberwolves-logo-vector.png' width=60 height=60 ><br>是一支位於美國明尼蘇達州明尼亞波利斯的NBA籃球隊，分屬於西區的西北組，主場為標靶中心。",
      color: "#236192",
      hover_color: "#0C2340",
      url: "https://www.nba.com/timberwolves"
    },
    OK: {
      name: "Oklahoma",
      description: "<br>Oklahoma City Thunder 奧克拉荷馬雷霆 (OKC):<br>\
      <img src='Image/oklahoma-city-thunder-logo-vector.png' width=60 height=60 ><br>是一支美國NBA籃球隊，位於奧克拉荷馬州奧克拉荷馬城，前身是名牌球隊西雅圖超音速(1967-2007)。球隊身處西岸西北賽區，主場館是切薩皮克能源球場，主顏色是橙、淡藍、海軍藍、金。球隊擁有人是Clay Bennett，主教練是Scott Brooks。球隊在1967年10月以超音速之名成立於西雅圖，是西雅圖最早成立的職業體育球會。1975年首次打入NBA季後賽，1979年更首次獲得NBA總冠軍，亦是該隊目前為止唯一一個NBA總冠軍。",
      color: "#ef3b24",
      hover_color: "#007ac1",
      url: "https://www.nba.com/thunder"
    },
    TX: {
      name: "Texas",
      description: "<br>Dallas Mavericks 達拉斯小牛隊 (DAL) :<br><img src='Image/dallas-mavericks-logo-vector.png' width=60 height=60 ><br>以美國達拉斯為基地的NBA球隊。老闆是馬克·庫班（Mark Cuban）。1980年創隊，2006年隊史上首度晉身NBA總決賽。2011年球會再度晉身NBA總決賽，奪得隊史上首度冠軍。球隊名「Dallas Mavericks」裡的「Mavericks」意思是「未經烙印的小牛」，亦可指「（兩個或以上）意見思想與主流不同的人」。\
      <br><br>Houston Rockets 休士頓火箭 (HOU):<br><img src='Image/houston-rockets-logo-vector.png' width=60 height=60 ><br>是一支位於美國德克薩斯州休士頓職業籃球隊，分屬於NBA西區西南組，主場為豐田中心球館。球隊建立於1967年的聖地牙哥，原名聖地牙哥火箭（San Diego Rockets）。休士頓火箭於1994年、1995年連續兩年奪得NBA總冠軍，當時球隊主力中鋒「大夢」哈基姆·歐拉朱萬，更於1993-1994年賽季成為了NBA歷史上唯一包攬賽季例行賽MVP、最佳防守球員、總決賽MVP球員。\
      <br><br>San Antonio Spurs 聖安東尼奧馬刺隊 (SAS) :<br><img src='Image/san-antonio-spurs-logo-vector.png' width=60 height=60 ><br>球隊成立於1967年，目前所在地區是美國德克薩斯州聖安東尼奧市，主場為AT&T中心球館。馬刺隊前身為達拉斯矮樹叢隊，因為德克薩斯州和新墨西哥州矮樹叢非常多、生命力頑強，故以此為名。矮樹叢隊起初是美國籃球協會(American Basketball Association，ABA)的12支球隊之一，1973年時因主場遷移到聖安東尼奧而改名為馬刺隊。",
      color: "#0064B1",
      hover_color: "#BBC4CA",
      url: "https://www.nba.com/team/1610612742/mavericks"
    },
    CO: {
      name: "Colorado",
      description: "<br>Denver Nuggets 丹佛金塊 (DEN):<br>\
      <img src='Image/denver-nuggets-logo-vector.png' width=60 height=60 ><br>\
      是一支位於美國科羅拉多州丹佛的職業籃球隊，分屬於NBA西區的西北組，主場為百事中心。球隊在1967–1976年加入ABA聯盟，1976年起加入NBA。歷史上曾在1975-76賽季打進ABA總決賽，1977-78、1984-85、2008-09、2019-20、2022-23五度打進NBA西區決賽，2022-23 首次打進NBA總決賽。",
      color: "#FEC524",
      hover_color: "#0E2240",
      url: "https://www.nba.com/team/1610612743/nuggets"
    },
    UT: {
      name: "Utah",
      description: "<br>Utah Jazz 猶他爵士 (UTA):<br>\
      <img src='Image/utah-jazz-logo-vector.png' width=60 height=60 ><br>是一支位於美國猶他州鹽湖城的NBA籃球隊，分屬於西區的西北組，主場為Vivint智慧家庭體育館。 球隊於1974年在紐奧良成立，命名紐奧良爵士（New Orleans Jazz），成為NBA的第18支球隊",
      color: "#002B5C",
      hover_color: "#F9A01B",
      url: "https://www.nba.com/jazz"
    },
    AZ: {
      name: "Arizona",
      description: "<br>Phoenix Suns 鳳凰城太陽 (PHX):<br>\
      <img src='Image/phoenix-suns-logo-vector.png' width=60 height=60 ><br>是一支位於美國亞利桑那州鳳凰城的職業籃球隊，分屬於NBA西區太平洋組，是該組唯一不在加利福尼亞州的球隊，主場為足跡中心。太陽成立於1968年（NBA當年另於密爾瓦基擴編球隊），球隊初期表現平庸。但1975-76球季，迪克·范阿斯代爾、阿爾萬·亞當斯及保羅·衛斯特特法爾的組合令太陽成功晉級總冠軍賽，最終輸給波士頓塞爾蒂克，此被認為是NBA冷門紀錄之一。未能衝擊總冠軍後，1980年代的太陽以沃特·戴維斯為重建基礎，直至1988年透過交易獲得凱文·強森。史蒂夫·奈許2004年重返太陽。球隊在奈許與阿瑪雷·斯塔德邁爾及尚恩·馬里昂的搭配打出活躍的球風，不僅重回季後賽列強，2003-04賽季更追平隊史勝場紀錄。然而太陽仍無法跨越晉級總冠軍賽的高牆，被迫再次進入重建。共有10位入選籃球名人堂的球員曾效力過太陽，其中查爾斯·巴克利及史蒂夫·奈許更在效力期間榮獲最有價值球員。",
      color: "#E56020",
      hover_color: "#000000",
      url: "https://www.nba.com/suns/"
    },
    OR: {
      name: "Oregon",
      description: "<br>Portland Trail Blazers 波特蘭拓荒者 (POR):<br>\
      <img src='Image/portland-trail-blazers-logo-vector.png' width=60 height=60 ><br>是一支位於美國奧勒岡州波特蘭的NBA籃球隊，分屬於西區的西北組，主場為摩達中心。開拓者隊在1976-77 NBA賽季第一次殺入季後賽便奪得球隊目前歷史上唯一的一座NBA總冠軍獎盃。此後開拓者隊也曾保持西部強隊的身份，從1990年至2004年，開拓者隊年年進入季後賽，特別在2000年NBA季後賽西部決賽中，開拓者隊與洛杉磯湖人大戰7場成為經典。",
      color: "#E03A3E",
      hover_color: "#000000",
      url: "https://www.nba.com/blazers"
    },
    WA: {
      name: "Washington",
      description: "<br>Washington Wizards 華盛頓巫師 (WAS):<br>\
      <img src='Image/washington-wizards-logo-vector.png' width=60 height=60 ><br>是一支位於美國華盛頓哥倫比亞特區的NBA籃球隊，分屬於東區的東南組，主場為第一資本競技館。球隊成立於1961年，名為芝加哥包裝工（Chicago Packers），一年後更名芝加哥西風（Chicago Zephyrs）。後來更改為巴爾的摩子彈（Baltimore Bullets），1973年球隊遷到華盛頓特區，更名為首都子彈（Capital Bullets），1974年又改為華盛頓子彈（Washington Bullets），並在1977-78 NBA賽季奪得隊史唯一的NBA總冠軍。1997年，由於華盛頓特區黑槍氾濫的情形嚴重，當時的老闆認為華盛頓子彈的名稱過於暴力，為了不想與該區高罪案率拉上關係，於是決定更改隊名為華盛頓巫師（Washington Wizards）至今。該隊也是NBA改名最多的球隊，一共使用過六個隊名。",
      color: "#002B5C",
      hover_color: "#E31837",
      url: "https://www.nba.com/wizards"
    },
    CA: {
      name: "California",
      description: "<br>Golden State Warrior 金州勇士 (GSW):<br><img src='Image/golden-state-warriors-logo-vector.png' width=60 height=60 ><br>是一支位於美國加利福尼亞州舊金山的美國職業籃球隊，分屬於NBA聯盟西區聯盟的太平洋組，主場球館為大通銀行中心。球隊的格言為「全隊即為一城」（The whole team is a city）。勇士隊是現今少有的名稱不包含主場所在城市的隊伍，而以加州的暱名「金州」（Golden State）為名來代表為全加州的球隊。前身為費城勇士，曾於1947年贏得聯盟第一個賽季的總冠軍。1962年，更名為舊金山勇士；1971年，球隊改名為如今的金州勇士。球隊一共獲得過7次聯盟總冠軍。2015-16賽季金州勇士取得73勝9負，成為NBA史上單季例行賽最佳戰績的隊伍。\
      <br><br>Los Angeles Clipper 洛杉磯快艇 (LAC):<br><img src='Image/los-angeles-clippers-logo-vector.png' width=60 height=60 ><br>是一支位於美國加利福尼亞州洛杉磯的NBA籃球隊，分屬於西區的太平洋組，主場為加密貨幣網體育館，預計2024年將遷往英格伍德。球隊在1970年成立於水牛城，1978年遷至聖地牙哥，1984年再遷至現今的洛杉磯。2014年8月13日，前微軟CEO史蒂夫·鮑爾默成功收購洛杉磯快艇，成為球隊新任老闆。\
      <br><br>Los Angeles Lakers 洛杉磯湖人 (LAL):<br><img src='Image/los-angeles-lakers-logo-vector.png' width=60 height=60 ><br>是一支位於美國加利福尼亞州洛杉磯的職業籃球隊，隸屬於NBA西區太平洋組，主場為加密貨幣網體育館。球隊前身為「明尼亞波利斯湖人」（Minneapolis Lakers）。至今共奪得17次總冠軍，與東區球隊波士頓塞爾提克並列NBA第一。",
      color: "#1D428A",
      hover_color: "#FFC72C",
      url: "https://www.nba.com/warriors/"
    },
    MI: {
      name: "Michigan",
      description: "<br>Detroit Pistons 底特律活塞 (DET):<br>\
      <img src='Image/detroit-pistons-logo-vector.png' width=60 height=60 ><br>是一支位於美國密西根州底特律的NBA職業籃球隊，分屬於東區的中央組，主場為小凱薩體育館。球隊成立於1941年，於1948年加入NBA聯盟，曾在1989年、1990年與2004年獲得NBA總冠軍。",
      color: "#C8102E",
      hover_color: "#1D42BA",
      url: "https://www.nba.com/pistons"
    },
  },

  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};



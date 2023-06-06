// Data tools
function formatTicks(d) {
  return d3.format("~s")(d)
}

const parseNA = (string) => (string === "NA" ? undefined : string);
const parseDate = (string) => d3.timeParse("%Y-%m-%d")(string);
var teamData = [
  { team: 'ATL', photo: 'Image/atlanta-hawks-logo-vector.png', full_name: 'Atlanta Hawks' },
  { team: 'BKN', photo: 'Image/brooklyn-nets-logo-vector.png', full_name: 'Brooklyn Nets' },
  { team: 'BOS', photo: 'Image/boston-celtics-logo-vector.png', full_name: 'Boston Celtics' },
  { team: 'CHA', photo: 'Image/chr.png', full_name: 'Charlotte Hornets' },
  { team: 'CHH', photo: 'Image/chr.png', full_name: 'Charlotte Hornets' },
  { team: 'CHI', photo: 'Image/chicago-bulls-logo-vector.png', full_name: 'Chicago Bulls' },
  { team: 'SEA', photo: 'Image/Seattle_SuperSonics_logo.png', full_name: 'Seattle SuperSonics' },
  { team: 'CLE', photo: 'Image/cleveland-cavaliers-logo-vector.png', full_name: 'Cleveland Cavaliers' },
  { team: 'DAL', photo: 'Image/dallas-mavericks-logo-vector.png', full_name: 'Dallas Mavericks' },
  { team: 'DEN', photo: 'Image/denver-nuggets-logo-vector.png', full_name: 'Denver Nuggets' },
  { team: 'DET', photo: 'Image/detroit-pistons-logo-vector.png', full_name: 'Detroit Pistons' },
  { team: 'GSW', photo: 'Image/golden-state-warriors-logo-vector.png', full_name: 'Golden State Warriors' },
  { team: 'HOU', photo: 'Image/houston-rockets-logo-vector.png', full_name: 'Houston Rockets' },
  { team: 'IND', photo: 'Image/indiana-pacers-logo-vector.png', full_name: 'Indiana Pacers' },
  { team: 'LAC', photo: 'Image/los-angeles-clippers-logo-vector.png', full_name: 'LA Clippers' },
  { team: 'LAL', photo: 'Image/los-angeles-lakers-logo-vector.png', full_name: 'Los Angeles Lakers' },
  { team: 'MEM', photo: 'Image/memphis-grizzlies-logo-vector.png', full_name: 'Memphis Grizzlies' },
  { team: 'VAN', photo: 'Image/Vancouver_Grizzlies_logo.png', full_name: 'Vancouver Grizzlies' },
  { team: 'MIA', photo: 'Image/miami-heat-logo-vector.png', full_name: 'Miami Heat' },
  { team: 'MIL', photo: 'Image/milwaukee-bucks-logo-vector.png', full_name: 'Milwaukee Bucks' },
  { team: 'MIN', photo: 'Image/minnesota-timberwolves-logo-vector.png', full_name: 'Minnesota Timberwolves' },
  { team: 'NOP', photo: 'Image/new-orleans-pelicans-logo-vector.png', full_name: 'New Orleans Pelicans' },
  { team: 'NYK', photo: 'Image/new-york-knicks-logo-vector.png', full_name: 'New York Knicks' },
  { team: 'NOP', photo: 'Image/New_Orleans_Pelicans_logo.png', full_name: 'New Orleans Pelicans' },
  { team: 'NJN', photo: 'Image/New-Jersey-Nets.jpg', full_name: 'New Jersey Nets' },
  { team: 'OKC', photo: 'Image/oklahoma-city-thunder-logo-vector.png', full_name: 'Oklahoma City Thunder' },
  { team: 'ORL', photo: 'Image/orlando-magic-logo-vector.png', full_name: 'Orlando Magic' },
  { team: 'PHI', photo: 'Image/philadelphia-76ers-logo-vector.png', full_name: 'Philadelphia 76ers' },
  { team: 'PHX', photo: 'Image/phoenix-suns-logo-vector.png', full_name: 'Phoenix Suns' },
  { team: 'POR', photo: 'Image/portland-trail-blazers-logo-vector.png', full_name: 'Portland Trail Blazers' },
  { team: 'SAC', photo: 'Image/sacramento-kings-logo-vector.png', full_name: 'Sacramento Kings' },
  { team: 'SAS', photo: 'Image/san-antonio-spurs-logo-vector.png', full_name: 'San Antonio Spurs' },
  { team: 'TOR', photo: 'Image/toronto-raptors-logo-vector.png', full_name: 'Toronto Raptors' },
  { team: 'UTA', photo: 'Image/utah-jazz-logo-vector.png', full_name: 'Utah Jazz' },
  { team: 'WAS', photo: 'Image/washington-wizards-logo-vector.png', full_name: 'Washington Wizards' }
];

// for season
function type(d) {
  return {
    season_id: +d.season_id,
    team_id_home: parseNA(d.team_id_home),
    team_abbreviation_home: parseNA(d.team_abbreviation_home),
    team_name_home: parseNA(d.team_name_home),
    game_id: parseNA(d.game_id),
    game_date: parseDate(d.game_date),
    matchup_home: parseNA(d.matchup_home),
    wl_home: parseNA(d.wl_home),
    min_home: parseNA(d.min_home),
    fgm_home: +d.fgm_home,
    fga_home: +d.fga_home,
    fg_pct_home: +d.fg_pct_home,
    fg3m_home: +d.fg3m_home,
    fg3a_home: +d.fg3a_home,
    fg3_pct_home: +d.fg3_pct_home,
    ftm_home: +d.ftm_home,
    fta_home: +d.fta_home,
    ft_pct_home: +d.ft_pct_home,
    oreb_home: +d.oreb_home,
    dreb_home: +d.dreb_home,
    reb_home: +d.reb_home,
    ast_home: +d.ast_home,
    stl_home: +d.stl_home,
    blk_home: +d.blk_home,
    tov_home: +d.tov_home,
    pf_home: +d.pf_home,
    pts_home: +d.pts_home,
    plus_minus_home: +d.plus_minus_home,
    video_available_home: parseNA(d.video_available_home),
    team_id_away: parseNA(d.team_id_away),
    team_abbreviation_away: parseNA(d.team_abbreviation_away),
    team_name_away: parseNA(d.team_name_away),
    matchup_away: parseNA(d.matchup_away),
    wl_away: parseNA(d.wl_away),
    fgm_away: +d.fgm_away,
    fga_away: +d.fga_away,
    fg_pct_away: +d.fg_pct_away,
    fg3m_away: +d.fg3m_away,
    fg3a_away: +d.fg3a_away,
    fg3_pct_away: +d.fg3_pct_away,
    ftm_away: +d.ftm_away,
    fta_away: +d.fta_away,
    ft_pct_away: +d.ft_pct_away,
    oreb_away: +d.oreb_away,
    dreb_away: +d.dreb_away,
    reb_away: +d.reb_away,
    ast_away: +d.ast_away,
    stl_away: +d.stl_away,
    blk_away: +d.blk_away,
    tov_away: +d.tov_away,
    pf_away: +d.pf_away,
    pts_away: +d.pts_away,
    plus_minus_away: +d.plus_minus_away,
    video_available_away: parseNA(d.video_available_away),
  };
}

// for team menu
var allSeasons = [];
var allTeams = ["-------"];
function menu(data) {


  data.forEach(function (d) {
    var season = d.season;
    var teamAbbreviation = d.team_abbreviation;
    if (!allTeams.includes(teamAbbreviation)) {
      allTeams.push(teamAbbreviation);
    }
    if (!allSeasons.includes(season) && allTeams.includes(teamAbbreviation)) {
      allSeasons.push(season);
    }
  });
  allTeams = allTeams.sort(d3.ascending);     // 依首字母排序
  console.log(allTeams)
  console.log(allSeasons)

}

// Data Selection
function filterData(data, selectedYear) {
  var year = +selectedYear + 20000

  return data.filter((d) => {
    // 檢查 season_id 是否為 21998 以上
    if (parseInt(d.season_id) == year && d.team_abbreviation_home && d.wl_home && d.team_abbreviation_away && d.wl_away
      && d.fgm_home && d.fg3m_home && d.ftm_home && d.reb_home && d.stl_home && d.ast_home
      && d.blk_home && d.pts_home
      && d.fgm_away && d.fg3m_away && d.ftm_away && d.reb_away && d.stl_away && d.ast_away
      && d.blk_away && d.pts_away
    ) {
      return true;
    }
    return false;
  });
}

// Data Integration : home
function prepareBarChartData(data) {
  console.log(data);
  const dataMap = d3.rollup(
    data,
    (v) => {
      // 首先我們要計算主場勝率的次數
      const homeWins = v.filter(
        (leaf) => {
          // 如果 wl_home 為 'W'，表示主場勝利；如果 wl_home 為 'L'，表示主場失敗
          // 如果當場主場勝利，則返回 1，否則返回 0
          return leaf.wl_home === 'W' ? 1 : 0;
        }
      ).length;
      // 因為要平均，因此要計算隊伍在主場比賽的總次數
      const homeGames = v.length;
      // 算主場勝率，即為勝場數/總次數
      const homeWinPercentage = (homeWins / homeGames) * 100; // 將勝率轉換成百分比形式
      return homeWinPercentage;

    },
    (d) => d.team_abbreviation_home // 以主場隊伍名稱作為分組的 key
  );

  const barChartData = Array.from(dataMap, ([key, value]) => ({
    team: key,
    win_percentage: value,
  }));

  // 根據勝率排序
  barChartData.sort((a, b) => b.win_percentage - a.win_percentage);

  return barChartData;
}

// Data Integration : away
function prepareBarChartData2(data) {
  console.log(data);
  const dataMap = d3.rollup(
    data,
    (v) => {

      const awayWins = v.filter(
        (leaf) => {

          return leaf.wl_away === 'W' ? 1 : 0;
        }
      ).length;
      const awayGames = v.length;
      const awayWinPercentage = (awayWins / awayGames) * 100; // 將勝率轉換成百分比形式
      return awayWinPercentage;

    },
    (d) => d.team_abbreviation_away
  );
  const barChartData = Array.from(dataMap, ([key, value]) => ({
    team2: key,
    win_percentage2: value,
  }));

  // 根據勝率排序
  barChartData.sort((a, b) => b.win_percentage2 - a.win_percentage2);

  return barChartData;
}

// 計算總勝率
function calculateWinPercentage(data) {
  const teamData = {};

  data.forEach((d) => {
    // 計算主場勝利次數
    if (d.wl_home === 'W') {
      if (teamData[d.team_abbreviation_home]) {
        teamData[d.team_abbreviation_home].wins += 1;
      } else {
        teamData[d.team_abbreviation_home] = { wins: 1, games: 0 };
      }
    }

    // 計算客場勝利次數
    if (d.wl_away === 'W') {
      if (teamData[d.team_abbreviation_away]) {
        teamData[d.team_abbreviation_away].wins += 1;
      } else {
        teamData[d.team_abbreviation_away] = { wins: 1, games: 0 };
      }
    }

    // 計算總場次數
    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].games += 1;
    } else {
      teamData[d.team_abbreviation_home] = { wins: 0, games: 1 };
    }

    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].games += 1;
    } else {
      teamData[d.team_abbreviation_away] = { wins: 0, games: 1 };
    }
  });

  const winPercentageData = Object.entries(teamData).map(([team, { wins, games }]) => ({
    team4: team,
    win_percentage3: (wins / games) * 100
  }));
  winPercentageData.sort((a, b) => b.win_percentage3 - a.win_percentage3);
  return winPercentageData;
}

// fgm
function calculateAverageFGM(data) {
  const teamData = {};

  data.forEach((d) => {
    // 計算主場FGM數量
    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].fgm_home += d.fgm_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { fgm_home: d.fgm_home, games_home: 1, fgm_away: 0, games_away: 0 };
    }

    // 計算客場FGM數量
    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].fgm_away += d.fgm_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { fgm_home: 0, games_home: 0, fgm_away: d.fgm_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { fgm_home, games_home, fgm_away, games_away }]) => ({
    team3: team,
    average_fgm: (fgm_home + fgm_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_fgm - a.average_fgm);
  return averageFGMData;
}

// fg3m
function calculateAverageFG3M(data) {
  const teamData = {};

  data.forEach((d) => {
    // 計算主場FGM數量
    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].fg3m_home += d.fg3m_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { fg3m_home: d.fg3m_home, games_home: 1, fg3m_away: 0, games_away: 0 };
    }

    // 計算客場FGM數量
    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].fg3m_away += d.fg3m_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { fg3m_home: 0, games_home: 0, fg3m_away: d.fg3m_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { fg3m_home, games_home, fg3m_away, games_away }]) => ({
    team5: team,
    average_fg3m: ((fg3m_home + fg3m_away) / (games_home + games_away)).toFixed(2)
  }));

  averageFGMData.sort((a, b) => b.average_fg3m - a.average_fg3m);
  return averageFGMData;
}
// pts
function calculateAveragepts(data) {
  const teamData = {};

  data.forEach((d) => {
    // 計算主場pts數量
    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].pts_home += d.pts_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { pts_home: d.pts_home, games_home: 1, pts_away: 0, games_away: 0 };
    }

    // 計算客場pts數量
    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].pts_away += d.pts_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { pts_home: 0, games_home: 0, pts_away: d.pts_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { pts_home, games_home, pts_away, games_away }]) => ({
    team6: team,
    average_pts: (pts_home + pts_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_pts - a.average_pts);
  return averageFGMData;
}
// stl
function calculateAveragestl(data) {
  const teamData = {};

  data.forEach((d) => {

    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].stl_home += d.stl_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { stl_home: d.stl_home, games_home: 1, stl_away: 0, games_away: 0 };
    }


    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].stl_away += d.stl_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { stl_home: 0, games_home: 0, stl_away: d.stl_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { stl_home, games_home, stl_away, games_away }]) => ({
    team7: team,
    average_stl: (stl_home + stl_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_stl - a.average_stl);
  return averageFGMData;
}
// reb
function calculateAveragereb(data) {
  const teamData = {};

  data.forEach((d) => {

    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].reb_home += d.reb_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { reb_home: d.reb_home, games_home: 1, reb_away: 0, games_away: 0 };
    }


    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].reb_away += d.reb_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { reb_home: 0, games_home: 0, reb_away: d.reb_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { reb_home, games_home, reb_away, games_away }]) => ({
    team8: team,
    average_reb: (reb_home + reb_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_reb - a.average_reb);
  return averageFGMData;
}
// ast
function calculateAverageast(data) {
  const teamData = {};

  data.forEach((d) => {

    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].ast_home += d.ast_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { ast_home: d.ast_home, games_home: 1, ast_away: 0, games_away: 0 };
    }


    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].ast_away += d.ast_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { ast_home: 0, games_home: 0, ast_away: d.ast_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { ast_home, games_home, ast_away, games_away }]) => ({
    team9: team,
    average_ast: (ast_home + ast_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_ast - a.average_ast);
  return averageFGMData;
}
// blk
function calculateAverageblk(data) {
  const teamData = {};

  data.forEach((d) => {

    if (teamData[d.team_abbreviation_home]) {
      teamData[d.team_abbreviation_home].blk_home += d.blk_home;
      teamData[d.team_abbreviation_home].games_home += 1;
    } else {
      teamData[d.team_abbreviation_home] = { blk_home: d.blk_home, games_home: 1, blk_away: 0, games_away: 0 };
    }


    if (teamData[d.team_abbreviation_away]) {
      teamData[d.team_abbreviation_away].blk_away += d.blk_away;
      teamData[d.team_abbreviation_away].games_away += 1;
    } else {
      teamData[d.team_abbreviation_away] = { blk_home: 0, games_home: 0, blk_away: d.blk_away, games_away: 1 };
    }
  });

  const averageFGMData = Object.entries(teamData).map(([team, { blk_home, games_home, blk_away, games_away }]) => ({
    team10: team,
    average_blk: (blk_home + blk_away) / (games_home + games_away)
  }));

  averageFGMData.sort((a, b) => b.average_blk - a.average_blk);
  return averageFGMData;
}


// 四條的群組圖
function setupCanvas3(averageSTLData, averageREBData, averageASTData, averageBLKData, selectedYear) {
  const svg_width = 1200;
  const svg_height = 600;
  const chart_margin = { top: 80, right: 80, bottom: 80, left: 80 };
  const chart_width = svg_width - (chart_margin.left + chart_margin.right);
  const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);

  d3.select('.bar-chart-container').selectAll('*').remove();

  var this_svg = d3.select('.bar-chart-container').append('svg')
    .attr('width', svg_width)
    .attr('height', svg_height)
    .style('background-color', '#1B4965');

  var chart_group = this_svg.append('g')
    .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

  const combinedData = averageREBData.map(reb => {
    const matchingStl = averageSTLData.find(stl => reb.team8 === stl.team7);
    const matchingAst = averageASTData.find(ast => ast.team9 === reb.team8);
    const matchingBlk = averageBLKData.find(blk => blk.team10 === reb.team8);

    return {
      team: reb.team8,
      averageREB: reb.average_reb,
      averageSTL: matchingStl ? matchingStl.average_stl : 0,
      averageAST: matchingAst ? matchingAst.average_ast : 0,
      averageBLK: matchingBlk ? matchingBlk.average_blk : 0
    };
  });

  x = d3.scaleBand()
    .domain(combinedData.map(d => d.team))
    .rangeRound([0, chart_width])
    .padding(0.1);

  y = d3.scaleLinear()
    .domain([0, d3.max(combinedData, d => Math.max(d.averageSTL, d.averageREB, d.averageAST, d.averageBLK))])
    .range([chart_height, 0]);

    const header = this_svg.append('g').attr('class', 'bar-header')
    .attr('transform', `translate(0,${-chart_margin.top / 2})`)
    .append('text');
  header.append('tspan').text('NBA Rebounds/Assists/Steals/Blocks Per Game')
    .attr('x', 80).attr('y', 80)
    .style('font-weight', 'bold')
    .style('fill', 'white');
  
  header.append('tspan').text(selectedYear)
    .attr('x', 80).attr('y', 95)
    .attr('fill', 'white')
    .style('font-size', '0.8em');
  
  const infoIcon = header.append('tspan')
    .text('ℹ️')
    .attr('x', 480).attr('y', 80)
    .style('fill', '#ffffff')
    .style('cursor', 'pointer');
  
  infoIcon.on('mouseover', function () {

  
    const tooltip = this_svg.append('g')
      .attr('class', 'tooltip')
      .attr('transform', `translate(0,${-chart_margin.top / 2})`)

    tooltip.append('text')
      .attr('x', 500)
      .attr('y', 80)
      .text('Hover over team names for more details')
      .attr('fill', 'white')
      .style('text-anchor', 'start');
  });
  

  infoIcon.on('mouseout', function () {
    d3.select('.tooltip').remove();
  });
  var xAxis = d3.axisBottom(x).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(12);

  chart_group.append("g")
    .attr("transform", `translate(0, ${chart_height})`)
    .attr('class', 'x-axis')
    .call(xAxis)
    .selectAll("text")
    .style("fill", "#ffffff");

  chart_group.append("g")
    .call(yAxis)
    .selectAll("text")
    .style("fill", "#ffffff");

  chart_group.selectAll(".domain")
    .style("stroke", "#ffffff");

  chart_group.selectAll('.x-axis .tick')
    .on('mouseover', function (event, d) {
      const selectedTeam = d;
      const selectedData = combinedData.find(item => item.team === selectedTeam);
      const team = teamData.find(item => item.team === selectedTeam);

      const tooltipBoxWidth = 200;
      const tooltipBoxHeight = 250;

      const tooltip = this_svg.append('g')
        .attr('class', 'tooltip')
        .attr('transform', `translate(${x(d) + 3 * x.bandwidth()}, 360)`);

      const tooltipBox = tooltip.append('rect')
        .attr('x', -tooltipBoxWidth / 2)
        .attr('y', -tooltipBoxHeight - 10)
        .attr('width', tooltipBoxWidth)
        .attr('height', tooltipBoxHeight)
        .attr('rx', 5)
        .attr('ry', 5)
        .style('fill', 'rgba(0, 0, 0, 0.8)');

      tooltip.append('image')
        .attr('x', -tooltipBoxWidth / 2 + tooltipBoxWidth / 2 - 45)
        .attr('y', -tooltipBoxHeight + 10)
        .attr('width', 90)
        .attr('height', 90)
        .attr('xlink:href', team.photo);

      tooltip.append('text')
        .attr('x', -tooltipBoxWidth / 2 + tooltipBoxWidth / 2)
        .attr('y', -tooltipBoxHeight + 120)
        .text(`${team.full_name}`)
        .attr('fill', 'white')
        .style('text-anchor', 'middle')
        .style('font-weight', 'bold');

      tooltip.append('text')
        .attr('x', -tooltipBoxWidth / 2 + 10)
        .attr('y', -tooltipBoxHeight + 150)
        .text(`REB: ${selectedData.averageREB.toFixed(2)}`)
        .attr('fill', 'white')
        .style('text-anchor', 'start');

      tooltip.append('text')
        .attr('x', -tooltipBoxWidth / 2 + 10)
        .attr('y', -tooltipBoxHeight + 170)
        .text(`AST: ${selectedData.averageAST.toFixed(2)}`)
        .attr('fill', 'white')
        .style('text-anchor', 'start');

      tooltip.append('text')
        .attr('x', -tooltipBoxWidth / 2 + 10)
        .attr('y', -tooltipBoxHeight + 190)
        .text(`STL: ${selectedData.averageSTL.toFixed(2)}`)
        .attr('fill', 'white')
        .style('text-anchor', 'start');

      tooltip.append('text')
        .attr('x', -tooltipBoxWidth / 2 + 10)
        .attr('y', -tooltipBoxHeight + 210)
        .text(`BLK: ${selectedData.averageBLK.toFixed(2)}`)
        .attr('fill', 'white')
        .style('text-anchor', 'start');
    })
    .on('mouseout', function () {
      d3.select('.tooltip').remove();
    });

  const stlCheckbox = document.getElementById('stlCheckbox');
  const blkCheckbox = document.getElementById('blkCheckbox');
  const rebCheckbox = document.getElementById('rebCheckbox');
  const astCheckbox = document.getElementById('astCheckbox');
  stlCheckbox.checked = false;
  blkCheckbox.checked = false;
  rebCheckbox.checked = false;
  astCheckbox.checked = false;
  let showstl = false;
  let showblk = false;
  let showreb = false;
  let showast = false;

  const bars = chart_group.selectAll('.bar')
    .data(combinedData)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${x(d.team)}, 0)`);




  bars.append('rect')
    .attr('class', 'stl-bar')
    .attr('x', x.bandwidth() / 2)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 4)
    .attr('height', 0)
    .style('fill', '#6ED9E2')
    .transition()
    .duration(1000)
    .attr('y', d => showstl ? y(d.averageSTL) : y(0))
    .attr('height', d => showstl ? chart_height - y(d.averagestl) : 0)
    .on('start', function () {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6);
          this_svg.append('text')
            .attr('class', 'tooltip')
            .attr('x', x(d.team) + 80 + x.bandwidth() / 2)
            .attr('y', y(d.averageSTL) + 65)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(`${d.averageSTL.toFixed(2)}`);
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1);
          this_svg.select('.tooltip').remove();
        });
    });

  bars.append('rect')
    .attr('class', 'reb-bar')
    .attr('x', 0)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 4)
    .attr('height', 0)
    .style('fill', '#00CEDE')
    .transition()
    .duration(1000)
    .attr('y', d => showreb ? y(d.averageREB) : y(0))
    .attr('height', d => showreb ? chart_height - y(d.averageREB) : 0)
    .on('start', function () {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6);
          this_svg.append('text')
            .attr('class', 'tooltip')
            .attr('x', x(d.team) + 80)
            .attr('y', y(d.averageREB) + 65)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(`${d.averageREB.toFixed(2)}`);
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1);
          this_svg.select('.tooltip').remove();
        });
    });

  bars.append('rect')
    .attr('class', 'ast-bar')
    .attr('x', x.bandwidth() / 4)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 4)
    .attr('height', 0)
    .style('fill', '#0099A7')
    .transition()
    .duration(1000)
    .attr('y', d => showast ? y(d.averageAST) : y(0))
    .attr('height', d => showast ? chart_height - y(d.averageAST) : 0)
    .on('start', function () {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6);
          this_svg.append('text')
            .attr('class', 'tooltip')
            .attr('x', x(d.team) + 80 + x.bandwidth() / 4)
            .attr('y', y(d.averageAST) + 65)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(`${d.averageAST.toFixed(2)}`);
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1);
          this_svg.select('.tooltip').remove();
        });
    });

  bars.append('rect')
    .attr('class', 'blk-bar')
    .attr('x', (x.bandwidth() / 4) * 3)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 4)
    .attr('height', 0)
    .style('fill', 'orange')
    .transition()
    .duration(1000)
    .attr('y', d => showblk ? y(d.averageBLK) : y(0))
    .attr('height', d => showblk ? chart_height - y(d.averageBLK) : 0)
    .on('start', function () {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6);
          this_svg.append('text')
            .attr('class', 'tooltip')
            .attr('x', x(d.team) + 80 + (x.bandwidth() / 4) * 3)
            .attr('y', y(d.averageBLK) + 65)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(`${d.averageBLK.toFixed(2)}`);
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1);
          this_svg.select('.tooltip').remove();
        });
    });

  const sortButtons = d3.select('.bar-chart-container').append('div')
    .attr('class', 'sort-buttons');

  const sortOptions = ['REB', 'AST', 'STL', 'BLK'];

  sortButtons.selectAll('button')
    .data(sortOptions)
    .enter()
    .append('button')
    .text(d => d)
    .on('click', function (event, d) {

      sortBars(d);

      sortButtons.selectAll('button')
        .style('background-color', null)
        .style('color', 'black');

      d3.select(this)
        .style('background-color', 'gray')
        .style('color', 'white');

    });


  function sortBars(sortOption) {
    combinedData.sort((a, b) => b['average' + sortOption] - a['average' + sortOption]);

    var xDomain;

    if (sortOption === 'STL') {
      xDomain = averageSTLData.map(d => d.team7);
    } else if (sortOption === 'REB') {
      xDomain = averageREBData.map(d => d.team8);
    } else if (sortOption === 'BLK') {
      xDomain = averageBLKData.map(d => d.team10);
    } else if (sortOption === 'AST') {
      xDomain = averageASTData.map(d => d.team9);
    }

    x = d3.scaleBand()
      .domain(xDomain)
      .rangeRound([0, chart_width])
      .padding(0.1);

    xAxis = d3.axisBottom(x).tickSizeOuter(0);

    chart_group.select('.x-axis')
      .transition()
      .duration(1000)
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    chart_group.select('.x-axis')
      .selectAll("text")
      .text(d => d);

    bars.transition()
      .duration(1000)
      .attr('transform', d => `translate(${x(d.team)}, 0)`);

    bars.select('.blk-bar')
      .transition()
      .duration(1000)
      .attr('x', (x.bandwidth() / 4) * 3);

    bars.select('.stl-bar')
      .transition()
      .duration(1000)
      .attr('x', x.bandwidth() / 2);

    bars.select('.reb-bar')
      .transition()
      .duration(1000)
      .attr('x', 0);

    bars.select('.ast-bar')
      .transition()
      .duration(1000)
      .attr('x', x.bandwidth() / 4);
  }


  const legendGroup = chart_group.append('g')
    .attr('class', 'legend-group')
    .style('display', 'none');

  const legend = legendGroup.append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${chart_width - 150},${-chart_margin.top / 2})`);

  const legendData = [
    { class: 'legend-reb', color: '#00CEDE', label: 'Rebounds' },
    { class: 'legend-ast', color: '#0099A7', label: 'Assists' },
    { class: 'legend-stl', color: '#6ED9E2', label: 'Steals' },
    { class: 'legend-blk', color: 'orange', label: 'Blocks' }
  ];

  const legends = legend.selectAll('.legend')
    .data(legendData)
    .enter()
    .append('g')
    .attr('class', d => d.class)
    .attr('transform', (d, i) => `translate(0, ${i * 20})`)


  legends.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 15)
    .attr('height', 15)
    .style('fill', d => d.color);

  legends.append('text')
    .attr('x', 30)
    .attr('y', 12)
    .attr('fill', 'white')
    .text(d => d.label);



  stlCheckbox.addEventListener('change', handleCheckboxChange);
  blkCheckbox.addEventListener('change', handleCheckboxChange);
  astCheckbox.addEventListener('change', handleCheckboxChange);
  rebCheckbox.addEventListener('change', handleCheckboxChange);


  function handleCheckboxChange() {
    showstl = stlCheckbox.checked;
    showblk = blkCheckbox.checked;
    showreb = rebCheckbox.checked;
    showast = astCheckbox.checked;


    bars.select('.blk-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showblk ? y(d.averageBLK) : chart_height)
      .attr('height', d => showblk ? chart_height - y(d.averageBLK) : 0);


    bars.select('.stl-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showstl ? y(d.averageSTL) : chart_height)
      .attr('height', d => showstl ? chart_height - y(d.averageSTL) : 0);

    bars.select('.reb-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showreb ? y(d.averageREB) : chart_height)
      .attr('height', d => showreb ? chart_height - y(d.averageREB) : 0);


    bars.select('.ast-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showast ? y(d.averageAST) : chart_height)
      .attr('height', d => showast ? chart_height - y(d.averageAST) : 0);

    legendGroup.style('display', showreb || showast || showstl || showblk ? 'block' : 'none');

    legends.filter(d => d.label === "Rebounds")
      .style('display', showreb ? 'block' : 'none');

    legends.filter(d => d.label === "Assists")
      .style('display', showast ? 'block' : 'none');

    legends.filter(d => d.label === "Steals")
      .style('display', showstl ? 'block' : 'none');

    legends.filter(d => d.label === "Blocks")
      .style('display', showblk ? 'block' : 'none');


  }
}
////
// screen draw  : fgm, fg3m 
// 橫的群組圖表1
function setupCanvas2(averageFGMData, averageFG3MData, selectedYear) {
  const svg_width = 1200;
  const svg_height = 600;
  const chart_margin = { top: 80, right: 80, bottom: 80, left: 80 };
  const chart_width = svg_width - (chart_margin.left + chart_margin.right);
  const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);


  d3.select('.bar-chart-container').selectAll('*').remove();

  const this_svg = d3.select('.bar-chart-container').append('svg')
    .attr('width', svg_width)
    .attr('height', svg_height)
    .style('background-color', '#1B4965');


  const chart_group = this_svg.append('g')
    .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

  const combinedData = averageFGMData.map(fgm => {
    const matchingFg3m = averageFG3MData.find(fg3m => fg3m.team5 === fgm.team3);
    return {
      team: fgm.team3,
      averageFGM: fgm.average_fgm,
      averageFG3M: matchingFg3m ? matchingFg3m.average_fg3m : 0
    };
  });

  x = d3.scaleBand()
    .domain(combinedData.map(d => d.team))
    .rangeRound([0, chart_width])
    .padding(0.1);

  y = d3.scaleLinear()
    .domain([0, d3.max(combinedData, d => Math.max(d.averageFGM, d.averageFG3M))])
    .range([chart_height, 0]);

  const header = this_svg.append('g').attr('class', 'bar-header')
    .attr('transform', `translate(0,${-chart_margin.top / 2})`)
    .append('text');
  header.append('tspan').text('NBA 2/3 point shot per game')
    .attr('x', 80).attr('y', 80)
    .style('font-weight', 'bold')
    .style('fill', 'white');


  header.append('tspan').text(selectedYear)
    .attr('x', 80).attr('y', 95)
    .attr('fill', 'white')
    .style('font-size', '0.8em');


  const xAxis = d3.axisBottom(x).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(12);
  //調整座標軸顏色
  chart_group.append("g")
    .attr("transform", `translate(0, ${chart_height})`)
    .call(xAxis)
    .selectAll("text")
    .style("fill", "#ffffff");

  chart_group.append("g")
    .call(yAxis)
    .selectAll("text")
    .style("fill", "#ffffff");

  chart_group.selectAll(".domain")
    .style("stroke", "#ffffff");


  const fgmCheckbox = document.getElementById('fgmCheckbox');
  const fg3mCheckbox = document.getElementById('fg3mCheckbox');
  fgmCheckbox.checked = false;
  fg3mCheckbox.checked = false;
  let showFGM = false;
  let showFG3M = false;
  const bars = chart_group.selectAll('.bar')
    .data(combinedData)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${x(d.team)}, 0)`);

  bars.append('rect')
    .attr('class', 'fg3m-bar')
    .attr('x', x.bandwidth() / 2)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 2)
    .attr('height', 0)
    .style('fill', 'orange')
    .transition()
    .duration(1000)
    .attr('y', d => showFG3M ? y(d.averageFG3M) : y(0))
    .attr('height', d => showFG3M ? chart_height - y(d.averageFG3M) : 0)
    .on('start', function (event, d) {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6); // Change highlighting color
          const team = teamData.find(item => item.team === d.team);
          if (team) {
            const tooltip = this_svg.append('g')
              .attr('class', 'tooltip')
              .attr('transform', `translate(${x(d.team) + 80 + x.bandwidth()}, ${y(d.averageFG3M) + 65})`);

            const tooltipBox = tooltip.append('rect')
              .attr('x', -140)
              .attr('y', -5)
              .attr('width', 260)
              .attr('height', 50)
              .attr('rx', 5)
              .attr('ry', 5)
              .style('fill', 'rgba(0, 0, 0, 0.8)');

            tooltip.append('image')
              .attr('x', -130)
              .attr('y', 5)
              .attr('width', 40)
              .attr('height', 40)
              .attr('xlink:href', team.photo);

            tooltip.append('text')
              .attr('x', -80)
              .attr('y', 25)
              .text(`${team.full_name} (${d.averageFG3M})`)
              .attr('fill', 'white');
          }
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1); // Restore original color
          this_svg.selectAll('.tooltip').remove(); // Remove tooltip
        });
    });


  bars.append('rect')
    .attr('class', 'fgm-bar')
    .attr('x', 0)
    .attr('y', y(0))
    .attr('width', x.bandwidth() / 2)
    .attr('height', 0)
    .style('fill', 'steelblue')
    .transition()
    .duration(1000)
    .attr('y', d => showFGM ? y(d.averageFGM) : y(0))
    .attr('height', d => showFGM ? chart_height - y(d.averageFGM) : 0)
    .on('start', function (event, d) {
      d3.select(this)
        .on('mouseover', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 0.6); // Change highlighting color
          const team = teamData.find(item => item.team === d.team);
          if (team) {
            const tooltip = this_svg.append('g')
              .attr('class', 'tooltip')
              .attr('transform', `translate(${x(d.team) + 80 + x.bandwidth()}, ${y(d.averageFGM) + 65})`);

            const tooltipBox = tooltip.append('rect')
              .attr('x', -140)
              .attr('y', -5)
              .attr('width', 260)
              .attr('height', 50)
              .attr('rx', 5)
              .attr('ry', 5)
              .style('fill', 'rgba(0, 0, 0, 0.8)');

            tooltip.append('image')
              .attr('x', -130)
              .attr('y', 5)
              .attr('width', 40)
              .attr('height', 40)
              .attr('xlink:href', team.photo);

            tooltip.append('text')
              .attr('x', -80)
              .attr('y', 25)
              .text(`${team.full_name} (${d.averageFGM.toFixed(2)})`)
              .attr('fill', 'white');
          }
        })
        .on('mouseout', function (event, d) {
          d3.select(this)
            .style('fill-opacity', 1); // Restore original color
          this_svg.selectAll('.tooltip').remove(); // Remove tooltip
        });
    });

  // 圖例
  const legendGroup = this_svg.append('g').attr('class', 'legend-group')
    .attr('transform', `translate(${chart_margin.left + 10}, ${chart_margin.top})`)
    .style('display', 'none');


  const legendRectSize = 20;
  const legendSpacing = 30;

  const legend = legendGroup.selectAll('.legend')
    .data([{ name: '2 point', color: 'steelblue' }, { name: '3 point', color: 'orange' }])
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(0, ${i * legendSpacing})`);

  legend.append('rect')
    .attr('x', 900)
    .attr('y', -20)
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', d => d.color);

  legend.append('text')
    .attr('x', legendRectSize + 905)
    .attr('y', legendRectSize / 2 - 20)
    .attr('dy', '0.35em')
    .style('fill', 'white')
    .text(d => d.name);









  fgmCheckbox.addEventListener('change', handleCheckboxChange);
  fg3mCheckbox.addEventListener('change', handleCheckboxChange);


  function handleCheckboxChange() {
    showFGM = fgmCheckbox.checked;
    showFG3M = fg3mCheckbox.checked;


    bars.select('.fgm-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showFGM ? y(d.averageFGM) : chart_height)
      .attr('height', d => showFGM ? chart_height - y(d.averageFGM) : 0);


    bars.select('.fg3m-bar')
      .transition()
      .duration(1000)
      .attr('y', d => showFG3M ? y(d.averageFG3M) : chart_height)
      .attr('height', d => showFG3M ? chart_height - y(d.averageFG3M) : 0);

    legendGroup.style('display', showFGM || showFG3M ? 'block' : 'none');
    // 更新 FGM 圖例的顯示與隱藏
    legend.filter(d => d.name === "2 point")
      .style('display', showFGM ? 'block' : 'none');

    // 更新 FG3M 圖例的顯示與隱藏
    legend.filter(d => d.name === "3 point")
      .style('display', showFG3M ? 'block' : 'none');


  }
}

// screen draw  : 單一項目版本的圖表
function setupCanvas(barChartData, chosen, selectedYear) {

  const svg_width = 1200;
  const svg_height = 600;
  const chart_margin = { top: 80, right: 80, bottom: 80, left: 80 };
  const chart_width = svg_width - (chart_margin.left + chart_margin.right);
  const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);
  if (chosen === 'home') {
    d3.select('.bar-chart-container').selectAll('*').remove();
    var this_svg = d3.select('.bar-chart-container').append('svg')
      .attr('width', svg_width).attr('height', svg_height)
      .style('background-color', '#1B4965')
      .append('g')
      .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

    //Find min & max
    const xExtent = d3.extent(barChartData, d => d.win_percentage);
    const xScale_v1 = d3.scaleLinear().domain(xExtent).range([0, chart_width]);
    const xMax = d3.max(barChartData, d => d.win_percentage);
    const xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0, chart_width]);
    //Short writing
    var xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);
    var yScale = d3.scaleBand().domain(barChartData.map(d => d.team))
      .rangeRound([0, chart_height])
      .paddingInner(0.15);

    console.log(yScale.bandwidth());


    function colorScaleb(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['darkblue', 'lightblue']);

      // 返回對應的顏色值
      return color(value)
    }
    function colorScaler(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['maroon', 'lightpink']);

      // 返回對應的顏色值
      return color(value)
    }
    // 創建 linearGradient 元素
    const gradient = this_svg.append('defs')
      .append('linearGradient')
      .attr('id', 'text-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    // 添加漸層色段
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF0000');
    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FF8800');
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#00A3FF');


    const header = this_svg.append('g').attr('class', 'bar-header')
      .attr('transform', `translate(0,${-chart_margin.top / 2})`)
      .append('text');
    header.append('tspan').text('NBA Home Win Percentage')
      .attr('x', 0).attr('y', 0)
      .style('font-weight', 'bold')
      .style('fill', 'url(#text-gradient)');

    header.append('tspan').text(selectedYear)
      .attr('x', 0).attr('y', 20)
      .attr('fill', 'white')
      .style('font-size', '0.8em');


    const xAxis = d3.axisTop(xScale_v3)
      .tickFormat(formatTicks)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      ;


    //xAxisDraw.selectAll('line').attr('stroke', 'white');
    var yAxis = d3.axisLeft(yScale).tickSize(0);


    //調整座標軸顏色
    this_svg.append("g")
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg.append("g")
      .attr('class', 'y axis')
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg.selectAll(".domain")
      .style("stroke", "#ffffff");


    const legend = this_svg.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${chart_width}, 0)`);
    legend.append('rect')
      .attr('x', 10)
      .attr('y', 30)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'indianred'); // 西區顏色

    legend.append('rect')
      .attr('x', 10)
      .attr('y', 60)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'steelblue'); // 東區顏色

    legend.append('text')
      .attr('x', 40)
      .attr('y', 42)
      .text('West') // 西區文字
      .attr('fill', 'indianred')

    legend.append('text')
      .attr('x', 40)
      .attr('y', 72)
      .text('East') // 東區文字
      .attr('fill', 'steelblue')



    //Draw Bars
    var bars = this_svg.selectAll('.bar')
      .data(barChartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.team))
      .attr('width', 0)
      .attr('height', yScale.bandwidth())
      .style('fill', 'steelblue')
      .style('stroke-width', 2)
      .transition()
      .duration(1000)
      .attr('width', d => xScale_v3(d.win_percentage))

      .style('fill', d => {
        // 根據隊伍資料的值來選擇顏色
        if (d.team === 'BKN' || d.team === 'BOS' || d.team === 'NYK'
          || d.team === 'PHI' || d.team === 'TOR' || d.team === 'CHI'
          || d.team === 'CLE' || d.team === 'DET' || d.team === 'IND'
          || d.team === 'MIL' || d.team === 'ATL' || d.team === 'CHA'
          || d.team === 'MIA' || d.team === 'ORL' || d.team === 'WAS') {
          return colorScaleb(d.win_percentage / 100);
        } else {
          return colorScaler(d.win_percentage / 100); // west
        }
      })

      .style('stroke-width', 2) // 設定邊框寬度為2像素
      .on('end', function (event, d, i) {
        if (i === barChartData.length - 1) {
          d3.select(this)
            .attr('width', d => xScale_v3(d.win_percentage));
        }
      })
      .on('start', function () {
        d3.select(this)
          .on('mouseover', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage))
              .style('fill-opacity', 0.6);


            // Find the team's data in the teamData array
            const team = teamData.find(item => item.team === d.team);
            if (team) {

              const tooltip = this_svg.append('g')
                .attr('class', 'tooltip')
                .attr('transform', `translate(${xScale_v3(d.win_percentage)}, ${yScale(d.team)})`);

              const tooltipBox = tooltip.append('rect')
                .attr('x', -280)
                .attr('y', -5)
                .attr('width', 280)
                .attr('height', 50)
                .attr('rx', 5)
                .attr('ry', 5)
                .style('fill', 'rgba(0, 0, 0, 0.8)');

              tooltip.append('image')
                .attr('x', -270)
                .attr('y', 5)
                .attr('width', 40)
                .attr('height', 40)
                .attr('xlink:href', team.photo);

              tooltip.append('text')
                .attr('x', -220)
                .attr('y', 25)
                .text(`${team.full_name} (${d.win_percentage.toFixed(2)})`)
                .attr('fill', 'white');

              this_svg.on('mouseout', function () {
                d3.selectAll('.tooltip').remove();
              });
            }
          })
          .on('mouseout', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage))
              .style('fill-opacity', 1);
            this_svg.select('.tooltip').remove();
          })
      })

    const sortButtons = d3.select('.bar-chart-container').append('div')
      .attr('class', 'sort-buttons');

    const sortOptions = ['Total', 'West/East'];

    sortButtons.selectAll('button')
      .data(sortOptions)
      .enter()
      .append('button')
      .text(d => d)
      .on('click', function (event, d) {

        sortBars(d);

        sortButtons.selectAll('button')
          .style('background-color', null)
          .style('color', 'black');

        d3.select(this)
          .style('background-color', 'gray')
          .style('color', 'white');

      });

    function isEastTeam(team) {
      const eastTeams = ['BKN', 'BOS', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS'];
      return eastTeams.includes(team);
    }

    function sortBars(sortOption) {
      if (sortOption === 'Total') {
        barChartData.sort((a, b) => b.win_percentage - a.win_percentage);
      } else {
        barChartData.sort((a, b) => {
          if ((isEastTeam(a.team) && isEastTeam(b.team)) || (!isEastTeam(a.team) && !isEastTeam(b.team))) {
            return b.win_percentage - a.win_percentage;
          } else if (isEastTeam(a.team)) {
            return -1;
          } else if (isEastTeam(b.team)) {
            return 1;
          }
          return 0;
        });
      }

      var xDomain;
      var yDomain;

      if (sortOption === 'Total') {
        xDomain = barChartData.map(d => d.win_percentage);
        yDomain = barChartData.map(d => d.team);
      } else if (sortOption === 'West/East') {
        const westTeamsw = barChartData.filter(d => !isEastTeam(d.team)).map(d => d.win_percentage);
        const eastTeamsw = barChartData.filter(d => isEastTeam(d.team)).map(d => d.win_percentage);
        const westTeams = barChartData.filter(d => !isEastTeam(d.team)).map(d => d.team);
        const eastTeams = barChartData.filter(d => isEastTeam(d.team)).map(d => d.team);
        xDomain = [...westTeamsw, ...eastTeamsw];
        yDomain = [...westTeams, ...eastTeams];
      }

      xScale_v3 = d3.scaleLinear()
        .domain([0, d3.max(xDomain)])
        .range([0, chart_width]);

      yScale = d3.scaleBand().domain(yDomain)
        .rangeRound([0, chart_height])
        .paddingInner(0.15);

      yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

      this_svg.select('.y.axis')
        .transition()
        .duration(1000)
        .call(yAxis)
        .selectAll("text")
        .style("fill", "#ffffff");

      this_svg.selectAll('.bar')
        .transition()
        .duration(1000)
        .attr('y', d => yScale(d.team))
        .attr('height', yScale.bandwidth())
        .style('fill', d => {
          if (d.team === 'BKN' || d.team === 'BOS' || d.team === 'NYK'
            || d.team === 'PHI' || d.team === 'TOR' || d.team === 'CHI'
            || d.team === 'CLE' || d.team === 'DET' || d.team === 'IND'
            || d.team === 'MIL' || d.team === 'ATL' || d.team === 'CHA'
            || d.team === 'MIA' || d.team === 'ORL' || d.team === 'WAS') {
            return colorScaleb(d.win_percentage / 100);
          } else {
            return colorScaler(d.win_percentage / 100);
          }
        })
        .attr('x', 0)
        .attr('width', d => xScale_v3(d.win_percentage));

      this_svg.transition()
        .duration(1000)
        .attr('transform', d => `translate(0, ${yScale(d.team)})`);
    }


  }
  else if (chosen === 'away') {
    d3.select('.bar-chart-container').selectAll('*').remove();
    var this_svg2 = d3.select('.bar-chart-container').append('svg')
      .attr('width', svg_width).attr('height', svg_height)
      .style('background-color', '#1B4965')
      .append('g')
      .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

    //Find min & max
    const xExtent = d3.extent(barChartData, d => d.win_percentage2);
    const xScale_v1 = d3.scaleLinear().domain(xExtent).range([0, chart_width]);
    const xMax = d3.max(barChartData, d => d.win_percentage2);
    const xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0, chart_width]);
    //Short writing
    var xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);
    var yScale = d3.scaleBand().domain(barChartData.map(d => d.team2))
      .rangeRound([0, chart_height])
      .paddingInner(0.15);

    console.log(yScale.bandwidth());

    function colorScaleb(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['darkblue', 'lightblue']);

      // 返回對應的顏色值
      return color(value)
    }
    function colorScaler(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['maroon', 'lightpink']);

      // 返回對應的顏色值
      return color(value)
    }

    // 創建 linearGradient 元素
    const gradient = this_svg2.append('defs')
      .append('linearGradient')
      .attr('id', 'text-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    // 添加漸層色段
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF0000');
    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FF8800');
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#00A3FF');


    const header = this_svg2.append('g').attr('class', 'bar-header')
      .attr('transform', `translate(0,${-chart_margin.top / 2})`)
      .append('text');
    header.append('tspan').text('NBA Away Win Percentage')
      .attr('x', 0).attr('y', 0)
      .style('font-weight', 'bold')
      .style('fill', 'url(#text-gradient)');


    header.append('tspan').text(selectedYear)
      .attr('x', 0).attr('y', 20)
      .attr('fill', 'white')
      .style('font-size', '0.8em');

    var xAxis = d3.axisTop(xScale_v3)
      .tickFormat(formatTicks)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      ;



    //xAxisDraw.selectAll('line').attr('stroke', 'white');
    var yAxis = d3.axisLeft(yScale).tickSize(0);

    this_svg2.append("g")
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg2.append("g")
      .attr('class', 'y axis')
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg2.selectAll(".domain")
      .style("stroke", "#ffffff");

    const legend = this_svg2.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${chart_width}, 0)`);
    legend.append('rect')
      .attr('x', 10)
      .attr('y', 30)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'indianred'); // 西區顏色

    legend.append('rect')
      .attr('x', 10)
      .attr('y', 60)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'steelblue'); // 東區顏色

    legend.append('text')
      .attr('x', 40)
      .attr('y', 42)
      .text('West') // 西區文字
      .attr('fill', 'indianred')

    legend.append('text')
      .attr('x', 40)
      .attr('y', 72)
      .text('East') // 東區文字
      .attr('fill', 'steelblue')


    //Draw Bars
    var bars = this_svg2.selectAll('.bar')
      .data(barChartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.team2))
      .attr('width', 0)
      .attr('height', yScale.bandwidth())
      .style('fill', 'steelblue')
      .style('stroke-width', 2)
      .transition()
      .duration(1000)
      .attr('width', d => xScale_v3(d.win_percentage2))

      .style('fill', d => {
        // 根據隊伍資料的值來選擇顏色
        if (d.team2 === 'BKN' || d.team2 === 'BOS' || d.team2 === 'NYK'
          || d.team2 === 'PHI' || d.team2 === 'TOR' || d.team2 === 'CHI'
          || d.team2 === 'CLE' || d.team2 === 'DET' || d.team2 === 'IND'
          || d.team2 === 'MIL' || d.team2 === 'ATL' || d.team2 === 'CHA'
          || d.team2 === 'MIA' || d.team2 === 'ORL' || d.team2 === 'WAS') {
          return colorScaleb(d.win_percentage2 / 100);
        } else {
          return colorScaler(d.win_percentage2 / 100); // west
        }
      })

      .on('start', function () {
        d3.select(this)
          .on('mouseover', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage2))
              .style('fill-opacity', 0.6);
            // Find the team's data in the teamData array
            const team = teamData.find(item => item.team === d.team2);
            if (team) {

              const tooltip = this_svg2.append('g')
                .attr('class', 'tooltip')
                .attr('transform', `translate(${xScale_v3(d.win_percentage2)}, ${yScale(d.team2)})`);

              const tooltipBox = tooltip.append('rect')
                .attr('x', -260)
                .attr('y', -5)
                .attr('width', 280)
                .attr('height', 50)
                .attr('rx', 5)
                .attr('ry', 5)
                .style('fill', 'rgba(0, 0, 0, 0.8)');

              tooltip.append('image')
                .attr('x', -250)
                .attr('y', 5)
                .attr('width', 40)
                .attr('height', 40)
                .attr('xlink:href', team.photo);

              tooltip.append('text')
                .attr('x', -200)
                .attr('y', 25)
                .text(`${team.full_name} (${d.win_percentage2.toFixed(2)})`)
                .attr('fill', 'white');

              this_svg2.on('mouseout', function () {
                d3.selectAll('.tooltip').remove();
              })
            }

          })
          .on('mouseout', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage2))
              .style('fill-opacity', 1);
            this_svg2.select('.tooltip').remove();
          })
      });

    const sortButtons = d3.select('.bar-chart-container').append('div')
      .attr('class', 'sort-buttons');

    const sortOptions = ['Total', 'West/East'];

    sortButtons.selectAll('button')
      .data(sortOptions)
      .enter()
      .append('button')
      .text(d => d)
      .on('click', function (event, d) {

        sortBars(d);

        sortButtons.selectAll('button')
          .style('background-color', null)
          .style('color', 'black');

        d3.select(this)
          .style('background-color', 'gray')
          .style('color', 'white');

      });

    function isEastTeam(team) {
      const eastTeams = ['BKN', 'BOS', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS'];
      return eastTeams.includes(team);
    }

    function sortBars(sortOption) {
      if (sortOption === 'Total') {
        barChartData.sort((a, b) => b.win_percentage2 - a.win_percentage2);
      } else {
        barChartData.sort((a, b) => {
          if ((isEastTeam(a.team2) && isEastTeam(b.team2)) || (!isEastTeam(a.team2) && !isEastTeam(b.team2))) {
            return b.win_percentage2 - a.win_percentage2;
          } else if (isEastTeam(a.team2)) {
            return -1;
          } else if (isEastTeam(b.team2)) {
            return 1;
          }
          return 0;
        });
      }

      var xDomain;
      var yDomain;

      if (sortOption === 'Total') {
        xDomain = barChartData.map(d => d.win_percentage2);
        yDomain = barChartData.map(d => d.team2);
      } else if (sortOption === 'West/East') {
        const westTeamsw = barChartData.filter(d => !isEastTeam(d.team2)).map(d => d.win_percentage2);
        const eastTeamsw = barChartData.filter(d => isEastTeam(d.team2)).map(d => d.win_percentage2);
        const westTeams = barChartData.filter(d => !isEastTeam(d.team2)).map(d => d.team2);
        const eastTeams = barChartData.filter(d => isEastTeam(d.team2)).map(d => d.team2);
        xDomain = [...westTeamsw, ...eastTeamsw];
        yDomain = [...westTeams, ...eastTeams];
      }

      xScale_v3 = d3.scaleLinear()
        .domain([0, d3.max(xDomain)])
        .range([0, chart_width]);

      yScale = d3.scaleBand().domain(yDomain)
        .rangeRound([0, chart_height])
        .paddingInner(0.15);

      yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

      this_svg2.select('.y.axis')
        .transition()
        .duration(1000)
        .call(yAxis)
        .selectAll("text")
        .style("fill", "#ffffff");

      this_svg2.selectAll('.bar')
        .transition()
        .duration(1000)
        .attr('y', d => yScale(d.team2))
        .attr('height', yScale.bandwidth())
        .style('fill', d => {
          if (d.team2 === 'BKN' || d.team2 === 'BOS' || d.team2 === 'NYK'
            || d.team2 === 'PHI' || d.team2 === 'TOR' || d.team2 === 'CHI'
            || d.team2 === 'CLE' || d.team2 === 'DET' || d.team2 === 'IND'
            || d.team2 === 'MIL' || d.team2 === 'ATL' || d.team2 === 'CHA'
            || d.team2 === 'MIA' || d.team2 === 'ORL' || d.team2 === 'WAS') {
            return colorScaleb(d.win_percentage2 / 100);
          } else {
            return colorScaler(d.win_percentage2 / 100);
          }
        })
        .attr('x', 0)
        .attr('width', d => xScale_v3(d.win_percentage2));

      this_svg2.transition()
        .duration(1000)
        .attr('transform', d => `translate(0, ${yScale(d.team2)})`);
    }

  }
  else if (chosen === 'total') {
    d3.select('.bar-chart-container').selectAll('*').remove();
    var this_svg3 = d3.select('.bar-chart-container').append('svg')
      .attr('width', svg_width).attr('height', svg_height)
      .style('background-color', '#1B4965')
      .append('g')
      .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

    //Find min & max
    const xExtent = d3.extent(barChartData, d => d.win_percentage3);
    const xScale_v1 = d3.scaleLinear().domain(xExtent).range([0, chart_width]);
    const xMax = d3.max(barChartData, d => d.win_percentage3);
    const xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0, chart_width]);
    //Short writing
    var xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);
    var yScale = d3.scaleBand().domain(barChartData.map(d => d.team4))
      .rangeRound([0, chart_height])
      .paddingInner(0.15);

    console.log(yScale.bandwidth());

    function colorScaleb(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['darkblue', 'lightblue']);

      // 返回對應的顏色值
      return color(value)
    }
    function colorScaler(value) {
      const color = d3.scaleLinear()
        .domain([0, 1])
        .range(['maroon', 'lightpink']);

      // 返回對應的顏色值
      return color(value)
    }
    const gradient = this_svg3.append('defs')
      .append('linearGradient')
      .attr('id', 'text-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    // 添加漸層色段
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF0000');
    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FF8800');
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#00A3FF');

    const header = this_svg3.append('g').attr('class', 'bar-header')
      .attr('transform', `translate(0,${-chart_margin.top / 2})`)
      .append('text');
    header.append('tspan').text('NBA Win Percentage')
      .attr('x', 0).attr('y', 0)
      .style('font-weight', 'bold')
      .style('fill', 'url(#text-gradient)');


    header.append('tspan').text(selectedYear)
      .attr('x', 0).attr('y', 20)
      .attr('fill', 'white')
      .style('font-size', '0.8em');

    var xAxis = d3.axisTop(xScale_v3)
      .tickFormat(formatTicks)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      ;

    //xAxisDraw.selectAll('line').attr('stroke', 'white');
    var yAxis = d3.axisLeft(yScale).tickSize(0);

    this_svg3.append("g")
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg3.append("g")
      .attr('class', 'y axis')
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg3.selectAll(".domain")
      .style("stroke", "#ffffff");


    const legend = this_svg3.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${chart_width}, 0)`);
    legend.append('rect')
      .attr('x', 10)
      .attr('y', 30)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'indianred'); // 西區顏色

    legend.append('rect')
      .attr('x', 10)
      .attr('y', 60)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'steelblue'); // 東區顏色

    legend.append('text')
      .attr('x', 40)
      .attr('y', 42)
      .text('West') // 西區文字
      .attr('fill', 'indianred')

    legend.append('text')
      .attr('x', 40)
      .attr('y', 72)
      .text('East') // 東區文字
      .attr('fill', 'steelblue')

    //Draw Bars
    var bars = this_svg3.selectAll('.bar')
      .data(barChartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.team4))
      .attr('width', 0)
      .attr('height', yScale.bandwidth())
      .style('fill', 'steelblue')
      .style('stroke-width', 2)
      .transition()
      .duration(1000)
      .attr('width', d => xScale_v3(d.win_percentage3))


      .style('fill', d => {
        // 根據隊伍資料的值來選擇顏色
        if (d.team4 === 'BKN' || d.team4 === 'BOS' || d.team4 === 'NYK'
          || d.team4 === 'PHI' || d.team4 === 'TOR' || d.team4 === 'CHI'
          || d.team4 === 'CLE' || d.team4 === 'DET' || d.team4 === 'IND'
          || d.team4 === 'MIL' || d.team4 === 'ATL' || d.team4 === 'CHA'
          || d.team4 === 'MIA' || d.team4 === 'ORL' || d.team4 === 'WAS') {
          return colorScaleb(d.win_percentage3 / 100);
        } else {
          return colorScaler(d.win_percentage3 / 100); // west
        }
      })

      .style('stroke-width', 2) // 設定邊框寬度為2像素

      .on('start', function () {
        d3.select(this)
          .on('mouseover', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage3))
              .style('fill-opacity', 0.6);

            // Find the team's data in the teamData array
            const team = teamData.find(item => item.team === d.team4);
            if (team) {

              const tooltip = this_svg3.append('g')
                .attr('class', 'tooltip')
                .attr('transform', `translate(${xScale_v3(d.win_percentage3)}, ${yScale(d.team4)})`);

              const tooltipBox = tooltip.append('rect')
                .attr('x', -280)
                .attr('y', -5)
                .attr('width', 280)
                .attr('height', 50)
                .attr('rx', 5)
                .attr('ry', 5)
                .style('fill', 'rgba(0, 0, 0, 0.8)');

              tooltip.append('image')
                .attr('x', -270)
                .attr('y', 5)
                .attr('width', 40)
                .attr('height', 40)
                .attr('xlink:href', team.photo);

              tooltip.append('text')
                .attr('x', -220)
                .attr('y', 25)
                .text(`${team.full_name} (${d.win_percentage3.toFixed(2)})`)
                .attr('fill', 'white');

              this_svg4.on('mouseout', function () {
                d3.selectAll('.tooltip').remove();
              });
            }
          })
          .on('mouseout', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.win_percentage3))
              .style('fill-opacity', 1);
            this_svg3.select('.tooltip').remove();
          })
      });


    const sortButtons = d3.select('.bar-chart-container').append('div')
      .attr('class', 'sort-buttons');

    const sortOptions = ['Total', 'West/East'];

    sortButtons.selectAll('button')
      .data(sortOptions)
      .enter()
      .append('button')
      .text(d => d)
      .on('click', function (event, d) {

        sortBars(d);

        sortButtons.selectAll('button')
          .style('background-color', null)
          .style('color', 'black');

        d3.select(this)
          .style('background-color', 'gray')
          .style('color', 'white');

      });

    function isEastTeam(team) {
      const eastTeams = ['BKN', 'BOS', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS'];
      return eastTeams.includes(team);
    }

    function sortBars(sortOption) {
      if (sortOption === 'Total') {
        barChartData.sort((a, b) => b.win_percentage3 - a.win_percentage3);
      } else {
        barChartData.sort((a, b) => {
          if ((isEastTeam(a.team4) && isEastTeam(b.team4)) || (!isEastTeam(a.team4) && !isEastTeam(b.team4))) {
            return b.win_percentage3 - a.win_percentage3;
          } else if (isEastTeam(a.team4)) {
            return -1;
          } else if (isEastTeam(b.team4)) {
            return 1;
          }
          return 0;
        });
      }

      var xDomain;
      var yDomain;

      if (sortOption === 'Total') {
        xDomain = barChartData.map(d => d.win_percentage3);
        yDomain = barChartData.map(d => d.team4);
      } else if (sortOption === 'West/East') {
        const westTeamsw = barChartData.filter(d => !isEastTeam(d.team4)).map(d => d.win_percentage3);
        const eastTeamsw = barChartData.filter(d => isEastTeam(d.team4)).map(d => d.win_percentage3);
        const westTeams = barChartData.filter(d => !isEastTeam(d.team4)).map(d => d.team4);
        const eastTeams = barChartData.filter(d => isEastTeam(d.team4)).map(d => d.team4);
        xDomain = [...westTeamsw, ...eastTeamsw];
        yDomain = [...westTeams, ...eastTeams];
      }

      xScale_v3 = d3.scaleLinear()
        .domain([0, d3.max(xDomain)])
        .range([0, chart_width]);

      yScale = d3.scaleBand().domain(yDomain)
        .rangeRound([0, chart_height])
        .paddingInner(0.15);

      yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

      this_svg3.select('.y.axis')
        .transition()
        .duration(1000)
        .call(yAxis)
        .selectAll("text")
        .style("fill", "#ffffff");

      this_svg3.selectAll('.bar')
        .transition()
        .duration(1000)
        .attr('y', d => yScale(d.team4))
        .attr('height', yScale.bandwidth())
        .style('fill', d => {
          if (d.team4 === 'BKN' || d.team4 === 'BOS' || d.team4 === 'NYK'
            || d.team4 === 'PHI' || d.team4 === 'TOR' || d.team4 === 'CHI'
            || d.team4 === 'CLE' || d.team4 === 'DET' || d.team4 === 'IND'
            || d.team4 === 'MIL' || d.team4 === 'ATL' || d.team4 === 'CHA'
            || d.team4 === 'MIA' || d.team4 === 'ORL' || d.team4 === 'WAS') {
            return colorScaleb(d.win_percentage3 / 100);
          } else {
            return colorScaler(d.win_percentage3 / 100);
          }
        })

        .attr('x', 0)
        .attr('width', d => xScale_v3(d.win_percentage3));


      this_svg3.transition()
        .duration(1000)
        .attr('transform', d => `translate(0, ${yScale(d.team4)})`);

    }



  }
  // average score
  else {
    d3.select('.bar-chart-container').selectAll('*').remove();
    var this_svg4 = d3.select('.bar-chart-container').append('svg')
      .attr('width', svg_width).attr('height', svg_height)
      .style('background-color', '#1B4965')
      .append('g')
      .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

    //Find min & max
    const xExtent = d3.extent(barChartData, d => d.average_pts);
    const xScale_v1 = d3.scaleLinear().domain(xExtent).range([0, chart_width]);
    const xMax = d3.max(barChartData, d => d.average_pts);
    const xmin = d3.min(barChartData, d => d.average_pts);
    const xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0, chart_width]);
    //Short writing
    var xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);
    var yScale = d3.scaleBand().domain(barChartData.map(d => d.team6))
      .rangeRound([0, chart_height])
      .paddingInner(0.15);

    console.log(yScale.bandwidth());

    function colorScaleb(value) {
      const color = d3.scaleLinear()
        .domain([xmin, xMax])
        .range(['darkblue', 'lightblue']);

      // 返回對應的顏色值
      return color(value)
    }
    function colorScaler(value) {
      const color = d3.scaleLinear()
        .domain([xmin, xMax])
        .range(['maroon', 'lightpink']);

      // 返回對應的顏色值
      return color(value)
    }

    // 創建 linearGradient 元素
    const gradient = this_svg4.append('defs')
      .append('linearGradient')
      .attr('id', 'text-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    // 添加漸層色段
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FF0000');
    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#FF8800');
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#00A3FF');

    const header = this_svg4.append('g').attr('class', 'bar-header')
      .attr('transform', `translate(0,${-chart_margin.top / 2})`)
      .append('text');
    header.append('tspan').text('NBA Average Score Per Game')
      .attr('x', 0).attr('y', 0)
      .style('font-weight', 'bold')
      .style('fill', 'url(#text-gradient)');


    header.append('tspan').text(selectedYear)
      .attr('x', 0).attr('y', 20)
      .attr('fill', 'white')
      .style('font-size', '0.8em');

    var xAxis = d3.axisTop(xScale_v3)
      .tickFormat(formatTicks)
      .tickSizeInner(0)
      .tickSizeOuter(0)
      ;



    //xAxisDraw.selectAll('line').attr('stroke', 'white');
    var yAxis = d3.axisLeft(yScale).tickSize(0);

    this_svg4.append("g")
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg4.append("g")
      .attr('class', 'y axis')
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ffffff");

    this_svg4.selectAll(".domain")
      .style("stroke", "#ffffff");

    const legend = this_svg4.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${chart_width}, 0)`);
    legend.append('rect')
      .attr('x', 10)
      .attr('y', 30)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'indianred'); // 西區顏色

    legend.append('rect')
      .attr('x', 10)
      .attr('y', 60)
      .attr('width', 15)
      .attr('height', 15)
      .style('fill', 'steelblue'); // 東區顏色

    legend.append('text')
      .attr('x', 40)
      .attr('y', 42)
      .text('West') // 西區文字
      .attr('fill', 'indianred')

    legend.append('text')
      .attr('x', 40)
      .attr('y', 72)
      .text('East') // 東區文字
      .attr('fill', 'steelblue')


    //Draw Bars
    var bars = this_svg4.selectAll('.bar')
      .data(barChartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.team6))
      .attr('width', 0)
      .attr('height', yScale.bandwidth())
      .style('fill', 'steelblue')
      .style('stroke-width', 2)
      .transition()
      .duration(1000)
      .attr('width', d => xScale_v3(d.average_pts))

      .style('fill', d => {
        // 根據隊伍資料的值來選擇顏色
        if (d.team6 === 'BKN' || d.team6 === 'BOS' || d.team6 === 'NYK'
          || d.team6 === 'PHI' || d.team6 === 'TOR' || d.team6 === 'CHI'
          || d.team6 === 'CLE' || d.team6 === 'DET' || d.team6 === 'IND'
          || d.team6 === 'MIL' || d.team6 === 'ATL' || d.team6 === 'CHA'
          || d.team6 === 'MIA' || d.team6 === 'ORL' || d.team6 === 'WAS') {
          return colorScaleb(d.average_pts);
        } else {
          return colorScaler(d.average_pts); // west
        }
      })

      .on('start', function () {
        d3.select(this)
          .on('mouseover', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.average_pts))
              .style('fill-opacity', 0.6);

            // Find the team's data in the teamData array
            const team = teamData.find(item => item.team === d.team6);
            if (team) {

              const tooltip = this_svg4.append('g')
                .attr('class', 'tooltip')
                .attr('transform', `translate(${xScale_v3(d.average_pts)}, ${yScale(d.team6)})`);

              const tooltipBox = tooltip.append('rect')
                .attr('x', -280)
                .attr('y', -5)
                .attr('width', 280)
                .attr('height', 50)
                .attr('rx', 5)
                .attr('ry', 5)
                .style('fill', 'rgba(0, 0, 0, 0.8)');

              tooltip.append('image')
                .attr('x', -270)
                .attr('y', 5)
                .attr('width', 40)
                .attr('height', 40)
                .attr('xlink:href', team.photo);

              tooltip.append('text')
                .attr('x', -220)
                .attr('y', 25)
                .text(`${team.full_name} (${d.average_pts.toFixed(2)})`)
                .attr('fill', 'white');

              this_svg4.on('mouseout', function () {
                d3.selectAll('.tooltip').remove();
              });
            }
          })
          .on('mouseout', function (event, d) {
            d3.select(this)
              .transition()
              .duration(100)
              .attr('width', d => xScale_v3(d.average_pts))
              .style('fill-opacity', 1);
            this_svg4.select('.tooltip').remove();
          })
      });



    const sortButtons = d3.select('.bar-chart-container').append('div')
      .attr('class', 'sort-buttons');

    const sortOptions = ['Total', 'West/East'];

    sortButtons.selectAll('button')
      .data(sortOptions)
      .enter()
      .append('button')
      .text(d => d)
      .on('click', function (event, d) {

        sortBars(d);

        sortButtons.selectAll('button')
          .style('background-color', null)
          .style('color', 'black');

        d3.select(this)
          .style('background-color', 'gray')
          .style('color', 'white');

      });

    function isEastTeam(team) {
      const eastTeams = ['BKN', 'BOS', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS'];
      return eastTeams.includes(team);
    }

    function sortBars(sortOption) {
      if (sortOption === 'Total') {
        barChartData.sort((a, b) => b.average_pts - a.average_pts);
      } else {
        barChartData.sort((a, b) => {
          if ((isEastTeam(a.team6) && isEastTeam(b.team6)) || (!isEastTeam(a.team6) && !isEastTeam(b.team6))) {
            return b.average_pts - a.average_pts;
          } else if (isEastTeam(a.team6)) {
            return -1;
          } else if (isEastTeam(b.team6)) {
            return 1;
          }
          return 0;
        });
      }

      var xDomain;
      var yDomain;

      if (sortOption === 'Total') {
        xDomain = barChartData.map(d => d.average_pts);
        yDomain = barChartData.map(d => d.team6);
      } else if (sortOption === 'West/East') {
        const westTeamsw = barChartData.filter(d => !isEastTeam(d.team6)).map(d => d.average_pts);
        const eastTeamsw = barChartData.filter(d => isEastTeam(d.team6)).map(d => d.average_pts);
        const westTeams = barChartData.filter(d => !isEastTeam(d.team6)).map(d => d.team6);
        const eastTeams = barChartData.filter(d => isEastTeam(d.team6)).map(d => d.team6);
        xDomain = [...westTeamsw, ...eastTeamsw];
        yDomain = [...westTeams, ...eastTeams];
      }

      xScale_v3 = d3.scaleLinear()
        .domain([0, d3.max(xDomain)])
        .range([0, chart_width]);

      yScale = d3.scaleBand().domain(yDomain)
        .rangeRound([0, chart_height])
        .paddingInner(0.15);

      yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

      this_svg4.select('.y.axis')
        .transition()
        .duration(1000)
        .call(yAxis)
        .selectAll("text")
        .style("fill", "#ffffff");

      this_svg4.selectAll('.bar')
        .transition()
        .duration(1000)
        .attr('y', d => yScale(d.team6))
        .attr('height', yScale.bandwidth())
        .style('fill', d => {
          if (d.team6 === 'BKN' || d.team6 === 'BOS' || d.team6 === 'NYK'
            || d.team6 === 'PHI' || d.team6 === 'TOR' || d.team6 === 'CHI'
            || d.team6 === 'CLE' || d.team6 === 'DET' || d.team6 === 'IND'
            || d.team6 === 'MIL' || d.team6 === 'ATL' || d.team6 === 'CHA'
            || d.team6 === 'MIA' || d.team6 === 'ORL' || d.team6 === 'WAS') {
            return colorScaleb(d.average_pts);
          } else {
            return colorScaler(d.average_pts);
          }
        })
        .attr('x', 0)
        .attr('width', d => xScale_v3(d.average_pts));


      this_svg4.transition()
        .duration(1000)
        .attr('transform', d => `translate(0, ${yScale(d.team6)})`);

    }



  }



}


// main  
function ready(nba_games, selectedYear, selectedTeam) {

  const NBAClean = filterData(nba_games, selectedYear);
  const barChartData = prepareBarChartData(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.win_percentage, b.win_percentage);
    }
  );
  const barChartData2 = prepareBarChartData2(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.win_percentage2, b.win_percentage2);
    }
  );
  const barChartData3 = calculateWinPercentage(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.win_percentage3, b.win_percentage3);
    }
  );
  const averageFGMData = calculateAverageFGM(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_fgm, b.average_fgm);
    }
  );
  const averageFG3MData = calculateAverageFG3M(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_fg3m, b.average_fg3m);
    }
  );
  const averagePTSData = calculateAveragepts(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_pts, b.average_pts);
    }
  );
  const averageREBData = calculateAveragereb(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_reb, b.average_reb);
    }
  );
  const averageBLKData = calculateAverageblk(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_blk, b.average_blk);
    }
  );
  const averageSTLData = calculateAveragestl(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_stl, b.average_stl);
    }
  );
  const averageASTData = calculateAverageast(NBAClean).sort(
    (a, b) => {
      return d3.descending(a.average_ast, b.average_ast);
    }
  );




  if (selectedTeam === "home") setupCanvas(barChartData, selectedTeam, selectedYear);
  else if (selectedTeam === "away") setupCanvas(barChartData2, selectedTeam, selectedYear);
  else if (selectedTeam === "total") setupCanvas(barChartData3, selectedTeam, selectedYear);
  else if (selectedTeam === "average score") setupCanvas(averagePTSData, selectedTeam, selectedYear);
  else if (selectedTeam === "2/3 point shot") setupCanvas2(averageFGMData, averageFG3MData, selectedYear);
  else if (selectedTeam === "rebounds/assists/steals/blocks")
    setupCanvas3(averageSTLData, averageREBData, averageASTData, averageBLKData, selectedYear);




}

// ------------------下拉式表單------------------
var analysis = ["-------", "by Season", "by Team"];
var bydropdown = d3.select('#by-dropdown').append('select').style('float', 'left');

d3.select('.bar-chart-container-team').selectAll('button')
  .style('display', 'none');

bydropdown
  .selectAll('option')
  .data(analysis)
  .enter()
  .append('option')
  .text(function (d) { return d; });

bydropdown.on('change', function () {
  var selectedAnalysis = d3.select(this).property('value');

  d3.select('#year-dropdown').selectAll('select').remove();
  d3.select('#yeart-dropdown').selectAll('select').remove();
  d3.select('#wp-dropdown').selectAll('select').remove();
  d3.select('#team-dropdown').selectAll('select').remove();

  if (selectedAnalysis === 'by Season') {
    d3.csv('data/game.csv', type).then(res => {
      var dropdown = d3.select('#year-dropdown').append('select');
      var wpdropdown = d3.select('#wp-dropdown').append('select');

      // 選取by Season時，將by Team的圖表remove
      d3.select('.bar-chart-container-team').selectAll('svg').remove();
      d3.select('.bar-chart-container-team').selectAll('button')
        .style('display', 'none');

      // 創建新的下拉菜單
      var allyear = ["1996","1997","1998", "1999", "2000", "2001", "2002", "2003",
        "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011",
        "2012", "2013", "2014", "2015", "2016", "2018", "2019", "2020",
        "2021", "2022"];

      var datatype = ["total", "home", "away", "average score", "2/3 point shot", "rebounds/assists/steals/blocks"];

      dropdown.selectAll('option')
        .data(allyear)
        .enter()
        .append('option')
        .text(function (d) { return d; });

      wpdropdown.selectAll('option')
        .data(datatype)
        .enter()
        .append('option')
        .text(function (d) { return d; });

      dropdown.on('change', function () {
        var selectedYear = d3.select(this).property('value');
        var selectedTeam = wpdropdown.property('value');
        checkboxContainer.style.display = (selectedTeam === "2/3 point shot") ? 'block' : 'none';
        checkboxContainer2.style.display = (selectedTeam === "rebounds/assists/steals/blocks") ? 'block' : 'none';
        ready(res, selectedYear, selectedTeam);
      });

      wpdropdown.on('change', function () {
        var selectedYear = dropdown.property('value');
        var selectedTeam = wpdropdown.property('value');
        checkboxContainer.style.display = (selectedTeam === "2/3 point shot") ? 'block' : 'none';
        checkboxContainer2.style.display = (selectedTeam === "rebounds/assists/steals/blocks") ? 'block' : 'none';
        ready(res, selectedYear, selectedTeam);
      });
    })
  }

  else if (selectedAnalysis === 'by Team') {
    d3.csv('data/all_seasons.csv', type_team).then(res => {
      // 選取by Team時，將by Season的圖表remove
      d3.select('.bar-chart-container').selectAll('*').remove();
      // d3.select('.bar-chart-container-team').selectAll('button')
      //   .style('display', 'inline-block');
      checkboxContainer.style.display = 'none';
      checkboxContainer2.style.display = 'none';

      var dropdown_t = d3.select('#yeart-dropdown').append('select');
      var teamdropdown = d3.select('#team-dropdown').append('select');

      menu(res);
      // updateDropdowns();

      teamdropdown.on('change', function () {
        var selectedTeam = teamdropdown.property('value');
        // 保留所選的team，當更換team的時候會變成undefined
        var team_before = selectedTeam;
        updateDropdowns(team_before);
        updateSelectedText();
      });

      var selectedTeam = teamdropdown.property('value');
      // 保留所選的team，當更換team的時候會變成undefined
      var team_before = selectedTeam;

      dropdown_t.on('change', function () {
        updateDropdowns(team_before);
        updateSelectedText();
      });

      function updateDropdowns(team_before) {
        var selectedTeam = teamdropdown.property('value');
        var selectedYear = dropdown_t.property('value');
        var filteredSeasons = allSeasons.filter(function (d) {
          return res.some(function (item) {
            return item.team_abbreviation === selectedTeam && item.season === d;
          });
        });

        filteredSeasons.unshift("-------");
        console.log(filteredSeasons)

        dropdown_t.selectAll('option')
          .data(filteredSeasons)
          .join('option')
          .text(function (d) { return d; });

        console.log(selectedTeam);
        console.log(selectedYear);
        // console.log(team_before);
        // console.log(selectedTeam === team_before);
        metric_team = selectedTeam;
        metric_year = selectedYear;

        if (selectedTeam === team_before) {
          d3.select('.bar-chart-container-team').selectAll('svg').remove();
          d3.select('.bar-chart-container-team').selectAll('button')
            .style('display', 'none');
          selectedYear = "-------";
        }

        if (selectedTeam != "-------" && selectedYear != "-------") {
          ready_team(res, selectedYear, selectedTeam);
        }
      }

      function updateSelectedText() {
        var selectedTeam = teamdropdown.property('value');
        var selectedYear = dropdown_t.property('value');

        d3.select('#selected-team')
          .text('Selected Team: ' + selectedTeam);

        d3.select('#selected-year')
          .text('Selected Year: ' + selectedYear);
      }

      teamdropdown.selectAll('option')
        .data(allTeams)
        .join('option')
        .text(function (d) { return d; });
    });

  }
});

// ---------------依隊伍分析---------------
// 遇到Undrafted就維持, 要不然就換成數字型式
const parseUndrafted_team = string => (string === 'Undrafted' ? string : Number(string));

// // 年份處理 season
const parseSeason_team = string => (string.length === 7 ? Number(string.slice(0, 4)) : Number('20' + string.slice(4, 5)));

// // 小數後第二位
function parseNumber_team(d){
  var data = Number(d).toFixed(2);
  return data;
}

// // 數字處理
function type_team(d) {
  return {
    player_name: d.player_name,
    team_abbreviation: d.team_abbreviation,
    age: +d.age,
    player_height: +d.player_height,
    player_weight: parseNumber_team(d.player_weight),
    college: d.college,
    country: d.country,
    draft_year: parseUndrafted_team(d.draft_year),
    draft_round: parseUndrafted_team(d.draft_round),
    draft_number: parseUndrafted_team(d.draft_number),
    gp: +d.gp,
    pts: +d.pts,
    reb: +d.reb,
    ast: +d.ast,
    net_rating: parseNumber_team(d.net_rating),
    oreb_pct: parseNumber_team(d.oreb_pct),
    dreb_pct: parseNumber_team(d.dreb_pct),
    usg_pct: parseNumber_team(d.usg_pct),
    ts_pct: parseNumber_team(d.ts_pct),
    ast_pct: parseNumber_team(d.ast_pct),
    season: parseSeason_team(d.season)
  }
}

// 將player依隊伍分類，再依照season分類
function prepareData_team(data) {
  console.log(data);
  // const teams = data.map(d => d.team_abbreviation);
  const dataByTeam = {};          // 依隊伍分類的資料

  // 遍歷 CSV 數據，將資料按照隊伍分組
  data.forEach(
    d => {
      const team = d.team_abbreviation;
      if (!dataByTeam[team]) {
        dataByTeam[team] = {};
      }

      const year = d.season;
      if (!dataByTeam[team][year]) {
        dataByTeam[team][year] = [];
      }
      dataByTeam[team][year].push(d);
    }
  );
  console.log(dataByTeam);
  console.log(dataByTeam['ATL']);
  return dataByTeam;
}

// 繪製svg
function setupCanvas_team(gpData, barChartData, selectedYear, selectedTeam) {
  // 預設指標為gp
  let metric = "gp";
  console.log(barChartData);

  function update(data) {
    console.log(data);
    // Update Scale
    xMax = d3.max(data, d => d[metric]);
    xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);

    yScale = d3.scaleBand().domain(data.map(d => d.player_name))
      .rangeRound([0, chart_height])
      .paddingInner(0.25);

    // Transition Settings
    const defaultDelay = 1000
    const transitionDelay = d3.transition().duration(defaultDelay);

    // Update Axis
    xAxisDraw.transition(transitionDelay)
      .call(xAxis.scale(xScale_v3))
      .selectAll('text')
      .style('fill', '#ffffff');
    yAxisDraw.transition(transitionDelay)
      .call(yAxis.scale(yScale))
      .selectAll('text')
      .style('fill', '#ffffff');

    // Update Header
    if (metric == 'gp') {
      header.select('tspan').text(`Games played throughout the season`)
        .style('font-size', '1.2em')
        .style('font-weight', 'bold')
        .style('fill', 'url(#text-gradient)');
    }
    else if (metric == 'pts') {
      header.select('tspan').text(`Average points throughout the season`)
        .style('font-size', '1.2em')
        .style('font-weight', 'bold')
        .style('fill', 'url(#text-gradient)');
    }
    else if (metric == 'reb') {
      header.select('tspan').text(`Average rebounds throughout the season`)
        .style('font-size', '1.2em')
        .style('font-weight', 'bold')
        .style('fill', 'url(#text-gradient)');
    }
    else if (metric == 'ast') {
      header.select('tspan').text(`Average assists throughout the season`)
        .style('font-size', '1.2em')
        .style('font-weight', 'bold')
        .style('fill', 'url(#text-gradient)');
    }
    else {
      header.select('tspan').text(`Shooting efficiency throughout the season`)
        .style('font-size', '1.2em')
        .style('font-weight', 'bold')
        .style('fill', 'url(#text-gradient)');
    }

    // Update小標
    header_1.select('tspan').text(`Team: ${selectedTeam}\xa0\xa0\xa0\xa0\xa0Year: ${selectedYear}`)
      .attr('x', 0).attr('y', 20).style('font-size', '0.8em').style('fill', '#eee');

    // Update Bar
    bars.selectAll('.bar').data(data, d => d.player_name).join(
      enter => {
        enter.append('rect').attr('class', 'bar')
          .attr('x', 0).attr('y', d => yScale(d.player_name))
          .attr('height', yScale.bandwidth())
          .style('fill', 'lightcyan')
          .transition(transitionDelay)
          .delay((d, i) => i * 20)
          .attr('width', d => xScale_v3(d[metric]))
          .style('fill', 'dodgerblue')
      },
      update => {
        update.transition(transitionDelay)
          .delay((d, i) => i * 20)
          .attr('y', d => yScale(d.player_name))
          .attr('width', d => xScale_v3(d[metric]))
      },
      exit => {
        exit.transition().duration(defaultDelay / 2)      // 離開速度加快
          .style('fill-opacity', 0)                   // 變成透明
          .remove()
      }
    );

    //interactive 新增監聽
    d3.selectAll('.bar')
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseout', mouseout);
  }

  const svg_width = 1200;
  const svg_height = 500;
  const chart_margin = { top: 80, right: 40, bottom: 40, left: 120 };
  const chart_width = svg_width - (chart_margin.left + chart_margin.right);
  const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);

  const this_svg = d3.select('.bar-chart-container-team').append('svg')
    .attr('width', svg_width).attr('height', svg_height)
    .style('background-color', '#1B4965')
    .append('g')
    .attr('transform', `translate(${chart_margin.left},${chart_margin.top})`);

  // scale
  //V1.d3.extent find the max & min in gp
  const xExtent = d3.extent(gpData, d => d.gp);
  const xScale_v1 = d3.scaleLinear().domain(xExtent).range([0, chart_width]);
  //V2.0 ~ max
  let xMax = d3.max(gpData, d => d.gp);
  let xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0, chart_width]);
  //V3.Short writing for v2
  let xScale_v3 = d3.scaleLinear([0, xMax], [0, chart_width]);

  //垂直空間的分配 - 平均分布給各種類
  let yScale = d3.scaleBand().domain(gpData.map(d => d.player_name))
    .rangeRound([0, chart_height])
    .paddingInner(0.25);

  const bars = this_svg.append('g').attr('class', 'bars');

  // 創建 linearGradient 元素
  const gradient = this_svg.append('defs')
    .append('linearGradient')
    .attr('id', 'text-gradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '100%')
    .attr('y2', '0%');

  // 添加漸層色段
  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#FF0000');
  gradient.append('stop')
    .attr('offset', '50%')
    .attr('stop-color', '#FF8800');
  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#00A3FF');

  //Draw header
  let header = this_svg.append('g').attr('class', 'bar-header')
    .attr('transform', `translate(0,${-chart_margin.top / 2})`)
    .append('text');
  header.append('tspan').text('XXX throughout the season');
  // \xa0為增加空格
  let header_1 = this_svg.append('g').attr('class', 'bar-header')
    .attr('transform', `translate(0,${-chart_margin.top / 2})`)
    .append('text');
  header_1.append('tspan').text('Team: XXX\xa0\xa0\xa0\xa0\xa0Year: XXX')
    .attr('x', 0).attr('y', 20).style('font-size', '0.8em').style('fill', '#555');

  let xAxis = d3.axisTop(xScale_v3)
    .ticks(5)
    .tickFormat(formatTicks)
    .tickSizeInner(-chart_height)
    .tickSizeOuter(0);
  let xAxisDraw = this_svg.append('g')
    .attr('class', 'x axis');

  let yAxis = d3.axisLeft(yScale).tickSize(0);
  let yAxisDraw = this_svg.append('g')
    .attr('class', 'y axis');
  yAxisDraw.selectAll('text').attr('dx', '-0.6em');

  update(gpData);                 // 按鈕後更新資料

  // Button
  const sortButtons = d3.select('.bar-chart-container-team').append('div')
    .attr('class', 'controls');

  const ControlsOptions = ["Games", "Average Points", "Rebounds", "Assists", "Shooting Efficiency"];
  const data_name = ["gp", "pts", "reb", "ast", "ts_pct"];

  sortButtons.selectAll('button')
    .data(data_name)
    .enter()
    .append('button')
    .text(function (d, i) {
      return ControlsOptions[i];
    })
    .on('click', function (enent, d) {
      metric = d;
      console.log(metric)
      console.log(metric_year)
      const teamData = chooseTeam(barChartData, selectedTeam);
      const yearData = chooseYear(teamData, selectedYear);
      const thisData = chooseData(metric, yearData);
      console.log(yearData)
      console.log(thisData)
      update(thisData);
    });

  //interactive 互動處理
  // const tip = this_svg.append('text')
  //                     .attr("class", "tooltip");
  const tip = d3.select('.tooltip-team');
  function mouseover(e) {
    // get data
    const thisBarData = d3.select(this).data()[0];
    console.log(thisBarData);

    // debugger;

    const bodyData = [
      ['Age', thisBarData.age],
      ['Height', thisBarData.player_height + " cm"],
      ['Weight', thisBarData.player_weight + " kg"],
      ['Country', thisBarData.country], 
      ['College', thisBarData.college]
  ];

    tip.style('left', e.clientX + 'px')
      .style('top', e.clientY + 'px')
      .style('opacity', 0.98);

    if (metric === "gp") {
      bodyData.unshift(['Games', thisBarData.gp]);
    }
    else if (metric === "pts") {
      bodyData.unshift(['Average points', thisBarData.pts]);
    }
    else if (metric === "reb") {
      bodyData.unshift(['Rebounds', thisBarData.reb]);
    }
    else if (metric === "ast") {
      bodyData.unshift(['Assists', thisBarData.ast]);
    }
    else {
      bodyData.unshift(['Shooting efficiency', thisBarData.ts_pct]);
    }

    tip.select('h3').html(`${thisBarData.player_name}`);

    // tip.select('h4').html(`${thisBarData.college}, ${thisBarData.country}`);

    d3.select('.tip-body-team').selectAll('p').data(bodyData)
      .join('p').attr('class', 'tip-info-team')
      .html(d => `${d[0]} : ${d[1]}`);
  }

  function mousemove(e) {
    tip.style('left', (e.clientX + 15) + 'px')
      .style('top', e.clientY + 'px');
  }
  function mouseout(e) {
    tip.style('opacity', 0);
  }
  //interactive 新增監聽
  d3.selectAll('.bar')
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);

}

// Main
function ready_team(player, selectedYear, selectedTeam) {
  // const playerClean = filterData(player);
  // console.log(playerClean);
  const barChartData = prepareData_team(player);
  console.log(barChartData);

  // let input_team = ;       // 經由下拉試選單選擇的team
  const teamData = chooseTeam(barChartData, selectedTeam);
  console.log(teamData);
  console.log(selectedTeam);
  console.log(teamData[selectedYear]);
  // let input_year = ;       // 經由下拉試選單選擇的year
  const yearData = chooseYear(teamData, selectedYear);
  console.log(yearData);
  console.log(selectedYear);

  const gpData = chooseData('gp', yearData);
  console.log(gpData)
  setupCanvas_team(gpData, barChartData, selectedYear, selectedTeam);
}

// Choose Team
// Team的選擇已經用好了，就差套上下拉式選單
function chooseTeam(barChartData, team) {
  const thisTeam = barChartData[team];
  return thisTeam
}

// Choose Year
// year要能更動(透過下拉式選單連動)
function chooseYear(teamData, year) {
  const thisYear = teamData[year];
  // console.log(thisYear);
  return thisYear;
}

// Choose Data
function chooseData(metric, yearData) {
  const thisData = yearData.sort((a, b) => b[metric] - a[metric]);
  return thisData;
}









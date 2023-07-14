//Bar chart using loops and translations!

//To access an element in an array use the array name and the index number to access the properties of the object use dot notation

let data = [
  { value: 155, label: "Man City" },
  { value: 75, label: "Man UTD" },
  { value: 75, label: "Liverpool" },
  { value: 222, label: "Chelsea" },
  { value: 53, label: "Leicseter City" },
  { value: 49, label: "West Ham" },
  { value: 100, label: "Totenham" },
  { value: 78, label: "Arsenal" },
  { value: 96, label: "Leeds UTD" },
  { value: 66, label: "Everton" },
  { value: 92, label: "Aston Villa" },
  { value: 35, label: "Newcastle" },
  { value: 80, label: "Wolves" },
  { value: 20, label: "Crystal Palace" },
  { value: 34, label: "Southampton" },
  { value: 23, label: "Brighton" },
  { value: 1, label: "Burnley" },
  { value: 34, label: "Fulham" },
  { value: 38, label: "West Brom" },
  { value: 57, label: "Sheffield" },
];

let data2 = [
  { value: [40, 43], label: "Man City" },
  { value: [35, 38], label: "Man UTD" },
  { value: [39, 29], label: "Liverpool" },
  { value: [27, 32], label: "Chelsea" },
  { value: [34, 34], label: "Leicseter City" },
  { value: [34, 28], label: "West Ham" },
  { value: [33, 35], label: "Totenham" },
  { value: [31, 24], label: "Arsenal" },
  { value: [30, 32], label: "Leeds" },
  { value: [23, 24], label: "Everton" },
  { value: [30, 25], label: "Aston Villa" },
  { value: [20, 26], label: "Newcastle" },
  { value: [15, 21], label: "Wolves" },
  { value: [21, 20], label: "Crystal Palace " },
  { value: [19, 28], label: "Southampton" },
  { value: [18, 22], label: "Brighton" },
  { value: [19, 14], label: "Burnley" },
  { value: [18, 9], label: "Fulham " },
  { value: [20, 15], label: "West Brom" },
  { value: [8, 12], label: "Sheffield " },
];

let data3 = [
  { value: 20, value2: 155, wins: 27, label: "Man City" },
  { value: 13, value2: 75, wins: 21, label: "Man UTD" },
  { value: 12, value2: 65, wins: 20, label: "Liverpool" },
  { value: 18, value2: 222, wins: 19, label: "Chelsea" },
  { value: 11, value2: 53, wins: 20, label: "Leicester" },
  { value: 11, value2: 49, wins: 19, label: "West Ham " },
  { value: 12, value2: 100, wins: 18, label: "Totenham" },
  { value: 12, value2: 68, wins: 18, label: "Arsenal" },
  { value: 12, value2: 66, wins: 18, label: "Leeds " },
  { value: 12, value2: 66, wins: 17, label: "Everton" },
  { value: 15, value2: 92, wins: 16, label: "Aston Villa" },
  { value: 7, value2: 35, wins: 12, label: "Newcastle" },
  { value: 10, value2: 80, wins: 12, label: "Wolves" },
  { value: 8, value2: 20, wins: 12, label: "Crystal Palace" },
  { value: 9, value2: 34, wins: 12, label: "Southampton" },
  { value: 12, value2: 23, wins: 9, label: "Brighton" },
  { value: 11, value2: 1, wins: 10, label: "Burnley" },
  { value: 9, value2: 34, wins: 5, label: "Fulham" },
  { value: 6, value2: 38, wins: 5, label: "West Brom" },
  { value: 5, value2: 57, wins: 7, label: "Sheffield " },
];

let data4 = [
  { value: 83, value2: 155, wins: 32, label: "Man City" },
  { value: 73, value2: 75, wins: 44, label: "Man UTD" },
  { value: 68, value2: 65, wins: 42, label: "Liverpool" },
  { value: 58, value2: 222, wins: 36, label: "Chelsea" },
  { value: 68, value2: 53, wins: 50, label: "Leicseter " },
  { value: 62, value2: 49, wins: 47, label: "West Ham" },
  { value: 68, value2: 100, wins: 45, label: "Totenham" },
  { value: 50, value2: 78, wins: 39, label: "Arsenal" },
  { value: 62, value2: 96, wins: 54, label: "Leeds" },
  { value: 47, value2: 66, wins: 48, label: "Everton" },
  { value: 55, value2: 62, wins: 46, label: "Aston Villa" },
  { value: 46, value2: 35, wins: 62, label: "Newcastle" },
  { value: 36, value2: 80, wins: 52, label: "Wolves" },
  { value: 41, value2: 20, wins: 66, label: "Crystal Palace" },
  { value: 48, value2: 34, wins: 68, label: "Southampton" },
  { value: 41, value2: 23, wins: 46, label: "Brighton" },
  { value: 33, value2: 1, wins: 55, label: "Burnley" },
  { value: 27, value2: 34, wins: 55, label: "Fulham" },
  { value: 35, value2: 38, wins: 76, label: "West Brom" },
  { value: 20, value2: 57, wins: 63, label: "Sheffield" },
];

let colors;
let title;
let blurb =
  "The dataset I chose was based on the stats of the 2020/2021 season of the premier league. This is one of the most competitive leagues across all sports in the world and I wanted to see what it takes to be the best in the league. The dataset I looked at analyzed the goals scored, the goals conceded, the games won, and the amount of money spent by teams in that season. This gives a clear story of what teams are performing and what teams aren’t performing to standard, it also shows what a team needs to win the league.";
let chart01;
let chart02;
let chart03;
let chart04;
let chart05;

function setup() {
  createCanvas(1500, 1600);

  colors = [
    color("#F3646A"),
    color("#F68F6A"),
    color("#FAB666"),
    color("#FFE066"),
  ];
  chart01 = new ScatterPlotChart(
    data4,
    "Goals scored vs goals conceded in the 20/21 season",
    "Goals conceded",
    "Goals scored"
  );
  chart02 = new ScatterPlotChart(
    data3,
    "Clean sheets vs Games won in the 20/21 season",
    "Games Won",
    "Clean Sheets"
  );
  chart03 = new HorizontalBarChart(
    data,
    "Money spent during transfer winows in millions for the 20/21 season",
    "Money Spent",
    "Team"
  );
  chart04 = new StackedBarChart(
    data2,
    "Amount of home and away goals scored in the 20/21 season",
    "Team",
    "Total goals scored"
  );
}

function draw() {
  background(145, 187, 241);
  scale(1);
  fill(0);
  textSize(40);
  textAlign(LEFT, CENTER);
  text("What it takes to win a premier league", 30, 40);
  textSize(16);
  textAlign(LEFT, CENTER);
  text(blurb, 30, -120, 550, 500);
  chart01.render();
  chart01.updateVals();
  chart01.posX = 120;
  chart01.posY = 700;
  chart02.render();
  chart02.updateVals();
  chart02.posX = 800;
  chart02.posY = 700;
  chart03.render();
  chart03.updateVals();
  chart03.posX = 120;
  chart03.posY = 1350;
  chart04.render();
  chart04.updateVals();
  chart04.posX = 800;
  chart04.posY = 1350;
}

//map(val, 1, 222, 3, 20)

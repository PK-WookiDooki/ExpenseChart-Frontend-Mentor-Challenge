let monData = document.getElementById('monData');
let tueData = document.getElementById('tueData');
let wedData = document.getElementById('wedData');
let thuData = document.getElementById('thuData');
let friData = document.getElementById('friData');
let satData = document.getElementById('satData');
let sunData = document.getElementById('sunData');

let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let sun = document.getElementById('sun');

const dailySpending = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
  ]

monData.textContent = "$" + dailySpending[0].amount;
tueData.textContent = "$" + dailySpending[1].amount;
wedData.textContent = "$" + dailySpending[2].amount;
thuData.textContent = "$" + dailySpending[3].amount;
friData.textContent = "$" + dailySpending[4].amount;
satData.textContent = "$" + dailySpending[5].amount;
sunData.textContent = "$" + dailySpending[6].amount;


mon.textContent = dailySpending[0].day;
tue.textContent = dailySpending[1].day;
wed.textContent = dailySpending[2].day;
thu.textContent = dailySpending[3].day;
fri.textContent = dailySpending[4].day;
sat.textContent = dailySpending[5].day;
sun.textContent = dailySpending[6].day;
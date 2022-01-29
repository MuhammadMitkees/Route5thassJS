let cityName = "cairo";
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let leftTitle = document.querySelector("#leftTitle");
let rightTitle = document.querySelector("#rightTitle");
let secondHead = document.querySelector("#secondHead");
let thirdHead = document.querySelector("#thirdHead");
let firstRow = document.querySelector("#firstRow");
let todayTemp = document.querySelector("#todayTemp");
let dayNight = document.querySelector("#dayNight");
let thirdRow = document.querySelector("#thirdRow");
let rain = document.querySelector("#rain");
let wind = document.querySelector("#wind");
let windDirection = document.querySelector("#windDirection");
let secondIcon = document.querySelector("#secondIcon");
let secondMaxTemp = document.querySelector("#secondMaxTemp");
let secondMinTemp = document.querySelector("#secondMinTemp");
let secondCond = document.querySelector("#secondCond");
let thirdIcon = document.querySelector("#thirdIcon");
let thirdMaxTemp = document.querySelector("#thirdMaxTemp");
let thirdMinTemp = document.querySelector("#thirdMinTemp");
let thirdCond = document.querySelector("#thirdCond");
let searchBar = document.querySelector("#serachBar");

let sendingApi = async () => {
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cityName}&days=3`
  );
  let response = await data.json();
  console.log(response);
  let localTimeDay = new Date().getDay();
  let localMonthDay = new Date().getDate();
  let localMonth = new Date().getMonth();
  let city = response.location.name;
  let todayTempRes = response.current.temp_c;
  let dayOrNight = response.current.condition.icon;
  let rainChance = response.forecast.forecastday[0].day.daily_chance_of_rain;
  let windSpeed = response.forecast.forecastday[0].day.maxwind_kph;
  let windDirectionVal = response.current.wind_dir;
  let secondIconVal = response.forecast.forecastday[1].day.condition.icon;
  let secondMaxTempVal = response.forecast.forecastday[1].day.maxtemp_c;
  let secondMinTempVal = response.forecast.forecastday[1].day.mintemp_c;
  let secondCondVal = response.forecast.forecastday[1].day.condition.text;
  let thirdIconVal = response.forecast.forecastday[2].day.condition.icon;
  let thirdMaxTempVal = response.forecast.forecastday[2].day.maxtemp_c;
  let thirdMinTempVal = response.forecast.forecastday[2].day.mintemp_c;
  let thirdCondVal = response.forecast.forecastday[2].day.condition.text;

  let condition = response.current.condition.text;
  let localTimeDayName = weekDays[localTimeDay];
  let tommorowDay = weekDays[localTimeDay + 1];
  let afterTommorowDay = weekDays[localTimeDay + 2];
  let localMonthName = month[localMonth];

  //===================dom manipulation=================

  leftTitle.innerHTML = localTimeDayName;
  rightTitle.innerHTML = `${localMonthDay}${localMonthName}`;
  secondHead.innerHTML = tommorowDay;
  thirdHead.innerHTML = afterTommorowDay;
  firstRow.innerHTML = city;
  todayTemp.innerHTML = `${todayTempRes}<sup>o</sup>C`;
  dayNight.src = `https:${dayOrNight}`;
  thirdRow.innerHTML = condition;
  rain.innerHTML = `<img src="./images/icon-umberella.png"> ${rainChance}%`;
  wind.innerHTML = `<img src="./images/icon-wind.png"> ${windSpeed}Km/h`;
  windDirection.innerHTML = `<img src="./images/icon-compass.png"> ${windDirectionVal}`;
  secondIcon.src = `https:${secondIconVal}`;
  secondMaxTemp.innerHTML = `${secondMaxTempVal}<sup>o</sup>C`;
  secondMinTemp.innerHTML = `${secondMinTempVal}<sup>o</sup>C`;
  secondCond.innerHTML = secondCondVal;
  thirdIcon.src = `https:${thirdIconVal}`;
  thirdMaxTemp.innerHTML = `${thirdMaxTempVal}<sup>o</sup>C`;
  thirdMinTemp.innerHTML = `${thirdMinTempVal}<sup>o</sup>C`;
  thirdCond.innerHTML = thirdCondVal;
};
sendingApi();

let cityNameFunc = (searchTerm) => {
  cityName = searchTerm;
  sendingApi();
};

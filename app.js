'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//1st loc
var firstAndPike = {
  locationName: "1st and Pike",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 //lets use += later
};

firstAndPike.calcCustEachHour = function() {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
    //console.log(this.custEachHourArray);
  }
};

firstAndPike.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

firstAndPike.render = function() {
  this.calcCookiesEachHour();
};

firstAndPike.render();

var firstAndPikeh1 = document.createElement('h1');
firstAndPikeh1.textContent = firstAndPike.locationName;
document.body.appendChild(firstAndPikeh1);

var firstAndPikeUl = document.createElement('ul');

for (var i = 0; i < firstAndPike.cookiesEachHourArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = hours[i] + ': ' + firstAndPike.cookiesEachHourArray[i] + ' cookies';
  firstAndPikeUl.appendChild(listElement);
}

var listElement = document.createElement('li');
listElement.textContent = 'Total: ' + firstAndPike.totalDailyCookieSales + ' cookies';
firstAndPikeUl.appendChild(listElement);

document.body.appendChild(firstAndPikeUl);

// 2nd loc

var seaTac = {
  locationName: "SeaTac Airport",
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 //lets use += later
};

seaTac.calcCustEachHour = function() {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
    //console.log(this.custEachHourArray);
  }
};

seaTac.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

seaTac.render = function() {
  this.calcCookiesEachHour();
};

seaTac.render();

var seaTach1 = document.createElement('h1');
seaTach1.textContent = seaTac.locationName;
document.body.appendChild(seaTach1);

var seaTacUl = document.createElement('ul');

for (var i = 0; i < seaTac.cookiesEachHourArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = hours[i] + ': ' + seaTac.cookiesEachHourArray[i] + ' cookies';
  seaTacUl.appendChild(listElement);
}

var listElement = document.createElement('li');
listElement.textContent = 'Total: ' + seaTac.totalDailyCookieSales + ' cookies';
seaTacUl.appendChild(listElement);



document.body.appendChild(seaTacUl);

// 3rd loc
var seattleCenter = {
  locationName: "Seattle Center",
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 //lets use += later
};

seattleCenter.calcCustEachHour = function() {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
    //console.log(this.custEachHourArray);
  }
};

seattleCenter.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

seattleCenter.render = function() {
  this.calcCookiesEachHour();
};

seattleCenter.render();

var seattleCenterh1 = document.createElement('h1');
seattleCenterh1.textContent = seattleCenter.locationName;
document.body.appendChild(seattleCenterh1);

var seattleCenterUl = document.createElement('ul');

for (var i = 0; i < seattleCenter.cookiesEachHourArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = hours[i] + ': ' + seattleCenter.cookiesEachHourArray[i] + ' cookies';
  seattleCenterUl.appendChild(listElement);
}

var listElement = document.createElement('li');
listElement.textContent = 'Total: ' + seattleCenter.totalDailyCookieSales + ' cookies';
seattleCenterUl.appendChild(listElement);

document.body.appendChild(seattleCenterUl);

// 4th loc
var capitalHill = {
  locationName: "Capital Hill",
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 //lets use += later
};

capitalHill.calcCustEachHour = function() {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
    //console.log(this.custEachHourArray);
  }
};

capitalHill.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

capitalHill.render = function() {
  this.calcCookiesEachHour();
};

capitalHill.render();

var capitalHillh1 = document.createElement('h1');
capitalHillh1.textContent = capitalHill.locationName;
document.body.appendChild(capitalHillh1);

var capitalHillUl = document.createElement('ul');

for (var i = 0; i < capitalHill.cookiesEachHourArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = hours[i] + ': ' + capitalHill.cookiesEachHourArray[i] + ' cookies';
  capitalHillUl.appendChild(listElement);
}

var listElement = document.createElement('li');
listElement.textContent = 'Total: ' + capitalHill.totalDailyCookieSales + ' cookies';
capitalHillUl.appendChild(listElement);

document.body.appendChild(capitalHillUl);

// 5th loc
var alki = {
  locationName: "Alki",
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0 //lets use += later
};

alki.calcCustEachHour = function() {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
    //console.log(this.custEachHourArray);
  }
};

alki.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};

alki.render = function() {
  this.calcCookiesEachHour();
};

alki.render();

var alkih1 = document.createElement('h1');
alkih1.textContent = alki.locationName;
document.body.appendChild(alkih1);

var alkiUl = document.createElement('ul');

for (var i = 0; i < alki.cookiesEachHourArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = hours[i] + ': ' + alki.cookiesEachHourArray[i] + ' cookies';
  alkiUl.appendChild(listElement);
}

var listElement = document.createElement('li');
listElement.textContent = 'Total: ' + alki.totalDailyCookieSales + ' cookies';
alkiUl.appendChild(listElement);

document.body.appendChild(alkiUl);

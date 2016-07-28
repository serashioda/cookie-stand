// MASTER OF JS; collaborated w/ Lee & Adrian
'use strict';

//GOLBAL VARIABLES
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var allLocations = [];

var locationTable = document.getElementById('locationTable');
var salesInput = document.getElementById('salesInput');
var clearTable = document.getElementsByClassName('sumbit');

//OBJECT CONSTRUCTOR
function Location(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
//PROPERTIES
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
//ARRAYS
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;

  allLocations.push(this);
};

//METHODS; USE RANDOM GENERATOR TO CALC CUST EACH HOUR
this.prototype.calcCustEachHour = function() {
//FOR LOOP
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
  };

// USE PREV FUNCTION OUTPUT TO CALC # OF COOKIES SOLD EACH HOUR; USE .CEIL TO ROUND UP FOR WHOLE COOKIES
  this.prototype.calcCookiesEachHour = function() {
    this.calcCustEachHour();
//FORLOOP
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };

//TAKE ARRAY AND DISPLAY OUTCOME FROM FUNCTION INTO UNORDERED LIST
  this.render = function() {
    this.calcCookiesEachHour();
  };

  this.render();

//STORE LOCATIONS
var firstAndPike = new Location('1st and Pike','23','65','6.3');
var seaTac = new Location('SeaTac Airport','3','24','12');
var seattleCenter = new Location('Seattle Center','11','38','3.7');
var capitalHill = new Location('Capital Hill','20','38','2.3');
var alki = new Location('Alki','2','16','4.6');
//FORLOOP
for (var i = 0; i < allLocations.length; i++) {
  console.log(allLocations[i].locationName);
};

console.log(firstAndPike);
console.log(seaTac);
console.log(seattleCenter);
console.log(capitalHill);
console.log(alki);

function dataInput(event) {
  event.preventDefault();
  console.log('Form button was clicked.');

  if (!event.target.storeName.value || !event.target.minCustPerHour.value || !event.target.maxCustPerHour.value || !event.target.avgCookiesPerCust.value) {
    return alert('Fields cannot be empty!');
  }

  for (i = 0; i < allLocations.length; i++)
    if () {
  var storeName = event.target.storeName.value;
  console.log('Is this working? ' + storeName);
  var minCustPerHour = parseInt(event.target.minCustPerHour.value);
  console.log(typeof(minCustPerHour));
  console.log('Is this working? ' + minCustPerHour);
  var maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  console.log('Is this working? ' + maxCustPerHour);
  var avgCookiesPerCust = parseInt(event.target.avgCookiesPerCust.value);
  console.log('Is this working? ' + avgCookiesPerCust);
    }
      else if {
    }

  function clearTable() {
    locationTable.innerHTML = '';
    console.log('You just cleared the table!');
  };
  clearTable();

  var newStore = new Store(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust);
  // console.log('Is this working well? ' + event.target.newStore.value);

  event.target.storeName.value = null;
  event.target.minCustPerHour.value = null;
  event.target.maxCustPerHour.value = null;
  event.target.avgCookiesPerCust.value = null;

  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

allLocations.push(newStore);

//HEADER ROW
function makeHeaderRow() { //eslint-disable-line
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
};

//RENDER
function renderAllStores() { //eslint-disable-line
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
};

//MAKE ALL TIMES COLUMNS
function makeAllTimesColumns() {
  var tableRow = document.createElement('tr');

//MAKING EMPTY CELL FOR  1ST COLUMN
  tableRow.appendChild(document.createElement('td'));

  for (var i=0; i < hours.length; i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
//APPEND TD ELEMENT
    tableRow.appendChild(tdElement);
    }
//APPEND TO TABLE ROW
  locationTable.appendChild(tableRow);
}

//FINAL FUNCTION TO MAKE ALL LOCATIONS ROWS
function makeAllLocationRows() {
//FOR LOOP
  for (var location = 0; location < allLocations.length; location++) {
    var tableRow = document.createElement('tr');

    var tdElement = document.createElement('td');
    tdElement.textContent = allLocations[location].locationName;
//APPEND TO TD ELEMENT
    tableRow.appendChild(tdElement);
//FOR LOOP
    for (var i = 0; i < allLocations[location].cookiesEachHourArray.length; i++) {
      var listElement = document.createElement('td');
      listElement.textContent = allLocations[location].cookiesEachHourArray[i];
      tableRow.appendChild(listElement);
    }
//APPEND TO TABLE ROW
    locationTable.appendChild(tableRow);
  }
};

//F00TER ROW WITH BIG TOTAL
function makeFooterRow() { //eslint-disable-line
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);
  var bigTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      bigTotal += storeLocations[j].averageCookiesPerHour[i];
      console.log(bigTotal);
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigTotal;
  tableRow.appendChild(tdElement);
}

//CALLING COLUMNS AND ROWS
makeAllTimesColumns();
makeAllLocationRows();
makeTotalRows();

//ADD EVENT LISTENER
salesInput.addEventListener('submit', dataInput); //eslint-disable-line

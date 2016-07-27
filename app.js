// Master of JS
'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var allLocations = [];

//OBJECT CONSTRUCTOR
function Location(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
//PROPERTIES
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  allLocations.push(this);

//METHODS; USE RANDOM GENERATOR TO CALC CUST EACH HOUR
this.calcCustEachHour = function() {
//FOR LOOP
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
  };

// USE PREV FUNCTION OUTPUT TO CALC # OF COOKIES SOLD EACH HOUR; USE .CEIL TO ROUND UP FOR WHOLE COOKIES
  this.calcCookiesEachHour = function() {
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };

// TAKE ARRAY AND DISPLAY OUTCOME FROM FUNCTION INTO UNORDERED LIST
  this.render = function() {
    this.calcCookiesEachHour();
  };

  this.render();
}
// LOC AND FORLOOP
var firstAndPike = new Location('1st and Pike','23','65','6.3');
var seaTac = new Location('SeaTac Airport','3','24','12');
var seattleCenter = new Location('Seattle Center','11','38','3.7');
var capitalHill = new Location('Capital Hill','20','38','2.3');
var alki = new Location('Alki','2','16','4.6');
//
for (var i = 0; i < allLocations.length; i++) {
  console.log(allLocations[i].locationName);
}

console.log(firstAndPike);
console.log(seaTac);
console.log(seattleCenter);
console.log(capitalHill);
console.log(alki);

var locationTable = document.getElementById('locationjs');
console.log('locationTable is', locationTable);
// MAKE HEADER ROWS
function makeHeaderRow() {

  var tableRow = document.createElement('tr');

//<th>firstAndPike</th>
  var thElement = document.createElement('th');
  thElement.textContent = '1st and Pike';
//append to th element
  tableRow.appendChild(thElement);

//<th>seaTac</th>
  var thElement = document.createElement('th');
  thElement.textContent = 'SeaTac Airport';
//append to th element
  tableRow.appendChild(thElement);

//<th>seattleCenter</th>
  var thElement = document.createElement('th');
  thElement.textContent = 'Seattle Center';
//append to th element
  tableRow.appendChild(thElement);

//<th>capitalHill</th>
  var thElement = document.createElement('th');
  thElement.textContent = 'Capital Hill';
//append to th element
  tableRow.appendChild(thElement);

//<th>alki</th>
  var thElement = document.createElement('th');
  thElement.textContent = 'Alki';
//append to th element(?)
  locationTable.appendChild(tableRow);
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
}
//CALLING COLUMNS AND ROWS
makeAllTimesColumns();
makeAllLocationRows();

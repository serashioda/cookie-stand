// MASTER OF JS; collaborated w/ Lee & Adrian
'use strict';

//GOLBAL VARIABLES
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var allLocations = [];

var salmonTable = document.getElementById('locationjs');
var clearTable = document.getElementsByClassName('submit');

//OBJECT CONSTRUCTOR
function Location(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
//PROPERTIES
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
//ARRAYS
  this.custEachHourArray = [];
  this.averageCookiesPerHour = [];
  this.totalDailyCookieSales = 0;
  this.calcCustEachHour();
  this.cookiesPerCustomer();

  allLocations.push(this);
};

//METHODS; USE RANDOM GENERATOR TO CALC CUST EACH HOUR
Location.prototype.calcCustEachHour = function() {
//FOR LOOP
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
  };

  Location.prototype.cookiesPerCustomer = function() {
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.averageCookiesPerHour.push(singleHourCookies);
      this.totalCookiesPerDay += singleHourCookies;
    }
  };

// USE PREV FUNCTION OUTPUT TO CALC # OF COOKIES SOLD EACH HOUR; USE .CEIL TO ROUND UP FOR WHOLE COOKIES
Location.prototype.render = function() {
  var trName = document.createElement('tr');
  var tdLocation = document.createElement('td');
  tdLocation.textContent = this.locationName;
  trName.appendChild(tdLocation);
  for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trName.appendChild(tdCell);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trName.appendChild(tdTotal);
  salmonTable.appendChild(trName);
};

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

// console.log(firstAndPike);
// console.log(seaTac);
// console.log(seattleCenter);
// console.log(capitalHill);
// console.log(alki);

function dataInput(event) {
  event.preventDefault();
  console.log('Form button was clicked.');

  if (!event.target.storeNameForm.value ||
    !event.target.minCustForm.value ||
    !event.target.maxCustForm.value ||
    !event.target.avgCookieForm.value) {
    return alert('Fields cannot be empty!');
  }

  // for (i = 0; i < allLocations.length; i++)
  //   if () {
  var locationName = event.target.storeNameForm.value;
  console.log('Is this working? ' + locationName);
  var minCustPerHour = parseInt(event.target.minCustForm.value);
  console.log(typeof(minCustPerHour));
  console.log('Is this working? ' + minCustPerHour);
  var maxCustPerHour = parseInt(event.target.maxCustForm.value);
  console.log('Is this working? ' + maxCustPerHour);
  var avgCookiesPerCust = parseInt(event.target.avgCookieForm.value);
  console.log('Is this working? ' + avgCookiesPerCust);
  //   }
  //     else if {
  //   }

  function clearTable() {
    salmonTable.innerHTML = '';
    console.log('You just cleared the table!');
  };
  clearTable();

  var newStore = new Location(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust);
  // console.log('Is this working well? ' + event.target.newStore.value);
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
  event.target.storeNameForm.value = null;
  event.target.minCustForm.value = null;
  event.target.maxCustForm.value = null;
  event.target.avgCookieForm.value = null;
}

makeHeaderRow();
renderAllStores();
makeFooterRow();

// allLocations.push(newStore);

// //HEADER ROW
// function makeHeaderRow() { //eslint-disable-line
//   var tableRow = document.createElement('tr');
//   var thElement = document.createElement('th');
//   thElement.textContent = null;
//   salmonTable.appendChild(tableRow);
//   tableRow.appendChild(thElement);
//   for (var i = 0; i < hours.length; i++) {
//     thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     tableRow.appendChild(thElement);
//   }
//   thElement = document.createElement('th');
//   thElement.textContent = 'Location Total';
//   tableRow.appendChild(thElement);
//   console.log(salmonTable);
//   salmonTable.appendChild(tableRow);
// };
//
// //RENDER
// function renderAllStores() { //eslint-disable-line
//   for (var i = 0; i < allLocations.length; i++) {
//     allLocations[i].render();
//   }
// };

// //MAKE ALL TIMES COLUMNS
// function makeAllTimesColumns() {
//   var tableRow = document.createElement('tr');
//
// //MAKING EMPTY CELL FOR  1ST COLUMN
//   tableRow.appendChild(document.createElement('td'));
//
//   for (var i=0; i < hours.length; i++){
//     var tdElement = document.createElement('td');
//     tdElement.textContent = hours[i];
// //APPEND TD ELEMENT
//     tableRow.appendChild(tdElement);
//     }
// //APPEND TO TABLE ROW
//   locationTable.appendChild(tableRow);
// }
//
// //FINAL FUNCTION TO MAKE ALL LOCATIONS ROWS
// function makeAllLocationRows() {
// //FOR LOOP
//   for (var location = 0; location < allLocations.length; location++) {
//     var tableRow = document.createElement('tr');
//
//     var tdElement = document.createElement('td');
//     tdElement.textContent = allLocations[location].locationName;
// //APPEND TO TD ELEMENT
//     tableRow.appendChild(tdElement);
// //FOR LOOP
//     for (var i = 0; i < allLocations[location].cookiesEachHourArray.length; i++) {
//       var listElement = document.createElement('td');
//       listElement.textContent = allLocations[location].cookiesEachHourArray[i];
//       tableRow.appendChild(listElement);
//     }
// //APPEND TO TABLE ROW
//     locationTable.appendChild(tableRow);
//   }
// };

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
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
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
    for (var j = 0; j < allLocations.length; j++) {
      hourlyTotal = hourlyTotal + allLocations[j].averageCookiesPerHour[i];
      bigTotal += allLocations[j].averageCookiesPerHour[i];
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
////////makeAllTimesColumns();
///////makeAllLocationRows();
///////makeTotalRows();

//ADD EVENT LISTENER
var salesInput = document.getElementById('salesInput');
salesInput.addEventListener('submit', dataInput); //eslint-disable-line

'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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
document.body.appendChild(firstAndPikeUl);



// RENDER
// var aaron = document.createElement('h1');
// aaron.textContent = "Aaron is the man.";
// document.body.appendChild(aaron);
//
// aaron.id = "man";
// aaron.textContent = "Aaron is SO MUCH the man.";
// aaron.setAttribute('class', 'men');
//
// var aaronSkills = ['code', 'magic', 'dancing', 'cooking', 'long walks on the beach', 'basketball', 'brushing hair', 'beard grooming', 'rescuing kittens'];
// var firstAndPikeUl = document.createElement('ul');
//
// for (var i = 0; i < aaronSkills.length; i++) {
//   var listElement = document.createElement('li');
//   listElement.textContent = aaronSkills[i];
//   aaronList.appendChild(listElement);
// }
// document.body.appendChild(aaronList);




//code to make the list starts here
//  cookiesPerHour: function () {
// var custPerHour = math.round(math.random * (this.maxCust - this.minCust));
// var cookiesPerHour = (custPerHour * avgSales);
// var   = ();
// for (var i=0; i < ; i++) {
//
// }
//
//   }

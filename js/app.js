/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matCountDiv = document.getElementById('matCount');
matCountDiv.innerHTML = '11';

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgCountDiv = document.getElementById('msgCount');
msgCountDiv.innerHTML = '23';

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var fullNameDiv = document.getElementById('fullname');
fullname.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageDiv = document.getElementById('age');
ageDiv.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobDiv = document.createElement('job');
jobDiv.innerHTML = 'Clown and Restauranteur';
var getId = document.getElementById('data');
getId.appendChild(jobDiv);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var newElement = document.createElement('div');
newElement.id = 'hobbies';
newElement.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
var getDiv = document.getElementById('data');
getDiv.appendChild(newElement);


//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var newE = document.createElement('div');
newE.id = 'location';
newE.innerHTML = 'Honolulu, HI'
var getD = document.getElementById('data');
getD.appendChild(newE);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var newWantsElement = document.createElement('div');
newWantsElement.id = 'wants';
newWantsElement.innerHTML = 'Looking for a Mrs. McDonald.';
var getDi = document.getElementById('data');
getDi.appendChild(newWantsElement);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var paragraphElement = document.createElement('p');
paragraphElement.id = 'pro2';
paragraphElement.innerHTML = 'Its lit. Waipahu Elementary School C/O 3037';
var div = document.getElementById('profile');
div.appendChild(paragraphElement);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var idMatch = document.getElementsByClassName('firstName');
idMatch[0].innerHTML = 'Wendy';


//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var other = document.getElementsByClassName('otherAge');
other[0].innerHTML = '48';

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var stat = document.getElementsByClassName('status');
stat[0].innerHTML = '48';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var firstnam = document.getElementsByClassName('firstName');
firstnam[1].innerHTML = 'Peko Chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var ag = document.getElementsByClassName('otherAge');
ag[1].innerHTML = '68';
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto
 var imag = document.getElementsByClassName('other')
 imag[2].src = 'https://vignette.wikia.nocookie.net/yandere-simulator/images/a/a3/Wendy%27s.png/revision/latest?cb=20170802202854';
 var fir = document.getElementsByClassName('firstName');
 fir[2].innerHTML = 'isaiah';
 var oth = document.getElementsByClassName('otherAge');
 oth[2].innerHTML = '18';
 var sta = document.getElementsByClassName('status');
 sta[2].innerHTML = 'been lit';
 var mot = document.getElementsByClassName('motto');
 mot[2].innerHTML = 'YoLoSwAg';
 var getI = document.getElementById('matches');
 getI.appendChild(prof);






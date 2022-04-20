//Exercise 1 - Display date and time, update every second.
function pageDate(){
    const days1 = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    const dateNow = new Date();
    let day = days1[dateNow.getDay()];
    var dateString = day+' '+dateNow.getFullYear()+'/'+dateNow.getMonth()+'/'+dateNow.getDay()+
    ' '+dateNow.getHours()+':'+dateNow.getMinutes()+':'+dateNow.getSeconds();
    document.getElementById("task1").innerHTML = dateString;
    }
    setInterval(pageDate, 1000);
    
//Exercise 2 - Enter a year to check if it is a leap year.
function leapYear(){
    var yearToTest2 = document.getElementById("year2").value;
    var leapYear = (yearToTest2 % 4 === 0);
    document.getElementById("task2").innerHTML = leapYear;
    if(leapYear){
      document.getElementById("task2").innerHTML = yearToTest2 + ' is a leap year.';
    }else{
      document.getElementById("task2").innerHTML = yearToTest2 + ' is not a leap year.';
    }
  }

//Exercise 3 - Enter a date to check what weekday it is.
function weekdayCheck(){
    const days3 = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    var dateToTest3 = document.getElementById("day3").value;
    var monthToTest3 = document.getElementById("month3").value-1;
    var yearToTest3 = document.getElementById("year3").value;
    var date = new Date(yearToTest3, monthToTest3, dateToTest3);
    var weekday = days3[date.getDay()];
    document.getElementById("task3").innerHTML = weekday;
  } 
  
//Exercise 4 - Guess a number between 1 and 10.
function randomNumber(){
    var numberToTest = document.getElementById("number").value;
    var randomNumber = Math.floor(Math.random()*10)+1;
    if(numberToTest == randomNumber){
      document.getElementById('task4').innerHTML = 'Random number is '+randomNumber+ ', you guessed '+ numberToTest+', wich is right.';
    }else{
      document.getElementById('task4').innerHTML = 'Random number is '+randomNumber+ ', you guessed ' + numberToTest+ ', wich is wrong.';
    }
  }

//Exercise 5
function daysToChristmas(){
  var christmas = new Date("Dec 24, 2022 15:00:00").getTime();
  var now = new Date().getTime();
  var difference = christmas - now;
  var days = Math.floor(difference/(1000*60*60*24));
  document.getElementById('task5').innerHTML = 'Days to christmas: '+days;
}

//Exercise 6
function revereseInput(){
    var inputString = document.getElementById('string6').value;
    const inputArray = inputString.split(" ");
    inputArray.reverse();
    document.getElementById('task6').innerHTML = inputArray;
  }

//Exercise 7 - Enter a word to generate all combinations of that word.
function wordCombinator(){
    const inputString7 = document.getElementById('string7').value;
    let outputArray7 = [];
    let result;
    let round=0;
    let start=0;
    
    for(round; round<inputString7.length; round++){
      for(start; start<inputString7.length; start++){
          result = inputString7.substring(start, inputString7.length);
          outputArray7.push(result);
          document.getElementById('task7').innerHTML = result;
        }  
    }
    document.getElementById('task7').innerHTML = outputArray7;
  }

//Exercise 8 - Enter a word to sort the letters i alfabetical order.
function letterSorter(){
    const inputString8 = document.getElementById('string8').value;
    let inputArray8 = inputString8.split('');
    let sortedArray = inputArray8.sort();
    let outputString8 = sortedArray.toString();
    document.getElementById('task8').innerHTML = outputString8;
}

//Exercise 9 - Converts the first letter of each word to upper case and finds the word with the most letters.
function exercise9(){
    const inputString9 = document.getElementById('string9').value;
    let inputArray9 = inputString9.split(' ');
    for(i=0; i<inputArray9.length; i++){
      inputArray9[i] = inputArray9[i].charAt(0).toUpperCase() + inputArray9[i].substring(1);
    }
    let outputString9 = inputArray9.join(' ');

    let foundLength = 0;
    let longestWord;
    for(i=0; i<inputArray9.length; i++){
      if(foundLength < inputArray9[i].length){
      foundLength = inputArray9[i].length;
      longestWord = inputArray9[i];
      }
    }
    document.getElementById('task9').innerHTML = outputString9 + ' and the longest word is ' + longestWord + ', ' + foundLength + ' letters.';
}

//Exercise10 - Check if the positive number entered is a prime number
function findPrimeNumber(){
  const number10 = document.getElementById('number10').value;
  let isPrime = true;

  if(number10 == 1){
    document.getElementById('task10a').innerHTML = number10 + ' is not a composite number.';
    isPrime=false;
  }

  if(number10 < 1){
    document.getElementById('task10a').innerHTML = number10 + ' is not a positive number.';
    isPrime=false;
  }

  if(number10 > 1){
    for(let i=2; i<number10; i++){
      if(number10 % i == 0){
        isPrime = false;
        break;
      }
    }
  }

  if(isPrime){
    document.getElementById('task10b').innerHTML = number10 + ' is a prime number.';
  }else{
    document.getElementById('task10b').innerHTML = number10 + ' is not a prime number.';
  }
}

//Exercise 11 - Check if value entered is a number or a string
function valueType(){
  const number11 = document.getElementById('number11').value;
  let isNumber = false;
  for(let i=0; i<number11.length; i++){
    if(number11.charAt(i) >= 0){
      isNumber = true;
    }else{
      isNumber = false;
      break;
    }
  }
  if(isNumber){
    document.getElementById('task11').innerHTML = number11 + ' is a number.';
  }else{
    document.getElementById('task11').innerHTML = number11 + ' is a string.';
  }
}

//Exercis 12 - A script iterating from 0 to 15 and display if the number is even or odd.
function oddOrEven(){
  for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
      alert( i + ' is an even number.');
    }else{
      alert( `${i} is an odd number.`);
    }
  }
}

//Exercise 13 - A display of the first 10 “happy numbers”.
/*
function happyNumbers(){
let round13 = 0;
let number13 = 1;
let found13 = 0;
let test;
for(round13; found13<=10 ;round13++){
    test = number13
} 
}
*/

//Exercise 14 - join the elements in an array into a string and display it.
function arrayToString(){
  var schoolDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  let outputString14 = '';
  for(let i=0; i<schoolDays.length; i++){
      if(i != 4)
        outputString14 = outputString14 + schoolDays[i] + ', ';
      else
        outputString14 = outputString14 + ' and ' + schoolDays[i] + ' are schooldays';
  }
  document.getElementById('task14').innerHTML = outputString14;
}

//Exercise 15 - sort the numbers in an array according to size and display it.
function sortArray(){
  const inputString15 = document.getElementById('string15').value;
    let inputArray15 = inputString15.split(' ');
    inputArray15.sort(function(a,b){return a-b});
    let outputString15 = inputArray15.toString();
    document.getElementById('task15').innerHTML = outputString15;
}

//Exercise 16 - remove duplicates items in an array.
function removeDuplicates(){
  const inputString16 = document.getElementById('string16').value;
  const inputArray16 = inputString16.split(' ');
  const setArray = new Set(inputArray16);
  let outputArray16 = [...setArray]; 
  document.getElementById('task16').innerHTML = outputArray16;
}

//Exercise 17 - remove the ‘null’ and ‘0’ values in an array.
function removeNull(){
  const inputString17 = document.getElementById('string17').value;
  const inputArray17 = inputString17.split(' ');
  let outputArray17 = [];
  
  //Remove 0
  for(let i=0; i<inputArray17.length; i++){
    if(inputArray17[i] !=0)
      outputArray17.push(inputArray17[i]);
  }

  //Remove null
  var filteredArray = outputArray17.filter(function(item){ return item != null;});

  document.getElementById('task17a').innerHTML = 'Removed 0: ' + outputArray17.toString();
  document.getElementById('task17b').innerHTML = 'Removed null: ' + filteredArray.toString();
}

//Exercis 18 - find and display the number of days in a given month.
function daysInMonth(){
  const month = document.getElementById('string18a').value;
  const year = document.getElementById('string18b').value;
  let days = new Date(year, month, 0).getDate();
  alert(days);
}

//Exercis 19 - convert the number of minutes into hours and minutes.
function minutesToHoursAndMinutes(){
  const minutesTotal = document.getElementById('string19').value;
  let hoursOut = Math.floor(minutesTotal / 60);
  let minutesOut = minutesTotal % 60;
  document.getElementById('task19').innerHTML = hoursOut + ' hour(es) and ' + minutesOut + ' minute(s).';
}

//Exercis 20 - calculate the age from a given year.
function calculateAge(){
  const year20 = document.getElementById('string20').value;
  let age = new Date().getFullYear() - year20;
  document.getElementById('task20').innerHTML = 'Age ' + age;
}

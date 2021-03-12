$.ajax({
    url: 'https://data.cityofnewyork.us/resource/sp4a-vevi.json',
    dataType: 'json',
    success: function(data) {


var welecoming = alert("Hello, this is the covid meal location database.")//The topic

function wowYoufailed(){
  var goldEditiongames = parseInt(prompt("Choose from the following options using numbers: 1. City 2. District."));//This gives user choice to choose betwwen city and district.


if (goldEditiongames === 1) {
  cityManchester(); 
} 
else if (goldEditiongames === 2) { 
  districtGood(); 
}
}

wowYoufailed();// Calls function for the prompt to show up


function cityManchester(){//the section for user's choice
var freeMeals = [];
var theFreemeal = prompt("Which city in New York are you looking for, to get free meal?(First word must be Capitalized!)");
var aleRt = alert("These are the schools that have free meals in " + theFreemeal + ".");//user can pick from place they want their lunch
for (i = 0; i < data.length; i++) {
  if(data[i].city == undefined){
    freeMeals.push("None".split(", ")); // 
    }
    else{
      freeMeals.push(data[i].city.split(", "));
        }
        }
        for (i = 0; i < data.length; i++) {
          for(var j = 0; j < freeMeals[i].length; j++){
            if (freeMeals[i][j] == theFreemeal){
              document.write(data[i].schoolname + "<br>* "); //gives the data of the school names and the streeet
              }
          }
     }
}



function districtGood(){// the second section for user's choice
var distrIctor = [];
var madIstrict = prompt("What district do you want to search?");
var alErt = alert("These are the schools that have free meals in the " + madIstrict + " district.");
for (i = 0; i < data.length; i++) {
  if(data[i].district == undefined){
    distrIctor.push("None".split(", "))
    }
    else{
      distrIctor.push(data[i].district.split(", "));
        }
      }
      for (i = 0; i < data.length; i++) {
      for(var j = 0; j < distrIctor[i].length; j++){
        if (distrIctor[i][j] == madIstrict){
          document.write(data[i].schoolname + "*<br> ")
        }
    }
    }
}
}
});
//Ill just leave like this so tmr ealry i can fix it ok
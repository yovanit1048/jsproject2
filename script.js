$.ajax({
    url: 'https://data.cityofnewyork.us/resource/sp4a-vevi.json',
    dataType: 'json',
    success: function(data) {


var welecoming = alert("Hello, this is the covid meal location database.")

function goldEditiongames(){ prompt("Choose from the following options using numbers: 1. City 2. District.");


if (goldEditiongames === 1) {
  cityManchester(); 
} else if (goldEditiongames === 2) { 
  districtGood(); 
}
}

goldEditiongames();


function cityManchester(){
var freeMeals = [];
var theFreemeal = prompt("Which city in New York are you looking for, to get free meal?(First word must be Capitalized!)"); //user can pick from place they want their lunch
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
              document.write("These school have free food:" + data[i].schoolname + ", " + data[i].siteaddress); //gives the data of the school names and the streeet
              }
          }
     }
}

cityManchester();

function districtGood(){
var districtlunch = [];
var userDist = prompt("What your choice of District?(Numbers Only!)");
for (i = 0; i < data.length; i++) {
  if(data[i].district == undefined){
    districtlunch.push("None".split(", "));
    }
    else{
      districtlunch.push(data[i].district.split(", "));
      }
      }
      for (i = 0; i < data.length; i++){
        for (var j = 0; j < userDist[i].length; j++){
          if (districtlunch[i][j] == userDist){
            document.write(data[i].schoolname + ", ");
          }
          }
      }
}

districtGood();

}     
});
//Ill just leave like this so tmr ealry i can fix it ok
//
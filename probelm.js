function getAvgAge(arrOfObj){
  let sum = 0;
  for (let i = 0; i < arrOfObj.length; i++) {

    age = Number(arrOfObj[i]["age"])
    sum +=age
  }
  let avg = Math.round(sum / arrOfObj.length);
  return avg
};

function getAvgAge2(arrOfObj){
  let sum = 0;
  arrOfObj.forEach(person => sum+= Number(person["age"]));
  return Math.round(sum/arrOfObj.length);
}


let arrOfObj = [
  {"name": "Tom Brady",
  "age": "42"},
  {"name": "Allen, Josh",
  "age":"23" },
  {"name": "Russell Wilson",
  "age": "30"}]

  console.log(getAvgAge2(arrOfObj))
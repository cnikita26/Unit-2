// Problem 1. complete the below function
function school(schoolName,location,established,...subject) {
  let obj={}

  obj.name = schoolName;
  // obj.location = location;
  // obj.established = established;
  // obj.subject = subject;

  obj.getGeneralInfo = function(){
    return `${this.name} was established in ${established} at ${location}.`
  }
   obj.getSubjectsInfo = function(){
    return `At ${this.name} we teach ${subject.join(", ")}.`
  }


  return obj;
}
//school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

let outputArray = inputArray.reduce(function(acc,item){
  // acc=[]
//item={
  //   idMeal: "52768",
  //   strMeal: "Apple Frangipan Tart",
  //   Category: 3,
  //   Area: 1,
  // }

  let obj={}

  let cat=item.Category;


  for(let i in categoriesDirectory){
    if(cat==i){
      cat=categoriesDirectory[i];
      break;
    }
  }

  let area =item.Area;

  for(let i=0;i<areas.length;i++){
    if(areas[i].id == area){
      area=areas[i].name;
    }
  }

  obj.productID = item.idMeal;
  obj.productTitle = item.strMeal;
  obj.Category = cat;
  obj.Area = area;

  acc.push(obj)

 
   return acc;
  },[])

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };

// Problem 1. complete the below function
function schoolObj(schoolName,location,established,...subjects) {
  let obj={}

  obj.schoolName = schoolName;
  obj.location = location;
  obj.established = established;
  obj.subjects = subjects;

  obj.getGeneralInfo = function(){
    return `${schoolName} was established in ${established} at ${location}.`
  }

  // obj.getSubjectsInfo = function(){
  //   return `At ${schoolName} we teach ${subjects}`
  // }


  return obj
}
school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');

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

  obj.productId=item.idMeal;
  obj.productTitle = item.strMeal;

  obj.category=item.categoriesDirectory;

  obj.Area = item.areasDirectory;

   acc.push(obj)
   return acc;
},[])

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };

function studentData(firstName,lastName,age,marksArray, ...hobbies) {

  let obj={};

  obj.fullName = `${firstName} ${lastName}`;
  obj.age = age;
  obj.hobbies = hobbies;

  obj.getInfo = function(){
    return `${firstName} ${lastName}'s age is ${age}.`
  }

  obj.getResult = function(){
    let marksTotal = 0;
    for(let mark of marksArray){
      marksTotal+=mark
    }
    let numberOfItem = marksArray.length
    let avg = marksTotal/numberOfItem

    return (avg<50)?'Result: FAIL':'Result: PASS'
  }


  return obj;
}

let studentObj = studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
  console.log(studentObj);

export {
  studentData
}
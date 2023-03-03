// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];

window.addEventListener("load",()=>{
    showCats();
});



async function showCats(){
    let res = await fetch(`${baseServerURL}/cats`)
    let data = await res.json();


    let cats=data.map( item => ({
        name:item.name,
        descrption:item.description.substring(0,75),
        cost:item.cost,
        image:`${baseServerURL}${item.image}`,
        id: item.id

    }))
    catsData=cats;
    renderCats(cats)
}


function renderCats(cats){
    let data = cats.map(item =>{
      return renderCats(item)
    })
    mainSection.innerHTML=data.join(" ")
}


function renderCard(data){
    let card = `
    <div class ="card" data-id=${data.id}>
        <div class ="card-image">
            <img src= ${data.image} alt=""/>
        </div>
        <div class="card-body">
            <h3 class="card-item card-title">${data.name}</h3>
            <div class="card-item card-description">
                ${data.description}
            </div>
            <div class="card-item card-additional-info">
                ${data.price}
            </div>

        </div>
    </div>
    `
   return card;
}


let sortLowToHigh = document.getElementById("sort-low-to-high")
let sortHighToLow = document.getElementById("sort-high-to-low")

sortLowToHigh.addEventListener("click",()=>{
    let sortedData= catsData.sort((a,b) => a.cost - b.cost);
    renderCats(sortedData);
})
sortHighToLow.addEventListener("click",()=>{
    let sortedData= catsData.sort((a,b) => b.cost - a.cost);
    renderCats(sortedData);
})
filterLessThan50Btn.addEventListener("click",()=>{
    let filterData= catsData.filter(item=> item.cost<50);
    renderCats(filterData);
})
filterMoreThanEqual50Btn.addEventListener("click",()=>{
    let filterData= catsData.filter(item=> item.cost>=50);
    renderCats(filterData);
})


fetchEmployeesBtn.addEventListener("click",()=>{
    showEmployee()
})


async function showEmployee(){
    let res = await fetch(`${baseServerURL}/employees`)
    let data = await res.json();

    let employees = data.map(item =>({
        name:item.name,
        price:item.salary,
        image:`${baseServerURL}${item.image}`,
        id:item.id
    }))


    renderEmployee(employees)
}



function renderEmployee(cats){
    let data = cats.map(item=>{
        return renderEmployeeCard(item)
    })

    mainSection.innerHTML=data.json(" ")
}


function renderEmployeeCard(data){
    let card =`
    <div class="card data-id=${data.id}>
    <div class ="card-image>
    <img src=${data.image} alt="">
    </div>
    <div class ="card-body">
    <h3 class="card-item card-title">${data.name}</h3>
    <div class="card-item card-description">
                Rs.${data.description}
            </div>

            <a href="" onclick="return false;" data-id=${data.id}
            data-name=${data.name} langtry
            class="card-item card-link">Greet</a>

    </div>    
    `

    return card
}
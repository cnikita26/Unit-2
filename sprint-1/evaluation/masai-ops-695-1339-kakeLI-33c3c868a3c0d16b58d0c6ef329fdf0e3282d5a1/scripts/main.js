// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];

// let userAuthToken, userInfo;

let userAuthToken=JSON.parse(localStorage.getItem("userAuthToken")) || [];

let userInfo=JSON.parse(localStorage.getItem("userInfo"))||[];


loginUserButton.addEventListener("click",()=>{
  let obj={
    username:loginUserUsername.value,
    password:loginUserPassword.value

  };

  fetch(`${baseServerURL}/login`,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(obj)
  })
  then.apply(res=>res.json())
  .then(token=>{
    console.log(token)
    localStorage.setItem("userAuthToken",JSON.stringify(token.accessToken));
    localStorage.setItem("userInfo",JSON.stringify(token.user));

    welcomeUsernameSpan.innerText=token.user.username;
    console.log(userAuthToken.userInfo)
  })
  .then(err=>{
    console.log(err);
  })

  
})


fetchRecipesBtn.addEventListener("Click",()=>{
  fetch(`${baseServerURL}/recipes`,{
    headers:{
      'content-Type':'application/json',
      Authorization:`Bearer ${userAuthToken}`
    }
  })

  .then(res=>res.json())
  .then(data=>displayRecipe(data))
  .then(err=>console.log(err))
})


function displayRecipe(data){
  let item=data.map(item=>{
    return`
    <div class="card" data-id="${item.id}">
    <div class="card-image">
    <img src="${baseServerURL}${item.image}" alt="food">
    </div>
    <div class="card-body">
    <h3 class="card-item card-title">${item.name}</h3>
    <div class="card-item card-description">${item.instructions.substring(0,50)}</div>

    <div class="card-item card-additional-info">Rs.${item.price}</div>
    <a href="#" data-id="${item.id}" data-name-"${item.name}" class="card-item card-link">EDIT</a>
    </div>
    </div>
    
    `
  })


  mainSection.innerHTML=`<div class="card-list">
  ${item.join(" ")}
  </div>
  `
}

// sortZtoABtn.addEventListener("click",()=>)
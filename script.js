// LOGIN FUNCTION
function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || {}

// admin login
if(username === "admin" && password === "mabruenia"){
localStorage.setItem("loggedIn","true")
localStorage.setItem("role","admin")
localStorage.setItem("currentUser","Administrator")
window.location.href="index.html"
return
}

// citizen login
if(users[username] && users[username].password === password){

localStorage.setItem("loggedIn","true")
localStorage.setItem("role","citizen")
localStorage.setItem("currentUser",username)

window.location.href="index.html"

}
else{
alert("Invalid login")
}

}


// REGISTER FUNCTION
function register(){

let username = document.getElementById("newUser").value
let password = document.getElementById("newPass").value

let users = JSON.parse(localStorage.getItem("users")) || {}

if(users[username]){
alert("Username already exists")
return
}

users[username] = {
password: password
}

localStorage.setItem("users", JSON.stringify(users))

alert("Account created successfully!")

window.location.href = "login.html"

}


// LOGOUT
function logout(){

localStorage.removeItem("loggedIn")
localStorage.removeItem("role")
localStorage.removeItem("currentUser")

window.location.href="login.html"

}


// PAGE PROTECTION
function checkLogin(){

if(localStorage.getItem("loggedIn") !== "true"){
window.location.href="login.html"
}

}


// SHOW USERNAME ON PROFILE PAGE
function loadProfile(){

let name = localStorage.getItem("currentUser")

if(name){
document.getElementById("citizenName").innerText = name
}

}


// VOTING
function vote(option){

localStorage.setItem("vote", option)

alert("Vote submitted!")

}

function logout(){
localStorage.removeItem("loggedIn")
window.location.href="login.html"
}

function checkLogin(){
if(localStorage.getItem("loggedIn")!=="true"){
window.location.href="login.html"
}
}

function vote(option){
localStorage.setItem("vote",option)
alert("Vote submitted!")

function loadRegistry(){

let users = JSON.parse(localStorage.getItem("users")) || {}

let list = document.getElementById("citizenList")

list.innerHTML = ""

for(let username in users){

let li = document.createElement("li")

li.textContent = username

list.appendChild(li)

}

}
}
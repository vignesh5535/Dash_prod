var pgLogin =  document.getElementById("login");
var pgCont =  document.getElementById("cont");

var sUserMin =  document.getElementById("s_min");
var sUserMax =  document.getElementById("s_max");
var pUser =  document.getElementById("p_user");

var bProd =  document.getElementById("bt_prod");
var bQly =  document.getElementById("bt_qly");
var tblProd =  document.getElementById("tb_prod");
var tblQly =  document.getElementById("tb_Qly");
var tblWel =  document.getElementById("tb_welcome");


var navMin =  document.getElementById("nav_min");
var navMax =  document.getElementById("nav_max");
var secMain =  document.getElementById("main");

var pageTitle =  document.getElementById("page_title");
var bLogout =  document.getElementById("bt_logOut");

// Get the username from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
console.log(username); // Output: "exampleUser"

let firstLetter = username[0];
sUserMin.innerHTML = firstLetter;
sUserMax.innerHTML = username;
pUser.innerHTML = username;

function onClickLogout(){
    window.location.href = "login.html"; 
}


function fProdButton() {
    bProd.style.background = '#4ac3b7';
    bQly.style.background = 'White';
    tblProd.style.display = 'block';
    tblQly.style.display = 'none';
    tblWel.style.display = 'none';
}

function fQlyButton() {
    bProd.style.background = 'White';
    bQly.style.background = '#4ac3b7';
    tblProd.style.display = 'none';
    tblQly.style.display = 'block';
    tblWel.style.display = 'none';
}

function nMaxIn() {
    navMax.style.display= 'block';
    navMin.style.display= 'none';
    // secMain.style.width= '70vh';
    // secMain.style.position = 'left';
}

function nMaxOut(){
    navMax.style.display= 'none';
    navMin.style.display= 'block';
}

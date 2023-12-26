var bProd =  document.getElementById("bt_prod");
var bQly =  document.getElementById("bt_qly");
var tblProd =  document.getElementById("tb_prod");
var tblQly =  document.getElementById("tb_Qly");

var navMin =  document.getElementById("nav_min");
var navMax =  document.getElementById("nav_max");
var secMain =  document.getElementById("main");

var pageTitle =  document.getElementById("page_title");


function fProdButton() {
    bProd.style.background = '#4ac3b7';
    bQly.style.background = 'White';
    tblProd.style.display = 'block';
    tblQly.style.display = 'none';
    pageTitle.innerHTML = 'Production Dashboard'
}

function fQlyButton() {
    bProd.style.background = 'White';
    bQly.style.background = '#4ac3b7';
    tblProd.style.display = 'none';
    tblQly.style.display = 'block';
    pageTitle.innerHTML = 'Quality Dashboard'
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
/* Ajax Setup */
let data, output, result;
function init(){
  $.ajaxSetup({async: false});

  let link3 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Psus';
  Psus = $.getJSON(link3).responseJSON;
  console.log(Psus);




  let rating = fillDropDown(Psus, "PsRating");
  document.getElementById("80rating").innerHTML = rating;


  output = document.getElementById("output");
  outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;
  for(let i = 0; i < Psus.length; i++){
    let PsusCount = Psus[i];
    build += `<div class="containerRoundedOutput">`;
    build += `<h3> Psu Brand: ${PsusCount.PsBrand} </h3>`;
    build += `<h4> Psu Model: ${PsusCount.PsName} </h4>`;
    build += `<img class="filterImg" src="${PsusCount.PsIMG}">`;
    build += `<p> Psu Rating: ${PsusCount.PsRating} </p>`;
    build += `<p> Psu Price: $${PsusCount.PsPrice} </p>`;
    build += `<p> Psu Wattage: ${PsusCount.PsWattage}w </p>`;
    build += `<a href = "${PsusCount.PsPurchaseLink}" <p> Link </p> </a> `;
    build += `</div>`;
    count++;
  }






  output.innerHTML = build;  
  outputNum.innerHTML = `${count} Results found.`;
}
/* Filter by Rating */
function filterByRating(){
  let link3 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Psus';
  Psus = $.getJSON(link3).responseJSON;

  let rating = document.getElementById("80rating").value;
  let build = "";
  let count = 0;
  for(let i = 0; i < Psus.length; i++){
    let PsusCount = Psus[i];
    if(PsusCount.PsRating == rating){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Psu Brand: ${PsusCount.PsBrand} </h3>`;
      build += `<h4> Psu Model: ${PsusCount.PsName} </h4>`;
      build += `<img class="filterImg" src="${PsusCount.PsIMG}">`;
      build += `<p> Psu Rating: ${PsusCount.PsRating} </p>`;
      build += `<p> Psu Price: $${PsusCount.PsPrice} </p>`;
      build += `<p> Psu Wattage: ${PsusCount.PsWattage}w </p>`;
      build += `<a href = "${PsusCount.PsPurchaseLink}" <p> Link </p> </a> `;
      build += `</div>`;
      count++;
    }

  }
  outputNum.innerHTML = `${count} Results found.`
  output.innerHTML = build;
}

/* Filter by Wattage */
function filterByWattage(){
  let link3 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Psus';
  Psus = $.getJSON(link3).responseJSON;

  let wattage = document.getElementById("wattage").value;
  let build = "";
  let count = 0;
  for(let i = 0; i < Psus.length; i++){
    let PsusCount = Psus[i];
    if(PsusCount.PsWattage == wattage){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Psu Brand: ${PsusCount.PsBrand} </h3>`;
      build += `<h4> Psu Model: ${PsusCount.PsName} </h4>`;
      build += `<img class="filterImg" src="${PsusCount.PsIMG}">`;
      build += `<p> Psu Rating: ${PsusCount.PsRating} </p>`;
      build += `<p> Psu Price: $${PsusCount.PsPrice} </p>`;
      build += `<p> Psu Wattage: ${PsusCount.PsWattage}w </p>`;
      build += `<a href = "${PsusCount.PsPurchaseLink}" <p> Link </p> </a> `;
      build += `</div>`;
      count++;
    }

  }
  outputNum.innerHTML = `${count} Results found.`
  output.innerHTML = build;
}

/* Collapsible navbar */
function openNav() {
  document.getElementById("sideID").style.width = "250px";
  document.getElementById("containerID").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sideID").style.width = "0";
  document.getElementById("containerID").style.marginLeft= "0";
}

/* Slideshow setup */
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("SlidesPG");
  let dots = document.getElementsByClassName("dotIndicator");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeBackground", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeBackground";
  setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides();
  init();
});

/* Helper */
function get(id){
  return document.getElementById(id);
}

function fillDropDown(data, key){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}


function filter ( data, key, value ){
  let list = [];
  for(let i = 0; i < data.length; i++){
    let data = data[i];
    if(data[key] == value){
      list.push( data );
    }
  }
  return list;
}

/* Charts */
function buildChart(data,id,type){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}

function filterByBrand(){

  let link3 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Psus';
  Psus = $.getJSON(link3).responseJSON;

  let a = 0, b = 0, c = 0, d=0, e=0, f=0, g=0;

  for(let i = 0; i < Psus.length; i++){
    if(Psus[i].PsBrand == "Corsair"){
      a++;
    }else if(Psus[i].PsBrand == "MSI"){
      b++;
    }else if(Psus[i].PsBrand == "Thermaltake"){
      c++;
    }else if(Psus[i].PsBrand == "EVGA"){
      d++;
    }else if(Psus[i].PsBrand == "CoolerMaster"){
      e++;
    }else if(Psus[i].PsBrand == "AGV"){
      f++;
    }else if(Psus[i].PsBrand == "ASUS"){
      g++;
    }
  }



    let chartCont = [
    ["Corsair",a],
    ["MSI",b],
    ["Thermaltake", c],
    ["EVGA",d],
    ["CoolerMaster",e],
    ["AGV", f],
    ["ASUS", g],
  ]

  console.log(chartCont);

  let chart = get("chartType").value;

  buildChart(chartCont,"output",chart);

}

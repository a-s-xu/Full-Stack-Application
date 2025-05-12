/* Ajax Setup */
let data, output, result;
function init(){
  $.ajaxSetup({async: false});

  let link2 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Cpus';
  Cpus = $.getJSON(link2).responseJSON;
  console.log(Cpus);


  let brand = fillDropDown(Cpus, "CpuBrand");
  document.getElementById("brandName").innerHTML = brand;

  let price = fillDropDown2(Cpus, "CpuPrice");
  document.getElementById("price").innerHTML = price;


  output = document.getElementById("output");
  outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;
  for(let i = 0; i < Cpus.length; i++){
    let CpusCount = Cpus[i];
    build += `<div class="containerRoundedOutput">`;
    build += `<h3> Cpu Brand: ${CpusCount.CpuBrand} </h3>`;
    build += `<h4> Cpu Model: ${CpusCount.CpuName} </h4>`;
    build += `<img class="filterImg" src="${CpusCount.CpuIMG}">`;
    build += `<p> Cpu Type: ${CpusCount.CpuType} </p>`;
    build += `<p> Cpu Price: $${CpusCount.CpuPrice} </p>`;
    build += `<p> Cpu Wattage: ${CpusCount.WattageCpu}w </p>`;
    build += `<a href = "${CpusCount.CpuPurchaseLink}" <p> Link </p> </a> `;
    build += `</div>`;
    count++;
  }






  output.innerHTML = build;  
  outputNum.innerHTML = `${count} Results found.`;
}
/* Filter by Brand */
function filterByBrand(){
  let link2 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Cpus';
  Cpus = $.getJSON(link2).responseJSON;

  let brand = document.getElementById("brandName").value;
  let build = "";
  let count = 0;
  for(let i = 0; i < Cpus.length; i++){
    let CpusCount = Cpus[i];
    if(CpusCount.CpuBrand == brand){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Gpu Brand: ${CpusCount.CpuBrand} </h3>`;
      build += `<h4> Gpu Model: ${CpusCount.CpuName} </h4>`;
      build += `<img class="filterImg" src="${CpusCount.CpuIMG}">`;
      build += `<p> Gpu Type: ${CpusCount.CpuType} </p>`;
      build += `<p> Gpu Price: $${CpusCount.CpuPrice} </p>`;
      build += `<p> Gpu Wattage: ${CpusCount.WattageCpu}w </p>`;
      build += `<a href = "${CpusCount.CpuPurchaseLink}" <p> Link </p> </a> `;
      build += `</div>`;
      count++;
    }

  }
  outputNum.innerHTML = `${count} Results found.`
  output.innerHTML = build;
}
/* Filter by Price */
function filterByPrice(){
  let link2 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Cpus';
  Cpus = $.getJSON(link2).responseJSON;

  let Price = document.getElementById("price").value;
  Price = Price.replace(/^\$/, '');
  // For future reference, in my database the price is strictly a number (integer type), which means it excludes the dollar sign. I did not want to edit my database so I included this to make sure that the filldropbar2's added '$' is replaced with blank space to filter properly //
  let build = "";
  let count = 0;
  for(let i = 0; i < Cpus.length; i++){
    let CpusCount = Cpus[i];
    if(CpusCount.CpuPrice == Price){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Gpu Brand: ${CpusCount.CpuBrand} </h3>`;
      build += `<h4> Gpu Model: ${CpusCount.CpuName} </h4>`;
      build += `<img class="filterImg" src="${CpusCount.CpuIMG}">`;
      build += `<p> Gpu Type: ${CpusCount.CpuType} </p>`;
      build += `<p> Gpu Price: $${CpusCount.CpuPrice} </p>`;
      build += `<p> Gpu Wattage: ${CpusCount.WattageCpu}w </p>`;
      build += `<a href = "${CpusCount.CpuPurchaseLink}" <p> Link </p> </a> `;
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

function fillDropDown2(data, key){
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
      build += `<option>$${field}</option>`;
  }
  return build;
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

function filterByType(){

  let link2 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Cpus';
  Cpus = $.getJSON(link2).responseJSON;

  let W = 0, C = 0, M = 0;

  for(let i = 0; i < Cpus.length; i++){
    if(Cpus[i].CpuType == "Workstation"){
      W++;
    }else if(Cpus[i].CpuType == "Desktop"){
      C++;
    }else if(Cpus[i].CpuType == "Mobile"){
      M++;
    }
  }



    let chartCont = [
    ["General Usage",C],
    ["Workstation",W],
    ["Mobile",M],
  ]

  console.log(chartCont);
  let chart = get("chartType").value;

  buildChart(chartCont,"output",chart);

}

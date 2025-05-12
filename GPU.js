/* Ajax Setup */
let data, output, outputNum;
function init(){
  $.ajaxSetup({async: false});

  let link1 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Gpus';
  Gpus = $.getJSON(link1).responseJSON;
  console.log(Gpus);
  
  let brand = fillDropDown(Gpus, "GpuBrand");
  document.getElementById("brandName").innerHTML = brand;

  let type = fillDropDown(Gpus, "GpuType");
  document.getElementById("gpuType").innerHTML = type;


  output = document.getElementById("output");
  outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;
  for(let i = 0; i < Gpus.length; i++){
    let GpusCount = Gpus[i];
    build += `<div class="containerRoundedOutput">`;
    build += `<h3> Gpu Brand: ${GpusCount.GpuBrand} </h3>`;
    build += `<h4> Gpu Model: ${GpusCount.GpuName} </h4>`;
    build += `<img class="filterImg" src="${GpusCount.GpuIMG}">`;
    build += `<p> Gpu Type: ${GpusCount.GpuType} </p>`;
    build += `<p> Gpu Price: $${GpusCount.GpuPrice} </p>`;
    build += `<p> Gpu Wattage: ${GpusCount.WattageGPU}w </p>`;
    build += `<a href = "${GpusCount.GpuPurchaseLink}" <p> Link </p> </a> `;
    build += `</div>`;
    count++;
  }






  output.innerHTML = build;  
  outputNum.innerHTML = `${count} Results found.`;
}

/* Filter by Brand */
function filterByBrand(){
  let link1 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Gpus';
  Gpus = $.getJSON(link1).responseJSON;

  let brand = document.getElementById("brandName").value;
  let build = "";
  let count = 0;
  for(let i = 0; i < Gpus.length; i++){
    let GpusCount = Gpus[i];
    if(GpusCount.GpuBrand == brand){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Gpu Brand: ${GpusCount.GpuBrand} </h3>`;
      build += `<h4> Gpu Model: ${GpusCount.GpuName} </h4>`;
      build += `<img class="filterImg" src="${GpusCount.GpuIMG}">`;
      build += `<p> Gpu Type: ${GpusCount.GpuType} </p>`;
      build += `<p> Gpu Price: $${GpusCount.GpuPrice} </p>`;
      build += `<p> Gpu Wattage: ${GpusCount.WattageGPU}w </p>`;
      build += `<a href = "${GpusCount.GpuPurchaseLink}" <p> Link </p> </a> `;
      build += `</div>`;
      count++;
    }

  }
  outputNum.innerHTML = `${count} Results found.`
  output.innerHTML = build;
}

/* Filter by Type */
function filterByType(){
  let link1 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Gpus';
  Gpus = $.getJSON(link1).responseJSON;

  let type = document.getElementById("gpuType").value;
  let build = "";
  let count = 0;
  for(let i = 0; i < Gpus.length; i++){
    let GpusCount = Gpus[i];
    if(GpusCount.GpuType == type){
      build += `<div class="containerRoundedOutput">`;
      build += `<h3> Gpu Brand: ${GpusCount.GpuBrand} </h3>`;
      build += `<h4> Gpu Model: ${GpusCount.GpuName} </h4>`;
      build += `<img class="filterImg" src="${GpusCount.GpuIMG}">`;
      build += `<p> Gpu Type: ${GpusCount.GpuType} </p>`;
      build += `<p> Gpu Price: $${GpusCount.GpuPrice} </p>`;
      build += `<p> Gpu Wattage: ${GpusCount.WattageGPU}w </p>`;
      build += `<a href = "${GpusCount.GpuPurchaseLink}" <p> Link </p> </a> `;
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

function filterByWattage(){

  let link1 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Gpus';
  Gpus = $.getJSON(link1).responseJSON;

  let low = 0, mid = 0, high = 0;

  for(let i = 0; i < Gpus.length; i++){
    if(Gpus[i].WattageGPU <= 115){
      low++;
    }else if(Gpus[i].WattageGPU < 200 && Gpus[i].WattageGPU >= 115){
      mid++;
    }else if(Gpus[i].WattageGPU >= 200){
      high++;
    }
  }



    let chartCont = [
    ["Low Wattage \n 115w",low],
    ["Medium Wattage \n 116-199w",mid],
    ["High Wattage \n 200w+", high],
  ]

  console.log(chartCont);

  let chart = get("chartType").value;

  buildChart(chartCont,"output",chart);

}

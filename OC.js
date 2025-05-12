/* Ajax Setup */
let data, output, result;
function init(){
  $.ajaxSetup({async: false});

  let link5 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Compatibility';
      Compatibility = $.getJSON(link5).responseJSON;
  console.log(Compatibility);


  let cpuBrand = fillDropDown(Compatibility, "CpuBrand");
  document.getElementById("byCPU").innerHTML = cpuBrand;

  let gpuBrand = fillDropDown(Compatibility, "GpuBrand");
  document.getElementById("byGPU").innerHTML = gpuBrand;

  let output = document.getElementById("output");
  let outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;
  for (let i = 0; i < Compatibility.length; i++) {
    let item = Compatibility[i];
    if (item.CpuBrand) {
      build += `<div class="containerRoundedOutput">`;
      build += `<h3>Cpu Brand: ${item.CpuBrand}</h3>`;
      build += `<h4>Cpu Model: ${item.CpuName}</h4>`;
      build += `<img class="filterImg" src="${item.CpuIMG}">`;
      build += `<p>Cpu Type: ${item.CpuType}</p>`;
      build += `<p>Cpu Price: $${item.CpuPrice}</p>`;
      build += `<p>Cpu Wattage: ${item.WattageCpu}w</p>`;
      build += `<a href="${item.CpuPurchaseLink}"><p>Link</p></a>`;
      build += `</div>`;
      count++
    }                
    if (item.GpuBrand) {
      build += `<div class="containerRoundedOutput">`;
      build += `<h3>Gpu Brand: ${item.GpuBrand}</h3>`;
      build += `<h4>Gpu Model: ${item.GpuName}</h4>`;
      build += `<img class="filterImg" src="${item.GpuIMG}">`;
      build += `<p>Gpu Type: ${item.GpuType}</p>`;
      build += `<p>Gpu Price: $${item.GpuPrice}</p>`;
      build += `<p>Gpu Wattage: ${item.WattageGPU}w</p>`;
      build += `<a href="${item.GpuPurchaseLink}"><p>Link</p></a>`;
      build += `</div>`;
      count++
    }                
  }            
  output.innerHTML = build;
  outputNum.innerHTML = `${count} Results found.`;
}

/* Filter by Optimal */
function filterByCompatibility(){
  let link5 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/Compatibility';
  Compatibility = $.getJSON(link5).responseJSON;

  let cpuBrand = document.getElementById("byCPU").value;
  let gpuBrand = document.getElementById("byGPU").value;
  
  let output = document.getElementById("output");
  let outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;

  
/* Note, despite the fact the slideshow said Intel and Intel, that is neither a recommended nor unrecommended combination. As such I just left it without an argument because it's neither. Qualcomm is a mobile cpu, as such it's also left without an argument because it does not fit*/
  
  for (let i = 0; i < Compatibility.length; i++) {
    let item = Compatibility[i];
    if ((cpuBrand === "AMD Ryzen" && gpuBrand === "AMD Radeon" && item.CpuBrand === "AMD Ryzen" && item.GpuBrand === "AMD Radeon") ||
        (cpuBrand === "Intel" && gpuBrand === "Nvidia" && item.CpuBrand === "Intel" && item.GpuBrand === "Nvidia")) {
      build += `<div class="containerRoundedOutput">`;
      build += `<h3>Cpu Brand: ${item.CpuBrand}</h3>`;
      build += `<h4>Cpu Model: ${item.CpuName}</h4>`;
      build += `<img class="filterImg" src="${item.CpuIMG}">`;
      build += `<p>Cpu Type: ${item.CpuType}</p>`;
      build += `<p>Cpu Price: $${item.CpuPrice}</p>`;
      build += `<p>Cpu Wattage: ${item.WattageCpu}w</p>`;
      build += `<a href="${item.CpuPurchaseLink}"><p>Link</p></a>`;
      build += `</div>`;

      build += `<div class="containerRoundedOutput">`;
      build += `<h3>Gpu Brand: ${item.GpuBrand}</h3>`;
      build += `<h4>Gpu Model: ${item.GpuName}</h4>`;
      build += `<img class="filterImg" src="${item.GpuIMG}">`;
      build += `<p>Gpu Type: ${item.GpuType}</p>`;
      build += `<p>Gpu Price: $${item.GpuPrice}</p>`;
      build += `<p>Gpu Wattage: ${item.WattageGPU}w</p>`;
      build += `<a href="${item.GpuPurchaseLink}"><p>Link</p></a>`;
      build += `</div>`;

      count += 2; 
 }
}
  output.innerHTML = build;
  outputNum.innerHTML = `${count} Results found.`;
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
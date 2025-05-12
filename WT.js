/* Ajax Setup */
let data, output, result;
function init(){
  $.ajaxSetup({async: false});

  let link6 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/allData';
        Database = $.getJSON(link6).responseJSON;
  console.log(Database);

  let Wattage = fillDropDown(Database, "PsWattage", "WattageGPU", "WattageCpu");
  document.getElementById("Wattage").innerHTML = Wattage;


  let output = document.getElementById("output");
  let outputNum = document.getElementById("outputNum");
  let build = "";
  let count = 0;

  for (let i = 0; i < Database.length; i++) {
      let item = Database[i];
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
      count++;
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
      count++;
    }                
    if (item.PsBrand) {
      build += `<div class="containerRoundedOutput">`;
      build += `<h3>Psu Brand: ${item.PsBrand}</h3>`;
      build += `<h4>Psu Model: ${item.PsName}</h4>`;
      build += `<img class="filterImg" src="${item.PsIMG}">`;
      build += `<p>Psu Rating: ${item.PsRating}</p>`;
      build += `<p>Psu Price: $${item.PsPrice}</p>`;
      build += `<p>Psu Wattage: ${item.PsWattage}w</p>`;
      build += `<a href="${item.PsPurchaseLink}"><p>Link</p></a>`;
      build += `</div>`;
      count++;
    }

  }
  output.innerHTML = build;
  outputNum.innerHTML = `${count} Results found.`;
}


/* filter by brand */
  function filterByBrand() {
      let link6 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/allData';
      $.getJSON(link6, function(Database) {
          console.log(Database);

          let output = document.getElementById("output");
          let outputNum = document.getElementById("outputNum");
          let build = "";
          let count = 0;

          let brand = document.getElementById("brandName").value;

          for (let i = 0; i < Database.length; i++) {
              let item = Database[i];
              if (item.CpuBrand == brand) {
                  build += `<div class="containerRoundedOutput">`;
                  build += `<h3>Cpu Brand: ${item.CpuBrand}</h3>`;
                  build += `<h4>Cpu Model: ${item.CpuName}</h4>`;
                  build += `<img class="filterImg" src="${item.CpuIMG}">`;
                  build += `<p>Cpu Type: ${item.CpuType}</p>`;
                  build += `<p>Cpu Price: $${item.CpuPrice}</p>`;
                  build += `<p>Cpu Wattage: ${item.WattageCpu}w</p>`;
                  build += `<a href="${item.CpuPurchaseLink}"><p>Link</p></a>`;
                  build += `</div>`;
                  count++;
              }
              if (item.GpuBrand == brand) {
                  build += `<div class="containerRoundedOutput">`;
                  build += `<h3>Gpu Brand: ${item.GpuBrand}</h3>`;
                  build += `<h4>Gpu Model: ${item.GpuName}</h4>`;
                  build += `<img class="filterImg" src="${item.GpuIMG}">`;
                  build += `<p>Gpu Type: ${item.GpuType}</p>`;
                  build += `<p>Gpu Price: $${item.GpuPrice}</p>`;
                  build += `<p>Gpu Wattage: ${item.WattageGPU}w</p>`;
                  build += `<a href="${item.GpuPurchaseLink}"><p>Link</p></a>`;
                  build += `</div>`;
                  count++;
              }
              if (item.PsBrand == brand) {
                  build += `<div class="containerRoundedOutput">`;
                  build += `<h3>Psu Brand: ${item.PsBrand}</h3>`;
                  build += `<h4>Psu Model: ${item.PsName}</h4>`;
                  build += `<img class="filterImg" src="${item.PsIMG}">`;
                  build += `<p>Psu Rating: ${item.PsRating}</p>`;
                  build += `<p>Psu Price: $${item.PsPrice}</p>`;
                  build += `<p>Psu Wattage: ${item.PsWattage}w</p>`;
                  build += `<a href="${item.PsPurchaseLink}"><p>Link</p></a>`;
                  build += `</div>`;
                  count++;
              }
          }
          output.innerHTML = build;
          outputNum.innerHTML = `${count} Results found.`;
      });
  }

/* Filter by Wattage */
function filterByWattage(){
let link6 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/allData';
$.getJSON(link6, function(Database) {
    console.log(Database);

    let output = document.getElementById("output");
    let outputNum = document.getElementById("outputNum");
    let build = "";
    let count = 0;

    let wattage = document.getElementById("Wattage").value;

    for (let i = 0; i < Database.length; i++) {
        let item = Database[i];
        if (item.WattageCpu == wattage) {
            build += `<div class="containerRoundedOutput">`;
            build += `<h3>Cpu Brand: ${item.CpuBrand}</h3>`;
            build += `<h4>Cpu Model: ${item.CpuName}</h4>`;
            build += `<img class="filterImg" src="${item.CpuIMG}">`;
            build += `<p>Cpu Type: ${item.CpuType}</p>`;
            build += `<p>Cpu Price: $${item.CpuPrice}</p>`;
            build += `<p>Cpu Wattage: ${item.WattageCpu}w</p>`;
            build += `<a href="${item.CpuPurchaseLink}"><p>Link</p></a>`;
            build += `</div>`;
            count++;
        }
        if (item.WattageGPU == wattage) {
            build += `<div class="containerRoundedOutput">`;
            build += `<h3>Gpu Brand: ${item.GpuBrand}</h3>`;
            build += `<h4>Gpu Model: ${item.GpuName}</h4>`;
            build += `<img class="filterImg" src="${item.GpuIMG}">`;
            build += `<p>Gpu Type: ${item.GpuType}</p>`;
            build += `<p>Gpu Price: $${item.GpuPrice}</p>`;
            build += `<p>Gpu Wattage: ${item.WattageGPU}w</p>`;
            build += `<a href="${item.GpuPurchaseLink}"><p>Link</p></a>`;
            build += `</div>`;
            count++;
        }
        if (item.PsWattage == wattage) {
            build += `<div class="containerRoundedOutput">`;
            build += `<h3>Psu Brand: ${item.PsBrand}</h3>`;
            build += `<h4>Psu Model: ${item.PsName}</h4>`;
            build += `<img class="filterImg" src="${item.PsIMG}">`;
            build += `<p>Psu Rating: ${item.PsRating}</p>`;
            build += `<p>Psu Price: $${item.PsPrice}</p>`;
            build += `<p>Psu Wattage: ${item.PsWattage}w</p>`;
            build += `<a href="${item.PsPurchaseLink}"><p>Link</p></a>`;
            build += `</div>`;
            count++;
        }
    }
    output.innerHTML = build;
    outputNum.innerHTML = `${count} Results found.`;
});
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

function fillDropDown(data, key1, key2, key3) {
  let list = new Set();
  let build = "";
  for (let i = 0; i < data.length; i++) {
    list.add(data[i][key1]);
  }

  for (let i = 0; i < data.length; i++) {
    list.add(data[i][key2]);
  }

  for (let i = 0; i < data.length; i++) {
    list.add(data[i][key3]);
  }

  let sortedList = Array.from(list).sort();

  for (let field of sortedList) {
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

function filterByWattageChart(){

  let link6 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/allData';
  items = $.getJSON(link6).responseJSON;

  let lowCPU = 0, midCPU = 0, highCPU = 0, lowGPU = 0, midGPU = 0, highGPU = 0, lowPSU = 0, midPSU = 0, highPSU = 0;



  for (let i = 0; i < items.length; i++) {
    if (items[i].WattageCpu <= 115) {
      lowCPU++;
    } else if (items[i].WattageCpu >= 116 && items[i].WattageCpu < 199) {
      midCPU++;
    } else {
      highCPU++;
    }


    if (items[i].WattageGPU <= 115) {
      lowGPU++;
    } else if (items[i].WattageGPU >= 116 && items[i].WattageCPU < 199) {
      midGPU++;
    } else {
      highGPU++;
    }


      if (items[i].PsWattage >= 400 && items[i].PsWattage < 501) {
        lowPSU++;
      } else if (items[i].PsWattage >= 501 && items[i].PsWattage <= 1000) {
        midPSU++;
      } else if (items[i].PsWattage > 1000) {
        highPSU++;
      }
    }


  let chartCont = [
    ["Low Wattage Cpu's \n 115w or Below", lowCPU],
    ["Medium Wattage Cpu's \n 116-199w", midCPU],
    ["High Wattage Cpu's \n 200w+", highCPU],
    ["Low Wattage Gpu's \n 115w", lowGPU],
    ["Medium Wattage Gpu's \n 116-199w", midGPU],
    ["High Wattage Gpu's \n 200w+", highGPU],
    ["Low Wattage Psu's \n 400-500w", lowPSU],
    ["Medium Wattage Psu's \n 501w-1000w", midPSU],
    ["High Wattage Psu's \n 1000w+", highPSU],
  ];

  console.log(chartCont);

  let chart = get("chartType").value;

  buildChart(chartCont,"output",chart);

}


function filterByBrandChart(){

let link6 = 'https://3ed75fb3-8113-4b78-a136-0e260353b29e-00-23upcf6xci2gx.picard.repl.co/allData';
items = $.getJSON(link6).responseJSON;

  let Cor = 0, MS = 0, TT = 0, EGA = 0, CM = 0, AV = 0, ASU = 0,  IN = 0, NV = 0, ARY = 0, QM = 0, ARDN = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].CpuBrand == "Intel") {
      IN++;
    } else if (items[i].CpuBrand == "AMD Ryzen") {
      ARY++;
    } else if (items[i].CpuBrand == "Qualcomm") {
      QM++;
    }
  }

    for (let i = 0; i < items.length; i++){
     if (items[i].GpuBrand == "Nvidia") {
      NV++;
    } else if (items[i].GpuBrand == "AMD Radeon") {
      ARDN++;
    } else if (items[i].GpuBrand == "Intel") {
      IN++;
     }
    }

  for (let i = 0; i < items.length; i++){
    if (items[i].PsBrand == "Corsair") {
    Cor++;
  } else if (items[i].PsBrand == "MSI") {
    MS++;
  } else if (items[i].PsBrand == "Thermaltake") {
    TT++;
  } else if (items[i].PsBrand == "EVGA") {
    EGA++;
  } else if (items[i].PsBrand == "CoolerMaster") {
    CM++;
  } else if (items[i].PsBrand == "AGV") {
    AV++;
  } else if (items[i].PsBrand == "ASUS") {
    ASU++;}}


    let chartCont = [
      ["Intel", IN],
      ["AMD Ryzen", ARY],
      ["Qualcomm", QM],
      ["Nvidia", NV],
      ["AMD Radeon", ARDN],
      ["Corsair", Cor],
      ["MSI", MS],
      ["Thermaltake", TT],
      ["EVGA", EGA],
      ["CoolerMaster", CM],
      ["AGV", AV],
      ["ASUS", ASU],
    ];

    
    console.log(chartCont);

    let chart = get("chartType").value;

    buildChart(chartCont,"output",chart);

  
}

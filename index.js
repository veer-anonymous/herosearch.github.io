
let Acces_Key="O1NOGsWDQFXq_VQj-2rnh_CB_kJVVdZEDNMIc5v4U3g";
const serarchInput=document.querySelector("#searchInput");
const searchBtn=document.querySelector("#searchBtn");
let showData=document.querySelector(".showData");
// console.log(serarchInput)

const getData=async (searchValue)=>{
    // https://unsplash.com/oauth/applications/535796
        let convert=searchValue.toLowerCase();
    let fectching= await fetch(`https://api.unsplash.com/search/photos?query=${convert}&per_Page=28&P=1 age&client_id=${Acces_Key}`)
    let jsonData= await fectching.json();
    console.log(jsonData.results[0].urls.small);
    console.log(jsonData.results);

showData.innerHTML="";
    jsonData.results.forEach(function(data){
        console.log(data.urls.small)
        let link="click here";
        let div=document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);
        div.innerHTML= `
        
             <img src=${data.urls.small} alt="">
             <a href=${data.links.html} target="_blank">${data.alt_description}</a>
       
         
      
        `

     
       

    })
}

searchBtn.addEventListener("click",function(){
    let searchValue=serarchInput.value;
   
    getData(searchValue)
})
const bar = document.getElementById("bar");
const emojiContainer = document.getElementById("emojiContainer");




const url ="https://emojihub.yurace.pro/api/all";
async function dataFetcher(){
  let response = await fetch(url);
  let data = await response.json();
  data.forEach((element) => {
    console.log(element);
    let card = document.createElement("div");
    card.classList.add("col-md-4","box");
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <p class = "card-img-top" id = "emoji">${element.htmlCode[0]}</p>
    <div class="card-body">
      <h4 class="card-title">${element.name}</h4>
      <h6 class="card-title"> Category : ${element.category}</h6>
      
    </div>
  </div>`
  emojiContainer.appendChild(card);
  });
  
}
dataFetcher();

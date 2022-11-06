
const key = "5ed02ffb42d0491b8193140725c55afe";

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=5ed02ffb42d0491b8193140725c55afe&includeNutrition=true";

const resultsContainer = document.querySelector(".results");

async function getResults(){

    const response = await fetch(url);

    const result = await response.json();

    const info = result.results;

    resultsContainer.innerHTML = "";

for (i =0; i < info.length; i++){
    console.log(info[i].name);
    console.log(info[i].rating)
    console.log(info[i].tags.length);

    if(i === 8){
        break;
        }

    resultsContainer.innerHTML += `<p> NAME: ${info[i].name + "  " + "RATING:" +info[i].rating +"  " +"TAGS:" + info[i].tags.length}</p>`;

    

}
}



 
   


getResults(); 
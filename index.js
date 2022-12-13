const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7f414c674dmsh39e7544f31d036dp1b5e56jsn8a78c333bd53',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  
function search(query){
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,  options)
      .then (response => response.json())
      .then (data => renderSearch(data))
      .catch(error => console.log(error))
  }
  const searchResults = document.querySelector('#search-result')
  const searchForm = document.querySelector('#search-form')
  searchForm.addEventListener('submit', event => {
      event.preventDefault()
      const form = event.target
  
      console.log(form.search)
      search(form.search.value)
  

})
  
    
function renderSearch (searchData){
    console.log (searchData)
      searchResults.innerHTML=''
      searchData.data.forEach(element => {
          searchResults.innerHTML+= `
              <div class='search-card'>
                  <audio controls>
                      <source src='${element.preview}' type='audio/mp3'>
                  </audio>
                  <h2>${element.title}</h2>
              </div>
          `
      });
}
  


const likeBtn = document.querySelector(".likebtn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

let clicked =false;

likeBtn.addEventListener("click", () => {
    if(clicked) {
        clicked = true;
        likeIcon.innerHTML= `<i class="fa-sharp fa-solid fa-heart"></i>`
    }
    else {
        clicked = false;
        likeIcon.innerHTML= `<i class="fa-regular fa-heart"></i>`
        count.textContent--;
    }
    
})


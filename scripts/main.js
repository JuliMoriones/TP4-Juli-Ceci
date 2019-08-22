// Limpiar el input cuando salgo del focus
const apiKey="f800b0f5b9ae24d9ff462e770da4d3b3"


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(res => {
        console.log(res.results[0]) 
        const popularNode = document.getElementById("popularList")
        const topFive = res.results.filter((e,i)=>i<5)
        topFive.forEach(({title,poster_path})=>{
            const li = document.createElement("li")
            li.classList.add("movieBox")
            const image = document.createElement("img")
            image.src=`https://image.tmdb.org/t/p/w500/${poster_path}`
            image.classList.add("moviePoster")
            li.appendChild(image)
            const movieTitle = document.createElement("span")
            movieTitle.innerText=title
            movieTitle.classList.add("movieTitle")
            li.appendChild(movieTitle)
            popularNode.appendChild(li)
        });
    })

// Buscar pelicula
const searchResults = () => {
    let input = document.getElementById('searchInput')
    let text = input.value
  
    if (input.value !== "") {
      input.value = ''
    
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`)
    .then(response => response.json())
    .then(res => {
        console.log(res.results[0])
        const searchResults = document.getElementById("searchInput")
        const first20 = res.results.filter((e,i)=>i<20)
        fist20.forEach(({title,poster_path})=>{
            const li = document.createElement("li")
            li.classList.add("movieBox")
            const image = document.createElement("img")
            image.src=`https://image.tmdb.org/t/p/w500/${poster_path}`
            image.classList.add("moviePoster")
            li.appendChild(image)
            const movieTitle = document.createElement("span")
            movieTitle.innerText=title
            movieTitle.classList.add("movieTitle")
            li.appendChild(movieTitle)
            popularNode.appendChild(li)
        });
    }
}

const keyPress = function (event) {
    if (event.keyCode === 13) {
        searchResults()
    }
}

// Menu de categorías (solo mobile)
const toggleMenuMobile = () => {
    let menuMobile = document.getElementById('menuMobile')
    menuMobile.classList.toggle('open')
    menuMobile.classList.toggle('closed')
}

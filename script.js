fetch("https://api.github.com/users/Cleberdev2001")
.then(response => response.json())
.then(response => {
    const dados = response
    const elementPhoto = document.querySelector('.photo')
    const elementName = document.querySelector('.name')
    const elementBio = document.querySelector('.bio')
    elementPhoto.innerHTML = `<img src="${dados.avatar_url}"/>`
    elementName.innerHTML = dados.name
    elementBio.innerHTML = dados.bio
})

fetch("https://api.github.com/users/Cleberdev2001/repos")
.then(response => response.json())
.then(response => {
const dados = response
const elementTitle = document.querySelector('.title')
const elementDescr = document.querySelector('.descr')
const elementStar = document.querySelector('.icon1_text')
const elementForks = document.querySelector('.forks')
elementTitle.innerHTML = `<a href = "${dados[0].html_url}" >${dados[0].name}</a>`
elementDescr.innerHTML = dados[0].description
elementStar.innerHTML = dados[0].stargazers_count
elementForks.innerHTML = dados[0].forks
})
const imgSite = document.querySelectorAll('img');
console.log(imgSite);

const imgPalavra = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgPalavra);

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length -1])
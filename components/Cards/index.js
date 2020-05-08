// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsEntry = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    const bootstrapArray = response.data.articles.bootstrap
    const javascriptArray = response.data.articles.javascript
    const jqueryArray = response.data.articles.jquery
    const nodeArray = response.data.articles.node 
    const technologyArray = response.data.articles.technology 

    // console.log(bootstrapArray)
    // console.log(javascriptArray)
    // console.log(jqueryArray)
    // console.log(nodeArray)
    // console.log(technologyArray)

    bootstrapArray.forEach(item => {
        const article = cardCreator(item)
        cardsEntry.appendChild(article)
    });
    javascriptArray.forEach(item => {
        const article = cardCreator(item)
        cardsEntry.appendChild(article)
    });
    jqueryArray.forEach(item => {
        const article = cardCreator(item)
        cardsEntry.appendChild(article)
    });
    nodeArray.forEach(item => {
        const article = cardCreator(item)
        cardsEntry.appendChild(article)
    });
    technologyArray.forEach(item => {
        const article = cardCreator(item)
        cardsEntry.appendChild(article)
    });

})
.catch(error => {
    console.log("failed")
})

function cardCreator (attrs){
    const {authorName, authorPhoto, headline} = attrs

    const cardContainer = document.createElement('div')
    const headlineTitle = document.createElement('div')
    const authorContainer = document.createElement('div')
    const imageContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const author = document.createElement('span')

    cardContainer.classList.add('card')
    headlineTitle.classList.add('headline')
    headlineTitle.textContent = headline
    authorContainer.classList.add('author')
    imageContainer.classList.add('img-container')
    authorImage.src = authorPhoto
    author.textContent = `By ${authorName}`

    cardContainer.appendChild(headlineTitle)
    cardContainer.appendChild(authorContainer)
    authorContainer.appendChild(imageContainer)
    authorContainer.appendChild(author)
    imageContainer.appendChild(authorImage)

    return cardContainer
}

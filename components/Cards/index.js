// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const articles = Object.values(response.data.articles)
    const cardsContainer = document.querySelector('.cards-container')
    console.log(articles);
    articles.forEach((item) => {
        item.forEach((item) => {
            cardsContainer.append(newCard(item))
        })
    })
  })
  .catch(error => {
    console.log(error);
  })

const newCard = (object) => {

    //Create Elements

    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const cardSpan = document.createElement('span')

    //Appending

    cardDiv.append(headlineDiv)
    cardDiv.append(authorDiv)
    authorDiv.append(imageContainer)
    authorDiv.append(cardSpan)
    imageContainer.append(image)

    //Content

    headlineDiv.textContent = object.headline
    image.setAttribute('src', object.authorPhoto)
    cardSpan.textContent = object.authorName
    
    //Classes

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imageContainer.classList.add('img-container')

    //returning

    return cardDiv

}

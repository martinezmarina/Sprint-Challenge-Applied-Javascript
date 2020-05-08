/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){

  const carouselDiv = document.createElement('div')
  const carouselLeftButton = document.createElement('div')
  const firstImage = document.createElement('img')
  const secondImage = document.createElement('img')
  const thirdImage = document.createElement('img')
  const forthImage = document.createElement('img')
  const carouselRightButton = document.createElement('div')

  carouselDiv.classList.add("carousel")
  carouselLeftButton.classList.add("left-button")
  firstImage.src = "./assets/carousel/mountains.jpeg"
  secondImage.src = "./assets/carousel/computer.jpeg"
  thirdImage.src = "./assets/carousel/trees.jpeg"
  forthImage.src = "./assets/carousel/turntable.jpeg"
  carouselRightButton.classList.add("right-button")

  carouselDiv.appendChild(carouselLeftButton)
  carouselDiv.appendChild(firstImage)
  carouselDiv.appendChild(secondImage)
  carouselDiv.appendChild(thirdImage)
  carouselDiv.appendChild(forthImage)
  carouselDiv.appendChild(carouselRightButton)

  carouselLeftButton.addEventListener('click', () => {
    
  })
  carouselRightButton.addEventListener('click', () => {

  })

  return carouselDiv
}


const carouselEntry = document.querySelector(".carousel-container")
cardsEntry.appendChild(carouselCreator())
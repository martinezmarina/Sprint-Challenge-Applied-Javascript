// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    const headerContainer = document.createElement('div')
    const date = document.createElement('span')
    const header = document.createElement('h1')
    const temperature = document.createElement('span')

    headerContainer.classList.add("header")
    date.classList.add("date")
    temperature.classList.add("temp")
    date.textContent = "MARCH 28, 2019"
    header.textContent = "Lambda Times"
    temperature.textContent = "98°"

    headerContainer.appendChild(date)
    headerContainer.appendChild(header)
    headerContainer.appendChild(temperature)

    const headerEntry = document.querySelector('.header-container')
    headerEntry.appendChild(headerContainer)
   
}
header()


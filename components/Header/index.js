// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div')
    const spanDate = document.createElement('span')
    const headerHeading = document.createElement('h1')
    const spanTemp = document.createElement('span')

    //appending
    headerDiv.append(spanDate)
    headerDiv.append(headerHeading)
    headerDiv.append(spanTemp)

    //content

    spanDate.textContent = 'March 28, 2019'
    headerHeading.textContent = 'Lambda Times'
    spanTemp.textContent = '98°'

    //classes

    headerDiv.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')

    //return

    return headerDiv
}

const headerContainer = document.querySelector('.header-container')
headerContainer.append(Header())
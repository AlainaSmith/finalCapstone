const videoUploadTwo = document.querySelector('#videoUploadTwo')
const royalSubmitButton = document.querySelector('#royalSubmitButton')
const deleteSoloButtonTwo = document.querySelector('#deleteSoloButtonTwo')
const soloFormTwo = document.querySelector('#soloFormTwo')

const form = document.querySelector('form')
const baseURL = `http://localhost:4400/api/royalSoloEntry`

const royalSoloEntryCallback = ({ data: royalSoloEntry }) => {
    displayRoyalSoloEntry(royalSoloEntry)
    console.log('royal solo callback hit')
   }
const errCallback = err => console.log(err)

const getRoyalSoloEntry = () => {
console.log("getRoyalsoloentry")
axios.get(baseURL)
.then(royalSoloEntryCallback)
.catch(errCallback)
}
const createRoyalSoloEntry = (body) => {
console.log('createRoyalsoloentry')
axios.post(baseURL, body)
.then(royalSoloEntryCallback)
.catch(errCallback)
}
const deleteRoyalSoloEntry = (id) => {
    console.log('deleteRoyal')
axios.delete(`${baseURL}/${id}`)
.then(royalSoloEntryCallback)
.catch(errCallback)
}

function submitHandler(e) {
    e.preventDefault()
let title = document.querySelector('#title')
let video = document.querySelector('#video')
    
    let bodyObj = {
        title: title.value, 
        video: video.value
    }

    createRoyalSoloEntry(bodyObj)

    title.value = ''
    video.value = ''

    getRoyalSoloEntry()
}


function createRoyalSolo(solo) {
    console.log(solo)
    const royalSolo = document.createElement('div')
    royalSolo.classList.add('royal-solo')
    console.log(royalSolo)
    royalSolo.innerHTML = `<iframe width="560" height="315" src="${solo.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    <p class="solo-title">${solo.title}</p>
    <br>
    <div class="soloDisplay">
    <button onclick="deleteRoyalSoloEntry(${solo.id})">Delete</button>
    </div>
`
    soloFormTwo.appendChild(royalSolo)
    console.log(soloFormTwo)
}

function displayRoyalSoloEntry(arr) {
    console.log('hit display royal solo')
    console.log(arr)
    soloFormTwo.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createRoyalSolo(arr[i])
    }
}

royalSubmitButton.addEventListener('click', submitHandler)
deleteSoloButtonTwo.addEventListener('click', deleteRoyalSoloEntry)
getRoyalSoloEntry()



/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
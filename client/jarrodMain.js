const videoUpload = document.querySelector('#videoUpload')
const jarrodSubmitButton = document.querySelector('#jarrodSubmitButton')
const deleteSoloButton = document.querySelector('#deleteSoloButton')
const soloForm = document.querySelector('#soloForm')

const form = document.querySelector('form')
const baseURL = `http://localhost:4400/api/jarrodSoloEntry`

const jarrodSoloEntryCallback = ({ data: jarrodSoloEntry }) => {
    displayJarrodSoloEntry(jarrodSoloEntry)
    console.log('jarrod solo callback hit')
   }
const errCallback = err => console.log(err)

const getJarrodSoloEntry = () => {
console.log("getJarrodsoloentry")
axios.get(baseURL)
.then(jarrodSoloEntryCallback)
.catch(errCallback)
}
const createJarrodSoloEntry = (body) => {
console.log('createJarrodsoloentry')
axios.post(baseURL, body)
.then(jarrodSoloEntryCallback)
.catch(errCallback)
}

const deleteJarrodSoloEntry = (id) => {
    console.log('deleteJarrod')
axios.delete(`${baseURL}/${id}`)
.then(jarrodSoloEntryCallback)
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

    createJarrodSoloEntry(bodyObj)

    title.value = ''
    video.value = ''

    getJarrodSoloEntry()
}


function createJarrodSolo(solo) {
    console.log(solo)
    const jarrodSolo = document.createElement('div')
    jarrodSolo.classList.add('jarrod-solo')
    console.log(jarrodSolo)
    jarrodSolo.innerHTML = `<iframe width="560" height="315" src="${solo.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    <p class="solo-title">${solo.title}</p>
    <br>
    <div class="soloDisplay">
    <button onclick="deleteJarrodSoloEntry(${solo.id})">Delete</button>
    </div>
`
    soloForm.appendChild(jarrodSolo)
    console.log(soloForm)
}

function displayJarrodSoloEntry(arr) {
    console.log('hit display jarrod solo')
    console.log(arr)
    soloForm.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createJarrodSolo(arr[i])
    }
}

jarrodSubmitButton.addEventListener('click', submitHandler)
deleteSoloButton.addEventListener('click', deleteJarrodSoloEntry)
getJarrodSoloEntry()



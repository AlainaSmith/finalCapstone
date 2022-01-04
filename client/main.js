const bandMembersCards = document.querySelector('#band-members')


const form = document.querySelector('form')
const baseURL = `http://localhost:4400/api/bandMembers`

const bandMembersCallback = ({ data: bandMembers }) => {
     displaybandMembers(bandMembers)
     console.log('bandMembers callback hit')
    }
const errCallback = err => console.log(err)

const getBandMembers = () => axios.get(baseURL).then(bandMembersCallback).catch(errCallback)
const createBandMembers = body => axios.post(baseURL, body).then(bandMembersCallback).catch(errCallback)
const deleteBandMembers = (id) =>axios.delete(`${baseURL}/${id}`).then(bandMembersCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()
let title = document.querySelector('#title')
let videoURL = document.querySelector('#video')
    
    let bodyObj = {
        title: title.value, 
        videoURL: video.value
    }

    createBandMembers(bodyObj)

    title.value = ''
    videoURL.value = ''

    getBandMembers()
}















// function createHappyCard(happy) {
//     const happyCard = document.createElement('div')
//     happyCard.classList.add('happy-card')

//     happyCard.innerHTML = `<img alt='happy cover' src=${happy.imageURL} class="happy-cover"/>
//     <p class="happy-title">${happy.title}</p>
//     <br>
//     <div class="happys-container">
//     <button onclick="deleteHappys(${happy.id})">Delete</button>
//     </div>

// `

//     happysContainer.appendChild(happyCard)
// }

const loginForm = document.querySelector('#loginForm')
const createAccountForm = document.querySelector('#createAccountForm')
const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const loginEmailInput = document.querySelector('#loginEmail')
const createAccountEmailInput = document.querySelector('#createAccountEmail')
const loginPasswordInput = document.querySelector('#loginPassword')
const createAccountPasswordInput = document.querySelector('#createAccountPassword')




function getLoginInfo() {
    axios.get('http://localhost:4400/user') 
        .then(res => {
            const user = res.data[0]

            const {
                first_name: firstName, 
                last_name: lastName, 
                email,
                password
            } = user

            firstNameInput.value = firstName
            lastNameInput.value = lastName
            emailInput.value = email
            passwordInput.value = password
        })
    }

    loginForm.addEventListener('click', (e) => {
        e.preventDefault()
    })
       
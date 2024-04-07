const Email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function spacialSign(arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] == '@' || arr[i] == '#' || arr[i] == '$') {
            return 1;
        }
    }
    return 0;
}

form.addEventListener('submit', (e) => {
    let messages = []
    if (Email.value === '' || Email.value == null) {
        messages.push('Email is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 8 characters')
    }
    let str = password.value
    let arr = Array.from(str);
    if(spacialSign(arr) == 0) {
        messages.push('password must have a special sign')
    }
    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
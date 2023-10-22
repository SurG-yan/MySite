const changePass = document.querySelector('#change')

const newPassword = [];

changePass.addEventListener("submit", (e) => {
    e.preventDefault()
    const {password, newPass, newpassword} = e.target
    const pass = password.value
    const newPassw = newPass.value.trim().includes(newpassword.value)

    if(newPassw && pass) {
        if(newPass.value === newpassword.value) {
            newPassword.push(newpassword.value)
            addClass(newPass, 'error','remove')
            e.target.reset()
            location.href= "./index.html"
        }else {
        addClass(newPass, 'error','add')
        }
    }else {
        addClass(newPass, 'error','add')
    }
})

function addClass(tag, classname, method) {
    tag.classList[method](classname)
}
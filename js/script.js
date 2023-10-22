const Mainform = document.querySelector('#form')


const users = [];

Mainform.addEventListener('submit', (e) => {
    e.preventDefault();
    const {username,password} = e.target;
    const len = username.value.trim().length > 4;
    const noSpace = !username.value.trim().includes(" ");
    const passwordIsValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password.value);

    if(len && noSpace && passwordIsValid) {
        if(users.includes(username.value.trim())) {
            addClass(username, 'error', 'add')
            return;
        }else {
            const user = {
                id: Math.random().toString(36).slice(2, 8),
                username: username.value,
                password: password.value
            }
            users.push(user);
            e.target.reset()
            location.href = "./home.html"
            console.log(users);
            addClass(username, 'error', 'remove')
        }
    }else {
        addClass(username, 'error', 'add')
    }

})

function addClass(tag, classname, method) {
    tag.classList[method](classname)
}

//-----------------------------------
 




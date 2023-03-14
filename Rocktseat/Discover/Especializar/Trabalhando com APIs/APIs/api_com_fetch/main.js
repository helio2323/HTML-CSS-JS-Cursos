const url = 'https://api.github.com/users/helio2323'

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderAPIResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.location
        userAvatar.src = data.avatar_url
})
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => dddd)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://lorempixel.com.br/500/400/",
    city: "Rio do Sul"
}

function deleteUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}



//addUser(newUser)
//getUser()
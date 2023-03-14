const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.erro(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response =>{
        console.log(response.data)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.log(error))
}

function updateUser(id){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response) )
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response) )
    .catch(error => console.error(error))


}

const userUpdated = {
    name: "Marcelo Calvis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

getUsers()

getUser(36)

//addNewUser()

updateUser(36)

deleteUser(37)


//Outra maneira de criar tipagens no TypeScript é utilizando a interface .

//Segue o exemplo:

interface Users {
    id: number
    name: string,
}

let newUser: Users = {
    id: 1,
    name: "João"
}

function registerNewUser(newUser: Users){
    newUser.id
    newUser.name
}

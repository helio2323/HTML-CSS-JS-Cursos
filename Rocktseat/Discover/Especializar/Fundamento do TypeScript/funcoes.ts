//Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

//Dessa maneira, tipamos dessa forma no TypeScript:

function showMessages(message: string):void {
    console.log(message)
}
//Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

function showMessagess(message: string) {
   return message;
}

console.log(showMessagess("Oi, João"))
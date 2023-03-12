async function start(){
    try{
    const response = await fetch('https://api.github.com/users/helio2323')
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json();
    console.log(repos)
    } catch (e){
        console.log(e);
    }
}
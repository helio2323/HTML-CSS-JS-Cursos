import axios from "axios";

async function fetchRepos(){

  try {
    const user = await axios.get('https://api.github.com/users/helio2323')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch(e) {
    console.log(e)
  }
}

fetchRepos()
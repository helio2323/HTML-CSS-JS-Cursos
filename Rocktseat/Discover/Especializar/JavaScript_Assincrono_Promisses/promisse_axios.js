import axios from "axios";

axios.get('https://fakestoreapi.com/products/1')
  .then(res => {
    const dado = res.data

    console.log(dado)
  });
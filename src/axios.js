import axios from "axios";

const instance = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com"
})

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

// defaults: {baseUrl : "https://jsonplaceholder.typicode.com"}

export const anotherInstance = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com"
  // ...
})


export default instance;
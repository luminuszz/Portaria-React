import axios from 'axios';


 const apiCatraca2 = axios.create({
  baseURL: 'http://192.168.8.3/'
})

const apiCatraca = axios.create({
  baseURL: 'http://192.168.8.2/',
});

export default apiCatraca;

 

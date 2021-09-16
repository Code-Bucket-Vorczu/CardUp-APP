import axios from 'axios';

const authAxios = axios.create({
headers: {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "*",
  "Authorization": "Bearer 578fd8b4-15f6-45eb-ab7f-b4517087a49b"
}
});

export default authAxios; 
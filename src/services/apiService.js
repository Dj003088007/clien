import axios from 'axios';

export default axios.create({
  baseURL: 'https://jds-post.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

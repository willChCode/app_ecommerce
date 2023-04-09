import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/login';
axios.defaults.withCredentials = true;

interface Datos {
  email: string;
  password: string;
}
const loginPost = async (datos: Datos) => {
  const res = await axios.post(baseUrl, datos);
  return res;
};

export { loginPost };

import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/users';

interface Datos {
  name?: string;
  email: string;
  age?: number;
  password: string;
}
const userPost = async (datos: Datos) => {
  const res = await axios.post(baseUrl, datos);
  return res;
};

export { userPost };

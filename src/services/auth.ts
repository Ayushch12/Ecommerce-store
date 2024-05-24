import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await axios.get('http://localhost:5000/users', {
    params: { username, password }
  });

  const user = response.data.find((u: { username: string; password: string }) => u.username === username && u.password === password);

  if (user) {
    return { token: 'mock-token', user: { id: user.id, username: user.username } };
  } else {
    throw new Error('Invalid credentials');
  }
};

export const register = async (username: string, password: string) => {
  const response = await axios.post('http://localhost:5000/users', { username, password });
  return response.data;
};

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

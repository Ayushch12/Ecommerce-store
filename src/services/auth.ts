import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.get('http://localhost:5001/users', {
    params: { email, password }
  });

  const user = response.data.find((u: { email: string; password: string }) => u.email === email && u.password === password);

  if (user) {
    return { token: 'mock-token', user: { id: user.id, email: user.email } };
  } else {
    throw new Error('Invalid credentials');
  }
};

export const register = async (email: string, password: string) => {
  const response = await axios.post('http://localhost:5001/users', { email, password });
  return response.data;
};

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

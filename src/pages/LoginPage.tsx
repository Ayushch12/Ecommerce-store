import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as loginService, setAuthToken } from '../services/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token, user } = await loginService(email, password);
      setAuthToken(token);
      login(user, token); // Ensure the correct parameters are passed
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-24 xl:gap-30 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome to Our E-commerce Store
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Dans notre magasin de commerce électronique, nous vous proposons une sélection de produits de qualité supérieure, associée à un service clientèle hors pair pour vous garantir une expérience d'achat sans faille.
          </p>
          <ul className="hidden justify-between pt-12 mx-auto mt-14 border-t border-gray-300 xl:flex dark:border-gray-700 dark:text-white">
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">42k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Our Active</div>
                <div>Users</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">3k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Store</div>
                <div>Reviews</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">560k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Weekly</div>
                <div>Downloads</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="justify-center p-4 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow lg:mt-0 lg:col-span-6 xl:col-span-5 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLogin}>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">Connectez-vous à votre compte</h2>
            {error && <p className="text-red-600">{error}</p>}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@flowbite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{' '}
              <a href="/register" className="text-primary-700 hover:underline dark:text-primary-500">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;


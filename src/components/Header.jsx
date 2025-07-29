import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMathRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className='h-5 cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li
              onClick={() => navigate('/')}
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMathRoute('/') ? 'text-black border-b-red-500' : 'text-gray-400'
              }`}
              onClick={() => navigate("/")}

            >
              Home
            </li>

            <li
              onClick={() => navigate('/offers')}
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMathRoute('/offers') ? 'text-black border-b-red-500' : 'text-gray-400'
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>

            <li
              onClick={() => navigate('/sign-in')}
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${
                pathMathRoute('/sign-in') ? 'text-black border-b-red-500' : 'text-gray-400'
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

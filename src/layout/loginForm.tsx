import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import background from '../assets/auth-background.jpg';
import logo from '../assets/vladeu-logo.jpeg';
import { login } from '../features/loginSlice';
import { RootState } from '../store/store';

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
  const error = useSelector((state: RootState) => state.login.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
        ...formValues,
        [e.target.name] : e.target.value
    })
}

const handleLogin = () => {
  dispatch(login(formValues));
  console.log('Login Button Clicked');
};

  if(isAuthenticated) {
    setTimeout(() => {
        navigate('/dashboard')
    }, 3000)
}

  return (
    <div className='flex md:flex-row flex-col h-screen justify-center items-center'>
      <div className="w-full h-screen loginImg">
        <img src={background} alt="Login Image" className="bg-blue-500 w-full h-full bg-contain" />
      </div>
      <div className='absolute bg-teal-400 bg-opacity-30 p-10 m-10 rounded-xl flex flex-col border-2 border-teal-400 shadow-lg shadow-teal-600'>
      <div className="mx-auto justify-center overflow-hidden h-80 rounded-lg flex items-center">
        <img src={logo} alt="Логотип" className="h-full object-cover bg-transparent w-full bg-contain" />												
      </div>
			<TextField id="standard-basic" label="Имя пользователя" name="username" variant="standard" value={formValues.username} onChange={handleChange} className='mb-4' InputLabelProps={{ sx: { color: '#89f6dc' } }} />
			<TextField id="standard-basic" label="Пароль" name="password" variant="standard" value={formValues.password} onChange={handleChange} InputLabelProps={{ sx: { color: '#89f6dc' } }} />
			<div className='mt-8 flex w-2/4 justify-center bg-slate-900 bg-opacity-40 mx-auto border border-stone-900 shadow shadow-stone-700'>
			<Button variant="contained" onClick={handleLogin} className='w-full !rounded-md' color='inherit'>Войти</Button>
      </div>
			{error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;

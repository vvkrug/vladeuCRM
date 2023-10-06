import { Player } from "@lottiefiles/react-lottie-player";
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import backgrounds from '../../assets/auth-background.jpg';
import logo from '../../assets/vladeu-logo.jpeg';
import LabelMessage from '../../components/LabelMessage/labelMessage';
import { login } from '../../features/loginSlice';
import { RootState } from '../../store/store';

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
  // console.log('Клик по кнопке входа');
};

  if(isAuthenticated) {
    setTimeout(() => {
        navigate('/dashboard')
    }, 4000)
}

  return (
    <div className='flex md:flex-row flex-col h-screen justify-center items-center'>
      <div className="w-full h-screen loginImg">
        <img src={backgrounds} alt="Login Image" className="bg-blue-500 w-full h-full bg-contain" />
      </div>
      <div className='absolute bg-teal-400 bg-opacity-30 p-10 m-10 rounded-xl flex flex-col border-2 border-teal-400 shadow-lg shadow-teal-600'>
      <div className="mx-auto justify-center overflow-hidden h-80 rounded-lg flex items-center">
        <img src={logo} alt="Logo" className="h-full object-cover bg-transparent w-full bg-contain" />												
      </div>
      {!isAuthenticated && (
        <>
        <p className='italic text-md text-teal-200 m-2'>*** Имя пользователя и пароль: 'admin'</p>
        <TextField id="standard-basic" label="Имя пользователя" name="username" variant="standard" value={formValues.username} onChange={handleChange} className='mb-4' InputLabelProps={{ sx: { color: '#89f6dc' } }} />
        <TextField id="standard-basic" label="Пароль" name="password" variant="standard" type='password' value={formValues.password} onChange={handleChange} InputLabelProps={{ sx: { color: '#89f6dc' } }} />
        {error && <p className='text-red-500 mt-4 text-sm flex flex-col'>Ошибка: {error} <a className='text-emerald-800'> * Пожалуйста проверьте ваше имя пользователя и пароль.</a></p>}
        </>
      )}
      {isAuthenticated && (
        <>
        <div>
                <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: '300px', width: '300px' }}
          />
          <LabelMessage className='text-teal-200' text='Успешно! Сейчас вас перенаправит в приложение...'/>
					<LabelMessage className='text-teal-200' text='Если этого не происходит, пожалуйста, обновите страницу и попробуйте снова'/>
      </div>
        </>
      )}
      <div className='mt-8 flex w-2/4 justify-center !rounded-md mx-auto border border-stone-900 shadow shadow-stone-700.'>
      <Button variant="contained" onClick={handleLogin} className='w-full !rounded-md !bg-[#65a9d6] !bg-opacity-80 hover:!bg-[#327aaa] !font-bold' color='info'>Войти</Button>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;

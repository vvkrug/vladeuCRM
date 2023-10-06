import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/navbar'
import TodosTable from '../components/Todo/todosTable'
import UsersTable from '../components/User/usersTable'
import PageTitle from '../components/pageTitle'
import ProductWrapper from '../layout/product/productWrapper'

const HomePage:React.FC = () => {
  const [activeItem, setActiveItem] = useState('Получите власть над рабочими процессами с Vladeu CRM!')
  // console.log(activeItem, "activeItem")

  return (
    <div>
      <Navbar setActiveItem={setActiveItem}/>
      <div className='w-full md:px-[7.4rem] px-4 overflow-y-auto flex flex-col justify-center mt-8'>
      <PageTitle text={activeItem}/>
      {activeItem !== 'Пользователи' && activeItem !== 'Задачи' && <ProductWrapper/>}
      {activeItem === 'Пользователи' && <UsersTable/>}
      {activeItem === 'Задачи' && <TodosTable/>}
      </div>
    </div>
  )
}

export default HomePage
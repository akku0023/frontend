import React, { ReactElement, FC } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const data = ['Home', 'Acheivements', 'Derby', 'Reports', 'Team', 'Contact Us']

const Layout: FC = ():ReactElement => {
  return (
    <>
    <Navbar pages={data}/>
    <Outlet />
    </>
  )
};

export default Layout;
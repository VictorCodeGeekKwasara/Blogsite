import React from 'react';
import Layout from './Layouts/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Logout from './Components/Logout';
import Login from './Components/Login';
import Joinus from './Components/Joinus';
import Blogs from './Components/Blogs';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import About from './Components/About';
import Create from './Components/Create';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Navigate replace to='/' />} />
					<Route path='blogs' element={<Blogs />} />
					<Route path='blog/:id' element={<Blog />} />
					<Route path='contact' element={<Contact />} />
					<Route path='login' element={<Login />} />
					<Route path='joinus' element={<Joinus />} />
					<Route path='about' element={<About />} />
					<Route path='logout' element={<Logout />} />
					<Route path='create' element={<Create />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

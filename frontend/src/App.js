import React from 'react';
import Layout from './Layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Logout from './Components/Logout';
import Login from './Components/Login';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import About from './Components/About';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='blogs' element={<Blogs />} />
					<Route path='contact' element={<Contact />} />
					<Route path='loginjoinus' element={<Login />} />
					<Route path='about' element={<About />} />
					<Route path='logout' element={<Logout />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register.jsx'
import Profile from './components/Profile.jsx';
import Dashboard from './components/dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route index={true} path='/' element={<Home/>} /> */}
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path='' element={<PrivateRoute />}> */}
        <Route path='/profile' element={<Profile />} />
      {/* </Route> */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Show_detail } from './Pages/Show_detail.jsx'
import { ShowDataProvider } from './contexts/ShowData.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='/' element={<App/>} />
      <Route path='/summary/:showname/:index' element={<Show_detail/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowDataProvider>
      <RouterProvider router={router}/>
    </ShowDataProvider>
  </React.StrictMode>,
)

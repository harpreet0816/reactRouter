import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout, Home, About, Contact, User, Project, Spinner } from '.';
function App() {

const githubInfo = ()=>{
  const ss = fetch('https://api.github.com/users/harpreet0816').then((data)=>data.json()).then((data)=>data).catch(err => err.message);
  return ss;
}
  
  // const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user' loader= { () => githubInfo()} element={<User />} />
        <Route path='project' lazy={() => console.log(1)} element={<Project />} />
        </Route>
    )
)
  return (
    <>
    <RouterProvider router={router} fallbackElement={<Spinner />}/>
    </>
  )
}

export default App

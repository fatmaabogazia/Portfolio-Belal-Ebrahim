
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import AboutMe from './Component/AboutMe/AboutMe'
import Skills from './Component/Skills/Skills'
import Experience from './Component/Experience/Experience'
import Projects from './Component/Projects/Projects'
import Contact from './Component/Contact/Contact'
import NotFound from './Component/NotFound/NotFound'
import ArabicInfo from './Component/ArabicInfo/ArabicInfo'
import GermanInfo from './Component/GermanInfo/GermanInfo'
import EnglishInfo from './Component/EnglishInfo/EnglishInfo'

import { HeroUIProvider } from '@heroui/react'

function App() {

  let router = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutMe /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "arabicInfo", element: <ArabicInfo /> },
      { path: "germanInfo", element: <GermanInfo /> },
      { path: "englishInfo", element: <EnglishInfo /> },

      { path: "*", element: <NotFound /> }
    ]
  }])

  return (
    <>

      <HeroUIProvider>
        <RouterProvider router={router}> </RouterProvider>
      </HeroUIProvider>

    </>
  )
}


export default App

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode,setThemeMode]=useState('light')

  // Access function by same name from context
  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(()=>{
    let element=document.querySelector('html');

    element.classList.remove("light","dark")

    element.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App

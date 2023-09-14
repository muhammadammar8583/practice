import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Errorpage from './components/Errorpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)


  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggledarkmode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode has been enabled', 'success')
    }
  }

  const togglegreendarkmode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'green'
      showalert('Green Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode has been enabled', 'success')
    }
  }

  const togglereddarkmode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'red'
      showalert('Red Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode has been enabled', 'success')
    }
  }

  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: <Navbar />,
    //   errorElement: <Errorpage />,
    //   children: [
    //     {
    //       path: '/',
    //       element: <TextForm showalert={showalert} heading='Enter your text to analyze below!' mode={mode} />
    //     },
    //     {
    //       path: '/about',
    //       element: <About />
    //     }
    //   ]
    // },
    {
      path: '/',
      element: <TextForm showalert={showalert} heading='Enter your text to analyze below!' mode={mode} />,
      errorElement: <Errorpage />
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  return (
    <>
      <Navbar title="TextUtil" abouttext="About Us" mode={mode} togglemode={toggledarkmode}
        togglegreendarkmode={togglegreendarkmode} togglereddarkmode={togglereddarkmode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <RouterProvider router={router} />
      </div>
      {/* <div className="container my-3">
        <TextForm showalert={showalert} heading='Enter your text to analyze below!' mode={mode} />
        <About />
      </div> */}
    </>
  );
}

export default App;

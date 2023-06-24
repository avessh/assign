import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Information from './Components/Information';
import Guide from './Components/Guide';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
      path: "information",
      element: <Information/>,
    },
    {
      path: "guide",
      element: <Guide/>,
    }
  ]);

  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
     <RouterProvider router={router} />
     
    </div>
  );
}

export default App;

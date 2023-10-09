
import ReactDOM from 'react-dom/client';
import './index.css';

import Post from "./view/Post/Post";
import ReadPost from "./view/ReadPost/ReadPost";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routes=createBrowserRouter([
 
  {
    path:'/',
    element:<Post/>,
  },
  {
    path:'/read/:id',
    element:<ReadPost/>
  },
  {
  path:'*',
  element:"404not found",
  }

  
])
root.render(
  <>
  
  <RouterProvider router={routes}/>
  </>
 
);


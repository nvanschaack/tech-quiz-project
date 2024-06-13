import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Home from './components/Login';
import Signup from './components/SignUp';
import Login from './components/Login';
import QuizForm from './components/QuizForm';
import ThoughtList from './components/ThoughtList/index.jsx';
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/quizform',
        element: <QuizForm />
      },{
        path: '/thoughtlist',
        element: <ThoughtList />
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

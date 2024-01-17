import { Routes, Route } from 'react-router-dom';


import './scss/Main.scss';
import MainLayout from './layouts/MainLayout';
import { publicRoutes, privateRoutes } from './Components/router';

function App() {
  // TODO const isAuth = true; Implementation of the reg/auth 
  return (
    <Routes>
      <Route element={<MainLayout />} >

        {
          privateRoutes.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          )
        }
        {
          publicRoutes.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          )
        }
      </Route>
    </Routes>
  );
}

export default App;

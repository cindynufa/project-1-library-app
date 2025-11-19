import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AppProvider from './providers/AppProvider';
import Home from './components/pages/home';
import LayoutProvider from './providers/LayoutProvider';
import Detail from './components/pages/detail';
import Category from './components/pages/category';
import Author from './components/pages/author';
import Cart from './components/pages/cart';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutProvider/>}>
          <Route index element={<Home />}/>
          <Route path='detail' element={<Detail/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path='author' element={<Author/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Route>
    )
  );

  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  );
};

export default App;

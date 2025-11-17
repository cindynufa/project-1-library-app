import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AppProvider from './providers/AppProvider';
import Home from './components/pages/home';
import LayoutProvider from './providers/LayoutProvider';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutProvider/>}>
          <Route index element={<Home />}/>
        </Route>
      </Route>
    )
  );

  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  );
}

export default App;

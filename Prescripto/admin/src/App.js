
import AddSpeciality from './pages/AddSpeciality';
import MainComponent from './components/MainComponent';

import { Route,createBrowserRouter,createRoutesFromElements,  RouterProvider, } from "react-router-dom"
import ListSpeciality from './pages/ListSpeciality';
import AddDoctor from './pages/AddDoctor';
import ListDoctor from './pages/ListDoctor';
export const backend_url ="http://localhost:8000"
export const currency ="ksh"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(


    <Route path="/" element={<MainComponent />}>
      <Route path="addSpeciality" element={<AddSpeciality/>}></Route>
      <Route path="listSpeciality" element={<ListSpeciality/>}></Route>
      <Route path="addDoctor" element={<AddDoctor/>}></Route>
      <Route path="listDoctor" element={<ListDoctor/>}></Route>



    </Route>
  )
)
  return (
    <div >
    <RouterProvider router={router} />
    </div>
  );
}

export default App;

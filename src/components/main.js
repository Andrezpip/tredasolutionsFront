import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importamos los compontentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function Main() {
  return (
    <div className="Main">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>}/>
          <Route path='/create' element={<CreateProduct/>}/>
          <Route path='/edit/:id' element={<EditProduct/>}/>
          <Route path='/getStores' element={<ShowStores/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default Main;
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importamos los compontentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ShowStores from './components/ShowStores';
import EditStore from './components/EditStore';
import CreateStore from './components/CreateStore';

function App() {
    return ( 
        <div className = "App">
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = { <ShowProducts /> }/>
        <Route path = '/create' element = { <CreateProduct /> }/>
        <Route path = '/edit/:id' element = { <EditProduct /> }/> 
        <Route path='/getstores' element={<ShowStores/>}/>
        <Route path='/editStore/:id' element={<EditStore/>}/>
        <Route path='/createStore' element={<CreateStore/>}/>
        </Routes> 
        </BrowserRouter>
        </div>
    );
}

export default App;
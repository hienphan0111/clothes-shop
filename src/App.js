import './App.css';
import Home from './routers/home/home.compenent';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routers/navigation/navigation.component';
import Authentication from './component/authentication/authenticationcomponent';

const Shop = () => {
  return (
    <div>
      <h1>This is Shop page</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

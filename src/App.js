import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1';

import OrderView from './components/OrderView';
import FeedbackView from './components/FeedbackView';
import DataviewA from './components/DataviewA';


function App() {
  return (
    <div className="App">
      <DataviewA/>
      {/* <OrderView/> */}
      {/* <FeedbackView/> */}
     
      <Routes>
        {/* <Routes path='/' element={<Login1/>}/> */}
        {/* <Route path="/orders" element={<OrderView />} /> */}
      </Routes>
    </div>
  );
}

export default App;

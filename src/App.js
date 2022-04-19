import {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Authentication />} />
            <Route path="home" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App;

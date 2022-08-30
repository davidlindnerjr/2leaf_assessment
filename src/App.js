import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import ParentPortalScreen from './screens/ParentPortalScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/parent-portal' element={<ParentPortalScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;

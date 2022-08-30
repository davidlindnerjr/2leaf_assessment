import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import ParentPortalScreen from './screens/ParentPortalScreen';

// Components
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/parent-portal' element={<ParentPortalScreen/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

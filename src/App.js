// import logo from './logo.svg';
import './App.scss';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  const pageSize = 12;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/General' element={<News setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General" />} />
          <Route exact path='/Water' element={<News setProgress={setProgress} key="Water" pageSize={pageSize} country="in" category="Water" />} />
          <Route exact path='/Entertainment' element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
          <Route exact path='/Health' element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />} />
          <Route exact path='/Science' element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />} />
          <Route exact path='/Sports' element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
          <Route exact path='/Cricket' element={<News setProgress={setProgress} key="Cricket" pageSize={pageSize} country="in" category="Cricket" />} />
          <Route exact path='/football' element={<News setProgress={setProgress} key="Football" pageSize={pageSize} country="in" category="football" />} />
          <Route exact path='/Blockchain' element={<News setProgress={setProgress} key="Blockchain" pageSize={pageSize} country="in" category="Blockchain" />} />
          <Route exact path='/Automation' element={<News setProgress={setProgress} key="Automation" pageSize={pageSize} country="in" category="Automation" />} />
          <Route exact path='/Edge Computing' element={<News setProgress={setProgress} key="Edge Computing" pageSize={pageSize} country="in" category="Edge Computing" />} />
          <Route exact path='/Artificial Intelligence' element={<News setProgress={setProgress} key="Artificial Intelligence" pageSize={pageSize} country="in" category="Artificial Intelligence" />} />
        </Routes>
        <div>
          <div style={{ marginTop: "150vh" }} />
          <ScrollToTop smooth />
        </div>
      </Router>
    </div>
  )

}

export default App;
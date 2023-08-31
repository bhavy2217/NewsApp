import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//-----------Above code is of function based.

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
    pageSize = 15;
    apiKey = process.env.REACT_APP_NEWS_API;
    // apiKey = "b1396de3da8a4c7291e83e817c0c12f9"

    const [progress, setProgress] = useState(0);
    //render Method is lifeCycle method

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    progress={state.progress}
                // onLoaderFinished={() => setProgress(0)}
                />
                <Routes>
                    <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
                    <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
                    <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
                    <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
                    <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
                    <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
                    <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
                    <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
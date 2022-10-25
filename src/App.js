import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './components/mainpage/mainpage';
import TeamvsTeam from './components/teamvsteam/teamvsteam';
import TeamAnalysis from './components/team/team';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/teamvsteam" element={<TeamvsTeam />} />
          <Route path='/team' element={<TeamAnalysis/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigurationsPage from './pages/ConfigurationsPage'
import TeamsPage from './pages/TeamsPage'
import NavMenu from './components/NavMenu'
import { useState } from 'react';
import { Context } from './context';

function App() {

  const [teams, setTeams] = useState([]);
  const [players, setPlayer] = useState([]);

  const add_team = team => setTeams([...teams, team])
  const add_player = player => setPlayer([...players, player])

  const delete_player = id => setPlayer(players.filter(el => el.id !== id))

  console.log(teams);

  return (
    <div className="App">
      <Context.Provider value={{add_team, teams, add_player, players, delete_player}}>
        <NavMenu/>
        <Routes>
          <Route path='/' element={<ConfigurationsPage/>}/>
          <Route path='/teams_page' element={<TeamsPage/>}/>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

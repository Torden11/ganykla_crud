
import './App.scss';
import Create from './Components/Create';
import { useState, useEffect } from 'react';
import DataContext from './Components/DataContext';
import {create, read, update, destroy} from './Functions/localStorage';
import List from './Components/List';

const key = 'animals'

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);

//READ
useEffect(() => {
  setAnimals(read(key));

}, [lastUpdate]);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now())
  }, [createData])

  return (
    <DataContext.Provider value={{
      setCreateData,
      animals
    }}>
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create />
        </div>
        <div className="col-6">
          <List></List>
        </div>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;

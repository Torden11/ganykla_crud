
import './App.scss';
import Create from './Components/Create';
import { useState, useEffect } from 'react';
import DataContext from './Components/DataContext';
import {create, read, update, destroy} from './Functions/localStorage';

const key = 'animals'

function App() {

  const [createData, setCreateData] = useState(null);

  //CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData)
  }, [createData])

  return (
    <DataContext.Provider value={{
      setCreateData
    }}>
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create />
        </div>
        <div className="col-7">
          Column
        </div>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;

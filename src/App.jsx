
import './App.scss';
import Create from './Components/Create';
import { useState, useEffect } from 'react';
import DataContext from './Components/DataContext';
import {create, read, update, destroy} from './Functions/localStorage';
import List from './Components/List';
import Edit from './Components/Edit';

const key = 'animals'

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  // const [msgs, setMsgs] = useState([]);

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

  //DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now())
  }, [deleteData])

  // EDIT (UPDATE)
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);

  return (
    <DataContext.Provider value={{
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
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
    <Edit></Edit>
    </DataContext.Provider>
  );
}

export default App;

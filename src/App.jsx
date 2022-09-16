
import './App.scss';
import Create from './Components/Create';
import { useState, useEffect } from 'react';
import DataContext from './Components/DataContext';
import {create, read, update, destroy} from './Functions/localStorage';
import List from './Components/List';
import Edit from './Components/Edit';
import Messages from './Components/Messages';
import { v4 as uuidv4 } from 'uuid';

const key = 'animals'

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [msgs, setMsgs] = useState([]);

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
    makeMsg('VALIOO! Pridėjote naują gyvūną!')
  }, [createData])

  //DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now())
    makeMsg('Кą tik pašalinote gyvūną. :(')
  }, [deleteData])

  // EDIT (UPDATE)
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);

  const makeMsg = text => {
    const msg = {
      id: uuidv4(),
      text
    }
  setMsgs(m => [...m, msg]);
  //Pridejome timeout kad pranesimas pats isnyktu po 6 sekundziu
  setTimeout(() => {
    setMsgs(m => m.filter(mes => mes.id !== msg.id));
  }, 6000);

}

  return (
    <DataContext.Provider value={{
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData,
      setEditData,
      msgs, 
      setMsgs
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
    <Messages></Messages>
    </DataContext.Provider>
  );
}

export default App;

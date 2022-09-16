import DataContext from "./DataContext";
import types from "../Data/types";
import { useContext, useEffect, useState } from 'react';


function Edit() {

   const { modalData, setModalData, setEditData } = useContext(DataContext);
   
   const [type, setType] = useState('0');
   const [weight, setWeight] = useState('');
   
   //Zemiau rasome useEffect kad atsidarant edit langui uzsipyldytu visi langai esama info 
   useEffect (() => {
      if (null === modalData) {
         return;
      }
      
      setType(modalData.type);
      setWeight(modalData.weight)

   }, [modalData]);

   //Zemiau rasome funkcija, kuri issaugotu musu naujai ivesta informacija
   const save = () => {
      setEditData({
         type: parseInt(type),
         weight,
         id: modalData.id
      });
      //Uzdarome modala. t.y. setiname ji null
      setModalData(null);
   }

   
  

  if (null === modalData) {
    return null;
  }

  

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Redaguoti įrašą</h5>
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
          <div className="card m-4">
      
      <div className="card-body">
         <div>
          <div className="mb-3">
            <label className="form-label">Gyvūno rūšis</label>
            <select className="form-select" value={type} onChange={e => setType(e.target.value)}>
              <option value={0} disabled>
                Choose from list
              </option>
              {
              types.map((a) => ( <option key={a.id} value={a.id}>{a.type}</option>))
              }
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Svoris (kg) </label>
            <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
          </div>
         </div>
      </div>
    </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn btn-secondary"
            >
              Uždaryti
            </button>
            <button onClick={save} type="button" className="btn btn-primary">
              Išsaugoti pakeitimus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

import types from "../Data/types";
import {  useState, useContext } from 'react';
import DataContext from "./DataContext";

function Create() {

   
   const [type, setType] = useState('0');
   const [weight, setWeight] = useState('')
   const {setCreateData} = useContext(DataContext)

   const add = () => {
      setCreateData({
         
         type: parseInt(type),
         weight
         
      });
      
      setType('0');
      setWeight('');
   }

 

  return (
    <div className="card m-4">
      <h5 className="card-header">Naujas gyvūnas</h5>
      <div className="card-body">
         <div>
          <div className="mb-3">
            <label className="form-label">Gyvūno rūšis</label>
            <select className="form-select" value={type} onChange={e => setType(e.target.value)}>
              <option value={0} disabled>
                Pasirinkite iš sąrašo
              </option>
              {
              types.map((g) => ( <option key={g.id} value={g.id}>{g.type}</option>))
              }
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Įrašykite svorį (kg)</label>
            <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)}/>
          </div>
          <button  type="button" onClick={add} className="btn btn-outline-success">Pridėti</button>
        </div>
      </div>
    </div>
  );
}

export default Create;

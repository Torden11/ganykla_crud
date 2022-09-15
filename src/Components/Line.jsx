// import { useContext } from "react";
import types from "../Data/types";
// import DataContext from "./DataContext";



function Line({ animal }) {

//   const { setDeleteData, setModalData } = useContext(DataContext);

  return (
    <li className="list-group-item">
      <div className="animal">
        <div className="animal_content">
           <div className="animal_content_type">
            {types.find((t) => t.id === animal.type).type}
          </div>
          <div className="animal_content_weight">{animal.weight + " kg"}</div>
        </div>
        <div className="animal_buttons">
          <button  type="button" className="btn btn-outline-success">
            Redaguoti
          </button>
          <button  type="button" className="btn btn-outline-danger">
            Ištrinti
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;

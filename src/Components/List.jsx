import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";

function List() {

   const { animals } = useContext(DataContext);

   return ( 
      
         <div className="card m-4">
           <h5 className="card-header">Gyvūnų sąrašas</h5>
           <div className="card-body">
            <ul className="list-group">
               {
                  animals?.map(a => <Line key={a.id} animal={a}/>)
               }
            </ul>
            </div>
            </div>
   )
}

export default List;
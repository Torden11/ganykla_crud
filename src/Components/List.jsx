import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";

function List() {

   const { animals } = useContext(DataContext);

   return (
      
         <div className="card m-4">
           <h5 className="card-header">Gyvunų sąrašas</h5>
           <div className="card-body">
            <ul className="list-group">
               {
                  movies?.map(m => <Line key={m.id} movie={m}/>)
               }
            </ul>
            </div>
            </div>
   )
}

export default List;
import React from 'react';
import SmallCard from './SmallCard';

let usuarios = {
    color:   "primary",
    titulo: "Usuarios en la base de datos",
    valor: 21,
    icono: "fas fa-user",
   
}

let productos ={
    color:   "success",
    titulo: "Total de productos",
    valor: 79,
    icono: "far fa-tshirt",
 
}

let ventas = {
    color:   "warning",
    titulo: "Ventas Totales",
    valor: 49,
    icono: "fad fa-sack-dollar",
  
}

let cardProps = [usuarios,productos,ventas];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
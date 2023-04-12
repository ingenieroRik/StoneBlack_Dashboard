import React from 'react';
import SmallCard from './SmallCard';

import { useState, useEffect } from 'react';

let usuarios = {
    color:   "primary",
    titulo: "Usuarios en la base de datos",
    valor: 0,
    icono: "fas fa-user",
   
}

let productos ={
    color:   "success",
    titulo: "Total de productos",
    valor: 0,
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

    const [users, setUsers] = useState([]);
   

    useEffect(() => {
            fetch("https://stoneblack.onrender.com/api/usuarios",{
                mode: 'no-cors',
                credentials: 'omit'}
            )
                .then((response) => {
                    return response.json()
                })
                .then((users) => {
                 
                    setUsers(users.meta)
                                  
                }).catch (error => (error))
        }, []);
  
     
        usuarios.valor = users.total;

        const [products, setProducts] = useState([]);
   
        useEffect(() => {
            fetch("https://stoneblack.onrender.com/api/productos",{
                mode: 'no-cors',
                credentials: 'omit'}
            )
                .then((response) => {
                    return response.json()
                })
                .then((products) => {
                 
                    setProducts(products.meta)
                                  
                }).catch (error => (error))
        }, []);

        productos.valor = products.total;

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
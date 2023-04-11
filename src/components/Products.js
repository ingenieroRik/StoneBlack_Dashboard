//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react';

import { useState, useEffect } from 'react';


//Importar nuestro componente
import ProductsList from './ProductsList';

function Products() {

    const [products, setProducts] = useState([]);
    const [recuperado, setRecuperado] = useState(false)

    useEffect(() => {
        fetch('/api/productos',{
            headers:{
                "accepts":"application/json"
            }})  
        .then(respuesta => {
             return respuesta.json()})
        .then(products => {
            setRecuperado(true);
            setProducts(products.data)})
        .catch(error => console.log(error))

    },[]);

    if (!recuperado) 
     return (<div>.........recuperando datos.........</div>)
      else 
   
        return (
            <React.Fragment>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">

                    <h1 className="card-header text-center" >Lista de productos en la base de datos</h1> 
                        <table className="table table-bordered text-center " id="dataTable" width="100%" cellspacing="0">
                        
                            <thead >
                               
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Talle</th>
                                    <th>Color</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                    <th>Descuento</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Talle</th>
                                    <th>Color</th>
                                    <th>Precio</th>
                                    <th>Descripcion</th>
                                    <th>Descuento</th>                                
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                
                                    products.map((product,index)=>{
                                        return <ProductsList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
     
                            
    }

export default Products;
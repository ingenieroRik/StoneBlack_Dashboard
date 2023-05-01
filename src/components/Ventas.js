//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react';
import { useState, useEffect } from 'react';


//Importar nuestro componente
import ListaVentas from './ListaVentas';




function Ventas() {

    const [ventas, setVentas] = useState([]);
    const [recuperado, setRecuperado] = useState(false)

    useEffect(() => {
            fetch("https://stoneblack.onrender.com/api/ventas")
                .then((response) => {
                    return response.json()
                })
                .then((ventas) => {
                    setRecuperado(true);
                    //console.log(ventas);
                    setVentas(ventas.data)
                }).catch (error => (error))
        }, []);


        if (!recuperado) 
     return (<div>.........recuperando datos.........</div>)
      else 
   
       

        return (
            <React.Fragment>
           
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">

                    <h1 className="card-header text-center">Lista de ventas en la base de datos</h1>
                        <table className="table table-bordered text-center " id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            
                                <tr>
                                    <th>No. Factura</th>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                   
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>No. Factura</th>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                   
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                   
                                    ventas.map((venta,index)=>{
                                        return <ListaVentas  {...venta} key={index}  />
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

export default Ventas;
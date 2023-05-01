import React from 'react';

function ListaVentas(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.numero_factura}</td>
                <td>{props.fecha}</td>
                <td>{props.total}</td>
                
            </tr>
        </React.Fragment>
    )
}
export default ListaVentas;
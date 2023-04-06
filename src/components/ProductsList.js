import React from 'react';

function ProductsList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.talle}</td>
                <td>{props.color}</td>
                <td>{props.precio}</td>
                <td>{props.descripcion}</td>
                <td>{props.descuento}</td>
               
            </tr>
        </React.Fragment>
    )
}
export default ProductsList;
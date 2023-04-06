import React from 'react';

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre_y_apellido}</td>
                <td>{props.email}</td>
                
            </tr>
        </React.Fragment>
    )
}
export default UserList;
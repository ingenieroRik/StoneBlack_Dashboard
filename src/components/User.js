//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react';
import { useState, useEffect } from 'react';


//Importar nuestro componente
import UserList from './UserList';




function User() {

    const [usuarios, setUsuarios] = useState([]);
    const [recuperado, setRecuperado] = useState(false)

    useEffect(() => {
            fetch("https://stoneblack.onrender.com/api/usuarios")
                .then((response) => {
                    return response.json()
                })
                .then((usuarios) => {
                    setRecuperado(true);
                    console.log(usuarios);
                    setUsuarios(usuarios.data)
                }).catch (error => console.log(error))
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

                    <h1 className="card-header text-center">Lista de usuarios en la base de datos</h1>
                        <table className="table table-bordered text-center " id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>email</th>
                                   
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>email</th>
                                   
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    usuarios.map((usuario,index)=>{
                                        return <UserList  {...usuario} key={index}  />
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

export default User;

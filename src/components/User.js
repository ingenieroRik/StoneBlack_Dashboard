//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import UserList from './UserList';

class User extends Component{
    constructor(){
        super()
        this.state ={
            usuarios : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/usuarios')  //<------------------------------       /movies
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
            //console.log(movies)
            this.setState({usuarios: usuarios.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 text-center">Lista de usuarios en la base de datos</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
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
                                    this.state.usuarios.map((usuario,index)=>{
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
}
export default User;

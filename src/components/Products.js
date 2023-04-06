//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductsList from './ProductsList';

class Products extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/productos')  
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(movies)
            this.setState({products: products.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 text-center">Lista de productos en la base de datos</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered text-center " id="dataTable" width="100%" cellspacing="0">
                            <thead>
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
                                    //console.log(this.state.movies)
                                    this.state.products.map((products,index)=>{
                                        return <ProductsList  {...products} key={index}  />
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
export default Products;
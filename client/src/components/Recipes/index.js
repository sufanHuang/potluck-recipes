import React, {Component} from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
import to from "await-to-js"

class Recipes extends Component {
    state = {
        recipes:[],

    }

    componentDidMount(){
        this.listAll()
    }
    listAll = async()=>{
        let [ error, result ] = await to (axios.get("/recipes"))
        console.log(result)
        if(error){
            console.log('ListAll has error')
        }
        return this.setState({recipes:result.data})
    }


    render() {
        return (
            <div className="container">
                <div className="card boards-card ">
                    <div className="card-heading text-center">
                        <h1 className="card-title">
                            RECIPES LIST
                        </h1>
                    </div>
                    <div className="card-body text-center">
                        <h4><Link to="/recipes/create" className='btn btn-info'>Create New Recipe</Link></h4>
                        <table className="table table-stripe">
                            <thead className="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>See Detail</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.recipes.map(recipe =>
                                <tr key = {recipe.id}>
                                    <td >{recipe.title}</td>
                                    <td>{recipe.author}</td>
                                    <td><Link to={`/recipes/${recipe.id}`} className="btn btn-success">See Detail</Link>&nbsp;</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipes ;

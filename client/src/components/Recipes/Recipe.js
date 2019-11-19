import React, {Component} from "react";
import axios from "axios";
import to from "await-to-js"
import { Link } from "react-router-dom"

export default class Recipe extends Component{
    state ={
        recipe:{
            "id":"",
            "title": "",
            "author": "",
            "prep_time":"",
            "ingredients": "",
            "steps": ""
        }
    }
    componentDidMount =async()=>{
        const  {id}  = this.props.match.params
        console.log(id)
        let [ error, result ] = await to (axios.get(`/recipes/${id}`))
        console.log(result.data)
        let recipe = result.data
        if (error){
            console.log(error)
        }
        return this.setState({recipe})
    }

    deletePost = async()=>{
        const  {id}  = this.props.match.params
        let [error] = await to (axios.delete(`/recipes/${id}`))


        if(error){
            console.log('deleteItem has error',error)
        }

        return this.props.history.push("/recipes")
    }
    changePage =()=>{
        this.props.history.push("/recipes")
    }

    render(){
        const {  id, title, author, prep_time, ingredients,steps } = this.state.recipe
        return(
            <div className='App'>
                <div key = {id } className="card" style={{width:'75rem'}}>
                    <div className="card-body text-center">
                        <h3 className="card-title"><strong>{title}</strong></h3>
                        <h5 className="card-title"><strong>Author:</strong> {author}</h5>
                        <h5 className="card-title"><strong>Prep_time:</strong> {prep_time}</h5>
                        <p className="card-text"><strong>Ingredients:</strong>{ingredients}</p>
                        <p className="card-text"><strong>Steps:</strong>Steps:{steps}</p>
                    </div>
                    <button className='btn' onClick={this.deletePost}>Delete Post</button>
                    <button className='btn'>
                        <Link to = {{
                            pathname: `/recipes/${id}/edit`
                        }}
                        >Edit Post
                        </Link>
                    </button>
                    <button className='btn' onClick={this.changePage}>Back to Home</button>

                </div>
            </div>
        )
    }
}

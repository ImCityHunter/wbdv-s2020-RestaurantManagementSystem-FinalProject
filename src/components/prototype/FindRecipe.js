import React from "react";
import recipeService from "../../service/recipeService";
class FindRecipe extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        meal:'',
        recipe:'',
        foods:[]
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    search = () => {
        recipeService.getRecipe().then(items => this.setState({
            foods: items
        }))
        console.log(this.foods);
    }
    render(){
        return(
            <div className = "container">
                <input
                    placeholder = 'search meal'
                    onChange = {(e)=>{
                    const newMeal = e.target.value;
                    this.setState(
                        {
                            meal:newMeal
                        }
                    )
                }}/>
                <button onClick = {()=> this.search()}> search </button>
                <p> {this.recipe} </p>
            </div>
        )
    }
}
export default FindRecipe
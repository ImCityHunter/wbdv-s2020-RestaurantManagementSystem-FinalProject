import React from "react";
import recipeService from "../../service/recipeService";
class FindRecipe extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        meal:'',
        recipe:'',
        foods:[],
        menu:[{meal:'',recipe:''}]
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.recipe!==this.state.recipe){

        }
    }

    search = async() => {
        await recipeService.getRecipe(this.state.meal).then(items => {
            this.setState( prev => ({
                foods: items.hints
            }))
        })
        this.findRecipe();

    }


    findRecipe = () => {
        let foodContent = ''
        for(let i in this.state.foods){
            let item = this.state.foods[i];
            foodContent = item.food.foodContentsLabel;
            if(foodContent){
                this.setState({
                    recipe:foodContent
                })
                break;
            }
        }
        let newMeal = this.state.meal;
        this.setState(prevState=>({
            menu:[
                ...prevState.menu,
                {meal: newMeal,recipe:foodContent
                }]
        }))
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
                {
                    this.state.menu.map(item=>
                        <div className={"row"}>
                            <div className={"col-3"}>{item.meal}</div>
                            <div className={"col-9"}>{item.recipe}</div>
                        </div>

                    )
                }
            </div>
        )
    }
}
export default FindRecipe
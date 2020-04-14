import React from 'react';

export default class SearchItem extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        mealName:''
    }

    render() {
        return (
            <div>
                <input
                    placeholder = 'search meal'
                    onChange = {(e)=>{
                        const newMeal = e.target.value;
                        this.setState(
                            {
                                mealName:newMeal
                            }
                        )
                    }}/>
                <button onClick = {()=> this.props.searchMeal(this.state.mealName)}> search </button>
            </div>
        );
    }
}

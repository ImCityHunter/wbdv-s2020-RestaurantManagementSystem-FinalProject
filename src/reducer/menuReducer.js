





const menu = [
        { name:'item 1', recipe: 'audi, honda', price: '$15', id: '123'},
        { name:'item 2', recipe: 'coke, sprite', price: '$15', id: '124'},
        { name:'item 3', recipe: 'audi, water', price: '$15', id: '125'},
    ]

const menuReducer = (state={menu:menu}, action) =>{
    switch(action.type){
        case "SHOW_MENU":
            return {
                menu: menu
            }
        case "ADD_ITEM":
        default:
            return state
    }

}

export default menuReducer;

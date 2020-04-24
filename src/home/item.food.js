import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Badge from "@material-ui/core/Badge";
import {useDispatch, useSelector} from "react-redux";
import {addShoppingCart, removeShoppingCart} from "../actions";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        paddingBottom: theme.spacing(0)
    },
    cardChip: {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(1),
    }
}));


export default function ItemFood(props) {
    const history = useHistory()
    const classes = useStyles();
    const {food, imgUrl} = props
    const shoppingCart = useSelector(state => state.shoppingCart)
    const isLogin = useSelector(state => state.isLogin)
    const getCount = useCallback(() => {
        const filtered = shoppingCart.filter(item => item.id === food.id)
        return filtered.length === 0 ? 0 : filtered[0].amount
    }, [shoppingCart])
    const dispatch = useDispatch()
    const handleClick = useCallback((delta) => {
        if (isLogin) {
            const foodToAdd = {
                id: food.id,
                name: food.name,
                price: food.price,
                category: food.category,
                calories: food.calories,
                ingredient: food.ingredient,
                description: food.description,
                restaurant: food.restaurant,
                amount: 1,
                thumb: imgUrl.thumb
            }
            delta === 1 ? dispatch(addShoppingCart(foodToAdd)) : dispatch(removeShoppingCart(foodToAdd))
        } else {
            history.push({
                pathname: "/login",
                state: {isLogin: true}
            }, '/login')
        }
    }, [dispatch, food])

    return (
        <Grid item key={food.id} xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imgUrl.small}
                    title="Image title"/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" noWrap={true}>
                        {food.name}
                    </Typography>
                    <div>
                        {
                            ["ENERC_KCAL", "PROCNT", "FAT", "CHOCOF", "FIBTG"].map((item, index) => {
                                let number = 100
                                if (number) {
                                    number = number.toString()
                                    number = number.substr(0, number.indexOf('.') + 2)
                                } else {
                                    number = "0"
                                }
                                return <Chip key={item} label={item + ": " + number}
                                             className={classes.cardChip} size="small"
                                             color={index % 2 === 0 ? "primary" : 'secondary'} variant="outlined"/>
                            })
                        }
                    </div>
                </CardContent>
                <CardActions>
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleClick(1)}>
                        <Badge badgeContent={getCount()} color="secondary">
                            <AddShoppingCartIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleClick(-1)} aria-label="add to shopping cart"
                                disabled={getCount() === 0}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <FavoriteBorderIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}


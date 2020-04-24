import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSelector} from "react-redux";
import {photoUrls} from "../constants";
import ItemFood from "./item.food";


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
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function ListFood(props) {
    const classes = useStyles()
    const foodList = useSelector(state => state.foodList)
    const getRandomUrl = () => {
        return photoUrls[Math.floor(Math.random() * photoUrls.length)]
    }
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {
                    foodList.map((food, index) => <ItemFood food={food} key={index} imgUrl={getRandomUrl()}/>)
                }
            </Grid>
        </Container>
    )
}

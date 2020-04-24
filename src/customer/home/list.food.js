import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSelector} from "react-redux";
import {photoUrls} from "../../constants";
import ItemFood from "./item.food";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CategoryIcon from '@material-ui/icons/Category';
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        minHeight: '70px'
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
    contentTitleWrapper: {
        width: '100%',
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
    },
    contentTitle: {
        marginBottom: 0,
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    divider: {
        width: "100%",
        margin: 0
    },
    endingWrapper: {
        margin: theme.spacing(2, 1),
        padding: theme.spacing(1, 0)
    }
}));

export default function ListFood(props) {
    const classes = useStyles()
    const foodList = useSelector(state => state.foodList)
    const category = useSelector(state => state.selectedCategory)
    const getRandomUrl = () => {
        return photoUrls[Math.floor(Math.random() * photoUrls.length)]
    }
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <div className={classes.contentTitleWrapper}>
                <CategoryIcon/>
                <Typography variant="h6" gutterBottom className={classes.contentTitle}>
                    {category}
                </Typography>
            </div>
            <Grid container spacing={4}>
                {
                    foodList.filter(item => item.category === category)
                        .map((food, index) => <ItemFood food={food} key={index} imgUrl={getRandomUrl()}/>)
                }
            </Grid>
            <div className={classes.endingWrapper}>
                <Alert severity="success">Happy Ending</Alert>
            </div>
        </Container>
    )
}

import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import Typography from "@material-ui/core/Typography";
import MenuService from "../../service/MenuService";
import InputAdornment from '@material-ui/core/InputAdornment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";


const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
    appBarSpacer: theme.mixins.toolbar,
    button: {
        margin: theme.spacing(1),
    }

}));


export default function MenuItemsList({category, restaurantId}) {
    const classes = useStyles();

    const [mealsList, setMealsList] = React.useState([]);

    useEffect(() => {
        let mounted = true;
        MenuService.getMenuItemsByRestaurantId(restaurantId)
            .then(response => {
                if (mounted)
                setMealsList(response.filter(item => item.category === category))
            });
        return () => mounted = false;
    },[restaurantId, category])

    const [menuItem, setMenuItem] = React.useState({
        id: '',
        name: '',
        price: '',
        category: category,
        calories: '',
        ingredient: '',
        description: '',
        img: '',
        restaurant: {
            id: 1
        }
    })

    const handleMenuItemChange = (event) => {
        setMenuItem({
            ...menuItem, [event.target.name]: event.target.value
        })
    }

    const [searchName, setSearchName] = React.useState('');
    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value);
    };

    const [editing, setEditing] = React.useState(false)

    const searchItem = (itemName) => {
        if (itemName) {
            MenuService.getRecipe(itemName)
                .then(results => {
                    if (results) {
                        setMenuItem({
                            ...menuItem,
                            name: results.hints[0].food.label,
                            calories: ((results.hints[0].food.nutrients.ENERC_KCAL)?results.hints[0].food.nutrients.ENERC_KCAL: 0).toFixed(2).toString(),
                            ingredient: (results.hints[0].food.foodContentsLabel)?results.hints[0].food.foodContentsLabel: ''
                        });
                    }
                })
        } else alert("Please enter a valid item name!")
    }

    const addItem = (menuItem) => {
        if (menuItem.name) {
            MenuService.createMenuItem(menuItem)
                .then(() => MenuService.getMenuItemsByRestaurantId(restaurantId))
                .then(response => {
                    setMealsList(response.filter(item => item.category === category))
                }).then(() => {
                    clearForm();
                    setEditing(false);
                })
        }
    }

    const updateItem = (menuItem) =>
        MenuService.updateMenuItem(menuItem.id, menuItem)
            .then(() => MenuService.getMenuItemsByRestaurantId(restaurantId))
            .then(response => {
                setMealsList(response.filter(item => item.category === category))
            }).then(() => {
            clearForm();
            setEditing(false);
        })

    const deleteItem = (itemId) =>
        MenuService.deleteMenuItem(itemId)
            .then(() => MenuService.getMenuItemsByRestaurantId(restaurantId))
            .then(response => {
                setMealsList(response.filter(item => item.category === category))
            })


    const editItem = (item) => {
        setEditing(true);
        setMenuItem({
            ...menuItem,
            id: item.id,
            name: item.name,
            price: item.price,
            calories: item.calories,
            ingredient: item.ingredient,
            description: item.description,
            img: item.img
        })
    }

    const clearForm = () => {
        setMenuItem({
            ...menuItem,
            name: '',
            price: '',
            calories: '',
            ingredient: '',
            description: '',
            img: ''
        })
    }

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <Container className={classes.container}>
            <div>
                <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullScreen={true}
                    maxWidth={'sm'}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Select Online Recipe</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell align="right">Ingredient</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                    </TableRow>
                                </TableHead>

                            </Table>
                        </TableContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Select
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>



            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Typography variant="h5">
                        Search Online Database :
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Item Name" onChange={handleSearchNameChange} />
                </Grid>
                <Grid item>
                    <Tooltip title="Search" placement="right">
                        <SearchIcon onClick={()=>searchItem(searchName)}/>
                    </Tooltip>
                </Grid>
            </Grid>
            <div className={classes.appBarSpacer} />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="itemName"
                        name="name"
                        label="Item Name"
                        value={menuItem.name}
                        onChange={handleMenuItemChange}
                        fullWidth
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="unitPrice"
                        name="price"
                        label="Unit Price"
                        value={menuItem.price}
                        onChange={handleMenuItemChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        fullWidth

                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="category"
                        name="category"
                        label="Category"
                        value={menuItem.category}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="calories"
                        name="calories"
                        label="Calories"
                        value={menuItem.calories}
                        onChange={handleMenuItemChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kcal</InputAdornment>,

                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="ingredient"
                        name="ingredient"
                        label="Ingredient"
                        value={menuItem.ingredient}
                        onChange={handleMenuItemChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        value={menuItem.description}
                        onChange={handleMenuItemChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="foodPhoto"
                        name="img"
                        label="Food Photo"
                        value={menuItem.img}
                        onChange={handleMenuItemChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">URL:</InputAdornment>,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        {!editing &&<Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            size="large"
                            startIcon={<AddIcon />}
                            onClick={()=>addItem(menuItem)}
                        >
                            Add Item
                        </Button>}
                        {editing &&<Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            size="large"
                            startIcon={<SaveIcon />}
                            onClick={()=>updateItem(menuItem)}

                            // onClick={()=>addItem(1, itemName, unitPrice, menuCat, calories, ingredient, description)}
                        >
                            Update Item
                        </Button>}
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            size="large"
                            startIcon={<ClearIcon />}
                            onClick={clearForm}
                        >
                            Clear
                        </Button>

                    </div>
                </Grid>
            </Grid>

            <div className={classes.appBarSpacer} />

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Id</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Unit Price</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Ingredient</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealsList.map(meal => (
                            <TableRow key={meal.id}>
                                <TableCell component="th" scope="row">
                                    {meal.id}
                                </TableCell>
                                <TableCell align="center">{meal.name}</TableCell>
                                <TableCell align="center">{meal.price}</TableCell>
                                <TableCell align="center">{meal.category}</TableCell>
                                <TableCell align="center">{meal.calories}</TableCell>
                                <TableCell align="center">{meal.ingredient}</TableCell>
                                <TableCell align="center">{meal.description}</TableCell>
                                <TableCell align="center">
                                    <EditIcon className={classes.button} fontSize="small" color="primary" onClick={() => editItem(meal)} />
                                    <DeleteIcon className={classes.button} fontSize="small" color="secondary" onClick={() => deleteItem(meal.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
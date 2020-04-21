import React from 'react';
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
import RecipeService from "../../service/RecipeService";
import InputAdornment from '@material-ui/core/InputAdornment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


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

function createData(itemId, itemName, unitPrice, category, calories, ingredient, description) {
    return { itemId, itemName, unitPrice, category, calories, ingredient, description };
}

export default function MenuItemsList({category}) {

    const classes = useStyles();

    const menuCat = category;

    const [rows, setRows] = React.useState([createData('1001', 'Broccoli', 8.99, 'Sides', 12, 'Broccoli', 'Steamed')]);

    const [searchName, setSearchName] = React.useState('');
    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value);
    };

    const [ingredient, setIngredient] = React.useState('');
    const handleIngredientChange = (event) => {
        setIngredient(event.target.value);
    };

    const [itemName, setItemName] = React.useState('');
    const handleItemNameChange = (event) => {
        setItemName(event.target.value);
    };

    const [calories, setCalories] = React.useState('');
    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
    };

    const [unitPrice, setUnitPrice] = React.useState('');
    const handleUnitPriceChange = (event) => {
        setUnitPrice(event.target.value);
    }

    const [description, setDescription] = React.useState('');
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    // const [mealsList, setMealsList] = React.useState([]);
    // const handleMealsListChange = (event) => {
    //     setMealsList(event.target.value);
    // }


    const searchItem = (itemName) => {
        RecipeService.getRecipe(itemName)
            .then(results => {
                console.log(results)
                setItemName(results.hints[0].food.label);
                setIngredient((results.hints[0].food.foodContentsLabel)?results.hints[0].food.foodContentsLabel: '');
                setCalories(((results.hints[0].food.nutrients.ENERC_KCAL)?results.hints[0].food.nutrients.ENERC_KCAL: 0).toFixed(2));

            })
            // .then(results => results.hints.map(item =>
            //     mealsList.push({
            //         itemId: item.food.foodId,
            //         itemName: item.food.label,
            //         ingredient: (item.food.foodContentsLabel)?item.food.foodContentsLabel: '',
            //         calories: (item.food.nutrients.ENERC_KCAL)?item.food.nutrients.ENERC_KCAL: '',
            //     }) )
            // ).then(r => console.log(mealsList))
    }

    const addItem = (itemId, itemName, unitPrice, category, calories, ingredient, description) => {
        if (itemName) {
            setRows([...rows,
                createData(itemId, itemName, unitPrice, category, calories, ingredient, description)])
            clearForm();
        }
    }

    const editItem = (item) => {
        setItemName(item.itemName);
        setUnitPrice(item.unitPrice);
        setCalories(item.calories);
        setIngredient(item.ingredient);
        setDescription(item.description);
    }

    const clearForm = () => {
        setItemName('');
        setUnitPrice('');
        setCalories('');
        setIngredient('');
        setDescription('');
    }

    return (
        <Container className={classes.container}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <Typography variant="h5">
                        Search Item :
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Item Name" onChange={handleSearchNameChange} />
                </Grid>
                <Grid item>
                    <SearchIcon onClick={()=>searchItem(searchName)}/>
                </Grid>
            </Grid>
            <div className={classes.appBarSpacer} />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="itemName"
                        name="itemName"
                        label="Item Name"
                        value={itemName}
                        onChange={handleItemNameChange}
                        fullWidth
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="unitPrice"
                        name="unitPrice"
                        label="Unit Price"
                        value={unitPrice}
                        onChange={handleUnitPriceChange}
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
                        value={menuCat}
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
                        value={calories}
                        onChange={handleCaloriesChange}
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
                        value={ingredient}
                        onChange={handleIngredientChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            size="large"
                            startIcon={<SaveIcon />}
                            onClick={()=>addItem(1, itemName, unitPrice, menuCat, calories, ingredient, description)}
                        >
                            Save
                        </Button>
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
                        {rows.map((row) => (
                            <TableRow key={row.itemId}>
                                <TableCell component="th" scope="row">
                                    {row.itemId}
                                </TableCell>
                                <TableCell align="center">{row.itemName}</TableCell>
                                <TableCell align="center">{row.unitPrice}</TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.ingredient}</TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                                <TableCell align="center">
                                    <EditIcon className={classes.button} fontSize="small" color="primary" onClick={() => editItem(row)} />
                                    <DeleteIcon className={classes.button} fontSize="small" color="secondary" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
import React, {useCallback, useState} from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CategoryIcon from "@material-ui/icons/Category";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {categories} from '../constants'

const useStyles = makeStyles(theme => ({
    rightPanelWhenSM: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    contentTitleWrapper: {
        width: '100%',
        // padding: theme.spacing(1, 2),
        display: 'flex',
        alignItems: 'center',
    },
    contentTitle: {
        marginBottom: 0,
        fontWeight: 'bold',
        paddingLeft: theme.spacing(2)
    },
    categoryList: {
        width: '100%'
    },
    itemText: {
        marginLeft: theme.spacing(4)
    }
}))

export default function LeftPanelWhenSM(props) {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [expanded, setExpanded] = useState(false)
    const handleChange = useCallback((status) => {
        setExpanded(status)
    }, [setExpanded])

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
        handleChange(false)
    }, [handleChange])


    return <div className={classes.rightPanelWhenSM}>
        <ExpansionPanel expanded={expanded} onChange={() => handleChange(!expanded)}>
            <ExpansionPanelSummary
                className={classes.contentTitleWrapper}
                expandIcon={<ExpandMoreIcon/>}
                id="panel1a-header">
                <CategoryIcon/>
                <Typography variant="h6" gutterBottom className={classes.contentTitle}>
                    Category
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List component="nav" className={classes.categoryList}>
                    {
                        categories.map(category => {
                            return <ListItem button key={category.id} selected={selectedIndex === category.id}
                                             onClick={(event) => handleListItemClick(event, category.id)}>
                                <ListItemIcon>
                                    <Avatar src={category.src} className={classes.iconLarge}/>
                                </ListItemIcon>
                                <ListItemText primary={category.name} className={classes.itemText}/>
                            </ListItem>
                        })
                    }
                </List>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
}

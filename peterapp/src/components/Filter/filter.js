import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Auto from "./subfilter"
import Box from '@material-ui/core/Box';
import './filterbutton.css';

//data Exports

const ageRange = require('./data/db').ageRange
const gender = require('./data/db').gender
const breeds = require('./data/db').breeds
const cities = require('./data/db').cities
const priceRange = require('./data/db').priceRange

const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
}));

export default function ControlledOpenSelect(props) {
    const classes = useStyles();
    const setAge = React.useState('');
    const setOpen = React.useState(false);

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const defaultProps = {
        borderColor: 'inherit',
        m: 1,
        bgcolor: "#EEEEEE",
        style: { width: '20rem', height: '20.5rem' },
    };

    return (
        <div>
            <Button className={classes.button} onClick={handleOpen}>
               Filter
      </Button>
            <Box display='flex' justifyContent="left">
                <Box borderRadius="borderRadius" {...defaultProps} >
                    <Auto name={ageRange} label="Age Category" />
                    <Auto name={gender} label="Gender" />
                    <Auto name={breeds} label="Breed" />
                    <Auto name={cities} label="City" />
                    <Auto name={priceRange} label="Range of Price" />
                </Box>
            </Box>
            <span className='submitButton'>
            <Button variant="contained" color="secondary" className='filterbutton'>
                        Accept
            </Button>
            </span>

        </div>
    );
}


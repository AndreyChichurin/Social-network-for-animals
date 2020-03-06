import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function Auto(props) {
  const classes = useStyles();
  const setAge = React.useState('');
  const setOpen = React.useState(false);

  return (
    <div>
      <Autocomplete className={classes.formControl}
        options={props.name}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => <TextField {...params} label={props.label} variant="outlined" />}
      />
    </div>
  )
}
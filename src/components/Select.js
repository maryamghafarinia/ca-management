import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    float: 'left'
  },
}));

const Selector = ({ placeHolder , onChange , selectList}) => {
  const classes = useStyles();
  const [select, setSelector] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelector(event.target.value);
    onChange(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl  className={classes.formControl}>
        <InputLabel>{placeHolder}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={select}
          onChange={handleChange}
        >
        {selectList.map((selectItem, index) => ( 
          <MenuItem key={index} value={selectItem}>{selectItem}</MenuItem> 
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Selector;
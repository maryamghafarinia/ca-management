import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    margin: '10px'
  },
});

const Car = ({car}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={car.pictureUrl}
          title={car.modelName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          {car.manufacturerName} - {car.modelName}
          </Typography>
          <Typography className="car" variant="body2" color="textSecondary" component="p">
                <strong>Model Name: </strong>{car.modelName}<br/>
                <strong>Manufacture Name: </strong>{car.manufacturerName}<br/>
                <strong>Color: </strong>{car.color}<br/>
                <strong>Fuel Type: </strong>{car.fuelType}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Car
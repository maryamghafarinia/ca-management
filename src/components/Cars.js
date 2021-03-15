import { useState , useEffect} from 'react'
import { FaRegHeart ,FaEdit } from 'react-icons/fa'
import Pagination from './Paging'
import Colors from './Colors'
import Manufacturers from './Manufacturers'
import { Table, TableBody, TableHead , TableRow, TableContainer , TableCell} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const Cars = ({onToggle , onOpen}) => {
  const [cars, setCars] = useState([]);
  const [index, setActiveStep] = useState(0); 
  const [color, setColor] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const onColorChange = (color) => {
      setColor(color);
  }

  const onManufacturerChange = (manufacturer) => {
    setManufacturer(manufacturer);
  }

  // Pagination
  const forwardButton = () => { 
    setActiveStep((prevActiveStep) => prevActiveStep - 1 ); 
  }; 
  
  // Pagination
  const previousButton = () => { 
    setActiveStep((prevActiveStep) => prevActiveStep + 1 ); 
  }; 

  let TOTAL_ITEMS = 0;

  // Fetch Cars
  const fetchCars = async () => {
    const url = 'https://auto1-mock-server.herokuapp.com/api/cars?' +
                (manufacturer ? `manufacturer=${manufacturer}&` : '') + 
                (color ? `color=${color}&` : '') +
                `sort=asc&page=${index + 1}`;
    const res = await fetch(url);
    const data = await res.json()
    TOTAL_ITEMS = data.totalCarsCount
   
    return data.cars;
  }

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCars()
  }, [index, color, manufacturer])

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <>
     {cars.length > 0 ? (
      <div>
        <Manufacturers onChange={onManufacturerChange}/>
        <Colors  onChange ={onColorChange}/>
        <TableContainer component={Paper}>
      
    
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Manufacture Name</TableCell>
              <TableCell>Model Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car, index) => ( 
              <TableRow key={index} data-testid="cars">
              <TableCell>{car.modelName}</TableCell>
              <TableCell>{car.manufacturerName}</TableCell>
              <TableCell><span class="dot"  style={{ backgroundColor: `${car.color}`}}></span></TableCell>
              <TableCell>
                <h3>
                <FaEdit
                  style={{ cursor: 'pointer' , marginRight: '10px'}}
                  onClick={() => onOpen(car)}
                />

                <FaRegHeart
                  style={{ cursor: 'pointer' }}
                  onClick={() => onToggle(car)}
                />
                </h3>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination 
          index= {index} 
          totalItems= {TOTAL_ITEMS}
          onForwardButton = {forwardButton}
          onPreviousButton = {previousButton}
        />
        </TableContainer>
        </div>
        ) : (
          'No Cars To Show'
        )}
    </>
  )
}

export default Cars

import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cars from './components/Cars'
import Car from './components/Car'
import About from './components/About'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const App = () => {

  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({});

  // Toggle
  const toggleFavorite = async (car) => {

  }
  
  const onClose = () => {
    setOpen(false);
  };

  const handleClickOpen = async (car) => {
    setCar(car);
    setOpen(true);
  };
  
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <Cars onToggle={toggleFavorite}  onOpen={handleClickOpen} />
            </>
          )}
        />
      
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Car Details</DialogTitle>
        <DialogContent>
          <Car car={car}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
        </Dialog>
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App

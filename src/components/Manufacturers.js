import Selector from './Select'
import { useState , useEffect } from 'react'

const Manufacturers = ({ onChange }) => {

  const [manufacturers, setManufacturers] = useState([]);
  
  useEffect(() => {
    const getManufacturers = async () => {
      const manufacturersFromServer = await fetchManufacturers()
      setManufacturers(manufacturersFromServer)
    }

    getManufacturers()
  }, [])

 
  // Fetch Manufacturers
  const fetchManufacturers = async () => {
    const res = await fetch('https://auto1-mock-server.herokuapp.com/api/manufacturers')
    const data = await res.json()
    return data.manufacturers.map(Manufacturer => Manufacturer.name);
  }

  return (
    <Selector  placeHolder='Manufacturer' onChange={onChange}  selectList={manufacturers} />
  )
}


export default Manufacturers

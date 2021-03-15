import Selector from './Select'
import { useState , useEffect } from 'react'

const Colors = ({ onChange }) => {

  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const getColors = async () => {
      const colorsFromServer = await fetchColors()
      setColors(colorsFromServer)
    }

    getColors()
  }, [])

  
  // Fetch Colors
  const fetchColors = async () => {
    const res = await fetch('https://auto1-mock-server.herokuapp.com/api/colors')
    const data = await res.json()
    return data.colors;
  }

  return (
    <Selector  placeHolder='Color' onChange={onChange}  selectList={colors} />
  )
}


export default Colors

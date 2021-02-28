import { useEffect, useState } from 'react';
import './App.css';
import Cards from './componensts/Card/Cards';


import Country from './componensts/Country/Country';

function App() {
 const [countries,setCountries] = useState([])
 const [cart,setcart] = useState([])
 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res=>res.json())
   .then(data=>setCountries(data))
   .catch(error=>console.log(error))
 },[])
//  console.log(countries)
const handleAddedCountry=((props)=>{
  const newCart=[...cart,props]
  setcart(newCart)
})

  return (
    <div>
      <Cards cart={cart}></Cards>
      <h1>Country : {countries.length}</h1>
          {countries.map(country=><Country country={country} key={country.alpha3Code} handleAddedCountry={handleAddedCountry}></Country>)}

    </div>
  );
}

export default App;

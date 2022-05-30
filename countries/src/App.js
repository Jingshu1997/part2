import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [ searchFilter,setSearchFiler ] = useState('')
  const [ countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get("https://restcountries.com/v2/all").then((res) => {

        setCountries(res.data)
      })
  }, [])

  const filteredCountries =countries.filter ( country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))



  return (

    <div>
      find countries <input value={searchFilter} onChange={e => setSearchFiler(e.target.value)}/>
      <ShowResults filteredCountries = {filteredCountries}/>
      <showWeather filteredCountries={filteredCountries}/>
      {filteredCountries.map(country => <div key ={country.name}>{country.name}</div>)}
   
    </div>
   
  )

}

const ShowResults =({filteredCountries})=>{
  if(filteredCountries.length === 1){
    const country =filteredCountries[0]
    return (
      <div>
        <h1>{country.name}</h1>
       <p> capital {country.capital}</p>
       <p> population{country.population}</p>
       <h2>languages</h2>
       <div>
         <ul>{country.languages.map(language => <li>{language.name}</li>)}</ul>
       <img src={country.flag} ></img>
       </div>


      </div>
    )
  }
  if (filteredCountries.length > 10) return <div>Too many matches, specify another filter </div>
  return filteredCountries.map(country => <div key ={country.name}>{country.name}<button>show</button></div>)}

const showWeather=({filteredCountries})=>{

return (
  <h1>weather</h1>
  
)
 

}

export default App
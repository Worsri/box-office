import {useState} from 'react'

const SearchForm = ({onSearch}) =>{

  const [searchOption,setSearchOption] = useState('shows')
  const [searchStr,setSearchStr]= useState('')
  
  const onRadioChange = ev =>{
    setSearchOption(ev.target.value)
  }

  const onSearchInputChange=(ev)=>{
    setSearchStr(ev.target.value)

  }
  
  
  const onSubmit= (ev)=>{
   ev.preventDefault()
   
   const options={
    q:searchStr,
    searchOption
   };

   onSearch(options)
  }
  

  return(
     <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange}/>
      <label >
        
        <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange}/>shows
        </label>
        <label >
        
        <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange}/>actors
        </label>
      <button type="submit">Search</button>
     
      </form> 
  )
}

export default SearchForm;
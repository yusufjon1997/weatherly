import React from 'react';
import searchIcon from '../../assets/icons/search.svg';
import './style.css'

type SearchBarType = {
  query : {
    q : string
  },
  setQuery : any
}



const Searchbar = ({ query , setQuery} : SearchBarType) => {
  
  const inputRef = React.createRef<HTMLInputElement>();

  const onClickHandler = () => {
      setQuery({
        q : inputRef.current?.value
      });
      
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
      if(e.key == 'Enter') {
        setQuery({
          q : inputRef.current?.value
        });
      }
  }

  return (
    <div className='searchbar'>
      <div>
        <h4 className='text-center'>Type your city</h4>
        <div className='d-flex align-items-center'>
          <input type='text' placeholder='city name' ref={inputRef} onKeyPress={handleKeyPress} />  
          <div className='search-icon' onClick={onClickHandler}>
            <img src={searchIcon} width='24px' height='24px' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar

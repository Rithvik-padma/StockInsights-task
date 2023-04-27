import React, {useRef} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';

const SearchStocks = () => {
  const searchStocks = useRef(null)
  const clearSearch = () => searchStocks.current.value = ""
 
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <TextField 
      inputRef={searchStocks}
      id='outline-basic' 
      label="Search Stocks" 
      variant='outlined' 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className='pr-0'>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" className='pl-0' >
            <CloseIcon fontSize='small' className='cursor-pointer' onClick={clearSearch}/>
          </InputAdornment>
        )
      }}/>
    </Box>
  )
}

export default SearchStocks

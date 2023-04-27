import React,{ useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import SearchStocks from './SearchStocks'

const SelectStocks = () => {
  const [toggleStocks, setToggleStocks] = useState(false)
  const [checked, setChecked] = useState([]);

  const stocksList = ["Q2 FY23", "Q1 FY23", "Q4 FY22", "Q3 FY22", "Q2 FY22", "Q1 FY22"]

  const toggleStocksDropdown =()=>setToggleStocks(!toggleStocks)  
  const toggleSelectStock = (stock) => {
    let newChecked = [...checked]
    if(checked.indexOf(stock) === -1){
      newChecked.push(stock)
    }
    else{
      newChecked = newChecked.filter((value) => value !== stock)
    }
    setChecked(newChecked)
  }
  const closeDropdown = () => setToggleStocks(false)

  return (
    <div className='relative'>
      <button className={`w-56 my-2 bg-gray-200 text-gray-600 font-semimedium p-1 pl-0 rounded-md flex flex-row justify-between items-center ${toggleStocks && "border border-solid border-gray-400"}`} onClick={toggleStocksDropdown}>
        <span className='px-3 font-medium'>Select Stocks</span>
        {toggleStocks ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {toggleStocks &&
        (
        <ClickAwayListener onClickAway={() => closeDropdown()}>
          <List className='!absolute z-50 rounded-sm bg-white w-full top-11 shadow-md'>
            <SearchStocks/>
            <div>
              {stocksList.map((stock, index) => {
              return(
              <ListItem className='h-10' key={index} disablePadding>
                <ListItemButton role={undefined} onClick={() => toggleSelectStock(stock)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(stock) !== -1}
                      tabIndex={-1}
                      className='transform scale-90'
                    />
                  </ListItemIcon>
                  <ListItemText id={index} primary={stock} />
                </ListItemButton>
              </ListItem>
              )})}
            </div>
          </List>
        </ClickAwayListener>
        )
      }
    </div>
  )
}

export default SelectStocks

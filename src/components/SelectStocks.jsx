import React,{ useState, useEffect, useCallback } from 'react'
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

const SelectStocks = ({stockFilters, changeStockFilters}) => {
  const stocksList = [
    "RELIANCE INDUSTRIES LTD.",
    "TATA CONSULTANCY SERVICES LTD.",
    "HDFC Bank Ltd",
    "ICICI BANK LTD.",
    "HINDUSTAN UNILEVER LTD.",
    "INFOSYS LTD.",
    "ITC LTD.",
    "HOUSING DEVELOPMENT FINANCE CORP.LTD.",
    "STATE BANK OF INDIA",
    "BHARTI AIRTEL LTD.",
    "KOTAK MAHINDRA BANK LTD.",
    "Bajaj Finance Limited",
    "Life Insurance Corporation of India",
    "LARSEN & TOUBRO LTD.",
    "HCL TECHNOLOGIES LTD.",
    "ASIAN PAINTS LTD.",
    "AXIS BANK LTD.",
    "MARUTI SUZUKI INDIA LTD."
  ]
  const [toggleStocks, setToggleStocks] = useState(false)
  const [checked, setChecked] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState(stocksList)
  useEffect(() => changeStockFilters(checked), [checked])
  useEffect(() => {
    setChecked(stockFilters);
  }, [stockFilters, setChecked]);

  if (React.unstable_handleError) {
    React.unstable_handleError(new Error('Disable "Maximum update depth exceeded" error'))
  }

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
  const handleFilter = (value) => {
    const searchValue = value.toLowerCase()
    if(searchValue){
      setFilteredStocks(stocksList.filter((value) => value.toLowerCase().includes(searchValue)))
    }
    else{
      setFilteredStocks(stocksList)
    }
  }

  return (
    <div className='relative'>
      <button className={`w-64 my-2 bg-gray-200 text-gray-600 font-semimedium p-1 pl-0 rounded-md flex flex-row justify-between items-center ${toggleStocks && "border border-solid border-gray-400"}`} onClick={toggleStocksDropdown}>
        <span className='px-3 font-medium'>Select Stocks</span>
        {toggleStocks ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {toggleStocks &&
        (
        <ClickAwayListener onClickAway={() => closeDropdown()}>
          <List className='!absolute z-50 rounded-sm bg-white w-full top-11 shadow-md'>
            <SearchStocks handleFilter={handleFilter}/> 
            <div className='scrollbar-container overflow-y-auto max-h-80 scrollbar-thumb-gray-500 scrollbar-track-gray-300'>
              {filteredStocks.map((stock, index) => {
              return(
              <ListItem key={index} disablePadding>
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

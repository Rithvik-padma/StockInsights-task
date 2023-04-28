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

const SelectTime = ({timeFilters, changeTimeFilters}) => {
  const [toggleTime, setToggleTime] = useState(false)
  const [checked, setChecked] = useState([]);
  useEffect(() => changeTimeFilters(checked), [checked])
  useEffect(() => {
    setChecked(timeFilters);
  }, [timeFilters]);

  if (React.unstable_handleError) {
    React.unstable_handleError(new Error('Disable "Maximum update depth exceeded" error'))
  }

  const timeList = ["Q2 FY23", "Q1 FY23", "Q4 FY22", "Q3 FY22", "Q2 FY22", "Q1 FY22"]

  const toggleTimeDropdown =()=>setToggleTime(!toggleTime)  
  const toggleSelectTime = (time) => {
    let newChecked = [...checked]
    if(checked.indexOf(time) === -1){
      newChecked.push(time)
    }
    else{
      newChecked = newChecked.filter((value) => value !== time)
    }
    setChecked(newChecked)
  }
  const closeDropdown = () => setToggleTime(false)

  return (
    <div className='relative'>
      <button className={`w-40 my-2 bg-gray-200 text-gray-600 font-semimedium p-1 pl-0 rounded-md flex flex-row justify-between items-center ${toggleTime && "border border-solid border-gray-400"}`} onClick={toggleTimeDropdown}>
        <span className='px-3 font-medium'>Select Time</span>
        {toggleTime ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {toggleTime &&
        (
          <ClickAwayListener onClickAway={() => closeDropdown()}>
            <List className='!absolute z-50 rounded-md bg-white w-full top-11 shadow-md'>
              {timeList.map((time, index) => {
              return(
              <ListItem className='h-10' key={index} disablePadding>
                <ListItemButton role={undefined} onClick={() => toggleSelectTime(time)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(time) !== -1}
                      tabIndex={-1}
                      className='transform scale-90'
                    />
                  </ListItemIcon>
                  <ListItemText id={index} primary={time} />
                </ListItemButton>
              </ListItem>
              )})}
            </List>
          </ClickAwayListener>
        )
      }
    </div>
  )
}

export default SelectTime

import React,{ useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const SelectTime = () => {
  const [toggleTime, setToggleTime] = useState(false)
  const [checked, setChecked] = useState([]);

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

  return (
    <div className='relative'>
      <button className={`w-40 my-2 bg-gray-200 text-gray-600 font-semimedium p-1 pl-0 rounded-md flex flex-row justify-between items-center ${toggleTime && "border border-solid border-gray-400"}`} onClick={toggleTimeDropdown}>
        <span className='px-3 font-medium'>{checked.length > 0 ? "Time selected" : "Select Time" }</span>
        {toggleTime ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {toggleTime &&
        (<List className='!absolute rounded-sm bg-white w-full top-11 shadow-md'>
          {timeList.map((time, index) => {
          return(
          <ListItem key={index} disablePadding>
            <ListItemButton role={undefined} onClick={() => toggleSelectTime(time)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(time) !== -1}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={time} />
            </ListItemButton>
          </ListItem>
          )})}
        </List>)
      }
    </div>
  )
}

export default SelectTime

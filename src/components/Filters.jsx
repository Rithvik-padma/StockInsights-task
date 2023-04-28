import React from 'react'
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Filters = ({timeFilters, stockFilters, modifyTimeFilters, modifyStockFilters, clearAllFilters}) => {
  return (
    <div className='flex flex-col gap-3'>
      <div id='timeFilters' className='flex gap-2 flex-wrap'>
        {timeFilters.map((value) => {
            return(
                <Chip 
                    icon={<AccessTimeIcon />}
                    key={value}
                    label={value}
                    variant = 'outlined'
                    color='primary' 
                    onClick={() => modifyTimeFilters(value)}
                    onDelete={() => modifyTimeFilters(value)}
                />
            )
        })}
      </div>
      <div id='stockFilters' className='flex gap-2 flex-wrap'>
      {stockFilters.map((value) => {
            return(
                <Chip 
                    icon={<ShowChartIcon />}
                    key={value}
                    label={value}
                    variant = 'outlined'
                    color='success' 
                    onClick={() => modifyStockFilters(value)}
                    onDelete={() => modifyStockFilters(value)}
                />
            )
        })}
      </div>
      {(timeFilters.length || stockFilters.length) ? <Chip
        label="Clear All"
        variant = 'outlined'
        color='error'
        onDelete={() => clearAllFilters()}
        className='w-fit'
      />: ""}
    </div>
  )
}

export default Filters

import React, {useState} from 'react';
import SelectTime from './components/SelectTime';
import SelectStocks from './components/SelectStocks';
import AskQuestion from './components/AskQuestion';
import Filters from './components/Filters'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

function App() {

  const [showFilters, setShowFilters] = useState(false)
  const [timeFilters, setTimeFilters] = useState([])
  const [stockFilters, setStockFilters] = useState([])

  const handleFilters = () => setShowFilters(true)
  const changeTimeFilters = (filters) => setTimeFilters(filters)
  const changeStockFilters = (filters) => setStockFilters(filters)
  const modifyTimeFilters = (deletedTime) => setTimeFilters(timeFilters.filter(value => value !== deletedTime))
  const modifyStockFilters = (deletedStock) => setStockFilters(stockFilters.filter(value => value !== deletedStock)) 
  const clearAllFilters = () => {
    setTimeFilters([])
    setStockFilters([])
  }

  return (
    <div className="App w-full flex justify-center items-center">
      <div className='max-w-3/4 mt-20 flex flex-col justify-center items-start gap-2'>
        <h1 className='text-2xl font-bold'>Welcome to EquityGPT!</h1>
        <p className='text-lg font-medium'>You can now ask questions to search through the Earnings Calls Transcripts!</p>
        <div className='flex flex-row justify-start items-center gap-10 h-12'>
          <Button variant='outlined' className='!text-gray-700 !border-gray-700 hover:scale-95' onClick={handleFilters}>
            <span className='leading-6'>Filters</span> 
            <FilterAltIcon />
          </Button>
          {showFilters &&
          <>
            <SelectTime 
              timeFilters={timeFilters}
              changeTimeFilters={changeTimeFilters}
            />
            <SelectStocks
              stockFilters={stockFilters}
              changeStockFilters={changeStockFilters}
            />
          </>
          }
        </div>
        <Filters
          timeFilters={timeFilters}
          stockFilters={stockFilters}
          modifyTimeFilters={modifyTimeFilters}
          modifyStockFilters={modifyStockFilters}
          clearAllFilters={clearAllFilters}
        />
        <AskQuestion />
      </div>
    </div>
  );
}

export default App;

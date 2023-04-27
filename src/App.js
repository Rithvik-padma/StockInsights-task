import React, {useState} from 'react';
import SelectTime from './components/SelectTime';
import SelectStocks from './components/SelectStocks';
import AskQuestion from './components/AskQuestion';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

function App() {

  const [showFilters, setShowFilters] = useState(false)

  const handleFilters = () => setShowFilters(true)

  return (
    <div className="App w-full flex justify-center items-center">
      <div className='mt-20 flex flex-col justify-center items-start gap-2'>
        <h1 className='text-2xl font-bold'>Welcome to EquityGPT!</h1>
        <p className='text-lg font-medium'>You can now ask questions to search through the Earnings Calls Transcripts!</p>
        <div className='flex flex-row justify-start items-center gap-10 h-12'>
          <Button variant='outlined' className='!text-gray-700 !border-gray-700 hover:scale-95' onClick={handleFilters}>
            <span className='leading-6'>Filters</span> 
            <FilterAltIcon />
          </Button>
          {showFilters &&
          <>
            <SelectTime />
            <SelectStocks />
          </>
          }
        </div>
        <AskQuestion />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import SelectTime from './components/SelectTime';
import SelectStocks from './components/SelectStocks';
import AskQuestion from './components/AskQuestion';

function App() {
  return (
    <div className="App w-full flex justify-center items-center">
      <div className='mt-20 flex flex-col justify-center items-start gap-2'>
        <h1 className='text-2xl font-bold'>Welcome to EquityGPT!</h1>
        <p className='text-md font-medium'>You can now ask questions to search through the Earnings Calls Transcripts!</p>
        <div className='flex flex-row justify-start items-center gap-16'>
          <span className='text-lg '>Filters:</span>
          <SelectTime />
          <SelectStocks />
        </div>
        <AskQuestion />
      </div>
    </div>
  );
}

export default App;

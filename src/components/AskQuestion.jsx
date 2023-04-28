import React, {useState, useRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const AskQuestion = () => {

  const [close, setClose] = useState(false)
  const [question, setQuestion] = useState("")
  const askQuestion = useRef(null)

  const handleClose = (value) => {
    if(value !== ""){
      setClose(true)
    }
    else{
      setClose(false)
    }
  }


  return (
    <div className='w-full flex flex-row items-center gap-4'>
      <div className='w-full flex flex-row items-center relative'>
        <SearchIcon
          className='absolute ml-2 text-gray-500'
        />
        <input 
          ref={askQuestion}
          type="text"
          placeholder="Ask a question..." 
          className='w-full border-2 border-gray-500 rounded-lg p-2 focus:outline-none focus:border-gray-700 pl-10 text-gray-600'
          onInput={(e) => {
            setQuestion(e.target.value)
            handleClose(e.target.value)
          }}
        />
        <CloseIcon
          className={`absolute right-2 text-gray-500 cursor-pointer ${close ? "!block" : "!hidden"}`}
          onClick={() => {
            askQuestion.current.value = ""
            setQuestion("")
            setClose(false)
        }}
        />
      </div>
      <Button variant="contained" >
        <span>Search</span>
      </Button>
    </div>
    
  )
}

export default AskQuestion

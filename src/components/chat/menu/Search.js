import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = ({ setText }) => {
    return (
        <div className='field h-[40px] px-2 bg-white text-xs'>
            <div className="flex h-full items-center">
                <div className="cover bg-slate-100 h-[70%] w-[100%] rounded-md py-2 flex items-center px-2">
                    <div className='px-2 mr-4 text-gray-500'>
                        <SearchIcon />
                    </div>
                    <div className=''>
                        <InputBase
                            placeholder='Search or start a new chart'
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
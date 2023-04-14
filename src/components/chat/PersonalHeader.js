import { React, useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

const PersonalHeader = ({ person }) => {
    const { activeUsers } = useContext(AccountContext);
    return (
        <div className='h-[55px] bg-slate-100 py-2 px-3 flex '>
            <div>
                <img className='w-10 rounded-full mr-4' src={person.picture} alt="#" />
            </div>
            <div className='relative'>
                <p className=''>{person.name}</p>
                <p className='text-xs text-gray-500 absolute left-0'>{activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline"}</p>
            </div>
            <div className='ml-auto'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default PersonalHeader
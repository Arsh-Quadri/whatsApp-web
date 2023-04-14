import { React, useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton } from '@mui/material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const { account } = useContext(AccountContext)
    const toggleDrawer = () => {
        setOpenDrawer(true)
    }

    return (
        <div className=''>
            <div className='h-14 flex items-center  bg-slate-100 py-[8px] px-3'>
                <div className="photo">
                    <img className='w-10 rounded-full cursor-pointer' src={account.picture} alt="dp" onClick={toggleDrawer} />
                </div>
                <div className="icon ml-auto flex">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </div>
                <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
            </div>

        </div>
    )
}

export default Header
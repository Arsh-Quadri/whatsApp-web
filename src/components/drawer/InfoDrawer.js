import { Drawer } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from '../Profile';

const drawerStyle = {

    width: '30%',
    boxShadow: "none"
}

const InfoDrawer = ({ open, setOpen }) => {
    return (

        <Drawer
            open={open}
            onClose={() => { setOpen(false) }}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <div className='h-[100px] w-full bg-emerald-700 pt-[50px] px-8 text-xl font-semibold text-white items-center flex'>
                <ArrowBackIcon onClick={() => setOpen(false)} className="cursor-pointer" />
                <p className='pl-8'>Profile</p>
            </div>
            <Profile />

        </Drawer>

    )
}

export default InfoDrawer
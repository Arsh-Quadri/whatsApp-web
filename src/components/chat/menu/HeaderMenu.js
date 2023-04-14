import { IconButton, Menu, MenuItem } from '@mui/material'
import { React, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';


const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null)
        setOpenDrawer(true)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getcontentAnchorE1={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    )
}

export default HeaderMenu
import { React, useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { IconButton, InputBase } from '@mui/material';
import { uploadFile } from '../../service/Api';

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData()
                data.append("name", file.name)
                data.append("file", file)

                let response = await uploadFile(data)
                setImage(response.data)
                // console.log(response.data)
            }
        }
        getImage();

    }, [file])


    return (
        <div className='flex pt-1 bg-slate-100 h-[8vh] 2xl:h-[10vh] px-2 '>
            <IconButton>
                <EmojiEmotionsOutlinedIcon className="svg_icons" />
            </IconButton>
            <IconButton>
                <label htmlFor="fileInput" className='pb-2 cursor-pointer'>
                    <AttachFileOutlinedIcon className="svg_icons cross" />
                </label>
            </IconButton>
            <input type="file" className='hidden' id='fileInput'
                onChange={(e) => onFileChange(e)}
            />
            <InputBase className='w-[85%] ml-4 mt-[6px] rounded-lg px-4 h-[70%] bg-white'
                placeholder='Type a message'
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => sendText(e)}
                value={value}
            />
            <IconButton>
                <MicOutlinedIcon className="svg_icons" />
            </IconButton>

        </div>
    )
}

export default Footer
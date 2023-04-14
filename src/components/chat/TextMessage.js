import React from 'react'
import { formateDate, downloadMedia } from '../../utils/commonUtil'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import DownloadIcon from '@mui/icons-material/Download';

function TextMessage({ message }) {
    // console.log(message);

    const Textmessage = ({ message }) => {
        return (
            <div className='flex'>
                <p className='text-sm pr-5'>{message.text}</p>
                <p className='time text-[10.4px]  text-gray-600 mt-auto'>{formateDate(message.createdAt)}</p>
            </div>
        )
    }

    const ImageMessage = ({ message }) => {
        return (
            <div className=' relative'>
                {
                    message?.text?.includes(".pdf") ?
                        <div className='flex'>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png" className='h-[60px] w-fit' alt="pdf" />
                            <p className='pl-3 pt-2 text-sm'>{message.text.split('-').pop()}</p>
                        </div>

                        :
                        <img className='h-[200px] mb-[1.8rem] object-cover' src={message.text} alt={message.text} />
                }
                <div className='absolute bottom-0 right-0'>
                    <p className='time text-[10.4px] py-1  text-gray-600 mt-auto'>{formateDate(message.createdAt)}</p>
                    <DownloadIcon
                        onClick={(e) => downloadMedia(e, message.text)}
                        className='absolute -left-[110%] -top-[0rem] cursor-pointer text-gray-500 border-[1px] text-[10px] border-gray-500 rounded-full h-[5px]'
                        fontSize='small'
                    />
                </div>
            </div>
        )
    }
    const { account } = useContext(AccountContext);
    return (
        <>
            {account.sub === message.senderId ?
                <div className='sentStyle'>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> :
                            <Textmessage message={message} />
                    }

                </div>
                :
                <div className='receivedStyle'>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> :
                            <Textmessage message={message} />
                    }
                </div>}
        </>
    )
}

export default TextMessage;


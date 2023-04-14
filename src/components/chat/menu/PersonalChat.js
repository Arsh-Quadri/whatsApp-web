import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { setConversation, getConversation } from '../../../service/Api'
import { AccountContext } from '../../context/AccountProvider'
import { formateDate } from '../../../utils/commonUtil'


const PersonalChat = ({ user }) => {

    const { person, setPerson, account, newMessageFlag } = useContext(AccountContext)
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub })
            setMessage({
                text: data?.message,
                timestamp: data?.updatedAt
            })
        }
        getConversationDetails();
    }, [newMessageFlag, person])


    const getProfile = async () => {
        setPerson(user)
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }
    const name = user.name.split(" ");
    const userName = name[0] + " " + name[1]

    return (
        <>
            <div className='h-[72px] py-2 cursor-pointer px-3 bg-slate-50 relative' onClick={getProfile}>
                <div className='flex items-center'>
                    <div className='pt-[3px]'>
                        <img className='w-[50px] rounded-full mr-4' src={user.picture ? user.picture : 'https://www.shutterstock.com/image-vector/businessman-avatar-profile-picture-260nw-221565274.jpg'} alt="" />
                    </div>
                    <div className='flex'>
                        <p className='absolute top-[20%]'>{userName}</p>
                        {message?.text &&
                            <p className='absolute right-0 top-[25%] mr-4 text-xs text-gray-600'>{formateDate(message?.timestamp)}</p>}
                    </div>
                </div>
                <div className='absolute left-[79px] top-[49%] text-sm text-gray-600'>
                    <p>{message?.text?.includes('whatsapp-backend111' || 'localhost') ? 'media' : message.text}</p>
                </div>
            </div>
            <hr className='w-[78%] relative left-[20%]' />
        </>
    )
}

export default PersonalChat
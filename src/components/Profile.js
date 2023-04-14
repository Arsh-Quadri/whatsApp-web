import React from 'react'
import { useContext } from 'react'
import { AccountContext } from './context/AccountProvider'

const Profile = () => {

    const { account } = useContext(AccountContext)
    const name = account.name.split(" ");
    const userName = name[0] + " " + name[1]

    return (
        <div>
            <div className='h-[85vh] w-full bg-gray-200'>
                <div><img className='w-[45%] rounded-full relative top-[4vh] ml-auto mr-auto' src={account.picture} alt="" /></div>
                <div className='w-full h-[90px] bg-white relative top-[10%] px-8 pt-4 shadow-md'>
                    <p className='text-sm text-green-700 pb-3'>Your name</p>
                    <p className='text-xl'>{userName}</p>
                </div>
                <div className='w-full h-[90px] relative top-[13%] px-8 text-sm text-gray-700'>
                    This is not your username or pin. This name will be visible to your Whatsapp contacts.
                </div>
                <div className='w-full h-[90px] bg-white relative top-[7%] px-8 pt-4 shadow-md'>
                    <p className='text-sm text-green-700 pb-3'>About</p>
                    <p className='text-xl'>Available</p>
                </div>

            </div>
        </div>
    )
}

export default Profile
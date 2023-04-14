import React from 'react'

const ChatMessage = () => {
    return (
        <div className='bg-[#f8f9fa] h-[100vh] w-full'>
            <div>
                <img className='w-[45%] mr-auto ml-auto pt-[150px]' src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="" />
                <p className='text-4xl text-gray-600'>Whatsapp Web</p>
                <p className='text-gray-600 pt-6 text-sm'>Now send and recive message without keeping your phone online</p>
                <p className='text-gray-600 text-sm pb-5'>Use Whatsapp on up to 4 linked devices and 1 phone at the same time</p>
                <hr className='w-[60%] m-auto' />
            </div>
        </div>
    )
}

export default ChatMessage
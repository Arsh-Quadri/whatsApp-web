import React, { useEffect, useState, useRef } from 'react'
import { getMessage } from '../../service/Api'
import TextMessage from './TextMessage';


const PersonalMain = ({ conversation, person, messages, setMessages, newMessageFlag }) => {

    const scrollRef = useRef()

    useEffect(() => {
        const getMessageDetail = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data);
            // console.log(data);
        }
        conversation._id && getMessageDetail()
    }, [conversation._id, newMessageFlag])//, person._id



    useEffect(() => {
        scrollRef.current?.lastElementChild?.scrollIntoView();

    }, [messages, conversation._id])


    return (
        <div className='box-scroll size bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] w-full h-[83vh] overflow-y-scroll'>
            <div className='pt-10 pb-5' >
                {messages && messages.map(message => (
                    <div className='pt-[2px] w-[88%] m-auto ' ref={scrollRef} >
                        <TextMessage message={message} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonalMain

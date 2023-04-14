import React from 'react'
import ChatMessage from './ChatMessage'
import Menu from './menu/Menu'
import PersonalMessage from './PersonalMessage'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'

const Chat = () => {
    const { person } = useContext(AccountContext)

    return (
        <div className='h-full'>
            <div className="h-full ">
                <div className="big-box w-[100%] h-[100%]  bg-white 2xl:h-[120%]">
                    <div className='flex h-full'>
                        <div className="left w-[30%] h-full min-w-[350px] bg-slate-30">
                            <Menu />
                        </div>
                        <div className="right w-[71%] h-full 2xl:h-[120%] min-w-[300px] bg-green-30 border-l-2">
                            {
                                Object.keys(person).length ? <PersonalMessage /> : <ChatMessage />
                            }

                            {/* <ChatMessage = empty page />
                            <PersonalMessage /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Chat
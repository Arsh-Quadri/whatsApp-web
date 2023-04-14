import { React, useState } from 'react'
import Header from './Header'
import Search from './Search'
import Conversation from './Conversation'

const Menu = () => {
    const [text, setText] = useState('')

    return (
        <div className='h-full'>
            <Header />
            <Search setText={setText} />
            <Conversation text={text} />
        </div>
    )
}

export default Menu
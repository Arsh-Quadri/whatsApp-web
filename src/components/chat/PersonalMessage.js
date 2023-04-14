import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import PersonalHeader from './PersonalHeader'
import PersonalMain from './PersonalMain'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import { getConversation } from '../../service/Api'
import { newMessage } from '../../service/Api'

const PersonalMessage = () => {
    const { person, account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)
    const [messages, setMessages] = useState([]);
    const [conversation, setConversation] = useState({})
    const [value, setValue] = useState('')
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);
    // const [messageflag, setMessageflag] = useState(false)

    useEffect(() => {
        socket.current.on('getMessage', (data) => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })

        })
        // console.log(messages);
    }, [conversation, socket, incomingMessage])


    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({
                senderId: account.sub,
                receiverId: person.sub
            })
            setConversation(data)
        }
        getConversationDetails();
    }, [person.sub])



    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);
        // console.log(messages)
    }, [incomingMessage, conversation, socket])


    let message = {};

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            // setMessageflag(true);
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: value
                }
            }
            else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: image
                }
            }

            socket.current.emit('sendMessage', message);

            await newMessage(message);
            setValue('')
            setFile(null)
            setImage(null)
            setNewMessageFlag(prev => !prev);
        }
    }


    return (
        <div>
            <PersonalHeader person={person} />
            <PersonalMain person={person} conversation={conversation} messages={messages} setMessages={setMessages} newMessageFlag={newMessageFlag} />
            <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
        </div>
    )
}

export default PersonalMessage

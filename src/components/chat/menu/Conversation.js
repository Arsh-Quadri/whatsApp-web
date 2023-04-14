import { React, useEffect, useState, useContext } from 'react'
import { getuser } from '../../../service/Api'
import PersonalChat from './PersonalChat'
import { AccountContext } from '../../context/AccountProvider'

const Conversation = ({ text }) => {

    const { account, socket, setActiveUsers, activeUsers } = useContext(AccountContext)

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await getuser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData)

        }
        fetchData();

    }, [text])

    useEffect(() => {
        // console.log(account)
        socket.current.emit('addUser', account);//account
        socket.current.on('getUser', users => {
            setActiveUsers(users);
            // console.log(activeUsers);
        })
        // return () => {
        //     socket.current.disconnect();
        // };

    }, [account])



    return (
        <div className='box-scroll h-[84vh] overflow-y-scroll'>
            {
                users.map((user) => (
                    user.sub !== account.sub &&

                    <PersonalChat user={user} />



                ))
            }
        </div>
    )
}

export default Conversation
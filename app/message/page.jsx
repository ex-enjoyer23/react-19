"use client"
import clsx from 'clsx';
import { useActionState, useOptimistic, useState } from 'react';

export default function page() {

    let dummyData = [
        {
            id: 1,
            message: 'Hi',
            status: 'sent'
        },
        {
            id: 2,
            message: 'Htamin Sar p b lrr',
            status: 'sent'
        },
        {
            id: 3,
            message: 'Tadi ya dl nww, ko bawa htl pyn lrr pyy par',
            status: 'sending'
        },

    ]

    // useActionState
    async function action(currentMessages, formData) {
        const message = formData.get('message');
        addOpimisticValue(message);
        // await fetch('www.facebook.com', {content:message})
        let data = await new Promise(res => setTimeout(res, 2000));                       // think it as calling to server
        data = { id: currentMessages.at(-1).id + 1, message: message };                   // think it as this data is returned from server
        data.status = (message == 'make me failed' ? 'failed' : 'sent');
        return [...currentMessages, data];
    }

    const [messages, sendMessage, sending] = useActionState(action, dummyData);

    // useOptimistic
    function optimisticUpdateFn(currentMessages, optimisticValue) {
        return [...currentMessages, { id: currentMessages.at(-1).id + 1, message: optimisticValue, status: 'sending' }];
    }
    const [optimisticMessages, addOpimisticValue] = useOptimistic(messages, optimisticUpdateFn)

    return (
        <>
            {optimisticMessages.map((message, i) => <Message message={message} />)}

            <form action={sendMessage}>
                <div className='mx-4 flex '>
                    <input type="text" name='message' className='grow rounded' placeholder='Message' />
                    <button className='p-2 rounded ms-2 bg-blue-500'>Send</button>
                </div>
            </form>
        </>
    )
}

function Message({ message }) {
    return (
        <div className={clsx(['text-white rounded p-4 mx-4 my-2',
            {
                'bg-teal-400': message.status === 'sent',
                'bg-blue-400': 'sending',
                'bg-red-400': message.status === 'failed'
            }])}>
            <div className=''>{message.message}</div>
            <div className='text-end'>{message.status}</div>
        </div>
    )
}
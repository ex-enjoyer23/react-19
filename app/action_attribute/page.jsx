"use client"
import clsx from 'clsx';
import { useState } from 'react';
import { useActionState } from 'react'

export default function page() {
    const action = async function (currentState, formData) {
        await new Promise(res => setTimeout(res, 3000));
        return formData.get('name');
    }
    const [name, dispatchAction, isPending] = useActionState(action, 'null');

    return (
        <div>
            <div className='border bg-blue-200 text-center'>{name}</div>
            <form action={dispatchAction}>
                <input type="text" name='name' placeholder='Name' disabled={isPending} />
                <button className={clsx(['bg-blue-500 text-white p-2 rounded m-2', { 'opacity-80': isPending }])} disabled={isPending}>{isPending ? 'Updating...' : 'Update'}</button>
            </form>
        </div>
    )

}

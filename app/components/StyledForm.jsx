"use client"
import clsx from 'clsx';
import { useFormStatus } from 'react-dom'

export default function StyledForm() {
    const { pending, data, action } = useFormStatus();
    return (
        <div>
            <input type="text" name='name' placeholder='Name' disabled={pending}/>
            <button className={clsx(['bg-blue-500 text-white p-2 rounded m-2', { 'opacity-80': pending }])} disabled={pending}>{pending ? 'Updating...' : 'Update'}</button>
        </div>
    )
}

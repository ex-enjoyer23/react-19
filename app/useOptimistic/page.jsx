"use client"

import { useState } from 'react';
import { useOptimistic } from 'react';
export default function page() {
    const [name, setName] = useState('Default Name');
    const [optimisticName, addOptimisticValue] = useOptimistic(name, (current, optimisticValue) => {
        return optimisticValue;
    });

    const action = async function (formData) {
        addOptimisticValue(formData.get('name'));
        await new Promise(res => setTimeout(res, 2000));
    }
    return (
        <div>
            <div className='border bg-blue-200 text-center'>{optimisticName}</div>
            <form action={action}>
                <input type="text" name='name' />
                <button>Update</button>
            </form>
            {/* <button onClick={action}>Update</button> */}
        </div >
    )
}
/*
1. There is seperated state for storing data purpose
New State for pending condition
2. accept 2 args, 
state -> first initial and whenever no action is pending
(initial, )

optimistic dispatcher can only called in transition.
After action is fininshed, sync with data state
*/ 
"use client"

import { useActionState, useState } from "react";
import { useTransition } from "react"

export default function page() {

    async function action(currentName, formData) {
        if (currentName === 'pmp') return 'Hrrr, aynn mite dl'
        await new Promise(res => setTimeout(res, 2000));
        console.log(currentName);
        let nameInput = formData.get('name');
        console.log(nameInput);
        return nameInput;
    }
    const [name, actionDispatch, loading] = useActionState(action, 'default')


    return (
        <>
            <div>Name: {name}</div>

            <form action={actionDispatch}>
                <input type="text" name="name" />
                <button>{loading ? 'updating' : 'update'}</button>
            </form>
        </>
    )
}

// useOptimistic

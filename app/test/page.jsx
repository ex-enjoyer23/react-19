"use client"
import { resolve } from 'path';
import { useState, useTransition } from 'react'

export default function page() {

    // Truthy values - true, Not empty strng 'fdf', [], {}, number which is not 0
    // Falsy Values - 0, null , false, undefined , ''
    let data1 = "";
    let data2 = "This is data2";
    if (data1) { }
    // true   -> return second value
    // false  -> return first value
    const [login, setLogin] = useState("dfdfd");

    // AND true true
    // && ||




    const [input, setInput] = useState('');
    const [name, setName] = useState('Hello');
    const [isPending, startTransition] = useTransition();

    function updateName(event) {
        event.preventDefault();
        startTransition(async () => {
            await new Promise((resolve, reject) => { setTimeout(resolve, 5000); });
            setName(input);
            // console.log('Second Log');
        });
    }

    return (
        <div>
            {login || <div />}
            condi ? expr1 : expr2
            {login ? <div>Login Form</div> : undefined}
            <div className="border p-3 rounded">{name}</div>
            <form action="./nextpage.php" onSubmit={updateName}>
                <input name="name" placeholder='Name' onChange={(e) => { setInput(e.target.value) }} />
                {isPending && 'Loading...'}
                <button>Update</button>
            </form>
        </div>
    )
}

"use client"
import StyledForm from "@/app/components/StyledForm";
import { useState } from "react";
export default function page() {
    const [name, setName] = useState('Default');
    const action = async function (formData) {
        await new Promise(res => setTimeout(res, 3000));
        setName(formData.get('name'));
        // console.log(formData.get("name"));
    }
    return (
        <div>
            <div className='border bg-blue-200 text-center'>{name}</div>
            <form action={action}>
                <StyledForm />
            </form>
        </div>
    )
}

import { useState } from 'react'
import * as v from 'valibot'

function validate(object) {
    const Schema = v.object({ name: v.pipe(v.string(), v.maxLength(5)) })
    return v.safeParse(Schema, object)
}

export default function Play() {
    const [name, setName] = useState('')
    const [show, setShow] = useState(true)
    const [message, setMessage] = useState('')

    const inputName = (e) => {
        const result = validate({ name: e.currentTarget.value })
        if (result.success) setName(e.currentTarget.value)
        else {
            setShow((prev) => !prev)
            setMessage(result.issues[0].message)
        }
    }
    return (
        <>
            <div style={{ fontSize: 25 }}>GetTest0</div>
            <hr />
            <input type='text' onChange={inputName} />
            <div>{show ? name : message}</div>
        </>
    )
}

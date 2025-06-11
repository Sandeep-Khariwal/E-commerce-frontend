import React, { useState } from 'react'

const Demo = () => {
    const [value, setValue] = useState(0)
    const [name, setName] = useState("")
// 


    return (
        <div>
            <button onClick={() => setValue((prev) => prev - 1)} >-</button>
            <p>value {value}</p>
            <button onClick={() => setValue((prev) => prev + 1)} >+</button>

            {/* <input type='text' onChange={(e) => setInput(e.target.value)} /> */}

            {/* <p>input : {input}</p> */}
        </div>
    )
}

export default Demo

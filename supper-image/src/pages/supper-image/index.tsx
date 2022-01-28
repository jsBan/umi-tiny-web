import React from "react"
import { Button,Input } from "antd"
import { useState,useEffect,useMemo  } from "react"

const SupperImage = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    const MyComponent = (() => {
        return <div>
            123
        </div>
    })

    useEffect(() => {
        (() => {
            setCount(count + 1)
        })()
    },[flag])
    const click =() => {
        setFlag(!flag)
    }
    const handlerChnage = (e:any) => {
        console.log(e.target.value);
    }
    
    return (
        <div>
            {/* <Input type="file" onChange={handlerChnage} /> */}
            {/* <Button onClick={click}>变化</Button>
            <h1>{count}</h1>
            <h3><MyComponent /></h3> */}
            </div>
    )
}

export default SupperImage
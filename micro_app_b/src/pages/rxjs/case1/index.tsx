import React, { useEffect, useState } from "react";
import { fromEvent, map, scan, throttleTime } from "rxjs"
import "./index.less"

const Case1: React.FC = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [X, setCount3] = useState(0)
    const [Y, setCount4] = useState(0)
    // 纯净性
    useEffect(() => {
        const button: any = document.getElementById('btn1');
        fromEvent(button, 'click')
            .pipe(scan(count => count + 1, 0))
            .subscribe(value => setCount1(value))
    }, [])
    // 流动性
    useEffect(() => {
        const button: any = document.getElementById('btn2');
        fromEvent(button, 'click')
        .pipe(
            throttleTime(1000),
            scan(count => count +1, 0)
        )
        .subscribe(value => setCount2(value))
    },[])
    // 值
    useEffect(() => {
        const button: any = document.getElementById('btn3');
        fromEvent(button, 'click')
        .pipe(
            throttleTime(1000),
            map((e:any )=>{
                setCount3(e.clientX)
                setCount4(e.clientY)
                console.log(e);
                
            }),
        )
        .subscribe()
    },[])


    return (
        <div className="case1">
            <div className="case1-item">
                <h3>Case1</h3>
                <button id="btn1">按钮</button>
                <div>数值：{count1}</div>
            </div>
            <div className="case1-item">
                <h3>Case1</h3>
                <button id="btn2">按钮</button>
                <div>数值：{count2}</div>
            </div>
            <div className="case1-item">
                <h3>Case1</h3>
                <button id="btn3">按钮</button>
                <div>X：{X}-----Y:{Y}</div>
            </div>
        </div>
    )
}

export default Case1
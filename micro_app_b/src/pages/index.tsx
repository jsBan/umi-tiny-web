import './index.less';
import { fromEvent, scan, throttleTime } from "rxjs"
import { Button } from "antd"
import React, { useEffect, useState } from 'react';
import { setHtml } from "../utils/htmlTools"
import { history } from 'umi';


const Index: React.FC = () => {

    const clickCase1  = () => {
      history.push("./rxjs/case1")
    }
    const clickCase2  = () => {
      history.push("./rxjs/case2")
    }




  useEffect(() => {
    // 使用Rxjs
    const button: any = document.getElementById('myButton');
    fromEvent(button, 'click')
      .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0),
      )
      .subscribe(value => setHtml('index', `clicked ${value} times`));
  }, [])

  useEffect(() => {
    const button:any = document.getElementById('myButton1');
    fromEvent(button, 'click')
      .pipe(scan(count => count + 1, 0))
      .subscribe((value: number) => setHtml('index1', `clicked ${value} times`));
  },[])
  return (
    <div className="info">
      <div className="info-item">
        <Button type="primary" id="myButton">
          来自Rxjs事件
        </Button>
        <div>输出:</div>
        <div id="index" />
      </div>
      <div className="info-item">
      <Button type="primary" id="myButton1">
          来自Rxjs事件
        </Button>
        <div>输出:</div>
        <div id="index1" />
      </div>

      <div className="info-item">
        <Button onClick={clickCase1}>跳转到Case1</Button>
      </div>
      <div className="info-item">
        <Button onClick={clickCase2}>跳转到Case2</Button>
      </div>
    </div>
  );
}

export default Index
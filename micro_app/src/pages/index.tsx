import React from 'react';
import  CanvasDraw  from "react-canvas-draw";
import {useState,useEffect} from "react";
import { Card, Button, Modal} from "antd"
import './index.less';


export default function IndexPage() {
  const signCanvas:any = React.createRef();

  const [imageBase64, setImageBase64] = useState('')
  const [count, setCount] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)


  const clearSign = () => {
    signCanvas.current.clear();
  };

  const createSignImg = async () => {
    const signImg = signCanvas.current.canvas.drawing.toDataURL('image/png');
    setImageBase64(signImg)
    setIsModalVisible(true)
    
  };
  const handleOk = () => {
    const a = document.createElement('a');
    a.href = imageBase64;
    a.setAttribute('download', 'chart-download');
    a.download="图片下载"
    a.click()
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    
  }


  const Demo = () => {
    return (
      <Button onClick={createSignImg}>
        生成图片
      </Button>
    )
  }
  return (
    <div className="info">
      <Card>电子签名</Card>
      <Card>
        <CanvasDraw 
              ref={signCanvas}
              brushColor="#000"
              brushRadius={3}
              lazyRadius={10}
            />
      </Card>
      <Card>
            <Button onClick={clearSign}>
              清空画布
            </Button>
            <Demo />
            {count}
      </Card>
      <Modal title="生成绘画图片" keyboard centered visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel} okText="下载图片" cancelText="取消">
        <img src={imageBase64} alt="" />
      </Modal>
      </div>
  );
}

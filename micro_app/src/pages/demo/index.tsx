import React from 'react';
import  CanvasDraw  from "react-canvas-draw";
import {useState,useEffect} from "react";
import { Card, Button, Modal,Message} from "antd"
// import './index.less';


export default function IndexPage() {
  const signCanvas:any = React.createRef();

  const [imageBase64, setImageBase64] = useState(null)
  const [isModalVisible, setisModalVisible] = useState(false)

  const clearSign = () => {
    signCanvas.current.clear();
  };

  const createSignImg = async () => {
    Message.info('asdasdasa')
    const signImg = signCanvas.current.canvas.drawing.toDataURL('image/png');
    setImageBase64(signImg)
    setisModalVisible(true)
  };
  const handleCancel = () => {
    setisModalVisible(false)
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
            
      </Card>
        <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
              {/* <img src={imageBase64} alt="" /> */}
         </Modal>
      </div>
  );
}

import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function FormExample() {
  const [submitted, setSubmitted] = useState(false); // 添加狀態管理
  const [inputValue, setInputValue] = useState(''); // 添加輸入值的狀態

  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單的默認行為
    if (inputValue.trim() === '') {
      alert('請在輸入框中填寫內容。'); // 提示用戶填寫內容
      return; // 結束函數
    }
    setSubmitted(true); // 設置 submitted 為 true
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 更新輸入值的狀態
  };

  const handleDelete = () => {
    setInputValue(''); // 清空輸入框
    setSubmitted(false); // 隱藏感謝訊息
  };

  return (
    <form onSubmit={handleSubmit}> {/* 使用 form 標籤包裹組件 */}
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder="在此輸入您的問題"
          value={inputValue} // 綁定輸入框的值
          onChange={handleInputChange} // 處理輸入變更
        />
        <Button variant="secondary" type="submit">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button> {/* 刪除按鈕 */}
      </Stack>
      {submitted && <p>提交成功</p>} {/* 根據 submitted 狀態顯示訊息 */}
    </form>
  );
}

export default FormExample;

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertExample() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>警告提示</Alert.Heading>
        <p>这是一个警告信息，可以提醒用户重要事项。</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            关闭
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>重新显示</Button>}
    </>
  );
}

export default AlertExample;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CountdownTimer = ({ targetTimestamp }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTimestamp));

  // 每秒更新倒计时
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp));
    }, 1000);

    return () => clearInterval(intervalId); // 清理定时器
  }, [targetTimestamp]);

  // 计算剩余时间
  function calculateTimeLeft(timestamp) {
    const currentTime = Math.floor(Date.now() / 1000); // 当前时间的时间戳
    const difference = timestamp - currentTime; // 距离目标时间的差值
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    return { hours, minutes, seconds };
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>倒计时</Card.Title>
              <Card.Text>
                {timeLeft.hours} 时 : {timeLeft.minutes} 分 : {timeLeft.seconds} 秒
              </Card.Text>
              {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                <Button variant="success">倒计时结束</Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CountdownTimer;

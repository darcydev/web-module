import React from 'react';
import { Progress } from 'antd';

export default function ProgessBar({
  status = 'normal',
  percent = 100,
  strokeColor = 'grey'
}) {
  return (
    <Progress
      status={status}
      percent={percent}
      showInfo={false}
      strokeWidth={10}
      strokeColor={strokeColor}
    />
  );
}

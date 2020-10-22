import React, { useState } from 'react';

const TodoItem = (props: any) => {
  const [data, setData] = useState(0);
  return <div>{props.title}</div>;
};

export default TodoItem;

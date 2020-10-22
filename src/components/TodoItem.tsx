import React from 'react';

// this is test component
const TodoItem = (props: any) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.id}</div>
    </>
  );
};

export default TodoItem;

import React from 'react';

const TodoItem = (props: any) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.id}</div>
    </>
  );
};

export default TodoItem;

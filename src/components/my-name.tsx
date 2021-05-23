import React from 'react';

type Props = {
  io: string;
};

const MyName = ({ io }: Props) => {
  return (
    <div>
      <h1 className={`white fade${io}Fast`}>
        Hello, I'm <b className="orange">Jesse Neumann</b>.
      </h1>
      <h1 className={`white fade${io}Fast`}>I'm a fullstack software engineer</h1>
    </div>
  );
};

export default MyName;

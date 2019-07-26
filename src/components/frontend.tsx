import React from 'react';

type Props = {
  io: string;
};

const Frontend = ({ io }: Props) => (
  <div className={`white fade${io}Fast`}>
    <h1 className="white fadeInFast">I have style.</h1>
    <h2 className="white fadeInSlow">
      My UI/UX designs are beautiful, simple, and intuitive.
    </h2>

    <h2 className="white fadeInSlow">
      I write high quality, pixel perfect client facing interfaces, using the
      latest in CSS and CSS-in-JS tools, combined with the power of WebGL and
      Canvas.
    </h2>
  </div>
);

export default Frontend;

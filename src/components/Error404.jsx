import React, { useEffect } from 'react';

const Error404 = ({ on404 }) => {
  useEffect(() => {
    on404();
  }, [on404]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default Error404;

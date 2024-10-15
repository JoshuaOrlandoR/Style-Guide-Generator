import React from 'react';

// wraps the entire page content.
function PageWrap({ children }) {
  return <div className="page-wrapper">{children}</div>;
}

export default PageWrap;
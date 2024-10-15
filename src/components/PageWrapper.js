import React from 'react';

// wraps the entire page content.
function PageWrapper({ children }) {
  return <div className="page-wrapper">{children}</div>;
}

export default PageWrapper;
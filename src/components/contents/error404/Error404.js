import React from "react";

export default function Error404() {
  return (
    <div className="content-wrapper" style={{ minHeight: "1589.56px" }}>
      <div className="content">
        <div className="error-page">
          <h2 className="headline text-warning">404</h2>
          <div className="error-content pt-5">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning"></i>
              Oops! Page not found.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

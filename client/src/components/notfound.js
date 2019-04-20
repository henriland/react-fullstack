import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <header className="NotFound-header">
        </header>
        <section className="NotFound-section">
          <h1>404</h1>
          <p>This page was not found!</p>
        </section>
      </div>
    );
  }
}

export default NotFound;
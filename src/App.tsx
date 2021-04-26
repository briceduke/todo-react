import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="form">
          <input type="text" placeholder="Task" />
          <button>Add Task</button>
        </div>
      </div>
      <div className="list">

      </div>
    </div>
  );
}

export default App;

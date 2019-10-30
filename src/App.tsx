import * as React from 'react';
import Task from './components/Task';

class App extends React.Component {
  componentDidCatch(error: any, info: any) {
    console.error('Tasks Micro-app: ' + info, error);
  }
  public render() {
    return <Task />;
  }
}

export default App;

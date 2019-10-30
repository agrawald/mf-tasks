import * as React from 'react';
import { Container, Jumbotron, ListGroup } from 'react-bootstrap';
import { TaskSvc } from '../services/task.svc';

interface IState {
  show: boolean;
  tasks?: string[];
}

class TaskComponent extends React.Component<any, IState> {
  state = {
    show: true,
    tasks: []
  };

  taskSvc: TaskSvc;

  constructor(props: any) {
    super(props);
    this.taskSvc = new TaskSvc();
  }

  componentDidMount() {
    const tasks = this.taskSvc.getAll();
    this.setState({ ...this.state, tasks: tasks });
  }

  public render() {
    const { tasks } = this.state;
    const items = [];
    for(const t of tasks) {
        items.push(<ListGroup.Item>{t}</ListGroup.Item>);
    }
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>My Tasks</h1>
          </Container>
        </Jumbotron>
        <ListGroup variant="flush">
          {items}
        </ListGroup>
      </>
    );
  }
}

export default TaskComponent;

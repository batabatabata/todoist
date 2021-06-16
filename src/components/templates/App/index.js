import './index.module.scss';
import Header from '../../organism/Header/index';
import TaskList from '../../organism/TaskList/index';

function App() {

  return (
    <div className="App">
      <Header />
      <TaskList/>
    </div>
  );
}

export default App;

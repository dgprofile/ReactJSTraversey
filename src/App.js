import './App.css';
import Header from './components/Header'
const name = "Brad";
const x = false
function App() {
  return (
    <div className="container">
      {name} 
      <h1>Do you have a car? {x ? 'Yes' : 'No'}</h1>
      <Header taskId={15} title={"Work on clearing the payments"}></Header>
    </div>
  );
}

export default App;

import TaskList from "./componet/TaskList";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import AddTask from "./componet/AddTask";
import './App.css'

function App ()  {
  return(
    <div className="App">
    <Header/>
    <AddTask/>
    <TaskList/>
    <Footer/>    
  </div>
  );
}



export default App;

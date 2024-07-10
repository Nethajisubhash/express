
import './App.css';

function App() {
  async function loademployees(){
    const res=await fetch('http://localhost:8084/get_users');
    const data=await res.json();
    console.log(data);
  }
  return (
    <div className="App">
        employee.map(function(emp){
          return(
            <li>{emp.department}</li>
          )
        })
    </div>
  );
}

export default App;

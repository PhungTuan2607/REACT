
import "./App.css";
import UserName from "./components/userName";
import CountNumber from "./components/countNumber";
function App() {
  return (
    <div className="App">
      <div>
      <UserName name={["Nguyễn Văn A"]}/>
      </div>
      <CountNumber />
    </div>
  );
}

export default App;

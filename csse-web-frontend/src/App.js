import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import ApprovedRequisition from './components/ApprovedeRequisition';
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/approved-requisition">
          <ApprovedRequisition/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import ApprovedRequisition from './components/ApprovedeRequisition';
import PlaceOrder from './components/PlaceOrder';
import SupplierViewRequisitions from './components/SupplierViewRequisitions';
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/approved-requisition">
          <ApprovedRequisition/>
        </Route>
        <Route exact path="/place-order">
          <PlaceOrder/>
        </Route>
        <Route exact path="/supplier-view-all">
          <SupplierViewRequisitions/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

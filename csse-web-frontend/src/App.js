import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import ApprovedRequisition from './components/StaffComponents/ApprovedeRequisition';
import PlaceOrder from './components/StaffComponents/PlaceOrder';
import SupplierViewRequisitions from './components/SupplierComponents/SupplierViewRequisitions';
import SupplierOrders from './components/SupplierComponents/SupplierOrders';
import AppliedOrders from './components/SupplierComponents/AppliedOrders';
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
        <Route exact path="/supplier-orders">
          <SupplierOrders/>
        </Route>
        <Route exact path="/applied-orders">
          <AppliedOrders/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

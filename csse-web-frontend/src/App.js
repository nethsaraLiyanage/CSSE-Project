import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import ApprovedRequisition from './components/StaffComponents/ApprovedeRequisition';
import ViewSupplierRequests from './components/StaffComponents/ViewSupplierRequests';
import SupplierViewRequisitions from './components/SupplierComponents/SupplierViewRequisitions';
import SupplierOrders from './components/SupplierComponents/SupplierOrders';
import AppliedOrders from './components/SupplierComponents/AppliedOrders';
import CompletedOrders from './components/AccountingStaffComponents/CompletedOrders';
import PaymentPage from './components/AccountingStaffComponents/PaymentPage';
import PaidOrders from './components/AccountingStaffComponents/PaidOrders';
import LMlogin from './components/LineManager/LMlogin';
import LineManagerDash from './components/LineManager/LineManagerDash';
import ViewRequisition from './components/StaffComponents/ViewRequisition';

import "./assets/style.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/lmlogin">
          <LMlogin/>
        </Route>
        <Route exact path="/LineManager">
          <LineManagerDash/>
        </Route>
        <Route exact path="/approved-requisition">
          <ApprovedRequisition/>
        </Route>
        <Route exact path="/place-order/:poid/:iid">
          <ViewSupplierRequests/>
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
        <Route exact path="/completed-orders">
          <CompletedOrders/>
        </Route>
        <Route exact path="/payment/:sid/:iid">
          <PaymentPage/>
        </Route>
        <Route exact path="/paid-orders">
          <PaidOrders/>
        </Route>
        <Route exact path="/view-requisition/:rid">
          <ViewRequisition/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import SignIn from "./pages/auth/signin/SignIn";
import SignUp from "./pages/auth/signup/SignUp";
import CreateTask from "./pages/task/create_task/CreateTask";
import AuthProtected from "./routes/PrivateRoute";
import BrowseTasks from "./pages/task/browse_tasks/BrowseTasks";
import SingleTask from "./pages/task/single_task/SingleTask";
import PersonDetails from "./pages/user/PersonDetails";
import MyOffers from "./pages/account/my_offers/MyOffers";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/account/Dashboard";

import SettingsLayout from "./layout/SettingsLayout";
import Profile from "./pages/profile/Profile";
import Accounts from "./pages/settings/accounts/Accounts";
import Notification from "./pages/settings/notifications/Notification";
import Messages from "./pages/message/Messages";
import MyTasks from "./pages/account/my_tasks/MyTasks";
import SettingProfile from "./pages/settings/profile/SettingProfile";
import OffersSent from "./pages/account/offers_sent/OffersSent";
import OrderAsBuyer from "./pages/account/buyer_order/OrderAsBuyer";
import OrderAsTasker from "./pages/account/tasker_order/OrderAsTasker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/create-task"
            element={
              <AuthProtected>
                <CreateTask />
              </AuthProtected>
            }
          />
          <Route path="/browse-tasks" element={<BrowseTasks />} />
          <Route path="/browse-tasks/:id" element={<SingleTask />} />
          <Route
            path="/person_details"
            element={<Navigate to={"/person_details/:id"} />}
          />
          <Route path="/person_details/:id" element={<PersonDetails />} />
          <Route
            path="/dashboard"
            element={
              <AuthProtected>
                <DashboardLayout />
              </AuthProtected>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="orderAsBuyer" element={<OrderAsBuyer />} />
            <Route path="orderAsTasker" element={<OrderAsTasker />} />
            <Route path="my_offers" element={<MyOffers />} />

            <Route path="offer_sent" element={<OffersSent />} />
            <Route path="my_tasks" element={<MyTasks />} />
          </Route>
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<SettingProfile />} />
            <Route path="account" element={<Accounts />} />
            <Route path="notifications" element={<Notification />} />
          </Route>
          <Route
            path="/profile"
            element={
              <AuthProtected>
                <Profile />
              </AuthProtected>
            }
          />
        </Route>
        <Route path="/messages" element={<Messages />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
          <Route path="/account/my_offers" element={<MyOffers />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

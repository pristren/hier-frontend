import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import CreateTask from "./pages/create_task/CreateTask";
import AuthProtected from "./routes/PrivateRoute";

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
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

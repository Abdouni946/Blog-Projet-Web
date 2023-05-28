import Singlepost from "./component/Singlepost";
import Navbar from "./component/NavBar";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Update from "./component/Update";
import MostReviews from "./component/MostReviews";
import Profil from "./component/Profil";
import Categories from "./component/Categories";
import PostsCat from "./component/PostsCat";
import Myarticle from "./component/Myarticle";



import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Myarticle/:userId" element={<Myarticle />} />
        <Route path="/post/:postId" element={<Singlepost />} />
        <Route path="/MostReviews" element={<MostReviews />} />
        <Route path="/Profil/:userId" element={<Profil />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:categoriesId" element={<PostsCat />} />
      </Routes>
    </Router >
  )
}

export default App;
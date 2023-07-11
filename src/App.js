// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Footer from "./pages/Share/Footer/Footer";
import Header from "./pages/Share/Header/Header";
import Home from "./pages/Home/Home/Home";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/Share/PageNotFound/PageNotFound";
import Blog from "./pages/Blog/Blog";
import About from "./pages/AboutUs/About/About";
import Career from "./pages/Career/Career/Career";
import ServiceOne from "./pages/Services/ServiceOne/ServiceOne/ServiceOne";

function App() {
  render(
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/career" element={<Career></Career>} />
        <Route
          path="/services/service-one"
          element={<ServiceOne></ServiceOne>}
        />
        <Route path="/*" element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>,

    document.getElementById("root")
  );
}

export default App;

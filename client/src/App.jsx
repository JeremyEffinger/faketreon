import "./styling/App.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import UrlNameState from "./UrlNameState";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/header/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Campaign from "./containers/Campaign/Campaign.jsx";
import HomePage from "./components/home-page/HomePage";
import ErrorPage from "./components/error-page/ErrorPage";
import Loading from "./components/loading/Loading";
import axios from "axios";

function App() {

  const [currentUrl, setCurrentUrl] = useRecoilState(UrlNameState)
  const urlWithProxy = "/api/v1";


  const pathArray = window.location.pathname.split("/");
  useEffect(() => {
    setCurrentUrl(pathArray[1]);
  }, []);


  function testingLoader() {
    let username = params;
    axios
      .get(urlWithProxy + "/creatorcampaign/" + username)
      .then((res) => {
        console.log(res.data)
        setCreatorInfo(res.data)})
      .catch((err) => {
        err;
      });
  }




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      children: [
        {
          path: "/",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/:username",
          element: <Campaign />,
          errorElement: <ErrorPage />,
          // loader: async () => {
          //   let username = params;
          //   axios
          //     .get(urlWithProxy + "/creatorcampaign/" + username)
          //     .then((res) => {
          //       console.log(res.data)
          //       setCreatorInfo(res.data)})
          //     .catch((err) => {
          //       err;
          //     });
          // }
          loader: ({ request }) => {
            const url = new URL(request.url);
            console.log(url)
            // above creates URL object
            const searchTerm = url.pathname
            console.log((searchTerm))
            // above posts /trashtaste or something
            return searchTerm;
            //return here returns the /trashtaste or whatever it is.
          }
          },
          {
            path: "/",
            element: <Footer />,
          },
        ]
        }
      ],
  )
  

  return (
    
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Loading/>}/>
    </div>




    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route 
    //       path="*" 
    //       element={<Campaign currentPath={currentUrl} />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;

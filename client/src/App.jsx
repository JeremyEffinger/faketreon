import "./styling/App.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import UrlNameState from "./UrlNameState";
import Campaign from "./containers/Campaign/Campaign.jsx";
import HomePage from "./components/home-page/HomePage";
import ErrorPage from "./components/error-page/ErrorPage";
import Loading from "./components/loading/Loading";
import Root from "./components/root/Root";

function App() {

  const [currentUrl, setCurrentUrl] = useRecoilState(UrlNameState)


  const pathArray = window.location.pathname.split("/");
  useEffect(() => {
    setCurrentUrl(pathArray[1]);
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
          loader: ({ request }) => {
            const url = new URL(request.url);
            // above creates URL object
            const searchTerm = url.pathname
            // above posts /trashtaste or something
            return searchTerm;
            //return here returns the /trashtaste or whatever it is.
          }
          },
        ]
        }
      ],
  )
  

  return (
    
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Loading/>}/>
    </div>


);
}

export default App;


      //Old router path is below

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

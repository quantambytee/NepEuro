import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "photoswipe/dist/photoswipe.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "swiper/css/bundle";
import "./assets/css/flaticon.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/myStyle.css";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layouts";
import PreLoader from "./components/others/PreLoader";
import { ToastContainer } from "react-toastify";
import ScrollUpBtn from "./components/others/ScrollUpBtn";

function App() {
  //  Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <Helmet>
            <title>Nepeuro||Business Development Agency</title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Helmet>
          <Layout />
          <ToastContainer />
          <ScrollUpBtn />
        </div>
      )}
    </>
  );
}

export default App;

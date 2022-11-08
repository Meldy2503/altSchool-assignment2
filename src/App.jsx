import React, { Fragment, lazy, Suspense } from "react";
import { GlobalStyle } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ErrorBoundary from "./pages/ErrorBoundary";
import Loading from "./components/Loading";

let Home = lazy(() => import("./pages/Home"));
let UsersProfile = lazy(() => import("./pages/UsersProfile"));
let Users = lazy(() => import("./pages/Users"));
let ContactUs = lazy(() => import("./pages/Contact"));
let AboutUs = lazy(() => import("./pages/About"));
let Error = lazy(() => import("./pages/Error"));
import ErrorTest from "./components/ErrorTest";

function App() {
  const theme = {
    mediaQuery: {
      smobile: "400px",
      mobile: "767px",
      tablet: "960px",
      desktop: "1200px",
    },
  };
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<UsersProfile />} />
              <Route path="/profile/about-us" element={<AboutUs />} />
              <Route path="/profile/contact-us" element={<ContactUs />} />
              <Route path="/error-test" element={<ErrorTest />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

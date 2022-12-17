import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";

import useStyles from "./styles";
import CircleLoading from "./components/partials/CircleLoading";
import ScrollToTop from "./components/partials/ScrollToTop";
import AppAutoScroll from "./components/partials/AppAutoScroll";

const Home = lazy(() => import("./components/Home"));
const ArtManage = lazy(() => import("./components/ArtManage"));
const Landing = lazy(() => import("./components/Landing"));
const ArtDetail = lazy(() => import("./components/partials/ArtDetail"));
const Main = lazy(() => import("./components/partials/Main"));
const NavBar = lazy(() => import("./components/NavBar"));

const SearchPage = lazy(() => import("./components/SearchPage"));
const ArtByAuthor = lazy(() => import("./components/ArtByAuthor"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

function App() {
  const styles = useStyles();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <ScrollToTop />
        <AppAutoScroll />
        <Routes>
          <Route
            path="/welcome"
            element={
              <Suspense fallback={<CircleLoading />}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<CircleLoading />}>
                <NavBar />
                <Main>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<CircleLoading />}>
                          <Home />
                        </Suspense>
                      }
                    />
                    <Route path="/art">
                      <Route
                        path="gallery"
                        element={
                          <Suspense fallback={<CircleLoading />}>
                            <ArtByAuthor />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense fallback={<CircleLoading />}>
                            <ArtDetail />
                          </Suspense>
                        }
                      />
                      <Route
                        path="search"
                        element={
                          <Suspense fallback={<CircleLoading />}>
                            <SearchPage />
                          </Suspense>
                        }
                      />
                    </Route>

                    <Route
                      path="/manage"
                      exact
                      element={
                        <Suspense fallback={<CircleLoading />}>
                          <ArtManage />
                        </Suspense>
                      }
                    />

                    <Route
                      path="*"
                      element={<NotFoundPage isHomePage={false} />}
                    />
                  </Routes>
                </Main>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

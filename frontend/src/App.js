import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from './components/header';
import Loading from './components/Loading';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BackToTop from './components/BackToTop';
import AuthConfirmEmail from './features/Auth/pages/ConfirmEmail';
import PublicRoutes from './helpers/PublicRoutes';
import PrivateRoutesUser from './helpers/PrivateRoutesUser';
import { logout } from './features/Auth/authSlice';
import { useDispatch } from 'react-redux';
import Admin from './features/Admin/pages/Main';
import NavAdmin from './features/Admin/components/NavAdmin';
import AccountsManagement from './features/Admin/components/Accounts';
import Dashboard from './features/Admin/components/Dashboard';
import PetManagement from './features/Admin/components/Pet';
import ServiceManagement from './features/Admin/components/Service';
import BookingService from './features/Admin/components/Booking';
import PrivateRoutesAdmin from './helpers/PrivateRoutesAdmin';
import CustomerRoutes from './helpers/CustomerRoutes';
// import AuthMain from './features/Auth/pages/Main';
// import HomePage from './features/Introduce/pages/Home';
// import ContactPage from './features/Introduce/pages/Contact';
// import AboutPage from './features/Introduce/pages/About';
// import UserProfile from './features/Information/pages/UserProfile';
// Lazy loading components
const AuthMain = React.lazy(() => import('./features/Auth/pages/Main'));
const HomePage = React.lazy(() => import('./features/Introduce/pages/Home'));
const ContactPage = React.lazy(() => import('./features/Introduce/pages/Contact'));
const AboutPage = React.lazy(() => import('./features/Introduce/pages/About'));
const UserProfile = React.lazy(() => import('./features/Information/pages/UserProfile'));
const ServicesPage = React.lazy(() => import('./features/Service/pages/Services'));
const ServiceDetailsPage = React.lazy(() => import('./features/Service/pages/ServiceDetails'));
const AdoptionPage = React.lazy(() => import('./features/AdoptPet/pages/Adoption'));
const AdoptionSinglePage = React.lazy(() => import('./features/AdoptPet/pages/AdoptionSingle'));
const GalleryPage = React.lazy(() => import('./features/Introduce/pages/Gallery'));
const OurTeamPage = React.lazy(() => import('./features/Introduce/pages/OurTeam'));
const HistoriesPage = React.lazy(() => import('./features/Information/pages/Histories'));
const PaymentPage = React.lazy(() => import('./features/AdoptPet/pages/Payment'));
const ServicesPaymentPage = React.lazy(() => import('./features/Service/pages/ServicesPayment'));
const AdminPage = React.lazy(() => import('./features/Admin/pages/Main'))
//

function App() {
  const dispatch = useDispatch();
  const handleEventLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <Router>
        <Header handleEventLogout={handleEventLogout} />
        <Admin handleEventLogout={handleEventLogout} />
        <BackToTop key={250} />
        <Routes>
          <Route path='*' element={<NotFound />} />

          <Route path="/" element={<Navigate to='/home' replace />} />

          {/* Admin can't use */}
          <Route element={<CustomerRoutes />}>
            {/* public routes */}
            <Route
              path='/home'
              element={
                <React.Suspense fallback={<Loading />} >
                  <HomePage />
                </React.Suspense>
              }
            />

            <Route
              path='/aboutus'
              element={
                <React.Suspense fallback={<Loading />} >
                  <AboutPage />
                </React.Suspense>
              }
            />
            <Route
              path='/ourteam'
              element={
                <React.Suspense fallback={<Loading />}>
                  <OurTeamPage />
                </React.Suspense>
              }
            />

            <Route
              path='/gallery'
              element={
                <React.Suspense fallback={<Loading />}>
                  <GalleryPage />
                </React.Suspense>
              }
            />
            <Route
              path='/contact'
              element={
                <React.Suspense fallback={<Loading />} >
                  <ContactPage />
                </React.Suspense>
              }
            />
            <Route
              path='/adoption'
            >
              <Route
                path=''
                element={
                  <React.Suspense fallback={<Loading />} >
                    <AdoptionPage />
                  </React.Suspense>
                }
              />

              <Route
                path=":id"
                element={
                  <React.Suspense fallback={<Loading />} >
                    <AdoptionSinglePage />
                  </React.Suspense>
                }
              />

              <Route element={<PrivateRoutesUser />}>
                <Route
                  path=":id/payment"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <PaymentPage />
                    </React.Suspense>
                  }
                />
              </Route>

            </Route>

            <Route
              path='services'
            >
              <Route
                path=''
                element={
                  <React.Suspense fallback={<Loading />}>
                    <ServicesPage />
                  </React.Suspense>
                }
              />
              <Route
                path=':id'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <ServiceDetailsPage />
                  </React.Suspense>
                }
              />
              <Route element={<PrivateRoutesUser />}>
                <Route
                  path="payment"
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <ServicesPaymentPage />
                    </React.Suspense>
                  }
                />
              </Route>
            </Route>
          </Route>

          {/* use logged in routes */}
          <Route element={<PublicRoutes />} >
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<Loading />} >
                  <AuthMain />
                </React.Suspense>
              }
            />

            <Route
              path="/register"
              element={
                <React.Suspense fallback={<Loading />} >
                  <AuthMain />
                </React.Suspense>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <React.Suspense fallback={<Loading />} >
                  <AuthMain />
                </React.Suspense>
              }
            />
          </Route>

          {/* logged in & role: User */}
          <Route element={<PrivateRoutesUser />}>
            <Route
              path='/profile'
              element={
                <React.Suspense fallback={<Loading />}>
                  <UserProfile />
                </React.Suspense>
              }
            />

            <Route
              path='history'
              element={
                <React.Suspense fallback={<Loading />}>
                  <HistoriesPage />
                </React.Suspense>
              }
            />
          </Route>

          {/* logged in & role: Admin */}
          <Route element={<PrivateRoutesAdmin />}>
            <Route path='admin'>
              <Route
                path=''
                element={
                  <Navigate to='dashboard' replace />
                }
              />

              <Route
                path="accounts"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <AccountsManagement />
                  </React.Suspense>
                }
              />

              <Route
                path="dashboard"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <Dashboard />
                  </React.Suspense>
                }
              />

              <Route
                path="booking"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <BookingService />
                  </React.Suspense>
                }
              />

              <Route
                path="petsmanagement"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <PetManagement />
                  </React.Suspense>
                }
              />

              <Route
                path="servicesmanagement"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <ServiceManagement />
                  </React.Suspense>
                }
              />

              <Route
                path='profile'
                element={
                  <React.Suspense fallback={<Loading />}>
                    <UserProfile />
                  </React.Suspense>
                }
              />

            </Route>
          </Route>

          {/* middle routes */}
          <Route
            path='/confirm-email/:token'
            element={<AuthConfirmEmail />}
          />
        </Routes>
        <NewsLetter heading='Subscribe to our newsletter' description='We send e-mails once a month, we never send Spam!' />
        <Footer />
      </Router>
    </>
    // <>
    //   <Router>
    //     <Admin />
    //     <Routes>
    //       {/* <Route path='/admin' element={<Admin />} /> */}

    //       <Route
    //         path="/accounts"
    //         element={
    //           <React.Suspense fallback={<Loading />}>
    //             <AccountsManagement />
    //           </React.Suspense>
    //         }
    //       />

    //       <Route
    //         path="/dashboard"
    //         element={
    //           <React.Suspense fallback={<Loading />}>
    //             <Dashboard />
    //           </React.Suspense>
    //         }
    //       />

    //       <Route
    //         path="/booking"
    //         element={
    //           <React.Suspense fallback={<Loading />}>
    //             <BookingService />
    //           </React.Suspense>
    //         }
    //       />

    //       <Route
    //         path="/petsmanagement"
    //         element={
    //           <React.Suspense fallback={<Loading />}>
    //             <PetManagement />
    //           </React.Suspense>
    //         }
    //       />
    //       <Route
    //         path="/servicesmanagement"
    //         element={
    //           <React.Suspense fallback={<Loading />}>
    //             <ServiceManagement />
    //           </React.Suspense>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </>
  );
}
export default App;
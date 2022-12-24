import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Admin from './Pages/Dashboard/Admin/Admin';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import Review from './Pages/Dashboard/Review/Review';
import CourseDetail from './Pages/Home/CourseDetail/CourseDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/Payment/Payment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Shop from './Pages/Shop/Shop';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />


          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          >
            <Route path='/dashboard' element={<MyOrder />} />
            <Route path='/dashboard/myorder' element={<MyOrder />} />
            <Route path='/dashboard/admin' element={<Admin />} />
            <Route path='/dashboard/review' element={<Review />} />
            <Route path='/dashboard/manageproduct' element={<ManageProduct />} />
          </Route>

          <Route path='/courses/:courseId'
            element={
              <PrivateRoute>
                <CourseDetail />
              </PrivateRoute>
            }
          />

          <Route path='/payment/:paymentId' element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
          />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
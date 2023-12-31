import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import {CitiesProvider} from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";


export default function App() {
  

  return (
    <AuthProvider>
    <CitiesProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>  }>
          <Route index element={<Navigate replace to="cities"/>}></Route>
          <Route path="cities"  element={<CityList />}></Route>
          <Route path="cities/:id" element={<City/>}/>
          <Route path="countries"  element={<CountryList />}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
    </AuthProvider>
  )
}

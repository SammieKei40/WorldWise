import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:3000"

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] =  useState(false)

  useEffect(function() {
    async function fetchCities(){
      try{
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        
        setCities(data)
    } catch {
        alert("Error loading data")
    } finally {
      setIsLoading(false)
    }
    }
    fetchCities()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities"/>}></Route>
          <Route path="cities"  element={<CityList cities={cities} isLoading={isLoading}/>}></Route>
          <Route path="cities/:id" element={<City/>}/>
          <Route path="countries"  element={<CountryList cities={cities} isLoading={isLoading}/>}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

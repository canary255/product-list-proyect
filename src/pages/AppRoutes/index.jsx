import { Route, Routes, Navigate } from "react-router-dom";
import { Form } from "../Form";
import ProductList from "../ProductList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/crearProducto" element={<Form />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

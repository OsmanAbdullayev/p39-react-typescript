import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import ServiceProvider from "../context/ServiceContext";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import AddServices from "../form/AddServices";
import HookUseLayoutEffect from "../pages/HookUseLayoutEffect";
import HookUseRef from "../pages/HookUseRef";
import HookUseImperativeHandle from "../pages/HookUseImperativeHandle";
const AppRouter = () => {
	return (
		<BrowserRouter>
			<Nav />
			<ServiceProvider>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/products/:id" element={<ProductDetails />}></Route>
					<Route path="/services" element={<Services />}></Route>
					<Route path="/services/:id" element={<ServiceDetails />}></Route>
					<Route path="/addServices" element={<AddServices />}></Route>
					<Route path="/useLayoutEffect" element={<HookUseLayoutEffect />}></Route>
					<Route path="/useRef" element={<HookUseRef />}></Route>
					<Route path="/useImperativeHandle" element={<HookUseImperativeHandle />}></Route>
				</Routes>
			</ServiceProvider>
		</BrowserRouter>
	);
};

export default AppRouter;

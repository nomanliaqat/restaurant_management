import { ThemeProvider } from "./context/Themes";
import { LoaderProvider } from "./context/Preloader";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overview, Documentation, ChangeLog, Error } from "./pages/supports";
import {
  Avatars,
  Alerts,
  Buttons,
  Charts,
  Tables,
  Fields,
  Headings,
  Colors,
} from "./pages/blocks";
import {
  Ecommerce,
  Analytics,
  CRM,
  ForgotPassword,
  Register,
  Login,
  UserList,
  UserProfile,
  MyAccount,
  ProductList,
  ProductView,
  ProductUpload,
  InvoiceList,
  InvoiceDetails,
  OrderList,
  Message,
  Notification,
  BlankPage,
  Settings,
} from "./pages/master";
import OrdersLine from "./pages/master/OrdersLine";
import ProductsView from "./pages/master/ProductsView";
import OrderReceipt from "./pages/master/OrderReceipt";
import ProductDetails from "./pages/master/ProductDetails";
import OrderNotification from "./pages/master/OrderNotification";
import ConfirmOrdersList from "./pages/master/ConfirmOrdersList"
import { store } from "./redux/storeConfig/store";
import axios from 'axios';

axios.defaults.baseURL = "http://idlogix.utis.pk:8089/public/api";
export default function App() {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            {/* master Pages */}
            {/* Sk Maplos-line Orders */}
            <Route path="/orders-line" element={<OrdersLine />} />
            <Route path="/my-products" element={<ProductsView />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/order-receipt" element={<OrderReceipt />} />
            <Route path="/order-notification" element={<OrderNotification />} />

            <Route path="/ecommerce" element={<OrdersLine />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-view" element={<ProductView />} />
            <Route path="/product-upload" element={<ProductUpload />} />
            <Route path="/invoice-list" element={<InvoiceList />} />
            <Route path="/invoice-details" element={<InvoiceDetails />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/blank-page" element={<BlankPage />} />
            <Route path="/kds" element={<ConfirmOrdersList />} />
{/* git */}
            {/* Blocks Pages */}
            <Route path="/headings" element={<Headings />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/alerts" element={<Alerts />} />
{/* git chnages */}
            {/* Supports Pages */}
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Login />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/changelog" element={<ChangeLog />} />
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </ThemeProvider>
    </Provider>
  );
}

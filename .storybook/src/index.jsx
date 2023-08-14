import React from "react";
import ReactDOMClient from "react-dom/client";
import { BillingManagement } from "./screens/BillingManagement";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BillingManagement />);

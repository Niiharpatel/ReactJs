import React, { useEffect } from "react";
import { userAuth } from "../Auth/Auth";
import { useNavigate } from "react-router";
import "../ProtectedRoute/ProtectedRoute.css";

export default function ProtectedRoute({ component }) {
  let { user } = userAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/alert");
    }
  }, []);
  return <>{component}</>;
}

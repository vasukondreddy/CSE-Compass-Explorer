
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DSA = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new DSA topics page
    navigate("/dsa/topics", { replace: true });
  }, [navigate]);

  return null;
};

export default DSA;

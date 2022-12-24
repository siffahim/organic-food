import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;
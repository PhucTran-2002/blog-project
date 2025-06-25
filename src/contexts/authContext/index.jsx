import {Children, useEffect} from "react";
import {auth} from "../../firebase/firebase";

const AuthContext = React.createContext();

export const AuthProvider = ({ Children }) => {
    const [ currenUser , setCurrenUser] = useState(null);
    const [ userLoggerIn , setUseLoggedIn]= useState(false);
    const [loading, setLoadung] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
    }, [])
}
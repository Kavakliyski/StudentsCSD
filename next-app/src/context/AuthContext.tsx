// react
import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

// firebase
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import { auth } from '../../firebase/firebase';



const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<Object | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const isAuthenticated = () => {
        return auth.currentUser !== null;
    };

    const login = async (email: string, password: string) => {
        try {

            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {

            alert(`Възникна грешка, провете имейла или паролата си! \n ${error}`);
            return false;
        }
    };

    const logout = async () => {
        setUser(null);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
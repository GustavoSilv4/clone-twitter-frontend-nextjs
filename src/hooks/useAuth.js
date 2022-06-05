import { useContext } from 'react';
import AuthContext from '../context/AppContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
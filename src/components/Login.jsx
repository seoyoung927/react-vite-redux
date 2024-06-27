import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../features/auth/authSlice';

function Login() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);

    const handleLogin = () => {
        const token = 'exampleToken';
        dispatch(login(token));
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleRefresh = () => {
        //const response = await api.post('/refresh-token');
        const response = { "status": 200 };
        if (response.status === 200) {
            dispatch(refresh(response.data.token));
        } else if (response.status === 403) {
            dispatch(sessionExpired());
        }
    }

    return <>
      <h1>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {isAuthenticated && <p>Token: {token}</p>}
    </>
}

export default Login;
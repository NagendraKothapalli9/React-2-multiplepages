import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // 1. Update state dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    // 2. The Logic Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsLoading(true);

        // Front-end Validation Condition
        if (!credentials.email.includes('@')) {
            setErrorMessage('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API Call (Replace with your fetch/axios logic)
            console.log("Authenticating...", credentials);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Success Condition: Redirect user or update Global Auth State
            alert('Login Successful!');
            // window.location.href = '/dashboard'; 

        } catch (err) {
            // Error Condition: Handle wrong password or server issues
            setErrorMessage('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.wrapper}>
            <form onSubmit={handleLogin} style={styles.card}>
                <h2>Welcome Back</h2>

                {/* Conditional Error Rendering */}
                {errorMessage && <div style={styles.errorBox}>{errorMessage}</div>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />

                {/* Loading State UI Condition */}
                <button type="submit" disabled={isLoading} style={styles.button}>
                    {isLoading ? 'Verifying...' : 'Login'}
                </button>

                <p style={styles.footerText}>
                    Don't have an account? <Button variant='text' onClick={() => navigate('/signup')}>Sign Up</Button>
                </p>
            </form>
        </div>
    );
};

// Modern, Minimalist Styling
const styles = {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' },
    card: { background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' },
    input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
    errorBox: { backgroundColor: '#ffebe9', color: '#d73a49', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', border: '1px solid rgba(215, 58, 73, 0.4)' },
    footerText: { marginTop: '20px', fontSize: '14px', color: '#666' }
};

export default Login;
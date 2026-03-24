import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // 1. Errors are now an object to track each field separately
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // 2. Clear the specific error as the user types to improve UX
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        let newErrors = {};
        const { username, email, password, confirmPassword } = formData;

        // Name Validation
        if (username.length < 3) {
            newErrors.username = "Minimum 3 characters required.";
        } else if (!/^[A-Z]/.test(username)) {
            newErrors.username = "First letter must be Capital.";
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            newErrors.password = "Need Capital, Small, Number, and Symbol (Min 6).";
        }

        // Confirm Password
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSuccess(true);
        } catch (err) {
            setErrors({ server: "Something went wrong. Try again." });
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) return <Box sx={{ textAlign: 'center', mt: 30 }}> <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Account Created! 🎉</h2> <Button variant="contained" color='warning' onClick={() => navigate('/login')}>Login</Button> </Box>;

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</h2>

                {/* --- Username Field --- */}
                <label style={styles.label}>Full Name</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={{ ...styles.input, }}
                />
                {errors.username && <span style={styles.errorText}>{errors.username}</span>}

                {/* --- Email Field --- */}
                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ ...styles.input }}
                />
                {errors.email && <span style={styles.errorText}>{errors.email}</span>}

                {/* --- Password Field --- */}
                <label style={styles.label}>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ ...styles.input }}
                />
                {errors.password && <span style={styles.errorText}>{errors.password}</span>}

                {/* --- Confirm Password Field --- */}
                <label style={styles.label}>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{ ...styles.input }}
                />
                {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}

                <button type="submit" disabled={isLoading} style={styles.button}>
                    {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
                <Button  sx={{mt:1,fontWeight: 'bold',backgroundColor: '#007bff'}} variant="contained"  onClick={() => navigate('/login')}>Login</Button>
            </form>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundColor: '#f0f2f5' },
    form: { padding: '2rem', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '360px', display: 'flex', flexDirection: 'column' },
    label: { fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px', color: '#444' },
    input: { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', marginBottom: '5px' },
    // 3. Error Text Style: Positioned directly under input
    errorText: { color: '#e03131', fontSize: '0.75rem', marginTop: '2px', marginBottom: '10px', fontWeight: '500' },
    button: { marginTop: '10px', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Signup;
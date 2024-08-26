import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Sign in successful!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google Sign-In successful!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-80 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Welcome Back!</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-red-500 text-white p-3 rounded hover:bg-red-600 transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In with Google'}
        </button>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
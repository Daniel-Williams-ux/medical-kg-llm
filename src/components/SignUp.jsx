import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign up successful!');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-500 via-blue-500 to-zinc-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-80 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Create an Account</h2>
        <form onSubmit={handleSignUp} className="space-y-6">
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
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account? <Link to="/signin" className="text-indigo-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

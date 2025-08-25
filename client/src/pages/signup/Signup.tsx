// src/pages/signup/Signup.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, type SignupForm } from '../../schemas/SignupSchema.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Define a type for the Button component's props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Define a type for the Input component's props
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className, type = 'text', ...props }) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200 ${className}`}
    type={type}
    {...props}
  />
);

// New component for the success message
interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg flex items-center space-x-2 z-50 animate-fade-in-down">
      <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
      <span>{message}</span>
    </div>
  );
};

const Signup = () => {
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } = {} } = useForm<SignupForm>({
    resolver: zodResolver(SignupSchema),
  });

  // Automatically hide the success message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const onSubmit = (data: SignupForm) => {
    console.log("Signup data:", data);
    setMessage("Signup successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Conditionally render the success message */}
      {message && <SuccessMessage message={message} />}

      <div
        className="relative w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-screen overflow-y-scroll
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-[#6A5A82] [&::-webkit-scrollbar-thumb]:rounded-full
        "
      >
        <Link
          to="/login"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
        </Link>
        <div className="flex justify-center">
          <img
            src="../../images/logo.png"
            alt="InnovateFund Logo"
            className="h-12 w-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">Create an account</h1>
        <div className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#6A5A82] hover:text-purple-800 font-semibold"
          >
            Sign in
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="First Name" {...register("firstName")} />
              {errors?.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex-1">
              <Input placeholder="Last Name" {...register("lastName")} />
              {errors?.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div>
            <Input placeholder="Email Address" {...register("email")} />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register("password")}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors?.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            {errors?.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="bg-purple-100 p-4 rounded-xl text-gray-700 space-y-2">
            <p className="font-semibold text-sm">Your password must have at least:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Minimum 12 characters</li>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 number</li>
              <li>1 symbol</li>
            </ul>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              {...register("terms")}
              className="mt-1"
            />
            <label>
              By clicking the Sign Up button below, you agree to the InnovateFund{" "}
              <a href="#" className="underline text-[#6A5A82] hover:text-purple-800">
                Terms of Service
              </a>{" "}
              and acknowledge the{" "}
              <a href="#" className="underline text-[#6A5A82] hover:text-purple-800">
                Privacy Notice
              </a>.
            </label>
          </div>
          {errors?.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}
          <Button
            type="submit"
            className="bg-[#6A5A82] hover:bg-purple-800 text-white"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
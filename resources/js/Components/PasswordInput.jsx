// resources/js/Components/PasswordInput.jsx
import { useState } from 'react';

// An icon for "eye" (visible)
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

// An icon for "eye-slashed" (hidden)
const EyeSlashedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243l-4.242-4.242z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.88 9.88l4.242 4.242M3.93 8.288A9.953 9.953 0 012.458 12c1.274 4.057 5.064 7 9.542 7 1.487 0 2.898-.242 4.21-.685M21 12a9.969 9.969 0 00-4.662-7.017" /></svg>
);

export default function PasswordInput({ className = '', ...props }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative">
            <input
                type={passwordVisible ? 'text' : 'password'}
                className={`block w-full border-gray-300 rounded-md shadow-sm pr-10 ${className}`}
                {...props}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
                {passwordVisible ? <EyeSlashedIcon /> : <EyeIcon />}
            </button>
        </div>
    );
}
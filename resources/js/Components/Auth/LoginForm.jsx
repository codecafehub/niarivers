// resources/js/Components/Auth/LoginForm.jsx
import { useForm, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import PasswordInput from "@/Components/PasswordInput"; 

export default function LoginForm({ closeModal }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

     useEffect(() => {
        return () => reset('password');
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
             onSuccess: () => closeModal(),
        });
    };
    return (
        <div className="p-8">
            <Head title="Log in" />
            <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
            <form onSubmit={submit} className="space-y-4">
                 <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} required autoFocus className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                     {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <PasswordInput
                        id="password"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        required
                        autoComplete="current-password"
                        className="mt-1"
                    />
                     {errors.password && <div className="text-sm text-red-600 mt-1">{errors.password}</div>}
                </div>
                <div className="block mt-4">
                    <label className="flex items-center">
                        <input type="checkbox" name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
                 <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 disabled:bg-blue-300">
                    Log In
                </button>
            </form>
        </div>
    );
}
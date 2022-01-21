import React from 'react';
import RegistrationForm from '../components/Auth/RegistrationForm';
import LoginForm from '../components/Auth/LoginForm';

export default function Home() {
    return (
        <div>
            <RegistrationForm />
            <LoginForm />
        </div>
    );
}

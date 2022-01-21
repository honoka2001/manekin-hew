import React from 'react';
import LoginUserField from '../components/Auth/LoginUserField';
import LogoutButton from '../components/Auth/LogoutButton';

export default function mypage() {
    return (
        <div>
            <h1>マイページ</h1>
            <LoginUserField />
            <LogoutButton />
        </div>
    );
}

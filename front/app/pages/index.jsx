import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import MainVisual from '../components/MainVisual';
import ManekinList from '../components/Manekins/ManekinList';
import Link from 'next/link';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function Home() {
    return (
        <div className=" bg-gray-100">
            <Header />
            <MainVisual />
            <div className="flex">
                <Sidebar />
                <ManekinList />
            </div>
            <Footer />
            <Link href="/manekin/createForm">
                <a>
                    <div className="fixed bottom-5 right-24 w-28 h-28 flex flex-col items-center justify-center text-white font-bold text-xl rounded-full bg-yellow-500 shadow hover:opacity-75">
                        出品
                    </div>
                </a>
            </Link>
        </div>
    );
}

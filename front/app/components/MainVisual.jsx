import React from 'react';
import Link from 'next/link';

export default function MainVisual() {
    return (
        <div className="bg-white pb-6 border-b">
            <div className="pt-20 flex justify-center items-center mx-20 space-x-4 ">
                <div>
                    <Link href="/">
                        <img src="/buy.svg" width="auto" height="auto" alt="buy" />
                    </Link>
                </div>
                <div>
                    <Link href="/manekin/createForm">
                        <img src="/sell.svg" width="auto" height="auto" alt="sell" />
                    </Link>
                </div>
                <div>
                    <Link href="/statistic">
                        <img src="/know.svg" width="auto" height="auto" alt="know" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

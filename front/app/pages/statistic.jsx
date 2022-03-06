import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';

export default function statistic() {
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/statistics').then((response) => {
            console.log(response);
            setStatistics(response.data);
        });
    }, []);
    return (
        <div>
            <Header />
            <section className="h-screen bg-pink-500">
                    <div className="m-auto block pt-16 pb-4 border-b-2 rounded mb-4 bg-white">
                        <div className="flex justify-center items-center mx-20 space-x-4">
                            <div class="px-7 py-3 mr-4 bg-pink-500 rounded-full">
                                <h2 class="text font-semibold text-center text-white ">
                                    現在の MANEKIN 利用分析
                                </h2>
                            </div>

                            <div class="rounded-full px-9 py-3 bg-white">
                                <p class="font-bold text-sm text-center text-pink-500">
                                    出品アイテム数
                                </p>
                                <p class="text-3xl font-semibold text-center text-pink-500">
                                    {statistics.selling_items_count}
																		<span className=' text-sm ml-2'>着</span>
                                </p>
                            </div>

                            <div class="rounded-full px-9 py-3 bg-white">
                                <p class="font-bold text-sm text-center text-pink-500">
                                    購入済みアイテム数
                                </p>
                                <p class="text-3xl font-semibold text-center text-pink-500">
                                    {statistics.purchased_items_count}
																		<span className=' text-sm ml-2'>着</span>
                                </p>
                            </div>

                            <div class="rounded-full px-9 py-3 bg-white">
                                <p class="font-bold text-sm text-center text-pink-500">
                                    アイテム購入率
                                </p>
                                <p class="text-3xl font-semibold text-center text-pink-500">
                                    {statistics.purchased_item_per}
																		<span className=' text-sm ml-2'>%</span>
                                </p>
                            </div>

                            <div class="rounded-full px-9 py-3 bg-white">
                                <p class="font-bold text-sm text-center text-pink-500">
                                    推定廃棄削減量
                                </p>
                                <p class="text-3xl font-semibold text-center text-pink-500">
                                    {statistics.waste_items_amount}
																		<span className=' text-sm ml-2'>kg</span>
                                </p>
                            </div>
														
                        </div>
                    </div>
                <div class="container max-w-7xl mx-auto bg-white rounded-lg p-8">
                    <h2 class="mb-8 text-2xl font-bold text-center text-gray-700">
                        服の大量廃棄問題
                    </h2>
                    <div class="flex flex-wrap -mx-8">
                        <div class="w-full lg:w-1/2 px-8">
                            <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                <div className='flex justify-center items-center'>
                                    <img
                                        src="/problem.svg"
                                        width="auto"
                                        height="auto"
                                        alt="problem"
                                        className=" h-96"
                                    />
                                </div>
                                {/* <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                                    最近洋服が安くなったと感じませんか？
                                    衣服のプチプラブームにより安い金額で洋服を手に入れられるようになりました。
                                    近年、最新の流行のスタイルを低価格に抑えた衣料品を、短いサイクルで大量生産、販売するファストファッションが流行しています。
                                    流行に敏感で同じ服を単一シーズンしか着用しないという消費者層に支持されている一方で、
                                    安い分、大量生産・大量消費の流れが出来上がり、
                                    気軽に洋服を買い、捨てるということに迷いがなくなってきている現状です。現在の日本の衣服の廃棄量は、年間を通して100万トンにも上り、年々増加しています。
                                </p> */}
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 px-8">
                            <ul class="space-y-12">
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-pink-50 text-pink-600">
                                            1
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold text-gray-700">
                                            ファストファッションの流行
                                        </h3>
                                        <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                            衣服のプチプラブームにより、安くておしゃれな服が短いサイクルで販売ファストファッションブランドが流行しています。
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-pink-50 text-pink-600">
                                            2
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold text-gray-700">
                                            衣服の大量生産・大量消費
                                        </h3>
                                        <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                            安い分、大量生産・大量消費の流れが出来上がり、
                                            気軽に洋服を買い、捨てるということに迷いがなくなってきています。
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4">
                                        <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-pink-50 text-pink-600">
                                            3
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="my-4 text-xl font-semibold text-gray-700">
                                            焼却による環境負荷
                                        </h3>
                                        <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                            廃棄焼却処分で発生する二酸化炭素（CO2）が、地球温暖化などの環境問題を加速させます。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

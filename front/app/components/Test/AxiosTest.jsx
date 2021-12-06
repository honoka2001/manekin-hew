import React, { useState, useEffect } from "react";
import axios from "axios";
import TestPostColumn from "./TestPostColumn";

function AxiosTest() {
    const [test_posts, setTestPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/posts")
            .then((results) => {
                console.log(results);
                setTestPosts(results.data);
            })
            .catch((data) => {
                console.log(data);
            });
    }, []);

    return (
        <div>
            {/* Tailwindテスト */}
            <div className="bg-gray-200 p-4">
                <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2">1</span>
                <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">2</span>
                <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">3</span>
            </div>

            {/* axiosテスト */}
            <h1>idとタイトル表示</h1>
            <ul>
                {test_posts.map((data) => {
                    return (
                        <TestPostColumn
                            key={data.id}
                            id={data.id}
                            title={data.title}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default AxiosTest;

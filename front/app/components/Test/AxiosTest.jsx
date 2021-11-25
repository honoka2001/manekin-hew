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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts', {
            headers: {
                Authorization: '123'
            }
        })
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <ul className="flex flex-col justify-center gap-2">
            {posts && posts.length > 0 && posts.map(eachPost => {
                return (
                    <li key={eachPost.id}>
                        <Post post={eachPost} />
                    </li>
                )
            })}
        </ul>
    );
};

export default PostList;
// npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post,setPost] = useState({})
    const [comments,setComments] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response =>response.json())
        .then(data => setPost(data))
    },[id])

    useEffect(()=>{
        const url2 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        fetch(url2)
        .then(response =>response.json())
        .then(data => setComments(data))
    },[id])
    return (
        <div>
            <h1>Here are post details:</h1>
            <h3>ID:{id}</h3>
            <p>User Posted: {post.id}</p>
            <p><strong>Title: {post.title}</strong></p>
            <p>{post.body}</p>
            <p>Comments length: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment} id={comment.id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;
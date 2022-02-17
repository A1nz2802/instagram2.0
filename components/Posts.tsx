import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { PostInterface } from "../interfaces/Post";
import Post from "./Post";

const Posts = () => {

  const [ posts, setPosts ] = useState<QueryDocumentSnapshot<DocumentData>[]>();

  useEffect(
    () => 
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
        (snapshot) => {
          setPosts( snapshot.docs );
        }
      ), [ db ]
    );

  return (
    <div>
      {
        posts?.map( ( post ) => (
          <Post 
            key={ post.id } 
            id={ post.id } 
            username={ post.data().username }
            userImg={ post.data().profileImg }
            img={ post.data().image }
            caption={ post.data().caption }
          />
        ))
      }
    </div>
  )
}

export default Posts;
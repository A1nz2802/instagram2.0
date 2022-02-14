import { PostInterface } from "../interfaces/Post";
import Post from "./Post";


const posts: PostInterface[] = [
  {
    id: 1,
    username: 'leydi.nu',
    userImg: 'https://i.imgur.com/8aGvu09.jpg',
    img: 'https://i.imgur.com/FE2gcQn.jpg',
    caption: 'Sé una persona bonita, bonita queriendo, bonita ayudando, bonita luchando, bonita para que el mundo siga creyendo que existe la gente buena, sé una persona bonita del alma.'
  },
  {
    id: 2,
    username: 'a1nz2802',
    userImg: 'https://i.imgur.com/3GWm1JB.jpg',
    img: 'https://i.imgur.com/mRP0wAr.jpg',
    caption: 'Feliz día madre!'
  }
]

const Posts = () => {
  return (
    <div>
      {
        posts.map( ({ id, username, userImg, img, caption }) => (
          <Post 
            key={ id } 
            id={ id } 
            username={ username }
            userImg={ userImg }
            img={ img }
            caption={ caption }
          />
        ))
      }
      
    </div>
  )
}

export default Posts;
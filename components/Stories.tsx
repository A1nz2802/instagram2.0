import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import { Suggestion } from '../interfaces/Stories';
import Story from './Story';
import { useSession } from 'next-auth/react';


const Stories = () => {

  const [ suggestions, setSuggestions ] = useState<Suggestion[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }))
    
    setSuggestions( suggestions );
  }, [])
  

  return (
    <div 
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
      border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

      {
        session && (
          <Story img={ session.user.image } username={ session.user.username } />
        )
      }

      {
        suggestions.map(({ id, avatar, username }) => (
          <Story 
            key={ id } 
            img={ avatar } 
            username={ username }
          />
        ))
      }
    </div>
  )
}

export default Stories;
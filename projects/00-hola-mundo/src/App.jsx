import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const users = [
        {
            userName: 'j_ismar00',
            name: 'Joel Florentin',
            isFollowing: false
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel Durian',
            isFollowing: true
        }
    ]

    return (
        <section className='App'>
            {
                users.map(user => {
                    return (
                        <TwitterFollowCard 
                        key={user.userName}
                        initialIsFollowing={user.isFollowing} 
                        userName={user.userName} >
                            {user.name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    )
}
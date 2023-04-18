import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialIsFollowing}){

    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    const text= isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClass= isFollowing 
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button '

    const handleClick= ()=>{
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' src={`https://unavatar.io/twitter/${userName}`} alt="El avatar de Joel" />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="tw-follow-card-text">{text}</span>
                    <span className="tw-follow-card-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
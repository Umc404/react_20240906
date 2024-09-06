import React from 'react';

const User = ({user, onRemove, onToggle}) => {

    return (
        <div className='user'>
            <h3>
                <span style={{
                    cursor:'pointer',
                    color: user.active?'green':'black'
                }}
                onClick={()=> onToggle(user.id)}>
                    {user.username}
                </span>
                <span>({user.email})</span>
                {/* function으로 매개변수를 전달할 경우 */}
                <button onClick={()=>onRemove(user.id)}>X</button>
            </h3>
        </div>
    );
};

export default User;
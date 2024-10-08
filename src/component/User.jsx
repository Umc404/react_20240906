import React from 'react';

const User = ({user, onRemove, onToggle}) => {

    return (
        <div className='user'>
            <div class='userArea'>
                <span style={{
                    cursor:'pointer',
                    color: user.active?'green':'black'
                }}
                onClick={()=> onToggle(user.id)}>
                    {user.username}
                </span>
                <span>({user.email})</span>
                {/* function으로 매개변수를 전달할 경우 */}
                <button class='removeBt' onClick={()=>onRemove(user.id)}>X</button>
            </div>
        </div>
    );
};

export default User;
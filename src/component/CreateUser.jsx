import React from 'react';

const CreateUser = ({username, email, onChange, onCreate}) => {
    return (
        <div className='createUser'>
            <input
                type="text" 
                name='username' 
                placeholder='이름' 
                onChange={onChange}
                value={username}
            />
            <br />
            <input type="text" 
                name='email'
                placeholder='e-mail' 
                onChange={onChange}
                value={email}
            />
            <br />
            <button onClick={onCreate}>create</button>
        </div>
    );
};

export default CreateUser;
import React from 'react';

const CreateStore = ({storename, storeitem, onChange, onCreate}) => {
    return (
        <div className='createStore'>
            <input
                type="text"
                name="storename"
                placeholder='가게명'
                onChange={onChange}
                value={storename}
            />
            <br />
            <input
                type="text"
                name="item"
                placeholder='메뉴'
                onChange={onChange}
                value={storeitem}
            />
            <br />
            <button onClick={onCreate}>추가</button>
        </div>
    );
};

export default CreateStore;
import React from 'react';

const Store = ({stores, onRemove}) => {

    return (
        <div className='store'>
            <h3>
                {stores.storename}({stores.item})
                <button onClick={()=>onRemove(stores.id)}>X</button>
            </h3>
        </div>
    );
};

export default Store;
import React, { useState } from 'react';
import Store from './Store';
import CreateStore from './CreateStore';

const StoreList = () => {
    const[stores, setStores] = useState([
        {
            id: 1,
            storename:'명륜진사',
            item:'고기'
        },
        {
            id: 2,
            storename:'산쪼메',
            item:'라멘'
        }
    ])
    // console.log(stores[stores.length-1]);
    // const nextId = useRef(stores.length);
    // const nextId = useRef(3);

    // CreateStore.jsx 참조 : 입력받아 여기로 넣음.
    const [ inputs, setInputs ] = useState({
        storename:'', 
        item: ''
    });
    // 입력받을때마다 갱신. e.target.value
    // ...input : 2개 이상의 입력값 중 하나의 값을 수정할 때,
    //            다른 값들이 초기화되지 않게 임시 저장
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
        
    }

    // onChange 에 입력된 값 사전정의 및 저장.
    const {storename, item} = inputs;

    // button 태그에 들어있음. 위에 사전 정의해놓은 값(storename, item) 합산해서
    // stores 배열에 저장. 파이썬에서 append인데 여기선 concat
    const onCreate = () => {
        const store = {
            id: stores.length+1,
            storename: storename,
            item: item
        }
        setStores(stores.concat(store));

        setInputs({
            storename:'',
            item:''
        })
        // nextId.current = store.length;
        console.log(stores);
    }  
    // Store.jsx 에서 클릭된 버튼 대상 id를 제외하고 화면에 출력.
    const onRemove = (id) => {
        setStores(stores.filter(store => store.id !== id));
    }

    return (
        <div className='storeList'>
            <CreateStore
                storename={storename}
                storeitem={item}
                onChange={onChange}
                onCreate={onCreate}
            />
            {
                stores.map((s,i)=> (
                    <Store stores={s} key={i} onRemove={onRemove}/>
                ))
            }
        </div>
    );
};

export default StoreList;
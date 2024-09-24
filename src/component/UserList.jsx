import React, { useMemo, useRef, useState } from 'react';
import User from './User';
import CreateUser from './CreateUser';

const UserList = () => {

    const[users, setUsers] = useState([
        {
            id: 1,
            username:'kim',
            email: '123@naver.com',
            active: true
        },
        {
            id: 2,
            username:'park',
            email: '456@naver.com',
            active: false
        },
        {
            id: 3,
            username:'choi',
            email: '789@naver.com',
            active: true
        },
        {
            id: 4,
            username:'lee',
            email: '024@naver.com',
            active: false
        },
        {
            id: 5,
            username:'hong',
            email: '689@naver.com',
            active: false
        }
    ]);

    const nextId = useRef(6);

    const [ inputs, setInputs ] = useState({
        username:'',
        email:''
    });

    // const username = inputs.username;
    // const email = inputs.email;

    // 위 코드와 아래 객체({username, email}) 로 선언한 아래 코드하고 같은 뜻.
    // 구조 분해 할당 : 객체의 구조를 분해하여 변수에 할당하는 방법.

    const { username, email } = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        // 변경되지 않은 대상값을 공백처리 => 기존값 유지
        setInputs({
            ...inputs, // 기존 inputs 값을 복사.(나중에 text_input 수정 시 다른 text_input 사라짐을 방지)
            [name] : value // 현재 변경된 값을 key: value 형태로 set
        })
        console.log(inputs);
    }

    const onCreate = () => {
        // 값이 추가되면 발생
        // 나중에 구현.
        // .current : 현재값을 의미.

        const user = {
            id: nextId.current,
            username: username,
            email: email
        };
        // 현재 users에 user추가 => concat
        setUsers(users.concat(user));

        // 기존 input 창 초기화
        setInputs({
            username:'',
            email:''
        })

        nextId.current += 1;  //ref() : 재 랜더링이 일어나지 않음.
        console.log(users);

    }
    const onRemove = (id) => {
        // filter : 배열의 항목을 제거하기 위해서 사용.
        // filter는 조건에 맞는 값만 배열로 리턴
        // user.id가 일치하지 않는 원소만 추출하여 새로운 배열로 리턴
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = (id) => {
        // map : 배열의 처리를 하여 다시 배열로 리턴
        // forEach : 배열의 처리'만' 함. 리턴하지 않음.
        // user.id 가 파라미터의 id 와 일치하면 active 상태를 반전시켜줌.
        
        setUsers(
            users.map(u => (
                    u.id === id? {...u, active : !u.active} : u    
            ))
        )
    }
    const countActiveUser = (users) => {
        // user.active 가 true 인 사용자를 세어서 리턴.
        return users.filter(user => user.active).length;
    }
    const count = useMemo(()=> countActiveUser(users), [users]);

    return (
        <div className='userList'>
            {/* 컴포넌트에서 데이터를 하위 컴포넌트에게 전달하는 방법 = props */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
            {
                // users.map((u,i)=>(
                //     <User user = {u} key={i} onRemove={onRemove} onToggle={onToggle}/>
                // ))
                users.map(u=>(
                    <User user = {u} key={u.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
            <div>완료 사용자수 : {count}</div>
        </div>
    );
};

export default UserList;
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './user.css'
const CreateUser = ({username, email, onChange, onCreate}) => {
    
    return (
        <div className='CreateUser'>
        <Form>
            <Row>
                <Col>
                    <Form.Control
                        type="text" 
                        name='username' 
                        placeholder='이름' 
                        onChange={onChange}
                        value={username}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="text" 
                        name='email'
                        placeholder='e-mail' 
                        onChange={onChange}
                        value={email}
                    />
                </Col>
            </Row>
        </Form>
                <button class='createBt' onClick={onCreate}>Create</button> 
     </div>
    )


    // return (
    //     <div className='createUser'>
    //         <input
    //             type="text" 
    //             name='username' 
    //             placeholder='이름' 
    //             onChange={onChange}
    //             value={username}
    //         />
    //         <br />
    //         <input type="text" 
    //             name='email'
    //             placeholder='e-mail' 
    //             onChange={onChange}
    //             value={email}
    //         />
    //         <br />
    //         <button onClick={onCreate}>create</button>
    //     </div>
    // );
};

export default CreateUser;
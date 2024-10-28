import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { setUsername } from './UserSlice';
import { useNavigate } from 'react-router-dom';
function CreateUser() {
    const [username, setUsernamestate] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        if (!username) return;
        dispatch(setUsername(username))
        navigate("/menu")
    }


    return (
        <form onSubmit={handleSubmit}>
            <p>👋 Welcome! Please start by telling us your name:</p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsernamestate(e.target.value)}
                className='input w-80 px-3 py-2 mb-6'
            />

            {username !== '' && (
                <div>
                    <Button>Start ordering</Button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    const errordata = useRouteError()
    console.log(errordata);

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{errordata.data || errordata.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default Error;
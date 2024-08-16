import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    console.log("err", err);

    return (
        <div className="error">
            <h1>Error page</h1>
            <h1>This is error page</h1>
            <p>{status + ": " + statusText}</p>
        </div>
    )
}

export default Error;
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error-page grid justify-center items-center text-center text-lg">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {isRouteErrorResponse(error) ? (
                    <i>{error.status} {error.statusText}</i>
                ) : (
                    <i>{String(error)}</i> // Fallback for unknown errors
                )}
            </p>
        </div>
    );
}

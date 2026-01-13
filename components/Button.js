import React from "react";

const Button = ({ loading, children, ...props }) => {
    return (
        <button disabled={loading} {...props} type="submit" className="btn btn-primary btn-lg px-4 rounded shadow-sm" tabIndex="-1">
            {loading ? (
                <><span className="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>
                    Sending ...
                </>
            ) : (
                children
            )}
        </button>
    )
}

export default Button;
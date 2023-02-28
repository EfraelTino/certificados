import React from 'react';

const Message = ({ message, cStyles }) => {
    return (
        <div className={cStyles}>
            <h1>{message}</h1>
        </div>
    );
}

export default Message;

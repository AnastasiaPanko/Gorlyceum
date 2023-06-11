import React from 'react';

const MyButton = ({ children, ...props }: any) => {
    return <button {...props}>{children}</button>;
};

export default MyButton;

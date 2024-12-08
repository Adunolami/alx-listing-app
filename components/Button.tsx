import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            {label}
        </button>
    );
};

export default Button;
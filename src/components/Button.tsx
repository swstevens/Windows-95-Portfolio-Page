import React from "react";

export interface ButtonProps {
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        onClick && onClick();
    };
    

    return (
        <div 
            onClick={handleClick}
        >
            <div style={styles.button}/>
        </div>
    )
};

const styles: StyleSheetCSS = {
    button: {
        background: 'lightGray',
        width: 16,
        height: 16,
        cursor: 'pointer',

    }

}

export default Button;
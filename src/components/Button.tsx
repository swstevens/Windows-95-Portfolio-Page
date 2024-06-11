import React from "react";

export interface ButtonProps {
    onClick?: () => void;
    img: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        props.onClick && props.onClick();
    };
    

    return (
        <div 
            onClick={handleClick}
        >
            <div style={styles.button}>
                <img src={props.img}/>
            </div>
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
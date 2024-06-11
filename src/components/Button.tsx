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
            style={styles.outerBorder}
        >
            <div style={styles.innerBorder}>
                <img src={props.img}/>
            </div>
        </div>
    )
};

const styles: StyleSheetCSS = {
    outerBorder: {
        border: `1px solid ${'black'}`,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        background: 'lightGray',

        cursor: 'pointer',
    },
    innerBorder: {
        border: `1px solid ${'darkGray'}`,
        borderTopColor: 'lightGray',
        borderLeftColor: 'lightGray',
        flex: 1,
    },

}

export default Button;
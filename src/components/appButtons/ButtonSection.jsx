import React from 'react'

const ButtonSection = (props) => {
    const {buttonList} = props;

    return (
        <div>
            {buttonList.map((item, index) => (
                <button key={index} className={item.class}><i class={item.icon}></i>{item.label}</button>
            ))}
        </div>
    )
}

export default ButtonSection;
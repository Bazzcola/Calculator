import React from 'react'

    function Button ({item, handleClick}) {
        
        return (
            <button type="button" className="button_area" onClick={() => handleClick(item)} onKeyDown={() => handleClick(item)}>
                <div className="button">{item}</div>
            </button>
        )
    }

export default Button
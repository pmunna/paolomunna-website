import React from "react"

const Button = ({ style, text, link, type }) => {  
    return (
        <div className={`btn ${style}`}>
            <span className="btn-bottom" />
            <div className="btn-top">
            {type === 'icon' ? <i className={`icon-${text}`} /> : null }
            {type !== 'mail' && type !== "icon" ? text : null }
            {type === 'mail' ? <><i className={`icon-${text}`} /><span className="text">E-mail</span></> : null }
            </div>
            <a href={link} className={'stretched-link'} />
        </div>
    )
}


export { Button }
export default Button

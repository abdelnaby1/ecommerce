import React from 'react'

const Select = ({children,name,items}) => {
    const child =  React.cloneElement(children,{name,items})
    return (
        <>
        {child}
        </>
    )
}

export default Select

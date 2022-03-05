import React, { useRef } from 'react'
import Set from './Set.js'

function Sets() {

    const setsContainer = useRef(null)

    function createSet() {
        setsContainer.append(<Set />);
    }


    return (
        <>
      <Set />
        </>
        )
}

export default Sets

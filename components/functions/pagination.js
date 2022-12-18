import React from 'react'
let screenSize = 0
if(typeof window !== "undefined"){
    screenSize = window.innerWidth
}

export default function pagination(section, operator) {
    if(section === "service"){
        return 360*operator
    }
    else if(section === "project"){
        return (screenSize-15)*operator
    }
    else if(section === "comment"){
        return (screenSize-30)*operator
    }
  
}
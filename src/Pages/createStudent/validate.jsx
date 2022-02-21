import React from 'react'

export const onchangeHandler2 = ({val,key,isValid}) => {
   if(val.length){
       isValid = false
   }
  return {isValid}
}

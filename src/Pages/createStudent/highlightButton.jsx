import React from 'react'

export const HighlightButton = (props) => {
   let highlightbtn = true
   if(!props.fname.isValid && props.fname.val &&
    !props.fathername.isValid && props.fathername.val &&
    !props.mothername.isValid && props.mothername.val &&
    !props.email.isValid && props.email.val &&
    !props.lname.isValid && props.lname.val &&
    !props.address.isValid && props.address.val &&
    !props.address2.isValid && props.address2.val &&
    !props.password.isValid && props.password.val &&
    !props.State.isValid && (props.State.val ==='Select state')
    ){
        highlightbtn = false
       console.log('AAAA',highlightbtn)
   }
   



  return {highlightbtn}
}
export default HighlightButton;
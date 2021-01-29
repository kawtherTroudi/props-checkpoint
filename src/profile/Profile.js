import React from 'react';
import PropTypes from "prop-types";
const Profile =({fullName, bio, profession,handleName,children, ...otherProps})=>{
    Profile.propTypes = {
        fullName : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.oneOf(['Doctor','Engineer','Teacher','Developer','other']),
        handleName : PropTypes.func

    }
    Profile.defaultProps = {
        profession : 'other',
        bio : 'I am '+ fullName}
    handleName()
    return (
        <>
        <div style ={{marginTop:'100px', marginLeft:'100px'}}>{children}</div>
        <div  style = {{color:'green', marginLeft:'100px',}}>
        <h1>{fullName}</h1>
        <h2>{bio}</h2>
        {console.log(bio)}
        <h2>{profession}</h2>
        </div>
        </>
    )
}
export default Profile;
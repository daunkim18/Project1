import React from 'react';

function Profile() {

    var loggedinuser = sessionStorage.getItem('currentUser'); 
    const innerHTML = {__html: 'Welcome, ' + loggedinuser}

    return(
        <>
        <div id='profileArea'>

            <div id='welcomeBar' dangerouslySetInnerHTML={innerHTML}></div>

            <br/><br/><br/>

            <h1>Order History</h1>

        </div>
        </>
    )
}

export default Profile;
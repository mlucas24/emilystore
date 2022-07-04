import * as React from 'react';

const Account = ({user}) => {

    return (
        <div>
            <img src={user.photouRL} />
        </div>
    )
}

export default Account;
import Button from "react-bootstrap/Button";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Auth/AuthContext';

const Review = () => {
    const {user} = useContext(UserAuth)
    return (
        <div>
            {
                user?.uid ?
                    <>
                        {
                            user.displayName
                        }
                </>
                :
                    <div className="text-center">
                       <Link> <Button>View Review</Button></Link>
                    </div>
            }
        </div>
    );
};

export default Review;
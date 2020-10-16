import React, { useEffect, useState } from 'react';
import ClientReviewSection from './ClientReviewSection';

const ClientSection = () => {
    // review display main component

    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://fast-sea-24208.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className="container mt-5">

            <h3 className="text-center mb-5">Clients<span style={{ color: "#7AB259" }}>Feedback</span></h3>
            <div className="row">
                {
                    review.map(reviews => <ClientReviewSection key={reviews._id} reviews={reviews}></ClientReviewSection>)
                }
            </div>

        </div>
    );
};

export default ClientSection;
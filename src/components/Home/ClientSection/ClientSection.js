import React, { useEffect, useState } from 'react';
import clientOne from '../../../images/customer-1.png'
import ClientReviewSection from './ClientReviewSection';

const ClientSection = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
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
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    useTitle('ServiceDetails');
    // const [review, setReview] = useState([])
    const { _id, service_id, title, img, description, rating, price, reviews } = useLoaderData();


    const { user } = useContext(AuthContext);

    // const handleReviewSubmit = event => {
    //     event.preventDefault();
    //     const review = event.target.review.value;

    //     const newReviews = {
    //         name: user.displayName,
    //         reviewServiceId: service_id,
    //         email: user.email,
    //         details: review
    //     }
    //     console.log(newReviews);

    //     fetch(`https://photographer-review-server-eight.vercel.app/services/${_id}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newReviews)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // const nNReviews = [...reviews, data];
    //             // setReview(nNReviews);
    //             // console.log(nNReviews);
    //         })
    //         .catch(err => console.log(err))

    // }



    return (
        <div className="card card-compact my-10 bg-base-100 shadow-xl w-10/12 mx-auto">
            <img className='w-10/12 mx-auto rounded-lg' src={img} alt="Shoes" />
            <div className="card-body m-10">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="card-title text-center text-3xl font-bold">{title}</h2>
                    <Link to='/'><button className='btn btn-outline'>Back to Home</button></Link>
                </div>
                <div className='flex justify-between items-center mx-5'>
                    <h2 className="card-title">Rating: <FaStar className='text-yellow-500' /> {rating}</h2>
                    <h2 className="card-title text-yellow-600 font-bold">Price: {price}</h2>
                </div>
                <p className='text-base'>{description}</p>
            </div>

            <div className='m-10'>

                <form>
                    <hr className='border border-emerald-700' />
                    <h1 className='font-bold text-xl my-3'>Write your feedback here.</h1>
                    <textarea name="review" className='rounded-lg w-full textarea textarea-accent text-xl' id="" cols="5" rows="5" placeholder="Write your review here ..." /> <br />
                    <input type="submit" className='btn btn-info my-3' value="Submit" />
                </form>
            </div>

            <div className='mx-10'>
                <hr className='border border-emerald-700' />
                <h1 className='text-3xl my-3 text-center font-semibold'>Customer's reviews about this service.</h1>
                <div>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                            img={img}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
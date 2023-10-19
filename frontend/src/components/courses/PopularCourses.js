import React, { useEffect, useState } from 'react'
import Heading from '../common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

import 'swiper/css';
import RatingStars from '../common/RatingStars';



const PrintStart = ({ stars }) => {
    const [starArray, setStarArray] = useState([])

    useEffect(() => {
        let array = []
        for (let index = 0; index < 5; index++) {
            if (index < stars) {
                array.push("text-yellow-300")
            }
            else {
                array.push("text-gray-200");
            }

        }
        setStarArray(array)
    }, [stars])



    return (
        <div className='flex space-x-1'>{
            starArray.map((color, index) => {
                return <RatingStars key={index} color={color} />
            })
        }

        </div>
    )
}

const PopularCourses = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/review/get-all")
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setReviews((prv) => {
                        return res.data["reviews"]
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className='mt-20 w-full max-w-[1400px] mx-auto  lg:px-10 md:px-8 px-4'>
            <div className='w-full'>
                <div className='mb-10'>
                    <Heading text1={"Quality Features"} text2={"Tutorials that people love most"} />
                </div>
                <div className='w-full'>

                    {
                        reviews.length === 0 ? <div className='text-sm font-medium'>No Reviews Found</div>:<Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                    >

                        {
                            reviews?.map((review, index) => {
                                return <SwiperSlide key={index}>
                                    <div className='w-full rounded-md overflow-hidden border hover:shadow-lg bg-white cursor-pointer'>
                                        <div className='w-full'>
                                            <img src='/images/tutrialimage1.png' className='w-full' />
                                        </div>
                                        <div className='px-6 py-4'>
                                            <div className='text-sm font-medium flex gap-3 '>
                                                <div className=''>
                                                    <PrintStart stars={review?.stars} />
                                                </div>
                                                <span className='text-gray-600'>{review.stars} ({review.watched} views)</span>
                                            </div>

                                            <h2 className='text-lg font-semibold font-sans my-2'>
                                                {review.title}
                                            </h2>
                                            <p className='text-[12px] font-medium leading-relaxed text-gray-600 flex items-center gap-2'>
                                                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1_601)">
                                                        <path d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z" fill="#B5C3CB" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_601">
                                                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                </span>
                                                <span>{review.watched} students watched</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                    }

                </div>

            </div>

        </div>
    )
}

export default PopularCourses
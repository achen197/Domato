export class ReviewRes {
    user_reviews: ReviewWrapper[];
}

export class ReviewWrapper {
    review: Review;
}

export class Review {
    id: string;
    rating: string;
    review_text: string;
    review_time_friendly: string;
    name: string;
    zomato_handle: string;
    foodie_level: string;
    profile_image: string;
}

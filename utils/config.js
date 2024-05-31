import { testimonial } from "../constants/constants";

export const getTestimonialData = (page) => testimonial.filter(
  (testimonialData) =>
    testimonialData.preview_on?.includes(page)
);


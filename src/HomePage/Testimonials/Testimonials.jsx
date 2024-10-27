import React, { useRef } from "react";
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import icon from "../assets/icon.svg";
import StarRating from "../../components/StarRating";

const Testimonials = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Move to the next slide
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Move to the previous slide
  };
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_container}>
        <h3 data-aos="fade-up">Testimonials</h3>
        <div className={styles.underline_icon}>
          <img src={icon} alt="icon" />
        </div>

        {/* <div className={styles.slider_container}> */}
        <Swiper
          key={"courseSwiper"}
          ref={swiperRef}
          loop={true}
          className={styles.slider_container}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          preventClicksPropagation={false}
          centeredSlides={true}
          speed={1000}
          preventClicks={false}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: `#nex1_1`,
            prevEl: `#next_2`,
          }}
          initialSlide={1}
          autoplay={{
            delay: 5000, // Delay between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interactions
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            800: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1551: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide key={"1"} className={styles.card}>
            {/* <div className={`${styles.card} ${styles.card_active}`}> */}
            <div className={styles.avatar_container}>
              <div className={styles.avatar_image}>
                <img src="/images/3.jpeg" alt="" />
              </div>
              <div className={styles.username_container}>
                <span>Albert Baby</span>
              </div>
              <StarRating rating={4} />

              <div className={styles.icon_container}></div>
            </div>

            <p>
              Very good service and full time supportive. They made our trip into an unforgettable experience. Enjoyed a lot.
              Thank you Dayout Holidays
            </p>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide key={"2"} className={styles.card}>
            {/* <div className={styles.card}> */}
            <div className={styles.avatar_container}>
              <div className={styles.avatar_image}>
                <img src="/images/2.jpeg" alt="" />
              </div>
              <div className={styles.username_container}>
                <span>Anandhu s</span>
              </div>
              <StarRating rating={5} />

              <div className={styles.icon_container}></div>
            </div>

            <p>
              Suddenly we planned a trip to Goa I have little bit confused about the package in goa at that time l accidentally
              view the Instagram page of Dayout Holidays and planned to travel to Goa with them .. Dayout holidays are surprised
              me the arrangements of our trips like hotel, rental scooter, and guides every day trip plans etc.. so happy with
              Dayout. i personally suggest Dayout holidays for everyone Goa trips..
            </p>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide key={"3"} className={styles.card}>
            {/* <div className={`${styles.card} ${styles.card_active}`}> */}
            <div className={styles.avatar_container}>
              <div className={styles.avatar_image}>
                <img src="/images/4.jpeg" alt="" />
              </div>
              <div className={styles.username_container}>
                <span>SARATH CHANDRAN C</span>
              </div>

              <StarRating rating={4} />

              <div className={styles.icon_container}></div>
            </div>

            <p>
              Onnum parayanilla pilleru poliyanu.its a great experience with their service.From the begining to the end they were
              supportive for every aspects.you can trust them and choose the packages.
            </p>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide key={"4"} className={styles.card}>
            {/* <div className={`${styles.card} ${styles.card_active}`}> */}
            <div className={styles.avatar_container}>
              <div className={styles.avatar_image}>
                <img src="/images/5.jpeg" alt="" />
              </div>
              <div className={styles.username_container}>
                <span>Sneha Soman</span>
              </div>

              <StarRating rating={4} />

              {/* <div className={styles.icon_container}></div> */}
            </div>

            <p>
              We recently returned from our second trip to Goa with dayout holidays and it was just as amazing as the first! The
              team's attention to detail and knowledge of Goa's hidden gems made our trip truly unforgettable. From the beautiful
              beaches to the vibrant culture, they helped us experience it all. We were impressed by their seamless planning and
              execution, making our trip hassle-free. Whether you're a first-time visitor or a repeat traveler like us, dayout
              holidays is the perfect partner for an unforgettable Goa experience!
            </p>
            {/* </div> */}
          </SwiperSlide>
          <div className={styles.swiper_custom_btns}>
            <button onClick={handlePrev}>
              <svg width="24" height="12" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.2509 9.04011C0.860376 8.64959 0.860376 8.01643 1.2509 7.6259L7.61486 1.26194C8.00539 0.871416 8.63855 0.871416 9.02908 1.26194C9.4196 1.65246 9.4196 2.28563 9.02908 2.67615L3.37222 8.33301L9.02908 13.9899C9.4196 14.3804 9.4196 15.0136 9.02908 15.4041C8.63855 15.7946 8.00539 15.7946 7.61486 15.4041L1.2509 9.04011ZM25.958 9.33301L1.95801 9.33301V7.33301L25.958 7.33301V9.33301Z"
                  fill="black"
                />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg width="24" height="12" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.6651 9.04011C26.0556 8.64959 26.0556 8.01643 25.6651 7.6259L19.3012 1.26194C18.9106 0.871416 18.2775 0.871416 17.8869 1.26194C17.4964 1.65246 17.4964 2.28563 17.8869 2.67615L23.5438 8.33301L17.8869 13.9899C17.4964 14.3804 17.4964 15.0136 17.8869 15.4041C18.2775 15.7946 18.9106 15.7946 19.3012 15.4041L25.6651 9.04011ZM0.958008 9.33301L24.958 9.33301V7.33301L0.958008 7.33301V9.33301Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </Swiper>
        {/* </div> */}
      </div>
      <div className={styles.testimonail_bottom_div}></div>
    </section>
  );
};

export default Testimonials;

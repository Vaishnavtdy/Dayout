// src/video player/VideoPlayer.tsx
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DownArrow from '../Down Arrow/DownArrow';
import banner from '../assets/banner.jpg';
import banner1 from '../assets/vertical1.png';
import banner2 from '../assets/vertical2.png';
import banner3 from '../assets/vertical3.png';
import background from '../assets/bg01.png';
import backgroundRyt from '../assets/bg02.png';
import placeL from '../assets/place.jpg';
import place2 from '../assets/place2.jpg';
import formbg from '../assets/formBg.jpg';
import packge001 from '../assets/place2.jpg';
import packge002 from '../assets/place-001.jpg';
import packge003 from '../assets/place-002.jpg';
import placeR from '../assets/hand.png';
import logoImg from '../assets/logo2.png';
import icon from '../assets/icon.svg';
import icon2 from '../assets/icon2.svg';
import advntre from '../assets/advntureLogo.png';
import slide1 from '../assets/slide01.jpg';
import slide2 from '../assets/slide02.jpg';
import slide3 from '../assets/slide03.jpg';
import slide4 from '../assets/slide04.jpg';
import './VideoPlayer.sass';
import AnimatedText from '../AnimatedText/AnimatedText';
import Navbar from '../Nav Bar/Layout';
import DatePicker from 'react-datepicker';
import VerticalSlider from '../Slider/VerticalSlider';
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const VideoPlayer: React.FC = ({ data }: any) => {
  console.log("data==>", data);
  const slides = [
    banner,
    banner1,
    banner2,
    banner3
  ];
  // State to manage the selected date range
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'goa',
    startDate: null,
    endDate: null
  });

  console.log("formData ===>", formData);


  const handleChange = (event: any) => {
    const { name, value } = event.target;

    // Update formValues state
    setFormData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  // Handle date change for the range picker
  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    setFormData((prevData) => ({
      ...prevData,
      startDate: start,
      endDate: end,
    }));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode;
    // Allow only digits (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const handleSubmit = (e: any) => {
    console.log("here..");

    e.preventDefault();

    emailjs.sendForm(
      'service_22hb6e7',          // Replace with your EmailJS service ID
      'template_e81rw9m',         // Replace with your EmailJS template ID
      e.target,
      'wiAjWhD1OAZZvm3co'              // Replace with your EmailJS user ID (or public key)
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message.');
      });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: 'goa',
      startDate: null,
      endDate: null
    });
    setStartDate(undefined)
    setEndDate(undefined)
  };

  return (

    <div className="main">
      <div className="video-container">
        <div className="imageBx">
          {/* <img src={banner} alt="banner" /> */}
          <VerticalSlider slides={slides} interval={4000} />

        </div>
        <div className="container">
          <div className="bannerContent">
            <div className="Hd">
              Excellence in Every Experience
            </div>
            <div className="subHd">"At Dayout Holidays, we bring you the best of Goa with tailor-made packages that combine adventure, relaxation, and unmatched service. From stunning beaches to exciting water sports and personalized travel plans, we ensure your holiday is nothing short of extraordinary."</div>
            <a href="#!" className="btnMore hoverAnim">
              <span>
                Enquire Now
              </span>
            </a>
          </div>
        </div>

      </div>
      <div className="counterSec">
        <div className="bgElement">
          <div className="lft">
            <img src={background} alt="background" />
          </div>
          <div className="ryt">
            <img src={backgroundRyt} alt="background" />
          </div>
        </div>
        <div className="container">
          <div className="flexBx">
            <div className="item">
              <div className="conterBx">
                <div className="icon">
                  <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.4952 22.2055C51.3931 18.7574 49.6696 13.9318 49.6696 13.9318C49.6696 13.9318 47.9461 18.7574 44.843 22.2055C44.843 22.2055 46.2648 22.9375 47.0411 22.5493C47.0411 22.5493 46.2648 25.5238 42.7746 29.4454C45.8767 30.3061 48.2035 28.8844 48.2035 28.8844V33.1509H49.3246H50.0135H51.1357V28.8844C51.1357 28.8844 53.4615 30.3061 56.5636 29.4454C53.0733 25.5238 52.2991 22.5493 52.2991 22.5493C53.0733 22.9375 54.4952 22.2055 54.4952 22.2055Z" fill="#F2A90D" />
                    <path d="M36.0136 33.2123C20.9114 31.175 17.8303 30.6955 23.6575 26.9297C27.9672 24.1443 37.4676 22.0879 42.3827 20.4761H36.7749V0.0372314H34.0754V20.476H32.2569C25.1889 21.8456 18.9586 23.0401 14.1118 25.2362C15.1014 27.19 16.5171 29.5933 18.2969 31.5701L20.9767 34.5487L17.4895 36.3445C17.7349 36.7678 18.0345 37.2384 18.3613 37.7291C26.4478 39.7774 33.554 40.5305 27.4323 43.9111C19.766 48.1455 14.6206 51.0817 10.0997 53.0818H44.442C47.8941 50.4613 53.9203 45.5542 54.8907 42.5528C56.2633 38.3074 51.7483 35.336 36.0136 33.2123Z" fill="#F2A90D" />
                    <path d="M11.5343 42.5165C11.5343 42.5165 14.6274 44.4071 18.7521 43.2628C14.1115 38.0479 13.0808 34.0942 13.0808 34.0942C14.1115 34.6099 16.002 33.6366 16.002 33.6366C11.8773 29.0523 9.5857 22.6359 9.5857 22.6359C9.5857 22.6359 7.294 29.0523 3.16832 33.6366C3.16832 33.6366 5.05866 34.6099 6.09046 34.0942C6.09046 34.0942 5.05877 38.0479 0.418121 43.2628C4.54281 44.4071 7.63691 42.5165 7.63691 42.5165V48.1889H9.12721H10.0432H11.5345V42.5165H11.5343Z" fill="#F2A90D" />
                    <path d="M51.1536 9.90937C51.2365 9.7565 51.2274 9.56547 51.1294 9.41863L48.4259 5.36422C48.3205 5.20433 48.3205 4.99521 48.4259 4.83422L51.1294 0.780908C51.2275 0.633084 51.2365 0.444027 51.1536 0.289184C51.069 0.134342 50.9071 0.0367432 50.7311 0.0367432H38.1241V10.1636H50.7311C50.9071 10.1637 51.0686 10.0641 51.1536 9.90937Z" fill="#F2A90D" />
                  </svg>
                </div>
                <div className="txtWrap">

                  <div className="txt">Trusted and Safe</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="conterBx">
                <div className="icon">
                  <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.085144 15.8437V29.0645C0.085144 32.1926 2.62088 34.7282 5.74884 34.7282H39.731C42.8591 34.7282 45.3947 32.1926 45.3947 29.0645V15.8437C45.3428 15.8473 45.2903 15.8492 45.2375 15.8492H0.242469C0.189534 15.8492 0.137068 15.8473 0.085144 15.8437Z" fill="#F2A90D" />
                    <path d="M45.3949 12.0789V6.40969C45.3949 3.28171 42.8593 0.745972 39.7312 0.745972H5.74903C2.62106 0.745972 0.0853271 3.28171 0.0853271 6.40969V12.0789C0.137251 12.0753 0.189717 12.0734 0.242652 12.0734H45.2377C45.2905 12.0734 45.343 12.0753 45.3949 12.0789Z" fill="#F2A90D" />
                  </svg>
                </div>
                <div className="txtWrap">
                  {/* <div className="count">15 <span>+</span></div> */}
                  <div className="txt">Unmatched Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="conterBx">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0318 33.243C18.0709 33.243 14.0467 30.8917 11.6982 27.7795C0.430575 27.7795 0.0899658 43.8761 0.0899658 43.8761H43.971C43.971 43.8761 44.8554 27.7081 32.1842 27.7081C29.8384 30.8587 25.9928 33.243 22.0318 33.243Z" fill="#F2A90D" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4703 13.9464C31.4703 18.5776 27.2428 27.4335 22.0238 27.4335C16.813 27.4335 12.5829 18.5748 12.5829 13.9464C12.5829 9.31789 16.8103 5.56018 22.0238 5.56018C27.2428 5.56293 31.4703 9.32064 31.4703 13.9464Z" fill="#F2A90D" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6834 9.94962C35.6834 9.08161 34.4748 8.38116 32.975 8.37567V6.58746C32.975 6.32101 33.0767 0.0828857 22.0563 0.0828857C11.0414 0.0828857 11.143 6.32101 11.143 6.58746V8.43885C11.1156 8.43885 11.0936 8.43061 11.0689 8.43061C9.57733 8.43061 8.37695 9.12007 8.37695 9.97434V17.5392C8.37695 18.388 9.58008 19.0802 11.0689 19.0802C12.5577 19.0802 13.7663 18.388 13.7663 17.5392V9.97434C13.7663 9.85623 13.6921 9.7491 13.6482 9.63923V7.57633C13.6482 7.3868 12.8571 2.67867 22.0563 2.67867C31.2582 2.67867 30.3023 7.3868 30.3023 7.57633V9.7491C30.2859 9.81777 30.2337 9.8782 30.2337 9.94962V17.6875C30.2337 18.5583 31.4505 19.2642 32.9585 19.2642C32.9915 19.2642 33.0162 19.2533 33.0492 19.2533V22.0798H30.3463V24.7442H35.7109L35.6834 9.94962Z" fill="#F2A90D" />
                  </svg>

                </div>
                <div className="txtWrap">
                  {/* <div className="count">15 <span>+</span></div> */}
                  <div className="txt">Single Destination Expertise (Goa)</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="conterBx">
                <div className="icon">
                  <svg width="67" height="40" viewBox="0 0 67 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0056 17.9027C11.8473 17.8115 11.6678 17.7633 11.4873 17.7633C11.1139 17.7633 10.7807 17.9575 10.5959 18.2825C10.4539 18.5262 10.4163 18.8028 10.4871 19.0665C10.5579 19.3308 10.7293 19.5524 10.97 19.6897C11.1275 19.7805 11.3051 19.828 11.4839 19.828C11.8525 19.828 12.198 19.631 12.3858 19.3138C12.5209 19.0794 12.5575 18.7997 12.4858 18.5312C12.4144 18.2631 12.2438 18.0398 12.0056 17.9027Z" fill="#F2A90D" />
                    <path d="M15.3551 28.4344C15.3344 28.414 15.3186 28.3894 15.3017 28.3658C15.2929 28.3537 15.2821 28.3435 15.2744 28.3307L15.2741 28.3304L15.2447 28.2806L13.7559 25.7657C13.7545 25.767 13.7528 25.7675 13.7515 25.7687C13.7229 25.7916 13.6919 25.8112 13.6596 25.8271C13.6545 25.8298 13.6494 25.8323 13.6441 25.8346C13.6111 25.8498 13.5766 25.8614 13.5412 25.8694C13.5359 25.8705 13.5308 25.8714 13.5254 25.8724C13.4941 25.8783 13.4622 25.8824 13.4299 25.8824C13.4252 25.8824 13.4205 25.8816 13.4157 25.8813C13.4111 25.8813 13.4063 25.8808 13.4016 25.8805C13.3642 25.8785 13.3267 25.8727 13.2899 25.8622C13.2882 25.8617 13.2865 25.8619 13.2849 25.8613L9.8815 27.8196C8.97975 28.3474 8.66612 29.5173 9.18566 30.4256C9.52324 31.0038 10.1627 31.3655 10.852 31.3655C11.1816 31.3655 11.5046 31.2805 11.786 31.1197L14.6191 29.4849C14.8623 29.3446 15.1731 29.4255 15.3169 29.6665C15.4608 29.9075 15.3842 30.2194 15.1454 30.3667C14.2736 30.9043 13.9778 32.0612 14.4865 32.9459C14.8263 33.5287 15.4633 33.8923 16.1478 33.8923C16.477 33.8923 16.8011 33.8057 17.0853 33.6424L19.4593 32.2645C19.7025 32.1237 20.0136 32.2039 20.1578 32.4452C20.3022 32.6861 20.2258 32.9985 19.9866 33.1459C19.1139 33.6839 18.82 34.8401 19.3317 35.7236C19.6706 36.3097 20.3047 36.6738 20.9868 36.6738C21.3178 36.6738 21.6444 36.5863 21.9313 36.4214L24.9733 34.6623C25.0543 34.6155 25.1427 34.5933 25.2299 34.5933C25.405 34.5933 25.5754 34.6829 25.6713 34.8438C25.8152 35.0848 25.739 35.3969 25.4999 35.5444C24.6271 36.0824 24.3334 37.2386 24.8452 38.122C25.1814 38.7089 25.8138 39.0721 26.497 39.0721C26.8293 39.0721 27.1576 38.9844 27.4465 38.8191L30.3695 37.126L15.4597 28.5144C15.4211 28.4918 15.3862 28.4649 15.3551 28.4344Z" fill="#F2A90D" />
                    <path d="M32.9856 13.2197C29.7045 13.2296 26.3311 12.9507 23.9544 10.7028C23.8725 10.6261 23.7962 10.5478 23.7227 10.4688C23.704 10.4487 23.6859 10.4287 23.6677 10.4086C23.6101 10.3444 23.5551 10.2798 23.503 10.2142C23.4887 10.1963 23.4732 10.1785 23.4591 10.1603C23.4031 10.0873 23.3511 10.0137 23.3019 9.93967C23.2773 9.90287 23.255 9.86576 23.2321 9.82865C23.2078 9.78873 23.1843 9.74864 23.1621 9.7084C23.146 9.67974 23.1269 9.65125 23.112 9.62244L21.6195 12.2109L18.8788 16.9568L14.3673 24.7749L16.0914 27.6918L31.3993 36.5333C31.3996 36.5335 31.4001 36.5338 31.4004 36.5341C31.4435 36.559 31.4873 36.5825 31.5316 36.6043C31.5507 36.6127 31.5698 36.6216 31.5888 36.6284C31.6176 36.6385 31.6445 36.6519 31.6705 36.6667C31.9367 36.776 32.2218 36.8332 32.5102 36.8332C33.3126 36.833 34.0588 36.4035 34.4579 35.7125C35.06 34.6713 34.7144 33.3142 33.6876 32.6874C33.4475 32.5408 33.37 32.2283 33.5138 31.9865C33.6575 31.7446 33.9691 31.6635 34.2124 31.8047L37.6749 33.8104C38.0109 34.0027 38.3958 34.1049 38.7857 34.1049C39.5897 34.1049 40.3358 33.6776 40.7332 32.9896C41.3373 31.9516 40.9902 30.5895 39.9603 29.9515C39.7217 29.8036 39.6459 29.4917 39.79 29.2509C39.9342 29.0101 40.2447 28.9298 40.4878 29.0702L43.2001 30.6393C43.5347 30.8318 43.9174 30.9337 44.3061 30.9337C45.1093 30.9337 45.8549 30.5064 46.2514 29.8187C46.8527 28.7788 46.5063 27.4159 45.4795 26.7801C45.241 26.6323 45.165 26.32 45.3097 26.0792C45.4541 25.8382 45.7652 25.7582 46.0079 25.8993L49.2294 27.7711C49.5604 27.9593 49.9437 28.0603 50.3338 28.0603C51.1434 28.0603 51.8941 27.6341 52.2929 26.9486C52.6627 26.3002 52.6859 25.5234 52.3593 24.849L32.9856 13.2197Z" fill="#F2A90D" />
                    <path d="M56.0246 18.3575C55.7497 18.3575 55.4904 18.4654 55.2943 18.6612C54.8929 19.0633 54.8929 19.7181 55.2948 20.1203C55.4904 20.3157 55.7497 20.4238 56.0246 20.4238C56.3005 20.4238 56.562 20.3154 56.7604 20.1186C57.1564 19.7187 57.1564 19.0626 56.7571 18.6594C56.5618 18.4659 56.3005 18.3575 56.0246 18.3575Z" fill="#F2A90D" />
                    <path d="M13.2907 24.5876C13.3 24.5637 13.3107 24.5402 13.3237 24.5176L15.1397 21.3801L18.005 16.4183L22.8341 8.0502C22.8351 8.04346 22.8373 8.03704 22.8384 8.03031C22.8417 8.01293 22.8466 7.99571 22.8502 7.97864C22.8593 7.93668 22.8685 7.89518 22.8801 7.85431C22.8882 7.82503 22.8984 7.79622 22.908 7.76725C22.9172 7.73954 22.926 7.71151 22.9363 7.68395C22.9402 7.67378 22.9429 7.66329 22.9469 7.65295C23.0476 7.39788 23.2333 7.08112 23.5728 6.77923L23.8703 6.26079L16.3828 1.94324L15.7393 3.05841C15.7305 3.12307 15.7098 3.18696 15.6754 3.24693L6.47535 19.182C6.442 19.2396 6.398 19.2894 6.34633 19.3295L5.75696 20.3505L13.2441 24.6675L13.2907 24.5876ZM11.4829 20.8549C11.1244 20.8549 10.7699 20.7602 10.458 20.5807C9.97914 20.307 9.63623 19.8633 9.4939 19.3323C9.35172 18.8016 9.42673 18.2469 9.70481 17.7699C10.0659 17.1339 10.7497 16.7359 11.4862 16.7359C11.8464 16.7359 12.2029 16.8314 12.517 17.0122C12.9938 17.2869 13.3347 17.7322 13.4771 18.2661C13.6192 18.7991 13.5462 19.3552 13.2715 19.8318C12.8972 20.4645 12.2129 20.8549 11.4829 20.8549Z" fill="#F2A90D" />
                    <path d="M57.9654 0.967163L52.6866 4.00686L60.378 17.3374L61.374 19.0632L66.6533 16.0135L57.9654 0.967163Z" fill="#F2A90D" />
                    <path d="M23.8451 8.23631C23.8445 8.24101 23.8434 8.2457 23.8426 8.2504C23.8201 8.39398 23.8265 8.54524 23.86 8.70104C23.8631 8.71591 23.8672 8.73079 23.871 8.74567C23.876 8.76649 23.8813 8.78731 23.8876 8.80814C23.894 8.82975 23.9009 8.85151 23.9082 8.87343C23.9126 8.88643 23.9175 8.89958 23.9222 8.91274C23.932 8.93967 23.9422 8.96676 23.9536 8.99384C23.956 8.99964 23.9585 9.00528 23.961 9.01091C24.0354 9.18347 24.1398 9.35852 24.2726 9.5317C24.2737 9.53326 24.2751 9.53483 24.2762 9.5364C24.3008 9.56834 24.3268 9.60028 24.3534 9.63222C24.3592 9.63911 24.365 9.646 24.3709 9.65289C24.395 9.68123 24.4198 9.70973 24.4456 9.73792C24.4567 9.75013 24.4683 9.76234 24.4797 9.7744C24.502 9.7982 24.5242 9.822 24.5474 9.84564C24.5832 9.88197 24.62 9.9183 24.6586 9.95431C26.7381 11.921 29.8813 12.1918 32.9684 12.1918L33.123 12.1917C33.1231 12.1917 33.1236 12.1917 33.1241 12.1917H33.1258C33.1263 12.1917 33.1267 12.1917 33.1273 12.1917C33.1378 12.1917 33.1482 12.1931 33.1587 12.1939C33.1703 12.1945 33.1818 12.1945 33.1934 12.1962C33.2078 12.1981 33.2221 12.2016 33.2362 12.2045C33.2442 12.2063 33.2523 12.2075 33.2601 12.2095C33.2734 12.213 33.2863 12.218 33.2991 12.2225C33.308 12.2257 33.3168 12.2283 33.3256 12.2318C33.3364 12.2363 33.3467 12.2421 33.3574 12.2474C33.3663 12.2518 33.3754 12.2556 33.384 12.2604L33.4228 12.283L51.313 23.0221L50.8519 22.2229L42.4334 7.6543L41.5763 7.90811C41.4043 7.959 41.2185 7.91673 41.0857 7.79632C39.6705 6.51392 38.4331 5.91656 37.1911 5.91656C36.2409 5.91656 35.41 6.25885 34.5302 6.62102C33.6768 6.97239 32.7945 7.33566 31.8224 7.33566C31.5429 7.33566 31.2636 7.30512 30.9924 7.24468C29.5932 6.9334 28.3419 6.77572 27.2734 6.77572C25.9373 6.77572 24.8998 7.03408 24.3263 7.48738C24.315 7.49866 24.3047 7.51087 24.2922 7.52105C24.1397 7.64647 24.0255 7.78489 23.9478 7.93426C23.9366 7.9565 23.9251 7.97873 23.9154 8.00128C23.9074 8.01976 23.8996 8.03839 23.8927 8.05718C23.8868 8.07378 23.8811 8.09069 23.876 8.10776C23.8714 8.12216 23.867 8.13672 23.8631 8.15144C23.8562 8.17978 23.85 8.20797 23.8451 8.23631Z" fill="#F2A90D" />
                    <path d="M60.7429 20.0227L59.6686 18.1606L50.7349 2.68323L43.2531 7.00689L43.3079 7.09943L45.7929 11.407L50.7836 20.0521L53.878 25.4072L61.3598 21.0904L60.7451 20.0255C60.7446 20.0247 60.7435 20.0238 60.7429 20.0227ZM57.4896 20.8447C57.0943 21.2368 56.5761 21.4507 56.0275 21.4507C55.4782 21.4507 54.961 21.2362 54.5713 20.8466C53.769 20.0433 53.769 18.7374 54.5708 17.9348C54.961 17.5448 55.4782 17.3303 56.0275 17.3303C56.5761 17.3303 57.0943 17.5443 57.4862 17.9329C58.284 18.7381 58.284 20.0429 57.4896 20.8447Z" fill="#F2A90D" />
                    <path d="M14.495 3.15817L9.2489 0.127869L0.562622 15.1734L5.80931 18.2042L14.495 3.15817Z" fill="#F2A90D" />
                  </svg>

                </div>
                <div className="txtWrap">
                  {/* <div className="count">15 <span>+</span></div> */}
                  <div className="txt">Affordable Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSec" id="enquire_now">
        <div className="bgImg">
          <img src={formbg} alt="banner" />
        </div>
        <div className="container">
          <div className="formBx">
            <div className="tleWrap">
              <div className="hd">
                Find your adventure with us
                <div className="icon">
                  <img src={icon2} alt="icon" />
                </div>
              </div>
            </div>
            <div className="flexBx">
              <div className="lft">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <label>
                            Full Name:
                          </label>
                          <input type="text" name="name" className="form-control" placeholder='Enter your name' onChange={handleChange} value={formData.name} required />
                          {/* <div className="icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.3738 12.3876L17 17M14.3333 7.66667C14.3333 11.3485 11.3485 14.3333 7.66667 14.3333C3.98476 14.3333 1 11.3485 1 7.66667C1 3.98476 3.98476 1 7.66667 1C11.3485 1 14.3333 3.98476 14.3333 7.66667Z" stroke="#C1C1C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <label>
                            Email Address:
                          </label>
                          <input type="email" name="email" className="form-control" placeholder='Enter your email' onChange={handleChange} value={formData.email} required />
                        </div>
                      </div>
                    </div>

                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <label>Phone Number</label>
                          <Form.Control
                            type="tel"
                            value={formData.phone}
                            name="phone"
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter your phone number"
                            pattern="[6-9]{1}[0-9]{9}"
                            maxLength={10}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <label>
                            Desired Destination:
                          </label>
                          <select className="form-control" name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                          >
                            <option value="goa">Goa</option>
                            <option value="gokarna">Gokarna</option>
                            <option selected value="delhi">Delhi</option>
                            <option value="kashmir">Kashmir</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <label>
                            Date:
                          </label>
                          <DatePicker
                            className="form-control"
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={handleDateChange}
                            isClearable
                            placeholderText="Select date range"
                            name='date'
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-item">
                      <div className="form-group">
                        <div className="form-box">
                          <div className="ryt">
                            <div className="btnBx">
                              <button type='submit' className="findBtn">
                                Enquire Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </form>
              </div>
              {/* <div className="ryt">
                <div className="btnBx">
                  <button type='submit' className="findBtn">
                      Find Now
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="placeSec" id="about_us">
        <div className="container">
          <div className="dFlex">
            <div className="lft">
              <div className="innerBx">
                <div className="carslBx">
                  <Carousel fade>
                    <Carousel.Item>
                      <div className="imgBx">
                        <img src={placeL} alt="image" className='carousel_image' />
                        <div className="logo">
                          <img src={logoImg} alt="image" />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="imgBx">
                        <img src={place2} alt="image" className='carousel_image' />
                        <div className="logo">
                          <img src={logoImg} alt="image" />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="imgBx">
                        <img src={placeL} alt="image" className='carousel_image' />
                        <div className="logo">
                          <img src={logoImg} alt="image" />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="imgBx">
                        <img src={place2} alt="image" className='carousel_image' />
                        <div className="logo">
                          <img src={logoImg} alt="image" />
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="cont">
                  {/* <div className="sHd">Welcome to the</div> */}
                  <div className="hd">Why Dayout Holidays?</div>
                  <p>At Dayout Holidays, we're redefining the way you experience travel. We believe that Goa isn’t a place for rigid guided tours; it’s a destination to be explored on your own terms. That’s why we don’t just offer you a vacation—we provide you with a dedicated tour coordinator who curates your itinerary based on your preferences, right when you need it.

                    Imagine this: no strict schedules, no rushing from one spot to another. Whether you want to relax by the beach, explore hidden gems, or indulge in local flavors, your journey unfolds at your pace. Simply wake up, give us a call, and our tour coordinator will craft your day’s adventure on the spot, ensuring it’s tailored exactly to your desires.

                    Our commitment to quality service and your satisfaction is unmatched, with 99.9% of our clients leaving with memories they cherish. We’re here 24/7, not just to support you, but to ensure your Goa experience is as flexible and spontaneous as you want it to be. Choose Dayout Holidays, and discover a travel experience that’s truly personalized, relaxed, and uniquely yours.
                  </p>

                </div>
              </div>
            </div>
            <div className="ryt">
              <div className="imgBxR">
                <img src={placeR} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pacakage" id="destinations">
        <div className="container">
          <div className="tleWrap">
            <div className="hd">
              OUR PACKAGES
              <div className="icon">
                <img src={icon} alt="icon" />
              </div>
            </div>
            <p>
              At Dayout Holidays, we understand that no two travelers are the same. That’s why our packages are designed with flexibility and customization in mind, ensuring that your Goa experience is as unique as you are. Whether you're seeking adventure, relaxation, or a blend of both, we have the perfect package waiting for you.

              Each package includes the essentials for a memorable getaway—handpicked accommodations, curated activities, and the freedom to explore at your own pace. And with our dedicated tour coordinator at your service, your itinerary is not just planned—it's tailored to your every whim, right when you need it.

              Dive into our thoughtfully crafted packages and find the one that’s just right for you. With Dayout Holidays, your perfect Goa escape is just a click away.
            </p>
          </div>
        </div>
        <div className="container w-100">
          <div className="mainBx">
            <div className="dFlex">
              <div className="item">
                <a href="#!" className="packageBx">
                  <div className="imgWrap">
                    <div className="imgBx">
                      <img src={packge001} alt="image" />
                    </div>
                    <div className="tleBx">
                      <div className="hd">Bachelor's Package</div>
                    </div>
                    <div className="contBx">
                      <div className="tle">Bachelor's Package</div>
                      <div className="info">
                        Starts from ₹3750 per person <br />
                        Perfect for groups of friends looking for a fun-filled adventure in Goa. Enjoy the freedom to explore and make the most of every moment.
                      </div>
                      <div className="btnBx hoveranim">
                        <span>
                          Enquire Now
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#!" className="packageBx">
                  <div className="imgWrap">
                    <div className="imgBx">
                      <img src={packge002} alt="image" />
                    </div>
                    <div className="tleBx">
                      <div className="hd">Couple's Package</div>
                    </div>
                    <div className="contBx">
                      <div className="tle">Couple's Package</div>
                      <div className="info">
                        Starts from ₹7000 per head <br />
                        Designed for couples seeking a romantic getaway, this package offers intimate experiences and the chance to create lasting memories together.
                      </div>
                      <div className="btnBx hoveranim">
                        <span>
                          Enquire Now
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#!" className="packageBx">
                  <div className="imgWrap">
                    <div className="imgBx">
                      <img src={packge003} alt="image" />
                    </div>
                    <div className="tleBx">
                      <div className="hd">Family Package</div>
                    </div>
                    <div className="contBx">
                      <div className="tle">Family Package</div>
                      <div className="info">
                        From ₹6500 per head <br />
                        Tailored for families, this package ensures a balance of relaxation and activities that everyone will enjoy, with the convenience of family-friendly amenities.
                      </div>
                      <div className="btnBx hoveranim">
                        <span>
                          Enquire Now
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="#!" className="packageBx">
                  <div className="imgWrap">
                    <div className="imgBx">
                      <img src={packge003} alt="image" />
                    </div>
                    <div className="tleBx">
                      <div className="hd">Student Group Packages</div>
                    </div>
                    <div className="contBx">
                      <div className="tle">Student Group Packages</div>
                      <div className="info">
                        Starts from ₹4800 per head <br />
                        Ideal for student groups, this package offers an exciting and educational escape, with activities designed to create unforgettable experiences with friends.
                      </div>
                      <div className="btnBx hoveranim">
                        <span>
                          Enquire Now
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="serviceSec" id="services">
        <div className="container">
          <div className="hd">We have the best services available for you!
            <div className="icon">
              <img src={icon} alt="icon" />
            </div>
          </div>
          <div className="mainbx">
            <div className="flexBx">
              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.406 95.625H90.8438V66.5518C96.6705 69.6676 96.8458 75.9836 96.8458 75.9836C97.9567 67.1861 93.9101 63.8026 90.7529 62.4957C90.7054 62.1383 90.6372 61.7839 90.5489 61.4343C96.9558 56.2116 102 58.3838 102 58.3838C96.2657 51.4558 91.3729 54.5078 88.5902 57.5997C87.6953 56.5314 86.5771 55.6722 85.3143 55.0827C84.0515 54.4932 82.6749 54.1876 81.2812 54.1875H73.3125V41.4375C73.3125 36.1654 69.0237 31.875 63.75 31.875H62.1562V22.3125C62.1562 20.596 61.31 18.5512 60.0955 17.3384L57.5678 14.8091C56.355 13.5979 54.3086 12.75 52.5938 12.75V10.4518C56.8427 12.895 57.9041 8.007 62.1562 10.4518V2.29978C57.9041 -0.143438 56.8427 4.74459 52.5938 2.29978V1.59375C52.5938 0.717187 51.875 0 51 0C50.1218 0 49.4062 0.717187 49.4062 1.59375V12.75C47.6914 12.75 45.645 13.5979 44.4322 14.8091L41.9045 17.3384C40.69 18.5512 39.8438 20.596 39.8438 22.3125V31.875H38.25C32.9763 31.875 28.6875 36.1654 28.6875 41.4375V54.1875H20.7188C19.3247 54.1879 17.9477 54.4936 16.6845 55.0831C15.4212 55.6726 14.3024 56.5316 13.4066 57.5997C10.6271 54.5078 5.73272 51.4542 0 58.3838C0 58.3838 5.04263 56.2116 11.4527 61.4375C11.3642 61.786 11.2961 62.1393 11.2487 62.4957C8.09147 63.8026 4.04334 67.1861 5.15578 75.9836C5.15578 75.9836 5.3295 69.6644 11.1578 66.5518V95.625H1.59375C0.715594 95.625 0 96.3438 0 97.2188V100.406C0 101.284 0.715594 102 1.59375 102H100.406C101.281 102 102 101.284 102 100.406V97.2188C102 96.3438 101.281 95.625 100.406 95.625ZM86.1071 65.4059C86.3733 65.331 86.6107 65.2433 86.8928 65.178C87.4283 65.2784 87.9224 65.4091 88.4021 65.5509C88.5217 66.563 88.6555 67.8507 88.7751 69.454H86.0227C86.0657 68.1456 86.0928 66.7877 86.1071 65.4059ZM86.0099 70.0103C87.2164 71.5387 88.23 71.0063 88.8372 70.3529C88.9281 71.6853 89.003 73.1914 89.0588 74.8696H85.7836C85.8728 73.3093 85.9509 71.6996 86.0099 70.0103ZM84.4688 65.9255C84.4825 65.9216 84.4959 65.9162 84.5086 65.9095C84.4688 68.807 84.3652 71.5466 84.2265 74.1173C84.0916 73.8765 83.8957 73.6753 83.6585 73.5341C83.4212 73.3928 83.1511 73.3164 82.875 73.3125H77.0753C77.4419 71.8208 78.2707 70.0883 79.9951 68.5312H82.875C83.75 68.5312 84.4688 67.8157 84.4688 66.9375V65.9255ZM17.5312 65.9287V66.9375C17.5312 67.8157 18.2468 68.5312 19.125 68.5312H22.0049C23.7278 70.0883 24.5565 71.8208 24.9231 73.3125H19.125C18.8489 73.3161 18.5785 73.3922 18.341 73.5332C18.1036 73.6742 17.9073 73.8751 17.7719 74.1158C17.6317 71.5482 17.5312 68.8086 17.4898 65.9111L17.5312 65.9287ZM13.5963 65.5525C14.0744 65.4091 14.5685 65.2784 15.1024 65.1796C15.3861 65.2481 15.6235 65.3326 15.8913 65.4075C15.9072 66.7893 15.9327 68.1472 15.9726 69.4572H13.2217C13.3429 67.8523 13.4752 66.5646 13.5963 65.5525ZM13.1612 70.3529C13.7716 71.0063 14.7852 71.5387 15.9901 70.0071C16.0459 71.698 16.124 73.3061 16.2164 74.8696H12.9365C12.9922 73.1914 13.0703 71.6853 13.1612 70.3529ZM12.9126 75.6537C13.6043 76.3295 14.8043 76.9733 16.2562 75.5788C16.3567 77.2315 16.4714 78.795 16.5957 80.2788H12.8616C12.8584 78.6292 12.8743 77.0785 12.9126 75.6537ZM12.8647 81.0199C13.6011 81.7642 14.9717 82.5292 16.6196 80.5959C16.779 82.4415 16.9479 84.1452 17.1185 85.6912H12.9667C12.9131 84.1346 12.8791 82.5773 12.8647 81.0199ZM12.9843 86.147C13.6696 86.8658 15.2378 88.018 17.2029 86.437C17.3113 87.3869 17.4229 88.2523 17.5297 89.0699V89.25C17.5297 89.3743 17.5727 89.4859 17.6014 89.6054C17.6747 90.1409 17.7416 90.6382 17.8117 91.1051H13.2329C13.1283 89.4536 13.0455 87.8007 12.9843 86.147ZM13.566 95.625C13.4417 94.1683 13.3381 92.7642 13.2504 91.3984C13.8593 92.1044 15.6363 93.695 17.8882 91.6199C18.2707 94.1906 18.556 95.625 18.556 95.625H13.566ZM35.0625 76.6004L33.0926 78.0938L33.8401 75.6633L31.875 74.1556L34.3055 74.146L35.0625 71.7188L35.8195 74.146L38.25 74.1556L36.2865 75.6617L37.0324 78.0938L35.0625 76.6004ZM38.25 100.406L40.3745 98.8125H61.6255L63.75 100.406H38.25ZM45.0011 78.0938L43.0312 76.6004L41.0614 78.0938L41.8088 75.6633L39.8438 74.1556L42.2742 74.146L43.0312 71.7188L43.7883 74.146L46.2188 74.1556L44.2552 75.6617L45.0011 78.0938ZM44.625 79.6875V95.625H39.8438V79.6875H44.625ZM52.9699 78.0938L51 76.6004L49.0301 78.0938L49.7776 75.6633L47.8125 74.1556L50.243 74.146L51 71.7188L51.757 74.146L54.1875 74.1556L52.224 75.6617L52.9699 78.0938ZM52.5938 79.6875V95.625H49.4062V79.6875H52.5938ZM60.9386 78.0938L58.9688 76.6004L56.9989 78.0938L57.7463 75.6633L55.7812 74.1556L58.2117 74.146L58.9688 71.7188L59.7258 74.146L62.1562 74.1556L60.1928 75.6617L60.9386 78.0938ZM62.1562 79.6875V95.625H57.375V79.6875H62.1562ZM64.9676 78.0938L65.7151 75.6633L63.75 74.1556L66.1805 74.146L66.9375 71.7188L67.6945 74.146L70.125 74.1556L68.1615 75.6617L68.9074 78.0938L66.9375 76.6004L64.9676 78.0938ZM82.875 84.4688H76.5C75.6218 84.4688 74.9062 85.1875 74.9062 86.0625V89.25C74.9062 90.1282 75.6218 90.8438 76.5 90.8438H82.6088C82.3992 92.3392 82.1559 93.8298 81.8789 95.3142L81.8152 95.625H68.5312V79.6875H71.7188V70.125H30.2812V79.6875H33.4688V95.625H20.1801L20.1179 95.3142C19.8409 93.8298 19.5981 92.3393 19.3896 90.8438H25.5C26.375 90.8438 27.0938 90.1282 27.0938 89.25V86.0625C27.0938 85.1875 26.375 84.4688 25.5 84.4688H19.125C18.948 84.4732 18.7732 84.5088 18.6086 84.5739C18.42 82.8173 18.2553 81.0582 18.1146 79.297C18.394 79.5436 18.7524 79.6821 19.125 79.6875H25.5C26.375 79.6875 27.0938 78.9719 27.0938 78.0938V74.9062C27.0938 74.2464 26.6826 73.6775 26.1088 73.4368C26.3909 71.5387 26.1423 69.9098 25.5478 68.5217C26.3989 68.4946 27.0938 67.7965 27.0938 66.9375V63.75C27.0938 62.875 26.375 62.1562 25.5 62.1562H19.125C18.8993 62.1575 18.6767 62.2086 18.4732 62.3061C18.2978 62.2312 18.1193 62.1531 17.952 62.0845C25.7247 54.782 31.875 60.2517 31.875 60.2517C31.0609 59.1496 30.0821 58.1793 28.9728 57.375H31.875V41.4375C31.875 37.9312 34.7422 35.0625 38.25 35.0625H43.0312V22.3125C43.0312 21.4359 43.5381 20.2119 44.158 19.5904L46.6857 17.0643C47.3057 16.4443 48.5281 15.9375 49.4062 15.9375H52.5938C53.4687 15.9375 54.6943 16.4443 55.3143 17.0659L57.842 19.592C58.4619 20.2119 58.9688 21.4359 58.9688 22.3125V35.0625H63.75C67.2547 35.0625 70.125 37.9312 70.125 41.4375V57.375H73.0256C71.9165 58.179 70.9381 59.1493 70.125 60.2517C70.125 60.2517 76.2737 54.782 84.0448 62.0845C83.8775 62.1531 83.699 62.2312 83.5253 62.3061C83.3223 62.2084 83.1002 62.1572 82.875 62.1562H76.5C75.6218 62.1562 74.9062 62.875 74.9062 63.75V66.9375C74.9085 67.3501 75.0707 67.7458 75.3588 68.0412C75.6468 68.3367 76.0382 68.5089 76.4506 68.5217C75.8561 69.9098 75.6091 71.5387 75.888 73.4368C75.3143 73.6775 74.9062 74.2464 74.9062 74.9062V78.0938C74.9062 78.9719 75.6218 79.6875 76.5 79.6875H82.875C83.2467 79.6814 83.6042 79.5436 83.8838 79.2986C83.7427 81.0597 83.5785 82.8188 83.3914 84.5755C83.227 84.5095 83.0521 84.4733 82.875 84.4688ZM88.4308 95.625H83.4408C83.4408 95.625 83.7261 94.1906 84.107 91.6215C86.3605 93.695 88.136 92.1044 88.7464 91.3968C88.6587 92.7642 88.5551 94.1683 88.4308 95.625ZM88.7639 91.1051H84.1851L84.3907 89.6293C84.4241 89.505 84.4688 89.3839 84.4688 89.25V89.054C84.5755 88.2412 84.6855 87.3789 84.7955 86.4322C86.759 88.0164 88.3272 86.8642 89.0125 86.1454C88.9536 87.728 88.8739 89.3743 88.7639 91.1051ZM89.0301 85.6928H84.8768C85.0505 84.1452 85.221 82.4431 85.3772 80.5943C87.0235 82.5276 88.3957 81.7673 89.1305 81.0247C89.1209 82.4957 89.0858 84.0512 89.0301 85.6928ZM85.4027 80.2788C85.527 78.7934 85.6433 77.2315 85.7453 75.5756C87.1941 76.9702 88.3957 76.3295 89.0858 75.6569C89.1225 77.0801 89.1384 78.6292 89.1337 80.2788H85.4027Z" fill="white" />
                      <path d="M33.6584 67.61V64.3795H36.5845V67.61H38.3552V59.8931H36.5845V62.8558H33.6584V59.8931H31.875V67.61H33.6584Z" fill="white" />
                      <path d="M44.5342 59.7656C42.2153 59.7656 40.7124 61.4964 40.7124 63.8058C40.7124 66.0067 42.0751 67.7344 44.4067 67.7344C46.7017 67.7344 48.2668 66.1996 48.2668 63.6719C48.2668 61.5395 46.9472 59.7656 44.5342 59.7656ZM44.5007 66.3494C43.3118 66.3494 42.5898 65.2848 42.5898 63.7723C42.5898 62.2758 43.2879 61.1506 44.488 61.1506C45.7168 61.1506 46.3893 62.3427 46.3893 63.7277C46.3893 65.229 45.7024 66.3494 44.5007 66.3494Z" fill="white" />
                      <path d="M49.6772 61.3561H51.7874V67.61H53.5676V61.3561H55.716V59.8931H49.6772V61.3561Z" fill="white" />
                      <path d="M59.6125 64.3444H62.5019V62.9244H59.6125V61.3258H62.6757V59.8931H57.8227V67.61H62.8382V66.1772H59.6125V64.3444Z" fill="white" />
                      <path d="M66.9997 59.8931H65.2163V67.61H70.1251V66.1437H66.9997V59.8931Z" fill="white" />
                      <path d="M54.1875 38.25H47.8125C46.9343 38.25 46.2188 38.9672 46.2188 39.8438V52.5938C46.2188 53.4719 46.9343 54.1875 47.8125 54.1875H54.1875C55.0625 54.1875 55.7812 53.4719 55.7812 52.5938V39.8438C55.7812 38.9672 55.0625 38.25 54.1875 38.25Z" fill="white" />
                      <path d="M47.8125 31.875C48.6875 31.875 49.4062 31.1578 49.4062 30.2812V23.9062C49.4062 23.0297 48.6875 22.3125 47.8125 22.3125C46.9343 22.3125 46.2188 23.0297 46.2188 23.9062V30.2812C46.2188 31.1578 46.9343 31.875 47.8125 31.875Z" fill="white" />
                      <path d="M54.1875 22.3125C53.3093 22.3125 52.5938 23.0297 52.5938 23.9062V30.2812C52.5938 31.1578 53.3093 31.875 54.1875 31.875C55.0625 31.875 55.7812 31.1578 55.7812 30.2812V23.9062C55.7812 23.0297 55.0625 22.3125 54.1875 22.3125Z" fill="white" />
                      <path d="M36.6562 44.625H41.4375C42.3125 44.625 43.0312 43.9094 43.0312 43.0312V39.8438C43.0312 38.9672 42.3125 38.25 41.4375 38.25H36.6562C35.7781 38.25 35.0625 38.9672 35.0625 39.8438V43.0312C35.0625 43.9078 35.7781 44.625 36.6562 44.625Z" fill="white" />
                      <path d="M43.0312 52.5938V49.4062C43.0312 48.5313 42.3125 47.8125 41.4375 47.8125H36.6562C35.7781 47.8125 35.0625 48.5313 35.0625 49.4062V52.5938C35.0625 53.4719 35.7781 54.1875 36.6562 54.1875H41.4375C42.3125 54.1875 43.0312 53.4719 43.0312 52.5938Z" fill="white" />
                      <path d="M60.5625 44.625H65.3438C66.2187 44.625 66.9375 43.9094 66.9375 43.0312V39.8438C66.9375 38.9672 66.2187 38.25 65.3438 38.25H60.5625C59.6843 38.25 58.9688 38.9672 58.9688 39.8438V43.0312C58.9688 43.9078 59.6843 44.625 60.5625 44.625Z" fill="white" />
                      <path d="M60.5625 54.1875H65.3438C66.2187 54.1875 66.9375 53.4719 66.9375 52.5938V49.4062C66.9375 48.5313 66.2187 47.8125 65.3438 47.8125H60.5625C59.6843 47.8125 58.9688 48.5313 58.9688 49.4062V52.5938C58.9688 53.4719 59.6843 54.1875 60.5625 54.1875Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Accommodation
                  </div>
                  <div className="sName">Stay in handpicked hotels and resorts offering comfort, convenience, and quality.
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33.6958 15.552V46.6559H38.8798V77.7599C38.8798 80.8703 40.9534 82.9439 44.0638 82.9439C47.1742 82.9439 49.2478 80.8703 49.2478 77.7599V0C40.435 0 33.6958 6.73919 33.6958 15.552Z" fill="white" />
                      <path d="M69.9839 5C62.7263 5 57.0239 12.776 57.0239 22.1072C56.5055 28.328 59.6159 34.0304 64.7999 37.6592V72.3919C64.7999 75.5023 66.8735 77.5759 69.9839 77.5759C73.0943 77.5759 75.1679 75.5023 75.1679 72.3919C75.1679 69.2815 75.1679 37.6592 75.1679 37.6592C80.3519 34.0304 83.4623 28.328 82.9439 22.1072C82.9439 12.776 77.2415 5 69.9839 5Z" fill="white" />
                      <path d="M23.328 6C21.7728 6 20.736 7.5552 20.736 8.592V21.552H15.552V8.592C15.552 7.0368 14.5152 6 12.96 6C11.4048 6 10.368 7.5552 10.368 8.592V21.552H5.18399V8.592C5.18399 7.0368 4.14719 6 2.592 6C1.0368 6 0 7.5552 0 8.592V25.6992C0 30.3648 3.62879 33.9936 7.77599 34.512V70.7999C7.77599 73.9103 9.84959 75.9839 12.96 75.9839C16.0704 75.9839 18.144 73.9103 18.144 70.7999V34.512C22.2912 33.9936 25.92 30.3648 25.92 25.6992V8.592C25.92 7.5552 24.8832 6 23.328 6Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Food
                  </div>
                  <div className="sName">Enjoy delicious and diverse culinary experiences tailored to your preferences.
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.72 0C8.4825 0 4.68 3.38203 4.68 12.48V63.96C4.68 66.0806 5.30156 67.6102 6.24 68.7375V73.32C6.24 75.8977 8.34234 78 10.92 78H17.16C19.7377 78 21.84 75.8977 21.84 73.32V71.76H56.16V73.32C56.16 75.8977 58.2623 78 60.84 78H67.08C69.6577 78 71.76 75.8977 71.76 73.32V68.7375C72.6984 67.6102 73.32 66.0806 73.32 63.96V14.04C73.32 7.24547 72.4791 0 62.4 0H18.72ZM23.4 6.24H56.16C57.0253 6.24 57.72 6.94078 57.72 7.8V10.92C57.72 11.7792 57.0253 12.48 56.16 12.48H23.4C22.5408 12.48 21.84 11.7792 21.84 10.92V7.8C21.84 6.94078 22.5408 6.24 23.4 6.24ZM17.16 17.16H60.84C63.96 17.16 65.52 18.72 65.52 21.84V40.56C65.52 43.68 62.4731 45.1425 60.84 45.1425L17.16 45.24C14.04 45.24 12.48 43.68 12.48 40.56V21.84C12.48 18.72 14.04 17.16 17.16 17.16ZM3.12 18.72C1.40156 18.72 0 20.1216 0 21.84V34.32C0 36.0384 1.40156 37.44 3.12 37.44V18.72ZM74.88 18.72V37.44C76.6045 37.44 78 36.0384 78 34.32V21.84C78 20.1216 76.6045 18.72 74.88 18.72ZM17.94 53.04C20.9564 53.04 23.4 55.4836 23.4 58.5C23.4 61.5164 20.9564 63.96 17.94 63.96C14.9236 63.96 12.48 61.5164 12.48 58.5C12.48 55.4836 14.9236 53.04 17.94 53.04ZM60.06 53.04C63.0764 53.04 65.52 55.4836 65.52 58.5C65.52 61.5164 63.0764 63.96 60.06 63.96C57.0436 63.96 54.6 61.5164 54.6 58.5C54.6 55.4836 57.0436 53.04 60.06 53.04Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Taxi Services
                  </div>
                  <div className="sName">Reliable and comfortable transportation to get you wherever you need to go
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="100" height="112" viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M59.1352 16.9306C58.1993 10.5029 56.0277 5.02939 53.3047 2.29034C52.6047 1.52525 51.6984 0.978916 50.6949 0.717164C50.2589 0.606596 49.8026 0.60426 49.3655 0.710321C48.3431 0.962779 47.4197 1.51491 46.7134 2.296C43.9893 5.02018 41.8153 10.4938 40.8863 16.9307C40.2414 23.5058 40.1194 30.1217 40.5214 36.7161C40.5587 38.1524 40.5957 39.6646 40.6323 41.2526L30.2585 46.8417V46.7959C30.2526 46.1297 29.9845 45.4926 29.5124 45.0226C29.0402 44.5525 28.4019 44.2874 27.7356 44.2845L24.8525 44.2822C24.1786 44.2817 23.532 44.5488 23.055 45.0248C22.8204 45.2583 22.6347 45.5361 22.5085 45.8422C22.3824 46.1482 22.3185 46.4763 22.3205 46.8073L22.3216 51.1219L20.8343 51.9228C20.7584 51.3118 20.4622 50.7495 20.0014 50.3413C19.5405 49.9331 18.9466 49.707 18.3309 49.7054L15.4351 49.7066C14.7626 49.7079 14.1182 49.9763 13.6434 50.4526C13.4083 50.6857 13.2222 50.9634 13.096 51.2696C12.9699 51.5757 12.9062 51.904 12.9089 52.2351L12.9089 56.1938L2.36111 61.879C2.1174 62.012 1.89428 62.1796 1.69868 62.3766C1.13748 62.9357 0.817161 63.6921 0.806229 64.4842L0.806298 70.1911C0.799913 70.8183 1.04266 71.4224 1.4813 71.8707C1.77868 72.1758 2.15437 72.393 2.56712 72.4985C2.97987 72.6041 3.41369 72.5939 3.82102 72.4691L30.4244 64.9361C30.664 64.8817 30.9078 64.8485 31.1532 64.8366L40.8841 64.8354C41.1278 74.1818 41.7169 82.8806 42.5968 90.0806C42.6769 90.7511 42.7673 91.3953 42.8519 92.0337L28.4485 104.039C28.3631 104.106 28.2821 104.177 28.2059 104.254C27.6076 104.877 27.2655 105.702 27.2472 106.565L27.2448 109.224C27.2383 109.536 27.2939 109.845 27.4085 110.135C27.523 110.425 27.6941 110.689 27.9119 110.912C28.2249 111.227 28.6228 111.445 29.0573 111.539C29.4917 111.632 29.944 111.598 30.3592 111.439L44.0613 106.563C44.2609 106.508 44.4657 106.475 44.6722 106.462L46.2077 106.455C46.559 107.247 47.0367 107.975 47.6218 108.613C47.9242 108.941 48.2894 109.204 48.6957 109.387C49.102 109.571 49.5411 109.671 49.9868 109.681L50.0497 109.677L50.0646 109.674C50.5074 109.661 50.9433 109.56 51.3467 109.377C51.75 109.194 52.1127 108.932 52.4134 108.606C52.9923 107.973 53.4659 107.25 53.8162 106.467L55.379 106.465C55.577 106.48 55.7731 106.513 55.9648 106.565L69.6349 111.43C70.0496 111.589 70.5012 111.626 70.9362 111.536C71.3712 111.446 71.7713 111.234 72.089 110.923L72.0982 110.914C72.316 110.695 72.4884 110.434 72.605 110.148C72.7217 109.862 72.7803 109.555 72.7778 109.246L72.7687 106.509C72.7367 105.653 72.3871 104.839 71.7882 104.227C71.7127 104.151 71.6543 104.093 71.6177 104.068L57.165 92.02C57.2554 91.385 57.3389 90.7385 57.4236 90.0704C58.3046 82.86 58.8961 74.1521 59.1318 64.8251L68.8752 64.8297C69.1231 64.8384 69.3696 64.8718 69.6109 64.9292L96.165 72.4496C96.5185 72.5601 96.8931 72.5854 97.2582 72.5234C97.6233 72.4614 97.9686 72.3139 98.2658 72.093C98.5631 71.8721 98.8038 71.5841 98.9684 71.2523C99.133 70.9206 99.2169 70.5546 99.213 70.1842L99.2153 64.4384C99.19 63.6519 98.8641 62.9049 98.3046 62.3515C98.1147 62.1613 97.899 61.9988 97.6638 61.8687L87.115 56.1824L87.1103 52.2214C87.1087 51.5528 86.8424 50.9121 86.3696 50.4393C85.8969 49.9666 85.2561 49.7002 84.5875 49.6985L81.6872 49.6997C81.0714 49.6989 80.4766 49.9232 80.0148 50.3306C79.5531 50.738 79.2562 51.3002 79.1803 51.9113L77.6987 51.1161L77.6999 46.7993C77.6957 46.1287 77.4277 45.4868 76.9539 45.0122C76.7211 44.7773 76.444 44.591 76.1385 44.4643C75.8331 44.3376 75.5055 44.273 75.1748 44.2742L72.287 44.2742C71.9536 44.2733 71.6233 44.3381 71.3151 44.4652C71.0069 44.5924 70.7268 44.7792 70.4911 45.015C70.2554 45.2507 70.0686 45.5307 69.9415 45.8389C69.8143 46.1471 69.7495 46.4774 69.7505 46.8108L69.7494 46.8394L59.3778 41.248C59.4159 39.6355 59.4548 38.1017 59.4944 36.6463C59.7221 28.2129 59.8823 22.1192 59.1352 16.9306Z" fill="#FEF7E7" />
                    </svg>
                  </div>
                  <div className="name">
                    Rental Vehicle Services
                  </div>
                  <div className="sName">Flexible vehicle rentals, including two-wheelers and cars, for your convenience
                  </div>
                </a>
              </div>

              {/* <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.72 0C8.4825 0 4.68 3.38203 4.68 12.48V63.96C4.68 66.0806 5.30156 67.6102 6.24 68.7375V73.32C6.24 75.8977 8.34234 78 10.92 78H17.16C19.7377 78 21.84 75.8977 21.84 73.32V71.76H56.16V73.32C56.16 75.8977 58.2623 78 60.84 78H67.08C69.6577 78 71.76 75.8977 71.76 73.32V68.7375C72.6984 67.6102 73.32 66.0806 73.32 63.96V14.04C73.32 7.24547 72.4791 0 62.4 0H18.72ZM23.4 6.24H56.16C57.0253 6.24 57.72 6.94078 57.72 7.8V10.92C57.72 11.7792 57.0253 12.48 56.16 12.48H23.4C22.5408 12.48 21.84 11.7792 21.84 10.92V7.8C21.84 6.94078 22.5408 6.24 23.4 6.24ZM17.16 17.16H60.84C63.96 17.16 65.52 18.72 65.52 21.84V40.56C65.52 43.68 62.4731 45.1425 60.84 45.1425L17.16 45.24C14.04 45.24 12.48 43.68 12.48 40.56V21.84C12.48 18.72 14.04 17.16 17.16 17.16ZM3.12 18.72C1.40156 18.72 0 20.1216 0 21.84V34.32C0 36.0384 1.40156 37.44 3.12 37.44V18.72ZM74.88 18.72V37.44C76.6045 37.44 78 36.0384 78 34.32V21.84C78 20.1216 76.6045 18.72 74.88 18.72ZM17.94 53.04C20.9564 53.04 23.4 55.4836 23.4 58.5C23.4 61.5164 20.9564 63.96 17.94 63.96C14.9236 63.96 12.48 61.5164 12.48 58.5C12.48 55.4836 14.9236 53.04 17.94 53.04ZM60.06 53.04C63.0764 53.04 65.52 55.4836 65.52 58.5C65.52 61.5164 63.0764 63.96 60.06 63.96C57.0436 63.96 54.6 61.5164 54.6 58.5C54.6 55.4836 57.0436 53.04 60.06 53.04Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Adventure Activities
                  </div>
                  <div className="sName">Thrill-seekers can enjoy activities like bungee jumping, paragliding, and paramotoring for an adrenaline-packed experience
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.72 0C8.4825 0 4.68 3.38203 4.68 12.48V63.96C4.68 66.0806 5.30156 67.6102 6.24 68.7375V73.32C6.24 75.8977 8.34234 78 10.92 78H17.16C19.7377 78 21.84 75.8977 21.84 73.32V71.76H56.16V73.32C56.16 75.8977 58.2623 78 60.84 78H67.08C69.6577 78 71.76 75.8977 71.76 73.32V68.7375C72.6984 67.6102 73.32 66.0806 73.32 63.96V14.04C73.32 7.24547 72.4791 0 62.4 0H18.72ZM23.4 6.24H56.16C57.0253 6.24 57.72 6.94078 57.72 7.8V10.92C57.72 11.7792 57.0253 12.48 56.16 12.48H23.4C22.5408 12.48 21.84 11.7792 21.84 10.92V7.8C21.84 6.94078 22.5408 6.24 23.4 6.24ZM17.16 17.16H60.84C63.96 17.16 65.52 18.72 65.52 21.84V40.56C65.52 43.68 62.4731 45.1425 60.84 45.1425L17.16 45.24C14.04 45.24 12.48 43.68 12.48 40.56V21.84C12.48 18.72 14.04 17.16 17.16 17.16ZM3.12 18.72C1.40156 18.72 0 20.1216 0 21.84V34.32C0 36.0384 1.40156 37.44 3.12 37.44V18.72ZM74.88 18.72V37.44C76.6045 37.44 78 36.0384 78 34.32V21.84C78 20.1216 76.6045 18.72 74.88 18.72ZM17.94 53.04C20.9564 53.04 23.4 55.4836 23.4 58.5C23.4 61.5164 20.9564 63.96 17.94 63.96C14.9236 63.96 12.48 61.5164 12.48 58.5C12.48 55.4836 14.9236 53.04 17.94 53.04ZM60.06 53.04C63.0764 53.04 65.52 55.4836 65.52 58.5C65.52 61.5164 63.0764 63.96 60.06 63.96C57.0436 63.96 54.6 61.5164 54.6 58.5C54.6 55.4836 57.0436 53.04 60.06 53.04Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Ayurvedic Spa
                  </div>
                  <div className="sName">Rejuvenate with traditional Ayurvedic treatments and spa services for a relaxing experience
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.72 0C8.4825 0 4.68 3.38203 4.68 12.48V63.96C4.68 66.0806 5.30156 67.6102 6.24 68.7375V73.32C6.24 75.8977 8.34234 78 10.92 78H17.16C19.7377 78 21.84 75.8977 21.84 73.32V71.76H56.16V73.32C56.16 75.8977 58.2623 78 60.84 78H67.08C69.6577 78 71.76 75.8977 71.76 73.32V68.7375C72.6984 67.6102 73.32 66.0806 73.32 63.96V14.04C73.32 7.24547 72.4791 0 62.4 0H18.72ZM23.4 6.24H56.16C57.0253 6.24 57.72 6.94078 57.72 7.8V10.92C57.72 11.7792 57.0253 12.48 56.16 12.48H23.4C22.5408 12.48 21.84 11.7792 21.84 10.92V7.8C21.84 6.94078 22.5408 6.24 23.4 6.24ZM17.16 17.16H60.84C63.96 17.16 65.52 18.72 65.52 21.84V40.56C65.52 43.68 62.4731 45.1425 60.84 45.1425L17.16 45.24C14.04 45.24 12.48 43.68 12.48 40.56V21.84C12.48 18.72 14.04 17.16 17.16 17.16ZM3.12 18.72C1.40156 18.72 0 20.1216 0 21.84V34.32C0 36.0384 1.40156 37.44 3.12 37.44V18.72ZM74.88 18.72V37.44C76.6045 37.44 78 36.0384 78 34.32V21.84C78 20.1216 76.6045 18.72 74.88 18.72ZM17.94 53.04C20.9564 53.04 23.4 55.4836 23.4 58.5C23.4 61.5164 20.9564 63.96 17.94 63.96C14.9236 63.96 12.48 61.5164 12.48 58.5C12.48 55.4836 14.9236 53.04 17.94 53.04ZM60.06 53.04C63.0764 53.04 65.52 55.4836 65.52 58.5C65.52 61.5164 63.0764 63.96 60.06 63.96C57.0436 63.96 54.6 61.5164 54.6 58.5C54.6 55.4836 57.0436 53.04 60.06 53.04Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Water Activities
                  </div>
                  <div className="sName">Dive into fun with water sports such as snorkeling, jet skiing, and parasailing
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="#!" className="serviceBx">
                  <div className="iconBx">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.72 0C8.4825 0 4.68 3.38203 4.68 12.48V63.96C4.68 66.0806 5.30156 67.6102 6.24 68.7375V73.32C6.24 75.8977 8.34234 78 10.92 78H17.16C19.7377 78 21.84 75.8977 21.84 73.32V71.76H56.16V73.32C56.16 75.8977 58.2623 78 60.84 78H67.08C69.6577 78 71.76 75.8977 71.76 73.32V68.7375C72.6984 67.6102 73.32 66.0806 73.32 63.96V14.04C73.32 7.24547 72.4791 0 62.4 0H18.72ZM23.4 6.24H56.16C57.0253 6.24 57.72 6.94078 57.72 7.8V10.92C57.72 11.7792 57.0253 12.48 56.16 12.48H23.4C22.5408 12.48 21.84 11.7792 21.84 10.92V7.8C21.84 6.94078 22.5408 6.24 23.4 6.24ZM17.16 17.16H60.84C63.96 17.16 65.52 18.72 65.52 21.84V40.56C65.52 43.68 62.4731 45.1425 60.84 45.1425L17.16 45.24C14.04 45.24 12.48 43.68 12.48 40.56V21.84C12.48 18.72 14.04 17.16 17.16 17.16ZM3.12 18.72C1.40156 18.72 0 20.1216 0 21.84V34.32C0 36.0384 1.40156 37.44 3.12 37.44V18.72ZM74.88 18.72V37.44C76.6045 37.44 78 36.0384 78 34.32V21.84C78 20.1216 76.6045 18.72 74.88 18.72ZM17.94 53.04C20.9564 53.04 23.4 55.4836 23.4 58.5C23.4 61.5164 20.9564 63.96 17.94 63.96C14.9236 63.96 12.48 61.5164 12.48 58.5C12.48 55.4836 14.9236 53.04 17.94 53.04ZM60.06 53.04C63.0764 53.04 65.52 55.4836 65.52 58.5C65.52 61.5164 63.0764 63.96 60.06 63.96C57.0436 63.96 54.6 61.5164 54.6 58.5C54.6 55.4836 57.0436 53.04 60.06 53.04Z" fill="white" />
                    </svg>

                  </div>
                  <div className="name">
                    Boat Cruises
                  </div>
                  <div className="sName">Experience the beauty of Goa’s waterways with scenic boat cruises and sunset sails.
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="adventureSec">
        <div className="container">
          <div className="mainBx">
            <div className="flexBx">
              <div className="lft">
                <div className="contBx">
                  <div className="cont">
                    <div className="hd">adventure activities
                      <div className="icon">
                        <img src={icon} alt="icon" />
                      </div>
                    </div>
                    <p>
                      Dive into our adventure-packed packages, where every itinerary is crafted to immerse you in heart-pounding activities amidst breathtaking landscapes. Whether you crave adrenaline-pumping excursions like hiking, zip-lining, or diving, or prefer more laid-back adventures such as wildlife safaris or cultural immersions, our packages cater to every thrill-seeker's dream. Experience the rush of exploration with expertly curated activities designed to elevate your journey to new heights of excitement and discovery
                    </p>
                    {/* <div className="imgBx">
                    </div> */}

                  </div>
                  <div className="imgBx">
                    <img src={advntre} alt="advntreImg" />

                  </div>
                </div>
              </div>
              <div className="ryt">
                <div className="swipeBx">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    modules={[Pagination, Navigation, Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay={{
                      delay: 3000, // Delay between slides in ms
                      disableOnInteraction: false, // Continue autoplay after user interactions
                      pauseOnMouseEnter: true
                    }}
                  >
                    <SwiperSlide>
                      <a href="#!" className="sliderBx">
                        <div className="imgWrap">
                          <div className="imgBx">
                            <img src={slide1} alt="slider" />
                          </div>
                          <div className="tleBx">
                            <div className="hd">Goa College Package</div>
                          </div>
                          <div className="contBx">
                            <div className="tle">Goa College Package</div>
                            <div className="priceBx">
                              Start From
                              <span>3599</span>
                            </div>
                            <div className="info">
                              Our Packages Are Different Unique in Goa Make Use Of Our Packages In Special Offers
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#!" className="sliderBx">
                        <div className="imgWrap">
                          <div className="imgBx">
                            <img src={slide2} alt="slider" />
                          </div>
                          <div className="tleBx">
                            <div className="hd">Couple Package</div>
                          </div>
                          <div className="contBx">
                            <div className="tle">Couple Package</div>
                            <div className="priceBx">
                              Start From
                              <span>3599</span>
                            </div>
                            <div className="info">
                              Our Packages Are Different Unique in Goa Make Use Of Our Packages In Special Offers
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#!" className="sliderBx">
                        <div className="imgWrap">
                          <div className="imgBx">
                            <img src={slide3} alt="slider" />
                          </div>
                          <div className="tleBx">
                            <div className="hd">Adventure Activities</div>
                          </div>
                          <div className="contBx">
                            <div className="tle">Adventure Activities</div>
                            <div className="priceBx">
                              Start From
                              <span>3599</span>
                            </div>
                            <div className="info">
                              Our Packages Are Different Unique in Goa Make Use Of Our Packages In Special Offers
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#!" className="sliderBx">
                        <div className="imgWrap">
                          <div className="imgBx">
                            <img src={slide4} alt="slider" />
                          </div>
                          <div className="tleBx">
                            <div className="hd">Beach</div>
                          </div>
                          <div className="contBx">
                            <div className="tle">Beach</div>
                            <div className="priceBx">
                              Start From
                              <span>3599</span>
                            </div>
                            <div className="info">
                              Our Packages Are Different Unique in Goa Make Use Of Our Packages In Special Offers
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="#!" className="sliderBx">
                        <div className="imgWrap">
                          <div className="imgBx">
                            <img src={slide2} alt="slider" />
                          </div>
                          <div className="tleBx">
                            <div className="hd">Goa College Package</div>
                          </div>
                          <div className="contBx">
                            <div className="tle">Goa College Package</div>
                            <div className="priceBx">
                              Start From
                              <span>3599</span>
                            </div>
                            <div className="info">
                              Our Packages Are Different Unique in Goa Make Use Of Our Packages In Special Offers
                            </div>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

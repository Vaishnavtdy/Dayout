import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Footer.sass';
import logo from '../assets/logo.png';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="container">
        <div className="foot">
          <div className="footer-content">
            <div className="dFlex">
              <div className="lft">
                <div className="linkWrap">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>QUICK LINKS</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="menuLnk">
                            <li>
                              <a href="#aboutus" className="lnk">About      </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">Personal Account</a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">Business</a>
                            </li>
                            <li>
                              <a href="#services" className="lnk">Services</a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">Company</a>

                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>INFORMATION</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="menuLnk">
                            <li>
                              <a href="#!" className="lnk">Terms & Conditions       </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">Legal
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="lnk">Agreements</a>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Social Media</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <ul className="socialLnk">
                            <li>

                              <a href="https://www.facebook.com/p/Dayout-Holidays-100087241266220/" target="_blank" className="lnk fb">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.504 14.352C10.426 14.352 8.71 14.352 7.93 14.352C7.514 14.352 7.384 14.196 7.384 13.806C7.384 12.766 7.384 11.7 7.384 10.66C7.384 10.244 7.54 10.114 7.93 10.114H10.504C10.504 10.036 10.504 8.52798 10.504 7.82598C10.504 6.78598 10.686 5.79798 11.206 4.88798C11.752 3.95198 12.532 3.32798 13.52 2.96398C14.17 2.72998 14.82 2.62598 15.522 2.62598H18.07C18.434 2.62598 18.59 2.78198 18.59 3.14598V6.10998C18.59 6.47398 18.434 6.62998 18.07 6.62998C17.368 6.62998 16.666 6.62998 15.964 6.65598C15.262 6.65598 14.898 6.99398 14.898 7.72198C14.872 8.50198 14.898 9.25598 14.898 10.062H17.914C18.33 10.062 18.486 10.218 18.486 10.634V13.78C18.486 14.196 18.356 14.326 17.914 14.326C16.978 14.326 14.976 14.326 14.898 14.326V22.802C14.898 23.244 14.768 23.4 14.3 23.4C13.208 23.4 12.142 23.4 11.05 23.4C10.66 23.4 10.504 23.244 10.504 22.854C10.504 20.124 10.504 14.43 10.504 14.352Z" fill="white" />
                                </svg>
                              </a>
                            </li>
                            <li>

                              <a href="https://wa.me/+918848965352" target="_blank" className="lnk whatsap">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20932 9.49998C2.20932 5.25266 5.57239 1.80952 9.72093 1.80952C13.8695 1.80952 17.2326 5.25266 17.2326 9.49998C17.2326 13.7473 13.8695 17.1904 9.72093 17.1904C8.24317 17.1904 6.86763 16.7545 5.70705 16.0017C5.49106 15.8616 5.2264 15.8242 4.98139 15.899L2.43703 16.6764L3.39502 14.3814C3.50825 14.1102 3.48521 13.7995 3.33328 13.5489C2.62085 12.3735 2.20932 10.9873 2.20932 9.49998ZM9.72093 0C4.59626 0 0.441879 4.25329 0.441879 9.49998C0.441879 11.163 0.860003 12.7284 1.59481 14.0896L0.0711143 17.7396C-0.0635842 18.0624 -0.00387827 18.4357 0.224307 18.6975C0.452493 18.9594 0.808005 19.0626 1.13646 18.9621L5.11269 17.7473C6.471 18.5444 8.04513 19 9.72093 19C14.8456 19 19 14.7467 19 9.49998C19 4.25329 14.8456 0 9.72093 0ZM11.7469 11.4745L10.5855 12.3121C10.0415 11.9949 9.44017 11.5521 8.83694 10.9345C8.20986 10.2925 7.74495 9.62963 7.40215 9.02163L8.14022 8.38025C8.45695 8.10502 8.54364 7.641 8.34851 7.26548L7.40809 5.45596C7.28146 5.21229 7.05312 5.04114 6.78799 4.99114C6.52286 4.94116 6.24995 5.0178 6.04683 5.19928L5.76801 5.44842C5.09751 6.04754 4.70095 7.03207 5.02962 8.02893C5.37036 9.06235 6.09753 10.6888 7.5872 12.214C9.1899 13.8549 10.8179 14.501 11.7699 14.752C12.537 14.9541 13.2629 14.6832 13.7744 14.2565L14.2971 13.8204C14.5207 13.6339 14.6413 13.3474 14.6203 13.0529C14.5992 12.7584 14.439 12.4929 14.1912 12.3417L12.7081 11.437C12.4085 11.2543 12.032 11.269 11.7469 11.4745Z" fill="white" />
                                </svg>
                              </a>
                            </li>
                            {/* <li>
                              <a href="#!" className="lnk">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.17797 1.11719C1.66558 1.11719 0.676758 2.11029 0.676758 3.4156C0.676758 4.69207 1.63613 5.7135 3.11993 5.7135H3.14864C4.6906 5.7135 5.65022 4.69207 5.65022 3.4156C5.6214 2.11029 4.6906 1.11719 3.17797 1.11719Z" fill="white" />
                                  <path d="M0.938477 7.52979H5.35981V20.8316H0.938477V7.52979Z" fill="white" />
                                  <path d="M16.2117 7.21729C13.8266 7.21729 12.2272 9.45854 12.2272 9.45854V7.52948H7.80576V20.8312H12.227V13.403C12.227 13.0054 12.2558 12.6083 12.3726 12.3239C12.6922 11.5299 13.4196 10.7072 14.6411 10.7072C16.2409 10.7072 16.8808 11.927 16.8808 13.7152V20.8312H21.3018V13.2043C21.3018 9.11853 19.1204 7.21729 16.2117 7.21729Z" fill="white" />
                                </svg>

                              </a>
                            </li> */}
                            <li>
                              <a href="https://www.instagram.com/dayout_holidays/" target="_blank" className="lnk">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_1_2120)">
                                    <path d="M15.7496 0H5.24987C2.3627 0 0 2.25019 0 4.99988V15.0001C0 17.7491 2.3627 20 5.24987 20H15.7496C18.6368 20 20.9995 17.7491 20.9995 15.0001V4.99988C20.9995 2.25019 18.6368 0 15.7496 0ZM19.2494 15.0001C19.2494 16.8376 17.68 18.3333 15.7496 18.3333H5.24987C3.32029 18.3333 1.75004 16.8376 1.75004 15.0001V4.99988C1.75004 3.16193 3.32029 1.66671 5.24987 1.66671H15.7496C17.68 1.66671 19.2494 3.16193 19.2494 4.99988V15.0001Z" fill="white" />
                                    <path d="M16.1882 5.83319C16.9131 5.83319 17.5007 5.27356 17.5007 4.58322C17.5007 3.89288 16.9131 3.33325 16.1882 3.33325C15.4634 3.33325 14.8757 3.89288 14.8757 4.58322C14.8757 5.27356 15.4634 5.83319 16.1882 5.83319Z" fill="white" />
                                    <path d="M10.5 5C7.59995 5 5.25012 7.23818 5.25012 9.99988C5.25012 12.7606 7.59995 15.0002 10.5 15.0002C13.3992 15.0002 15.7499 12.7606 15.7499 9.99988C15.7499 7.23818 13.3992 5 10.5 5ZM10.5 13.3335C8.56723 13.3335 7.00016 11.8411 7.00016 9.99988C7.00016 8.15866 8.56723 6.66671 10.5 6.66671C12.4328 6.66671 13.9998 8.15866 13.9998 9.99988C13.9998 11.8411 12.4328 13.3335 10.5 13.3335Z" fill="white" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1_2120">
                                      <rect width="21" height="20" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>

                              </a>
                            </li>
                            {/* <li>
                              <a href="#!" className="lnk twtr">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.2227 8.88743L19.8684 0H18.0566L11.4179 7.71683L6.11559 0H0L8.01813 11.6692L0 20.989H1.81187L8.82251 12.8398L14.4221 20.989H20.5377L12.2227 8.88743ZM9.74113 11.772L8.92872 10.61L2.46471 1.36394H5.24764L10.4642 8.82583L11.2766 9.98782L18.0574 19.6871H15.2745L9.74113 11.772Z" fill="white" />
                                </svg>

                              </a>
                            </li> */}
                            <li>
                              <a href="#!" className="lnk">

                              </a>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Contact US</Accordion.Header>
                      <Accordion.Body>
                        <div className="footLink">
                          <div className="contLnk">'
                            <div className="txtWrap">
                              <div className="txt">Phone :</div>
                              <a href="tel:971 3 640 4998" className="lnk">8848965352</a>
                            </div>
                          </div>
                          <div className="contLnk">'
                            <div className="txtWrap">
                              <div className="txt">Mail :</div>
                              <a href="mailto:info@charlestionbank.com" className="lnk"> dayoutholidays@gmail.com </a>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="ryt">
                <div className="logoBX">
                  <div className="logo">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className="txt">Opposite Union Bank, Chakkalakkal Building Rajakumary, 685619</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <div className="flxWrap">
            <div className="lft">
              <div className="txt">
                Copyright © {currentYear} Dayout Holidays. All Rights Reserved.
              </div>
            </div>
            <div className="ryt">
              {/* <div className="txt">
                Designed By: <span>Amrita</span> 
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;

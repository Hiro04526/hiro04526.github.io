import { useState } from "react";
import IonIcon from "./IonIcon";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside
      className={`bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] mb-[15px] overflow-hidden transition-all duration-300 ${
        isActive ? "max-h-[405px]" : "max-h-[112px]"
      }`}
      data-sidebar
    >
      {/* Top Info */}
      <div className="relative flex items-center gap-[15px]">
        {/* Avatar */}
        <figure className="rounded-[20px] bg-gradient-onyx overflow-hidden w-[100px] h-[100px]">
          <img
            src="./assets/images/myimage.JPG"
            alt="Hiro Ishikawa"
            width="100"
            height="100"
            className="rounded-[20px] bg-gradient-onyx overflow-hidden w-[100px] h-[100px]"
          />
        </figure>

        {/* Name + Title */}
        <div className="info-content">
          <h1
            className="text-white-2 text-[var(--fs-3)] font-[var(--fw-500)] tracking-[-0.25px] mb-[10px]"
            title="Hiro Ishikawa"
          >
            Hiro Ishikawa
          </h1>
          <p className="text-white-1 text-[var(--fs-8)] font-[var(--fw-300)] bg-onyx px-[12px] py-[3px] rounded-[8px] w-max">
            Web Developer
          </p>
        </div>

        {/* Toggle Button */}
        <button
          className="absolute -top-[15px] -right-[15px] rounded-tr-[15px] rounded-br-[15px] text-[13px] text-orange-yellow-crayola bg-border-gradient-onyx px-[10px] py-[10px] shadow-shadow-2 z-[1] relative transition-all duration-300 hover:bg-gradient-yellow-1 focus:bg-gradient-yellow-1"
          data-sidebar-btn
          onClick={() => setIsActive(!isActive)}
        >
          <span className="sr-only">Show Contacts</span>
          <IonIcon name="chevron-down" />
          <span className="absolute inset-[1px] rounded-inherit -z-[1] bg-bg-gradient-jet transition-all duration-300 group-hover:bg-gradient-yellow-2 group-focus:bg-gradient-yellow-2"></span>
        </button>
      </div>

      {/* Expanded Content */}
      <div
        className={`transition-all duration-300 ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="sidebar-info_more p-2 text-white">
          {/* Additional info here */}

          <div className="w-full h-px bg-jet my-4" /> {/* Separator */}

          <ul className="grid grid-cols-1 gap-4">
            {/* Email */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="mail-outline" />
              </div>
              <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                <p className="text-light-gray-70 text-[var(--fs-8)] uppercase mb-[2px]">Email</p>
                <a href="mailto:21hiro44@gmail.com" className="text-white-2 text-[var(--fs-7)]">
                  21hiro44@gmail.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="phone-portrait-outline" />
              </div>
              <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                <p className="text-light-gray-70 text-[var(--fs-8)] uppercase mb-[2px]">Phone</p>
                <a href="tel:+639770349859" className="text-white-2 text-[var(--fs-7)]">
                  +63 977 034 9859
                </a>
              </div>
            </li>

            {/* Birthday */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="calendar-outline" />
              </div>
              <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                <p className="text-light-gray-70 text-[var(--fs-8)] uppercase mb-[2px]">Birthday</p>
                <time dateTime="2004-05-26" className="text-white-2 text-[var(--fs-7)]">
                  May 26, 2004
                </time>
              </div>
            </li>

            {/* Location */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="location-outline" />
              </div>
              <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                <p className="text-light-gray-70 text-[var(--fs-8)] uppercase mb-[2px]">Location</p>
                <address className="text-white-2 text-[var(--fs-7)]">
                  Makati City, National Capital Region, The Philippines
                </address>
              </div>
            </li>
          </ul>

          <div className="w-full h-px bg-jet my-4" /> {/* Separator */}

          {/* Social Links */}
          <ul className="flex justify-start items-center gap-[15px] pb-1 pl-[7px]">
            <li>
              <a
                href="https://www.facebook.com/Hiro04526/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hir0__0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hiro-ishikawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

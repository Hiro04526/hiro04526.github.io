import { useState } from "react";
import IonIcon from "./IonIcon";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1]">
      <aside
        className={`overflow-hidden transition-[max-height] ease-in-out duration-500 mb-[15px] ${
          isExpanded ? "max-h-[405px]" : "max-h-[112px]"
        }`}
      >
        <div className="relative flex items-center justify-start gap-[15px]">
          <figure className="rounded-[20px] bg-gradient-onyx overflow-hidden w-[80px] h-[80px]">
            <img src="./assets/images/myimage.JPG" alt="Hiro Ishikawa" className="w-full h-full object-cover" />
          </figure>

          <div className="flex flex-col">
            <h1
              className="font-sm !text-xs text-white-2 text-fs-3 font-medium tracking-[-0.25px] mb-[10px]"
              title="Hiro Ishikawa"
            >
              Hiro Ishikawa
            </h1>
            <p className="text-white-1 bg-onyx text-fs-8 font-light w-max px-[12px] py-[3px] rounded-[8px]">
              Web Developer
            </p>
          </div>

          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="absolute top-[-15px] right-[-15px] text-orange-yellow-crayola text-[13px] bg-border-gradient-onyx p-[10px] rounded-tr-[15px] shadow-custom-2 z-[1] relative"
          >
            <span className="hidden">Show Contacts</span>
            <div className="absolute inset-[1px] bg-gradient-jet rounded-tr-[15px] -z-[1]" />
            <IonIcon name="chevron-down" />
          </button>
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="w-full h-px bg-jet my-4" /> {/* Separator */}

          <ul className="grid grid-cols-1 gap-4">
            {/* Email */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="mail-outline"></IonIcon>
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
                <IonIcon name="phone-portrait-outline"></IonIcon>
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
                <IonIcon name="calendar-outline"></IonIcon>
              </div>
              <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                <p className="text-light-gray-70 text-[var(--fs-8)] uppercase mb-[2px]">Birthday</p>
                <time dateTime="2004-05-26" className="text-white-2 text-[var(--fs-7)]">May 26, 2004</time>
              </div>
            </li>

            {/* Location */}
            <li className="min-w-full flex items-center gap-4">
              <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 z-[1]">
                <IonIcon name="location-outline"></IonIcon>
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

          <ul className="flex justify-start items-center gap-[15px] pb-1 pl-[7px]">
            <li>
              <a
                href="https://www.facebook.com/Hiro04526/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-facebook"></IonIcon>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hir0__0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-instagram"></IonIcon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hiro-ishikawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 text-[18px] hover:text-light-gray"
              >
                <IonIcon name="logo-linkedin"></IonIcon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

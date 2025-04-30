import { useState } from "react";
import IonIcon from "./IonIcon";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-[320px] mx-auto bg-eerie-black-2 rounded-[20px] p-5 shadow-custom-2 text-white-1">
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
              className="text-white-2 text-fs-3 font-medium tracking-[-0.25px] mb-[10px]"
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
          <div className="w-full h-px bg-jet my-[16px]" />

          <ul className="grid grid-cols-1 gap-[16px]">
            {[
              {
                icon: "mail-outline",
                title: "Email",
                content: <a className="text-white-2 text-fs-7">21hiro44@gmail.com</a>,
              },
              {
                icon: "phone-portrait-outline",
                title: "Phone",
                content: <a className="text-white-2 text-fs-7">+63 977 034 9859</a>,
              },
              {
                icon: "calendar-outline",
                title: "Birthday",
                content: (
                  <time className="text-white-2 text-fs-7" dateTime="2004-05-26">
                    May 26, 2004
                  </time>
                ),
              },
              {
                icon: "location-outline",
                title: "Location",
                content: (
                  <address className="text-white-2 text-fs-7 not-italic">
                    Makati City, National Capital Region, The Philippines
                  </address>
                ),
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-[16px] min-w-full">
                <div className="relative w-[30px] h-[30px] flex justify-center items-center bg-border-gradient-onyx rounded-[8px] text-orange-yellow-crayola shadow-custom-1 z-[1] text-[16px]">
                  <div className="absolute inset-[1px] bg-eerie-black-1 rounded-inherit -z-[1]" />
                  <IonIcon name={item.icon}></IonIcon>
                </div>
                <div className="w-[calc(100%-46px)] max-w-[calc(100%-46px)]">
                  <p className="text-light-gray-70 text-fs-8 uppercase mb-[2px]">{item.title}</p>
                  {item.content}
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full h-px bg-jet my-[16px]" />

          <ul className="flex items-center justify-start gap-[15px] pb-[4px] pl-[7px]">
            {[
              {
                href: "https://www.facebook.com/Hiro04526/",
                icon: "logo-facebook",
              },
              {
                href: "https://www.instagram.com/hir0__0/",
                icon: "logo-instagram",
              },
              {
                href: "https://www.linkedin.com/in/hiro-ishikawa",
                icon: "logo-linkedin",
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-light-gray-70 text-[18px] hover:text-light-gray transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon name={item.icon}></IonIcon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

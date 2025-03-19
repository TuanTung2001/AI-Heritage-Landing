import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/nexcyra" },
    { name: "TikTok", icon: "fa-tiktok", url: "https://www.tiktok.com/@nexcyra" },
    // { name: "Pinterest", icon: "fa-pinterest", url: "#" },
    // { name: "LinkedIn", icon: "fa-linkedin", url: "#" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}

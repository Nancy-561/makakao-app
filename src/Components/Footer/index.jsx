import React from "react";
import { ImInstagram } from "react-icons/im";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import { CustomLink } from "../CustomLink";
import { categoryMap, linksMap1, linksMap2 } from "../../Mocks/productMock";
import { FooterContainer } from "./Footer.styles";

export const Footer = () => {
  const labelClass = "text-lg font-inter font-medium mb-4 text-[#242424]";
  const listClass = "space-y-3 text-sm text-[#848484]";

  const renderSocialIcons = (icon) => {
    return <div className="icon cursor-pointer">{icon}</div>;
  };

  const renderLinks = (title, dataMap, redirectTo) => {
    return (
      <div>
        <h3 className={labelClass}>{title}</h3>
        <ul className={listClass}>
          {dataMap.map(({ name, id }) => (
            <li key={id} className="hover:text-black">
              <CustomLink
                text={name}
                redirectTo={redirectTo || `/${id}`}
                state={{ category: id }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <FooterContainer className="bg-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-left">
        <div>
          <img
            src="/kokomatto.png"
            alt="kokomatto-logo"
            className="h-[60px] mb-1"
          />
          <p className="font-inter text-[#777777] leading-[24px] text-sm">
            Condimentum adipiscing vel neque dis nam parturient orci at
            scelerisque.
          </p>
          <h3 className={labelClass}>Subscribe us</h3>
          <div className="flex space-x-3 mt-2">
            {renderSocialIcons(
              <TiSocialFacebook className="h-[24px] w-[24px] text-white" />
            )}
            {renderSocialIcons(<FaTwitter className="text-white" />)}
            {renderSocialIcons(
              <TiSocialLinkedin className="h-[24px] w-[24px] text-white" />
            )}
            {renderSocialIcons(<ImInstagram className="text-white" />)}
            {renderSocialIcons(<FaYoutube className="text-white" />)}
          </div>
        </div>

        {/* Categories */}
        {renderLinks("Categories", categoryMap, '/product-listing')}

        {/* Useful Links */}
        {renderLinks("Useful Links", linksMap1)}

        {/* Additional Useful Links */}
        {renderLinks("Useful Links", linksMap2)}
      </div>
    </FooterContainer>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

import { ProductCard } from "../../Components/ProductCard";
import {
  AvailableProductCategories,
  LastBidProducts,
  PopularProducts,
  AllAvailableProducts
} from "../../Mocks/productMock";
import { StyledHome } from "./Home.styles";

export const Home = () => {
  const renderHeading = (
    text1,
    text2,
    headingClass = "",
    data = AllAvailableProducts,
    category = "All Products"
  ) => {
    return (
      <div className="heading-container">
        <div className={`heading font-poppins text-2xl pb-3 ${headingClass}`}>
          {text1} <span>{text2}</span>
        </div>
        <Link
          to="/product-listing"
          state={{data, category}}
          className="text-[#222222] font-hk-grotesk view-all"
        >
          View All
          <IoIosArrowForward className="ml-3" />
        </Link>
      </div>
    );
  };

  return (
    <StyledHome>
      <div className="px-5 bg-white pt-6 mb-4">
        <div className="flex gap-4 rounded-[12px]">
          <img
            src="/home-img.png"
            alt="home-img"
            className="w-3/5 rounded-[12px] h-[60vh]"
          />
          <div className="w-2/5 images-container">
            <img
              src="/top.png"
              alt="top-img"
              className="rounded-[12px] w-full"
            />
            <img
              src="/police.png"
              alt="police-logo"
              className="rounded-[12px] w-full"
            />
          </div>
        </div>
        <div className="py-6">
          {renderHeading("Shop From", "Top Categories")}
          <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
            {AvailableProductCategories.map(({ imageUrl, name, count }) => {
              if (count) {
                return (
                  <div key={name} className="flex-shrink-0">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="rounded-[12px] h-[132px] w-[132px] object-cover"
                    />
                    <div className="font-poppins mt-5 category-name">
                      {name}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <div className="px-5 py-6">
        {renderHeading("LIVE ON GOING", "BIDS", "invert-color", LastBidProducts, "Live Biding")}
        <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
          {LastBidProducts.map((product, index) => (
            <ProductCard {...product} index={index} />
          ))}
        </div>
      </div>
      <div className="px-5 py-6">
        {renderHeading("POPULAR", "PRODUCTS", "secondary-heading", PopularProducts, "Popular Products")}
        <div className="pt-10 pb-6 flex gap-4 overflow-x-auto">
          {PopularProducts.map((product, index) => (
            <ProductCard {...product} index={index} />
          ))}
        </div>
      </div>
      <div className="px-5 bg-white py-6">
        <div className="footer-img-container mb-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/228f/90ba/a16d3ff15d72022d16bab1b394828ae6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dba9AOklgFUMfglaUzpKp-XTCID7LbGOMnMrHI6na4c2Q5LYW0OFRye5OW-GV8FuBrcwx0o2kYogXygyafPGVt3DzIMtA-BBQyiX4WhxTAg~XlySYSdZ32Pqk4bL6RCGjiwgpPMpeKyF3JdH-0zQ9vcPmfSpt~y69IVUA-RvOTTLU9L3HkCm3Pd25N3paDMHfDB6V6nuvQRr8HjZCl3tTHiptSIjTq7n5hGKTGcpJl6sZAXBZKgJvvg5rNsWr4a7LmS2glncI0hW8dbxdTu0AJWhjRIdvoClRW~EcDpsGaYHojhvz2iDIPTW-CwUt2z-h3lv-sLVMwOjrmXBKtXZWw__"
            alt="times_of_india"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a454/c4dc/65e1fe2fd6faac94d85ee92b74c1c06a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cLkWkI~CAITuLIzWtv49y5k6eBIr-0zLVQUdCUTBsojvseji8vEivJ3HrZoS5tEaF3CKckiIUhigMt-aiIu5~BLridH4oclz9Thv2sIQxZ5QXAdZykAFP~Mn7U3cu1yYQRmIiiaKTBh8MgxZlJmr4EWLTxnfU3d8cWkX3zJWWOiIKBaae84Dygm4LXqBa1Ohd8KLMxnWevHQRB25MVm~1kQZg-xmbNScQtl5xD6Y6y-kZswuRehs9AwnV7l5YrDSHA2WkkBq3-ZIid4JBKh8zdBfhLJ3tLoIJjQoHhC9darMfCvqgx31lL~gXEXoYzoNgOd85TUat1p7dM~CzRvccQ__"
            alt="hindustan_times"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/bcf1/28ba/dd0b74f076cd81f7f7018da28d69491a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VW8CMWzqNtwZ8LdlLjpOrXraU0ont5c5Jf8hJgndruo~8S1H2zpFEXTBB00WxVYK6QfE5yq-gwoZ7nuGytpIuCvOWpX3kMnzpLWSbVznc5erU1hRYWauTDO5HA4B9DA6ZqNIiuxoVoZMBugG-KFJx4vuaFla-61aEu0QrGPYjqDEEh2yuCdVVdfWiWg4Je5jmceslWM-vVScn-WFZs1dWjP3ykvE5TUjQu4xDYixJB1AbIt7zI1vokPQ~Hc218IOgQ0cnmqh2vlNu4yXUuqqvPLZodne3bBvRF~3xl2G~drJl4aNqt2ClPv9CygDtDV-tqf8M3WoW6B1MZjVC~PxYQ__"
            alt="decor"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/099a/9cd7/dd7bb4a8047d9f4808c022d5be43e83a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=apXSoBWfdLetVegGzsepFWdLcKgXw5OkRAw~zG~cOYjzW~LH1XuYVpZBgCD6BEGJjdmKralnYmYsaGdv9Pfuh7qAff9JxoHbhZofVLreSNpMq~ZkdUqtj6~y9vbpNFzPWYPbKktVVOj00cjYy0Vk5HBwBl-n2buJpfDqmBxbL2SKQRCgKBxkP-2Y4AI4hdUjmTChGyYCrMNsosfgwkXRPObs~u942zCVSnTu3bb56mNa0RNkeJXsrwSpZaCdVEuT7dw30xObbHUjhu-0dOY9xa~Ue8V2lJqtLBnkK~wuZGyDxyhv~X581hD10zbajKg-tVpLwuf64oC0txOMHEBHrg__"
            alt="india_forbes"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/f403/6497/f70729b007841a65a29fd0710a54b80e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J6xGIXvvmTdNax3Lnl0-ekoECC7efkwlsNjvA3hhRzJgRrnmDrX4W7inEGGjhHW7aUqimnaQO6bMGJwXnUVokaik1WyRstbg5ltNB5wW0IuML7o9MMt-ZjGdaPXfltvZM2LqoyWy9nbPrmO0YAhVCQQ37q3MCyD3r6QgoG3zQE~wYCcjj2B0~9uyFSF4DqVdd~Al7BiGJ-O7peW0lyzT9mic4ooBFO5ShgDn6EUxQoZhuSRIfGXNoSSL3nzKdBUjMR78Fk0KE0Hb2L-gVHE~C9biF1~cVL-~YmHnU9-5f-5p5hr2BrC91s73DvWqkfiozRfSLnGttPbQyLrUgVB~cA__"
            alt="straits_times"
          />
        </div>
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/1777/ea98/c4231883a25bb0b9dfeb5985e953c85a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OKLF2nJZbd2uIuE0jQFcSJf3e7jq6Wu~fp1ch5b1BPeJASVoAj7MSzRWZfaG57sKyxAKaH5U-YCUkMF4PRp7bYIvtRiY9mj5tJ-UWRuxue-JD3zrYYOU2QK0v9mKjov3c7hDHUn6Mq3o9c5dGF8-Ie3Ycj0L0AkvafKQs82qWx3El-kOMaNPyamas8gVQ2CdTEOlAgxWfmxcsYdE5Cx5m8ZGH3k~QxvAOQTswT-AVJQnvd6HcU8mmOLHtzzRMkEbYzHYTve-UTIPoe0eBXnYtibQqT1bIYc8ShePwMXzUPL4rHvV9p7oJJNb4wF7HMWdQhm1o5KIOcgeRZ6wReSLyA__"
            alt="banner-img"
            className="h-[50vh] w-full object-cover"
          />
          <div className="banner-content font-poppins">
            <p className="font-medium">Limited time only</p>
            <p className="text-[70px] leading-[90px] font-impact">
              Get 30% off
            </p>
            <p className="text-[20px] leading-[30px]">
              Transform your home or office into a vibrant oasis with realistic,
              low-maintenance greenery.
            </p>
            <button className="px-4 mt-8">
              SHOP NOW <FaLongArrowAltRight size={18} className="ml-6"/>
            </button>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

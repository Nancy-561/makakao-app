import React, { useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { PiPhoneFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import {
  PageWrapper,
  HeroSection,
  ContactInfo,
  FormWrapper,
  NewsletterSection,
  FAQSection,
} from "./HelpCenter.styles";

export const HelpCenter = () => {
  const contentRef = useRef(null);
  const [showInfo, setShowInfo] = useState();

  return (
    <PageWrapper>
      <HeroSection>
        <ContactInfo>
          <div className="flex items-center gap-4 mb-6">
            <PiPhoneFill className="text-3xl" />
            <div>
              Sales Department
              <div className="text-3xl font-semibold mt-2">
                (888) 999-7777{" "}
                <span className="text-[16px] font-normal">ext 1</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <PiPhoneFill className="text-3xl" />
            <div>
              Free Customer Support
              <div className="text-3xl font-semibold mt-2">
                (888) 999-7777
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoMail className="text-3xl" />
            <div>
              Email Address:
              <div className="text-3xl font-semibold mt-2">
                help@makakao.com
              </div>
            </div>
          </div>
        </ContactInfo>
        <FormWrapper>
          <h2 className="text-2xl mb-4">We'd Love To Hear From You</h2>
          <form>
            <div className="form-container gap-4">
              <Input placeholder="First Name" inputClassName="py-4" />
              <Input placeholder="Last Name" inputClassName="py-4" />
              <Input placeholder="Email" inputClassName="py-4" />
              <Input placeholder="+!" inputClassName="py-4" />
            </div>
            <textarea
              className="p-2 border rounded-xl w-full my-4 bg-[#eef1f5]"
              placeholder="About your Project"
              rows="4"
            />
            <Button
              btnClassName="inquire-btn mx-auto"
              btnText={
                <>
                  Inquire Now
                  <GoArrowUpRight size={24} className="ml-3" />
                </>
              }
              btnId="Inquire"
            />
          </form>
        </FormWrapper>
      </HeroSection>

      <NewsletterSection>
        <h2 className="text-xl mb-2">Subscribe on our newsletter</h2>
        <p className="text-gray-500 mb-4">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex justify-center items-center gap-5">
          <Input
            placeholder="Email"
            type="email"
            inputClassName="white-bg-input"
          />
          <Button
            btnClassName="subscribe-btn mt-2 mb-3"
            btnText="Subscribe"
            btnId="Subscribe"
          />
        </div>
      </NewsletterSection>

      <FAQSection>
        <h2 className="text-2xl font-semibold pb-2 mb-6">
          Frequently Asked Questions
        </h2>
        {Array.from({ length: 7 }, (_, index) => (
          <div
            className="accordion-container p-5 bg-[#F6F6F6] mb-3"
            key={`accordion-${index}`}
          >
            <div
              className="heading flex justify-between items-center cursor-pointer"
              onClick={() => setShowInfo(showInfo === index ? undefined : index)}
            >
              Sed ut perspiciatis unde omnis iste natus error sit?
              {showInfo === index ? (
                <CiSquareMinus size={24} />
              ) : (
                <CiSquarePlus size={24} />
              )}
            </div>
            <div
              className="accordion-content"
              style={{
                maxHeight: showInfo === index
                  ? `${contentRef.current.scrollHeight}px`
                  : "0px",
              }}
              ref={contentRef}
            >
              <div className="pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </div>
            </div>
          </div>
        ))}
      </FAQSection>
    </PageWrapper>
  );
};

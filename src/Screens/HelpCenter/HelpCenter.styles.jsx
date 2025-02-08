import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  background: linear-gradient(135deg, #001f3f, #1c2e4a);
  color: white;
  border-radius: 1rem;
  padding: 3rem;
  gap: 2rem;
`;

export const ContactInfo = styled.div`
  background: linear-gradient(135deg, #1c2e4a, #001f3f);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  font-size: 18px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;

  .form-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
`;

export const NewsletterSection = styled.div`
  text-align: center;
  background-color: #eef1f5;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 1rem;
`;

export const FAQSection = styled.section`
  margin-top: 2rem;
  text-align: left;

  h2 {
    border-bottom: 2px solid #026080;
    width: max-content;
    color: #a5a5a5;
  }

  .accordion-container {
    border: 1px solid #e6ecf7;
    border-radius: 10px;
  }
  .accordion-content {
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .heading {
    font-size: 19px;
    line-height: 24px;
    font-weight: 500;
  }
`;

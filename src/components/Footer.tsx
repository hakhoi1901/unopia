import React from 'react';
import styled from 'styled-components';
import { CONTACT_DATA } from '@/assets/data/teamdata';
import { RevealWrapper } from './RevealWrapper';

const FooterWrapper = styled.footer`
  background-color: #0b1120;
  padding: 80px 0 40px;
  border-top: 1px solid var(--border-color);
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const FooterInfo = styled.div`
  flex: 1;
  min-width: 300px;
  
  h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 400px;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: var(--text-secondary);
    transition: color 0.2s;
    
    &:hover {
      color: #fff;
    }
  }
`;

const FooterFormContainer = styled.div`
  flex: 1;
  min-width: 300px;
  
  h3 {
    font-size: 1.25rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const BtnPrimary = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
  align-self: flex-start;
  
  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper id="contact">
      <div className="container">
        <RevealWrapper>
          <FooterContent>
            <FooterInfo>
              <h2>KidUS Unopia</h2>
              <p>Nhóm nghiên cứu & phát triển giải pháp dự án.</p>
              <FooterSocials>
                <a href={`mailto:${CONTACT_DATA.email}`}>Email</a>
                <a href={CONTACT_DATA.github}>GitHub</a>
                <a href={CONTACT_DATA.linkedin}>LinkedIn</a>
              </FooterSocials>
            </FooterInfo>

            <FooterFormContainer>
              <h3>Liên hệ với chúng tôi</h3>
              <Form>
                <FormInput type="email" placeholder="Email của bạn" />
                <FormTextarea placeholder="Tin nhắn" rows={3}></FormTextarea>
                <BtnPrimary type="button">Gửi tin nhắn</BtnPrimary>
              </Form>
            </FooterFormContainer>
          </FooterContent>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <FooterBottom>
            <p>&copy; {new Date().getFullYear()} KidUS Unopia. All rights reserved.</p>
          </FooterBottom>
        </RevealWrapper>
      </div>
    </FooterWrapper>
  );
};

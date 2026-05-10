import React from 'react';
import styled from 'styled-components';
import { RevealWrapper } from './RevealWrapper';

const HeroSectionWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, rgba(15,23,42,1) 70%);
  z-index: 1;
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const HeroLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: var(--accent-color);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSlogan = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const BtnPrimary = styled.a`
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--accent-color);
  color: #fff;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
  }
`;

const BtnSecondary = styled.a`
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid var(--border-color);
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: #fff;
  }
`;

export const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      <HeroOverlay />
      <HeroContainer className="container">
        <RevealWrapper>
          <HeroLogo>Unopia</HeroLogo>
        </RevealWrapper>
        
        <RevealWrapper delay={150}>
          <HeroTitle>KidUS Unopia</HeroTitle>
        </RevealWrapper>

        <RevealWrapper delay={300}>
          <HeroSlogan>
            Nhóm nghiên cứu & phát triển giải pháp phần mềm hiện đại. Kiến tạo những sản phẩm thực tế, mang lại giá trị bền vững.
          </HeroSlogan>
        </RevealWrapper>

        <RevealWrapper delay={450}>
          <HeroActions>
            <BtnPrimary href="#projects">Xem dự án</BtnPrimary>
            <BtnSecondary href="#about">Về chúng tôi</BtnSecondary>
          </HeroActions>
        </RevealWrapper>
      </HeroContainer>
    </HeroSectionWrapper>
  );
};

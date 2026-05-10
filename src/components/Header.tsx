import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  padding: ${props => props.$scrolled ? '16px 0' : '24px 0'};
  background-color: ${props => props.$scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const BtnSmall = styled.a`
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
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

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <NavContainer className="container">
        <Logo>
          <a href="#">Unopia</a>
        </Logo>
        <NavLinks>
          <NavLink href="#about">Về chúng tôi</NavLink>
          <NavLink href="#projects">Dự án</NavLink>
          <NavLink href="#team">Đội ngũ</NavLink>
          <NavLink href="#contact">Liên hệ</NavLink>
        </NavLinks>
        <Actions>
          <BtnSmall href="#contact">Hợp tác ngay</BtnSmall>
        </Actions>
      </NavContainer>
    </HeaderContainer>
  );
};

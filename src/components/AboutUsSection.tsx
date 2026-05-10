import React from 'react';
import styled from 'styled-components';
import { RevealWrapper } from './RevealWrapper';

const AboutSection = styled.section`
  background-color: var(--bg-color);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AboutCard = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  height: 100%;
  transition: transform 0.3s ease, border-color 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
  }

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

export const AboutUsSection: React.FC = () => {
  return (
    <AboutSection id="about" className="section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Về Chúng Tôi</h2>
        </RevealWrapper>
        
        <RevealWrapper delay={150}>
          <p className="section-subtitle">
            Tại sao KidUS Unopia tồn tại?
          </p>
        </RevealWrapper>

        <AboutGrid>
          <RevealWrapper delay={200}>
            <AboutCard>
              <h3>Tầm nhìn</h3>
              <p>Trở thành một tổ chức nghiên cứu và phát triển phần mềm tiên phong, mang lại giải pháp công nghệ tối ưu cho các vấn đề thực tiễn.</p>
            </AboutCard>
          </RevealWrapper>
          
          <RevealWrapper delay={300}>
            <AboutCard>
              <h3>Sứ mệnh</h3>
              <p>Biến ý tưởng thành sản phẩm thực tế, xây dựng kiến trúc hệ thống bền vững và trải nghiệm người dùng tuyệt vời.</p>
            </AboutCard>
          </RevealWrapper>

          <RevealWrapper delay={400}>
            <AboutCard>
              <h3>Chuyên môn</h3>
              <p>Tập trung sâu vào Web Development, Mobile Applications, System Architecture, và tích hợp AI vào quy trình phần mềm.</p>
            </AboutCard>
          </RevealWrapper>
        </AboutGrid>
      </div>
    </AboutSection>
  );
};

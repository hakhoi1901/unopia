import React from 'react';
import styled from 'styled-components';
import { RevealWrapper } from './RevealWrapper';
import { MEMBERS } from '@/assets/data/teamdata';

const TeamSectionWrapper = styled.section`
  background-color: var(--bg-color);
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const TeamCard = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  min-width: 250px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255,255,255,0.2);
  }

  h3 {
    font-size: 1.25rem;
    color: #fff;
    margin-bottom: 0.25rem;
  }
`;

const TeamAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem auto;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamRole = styled.p`
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const TeamLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: #fff;
    }
  }
`;


export const TeamSection: React.FC = () => {
  return (
    <TeamSectionWrapper id="team" className="section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Đội ngũ</h2>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <p className="section-subtitle">
            Những cá nhân đứng sau các dòng code.
          </p>
        </RevealWrapper>

        <TeamGrid>
          {MEMBERS.map((member, idx) => (
            <RevealWrapper key={member.id} delay={idx * 150}>
              <TeamCard>
                <TeamAvatar>
                  <img src={member.avatar} alt={member.name} />
                </TeamAvatar>
                <h3>{member.name}</h3>
                <TeamRole>{member.role}</TeamRole>
                <TeamLinks>
                  <a href={member.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                </TeamLinks>
              </TeamCard>
            </RevealWrapper>
          ))}
        </TeamGrid>
      </div>
    </TeamSectionWrapper>
  );
};

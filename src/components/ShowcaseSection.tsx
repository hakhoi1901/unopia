import React from 'react';
import styled from 'styled-components';
import { RevealWrapper } from './RevealWrapper';

const ShowcaseSectionWrapper = styled.section`
  background-color: #0b1120;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.a`
  display: block;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    border-color: var(--accent-color);
  }

  &:hover h3 {
    color: var(--accent-color);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  color: var(--text-primary);
`;

const PROJECTS = [
  {
    id: 1,
    name: 'UStudy',
    desc: 'Nền tảng quản lý học tập thông minh với phân tích dữ liệu sinh viên.',
    stack: ['React', 'TypeScript', 'Node.js'],
    url: 'https://u-study.vercel.app'
  },
];

export const ShowcaseSection: React.FC = () => {
  return (
    <ShowcaseSectionWrapper id="projects" className="section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Dự án nổi bật</h2>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <p className="section-subtitle">
            Dữ liệu thực tế, giải pháp thực tế. Những sản phẩm chúng tôi đã và đang xây dựng.
          </p>
        </RevealWrapper>

        <ProjectGrid>
          {PROJECTS.map((project, idx) => (
            <RevealWrapper key={project.id} delay={idx * 150}>
              <ProjectCard href={project.url} target="_blank" rel="noreferrer">
                <ProjectInfo>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <ProjectStack>
                    {project.stack.map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectStack>
                </ProjectInfo>
              </ProjectCard>
            </RevealWrapper>
          ))}
        </ProjectGrid>
      </div>
    </ShowcaseSectionWrapper>
  );
};

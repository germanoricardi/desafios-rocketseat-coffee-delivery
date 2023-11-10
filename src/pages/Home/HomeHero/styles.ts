import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    height: 544px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.base.title};
  font-weight: 800;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 2.25rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2.75rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 3rem;
    text-align: left;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.125rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.25rem;
    text-align: left;
  }
`;

export const HeroItems = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem 2.5rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    white-space: nowrap;
  }
`;

interface HeroItemIconContainerProps {
  color: string;
}

export const HeroItemIconContainer = styled.div<HeroItemIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  width: 2rem;
  border-radius: 50%;

  background-color: ${({ color }) => color};
`;

export const HeroImage = styled.img`
  width: min(100%, 476px);
  object-fit: contain;
`;

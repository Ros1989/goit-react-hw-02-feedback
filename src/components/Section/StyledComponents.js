import styled from 'styled-components';

const PageSection = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  border: solid 1px blue;
`;
const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: brown;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export { PageSection, SectionTitle };

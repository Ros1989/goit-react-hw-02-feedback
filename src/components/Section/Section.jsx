import React from 'react';
import PropTypes from 'prop-types';
import { PageSection, SectionTitle } from './StyledComponents';

export default function Section({ title, children }) {
  return (
    <PageSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </PageSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

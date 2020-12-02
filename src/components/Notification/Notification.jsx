import React from 'react';
import PropTypes from 'prop-types';
import { NotificationTitle } from './StyledComponents';

export default function Notification({ title }) {
  return (
    <>
      <NotificationTitle>{title}</NotificationTitle>
    </>
  );
}

Notification.propTypes = {
  title: PropTypes.string,
};

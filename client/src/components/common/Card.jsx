import React from 'react';
import theme from '../../styles/theme';

const Card = ({ children, style = {}, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.md,
        boxShadow: theme.shadows.base,
        padding: theme.spacing.md,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
import React from 'react';
import theme from '../../styles/theme';

const Input = ({ style = {}, ...props }) => {
  return (
    <input
      style={{
        padding: theme.spacing.sm,
        border: `1px solid ${theme.colors.muted}`,
        borderRadius: theme.borderRadius.sm,
        fontSize: theme.fontSizes.base,
        ...style,
      }}
      {...props}
    />
  );
};

export default Input;
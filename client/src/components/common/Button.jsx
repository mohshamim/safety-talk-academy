import React from 'react';
import theme from '../../styles/theme';

const Button = ({ children, variant = 'primary', style = {}, ...props }) => {
  const variants = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
    },
    success: {
      backgroundColor: theme.colors.success,
      color: theme.colors.white,
    },
    danger: {
      backgroundColor: theme.colors.danger,
      color: theme.colors.white,
    },
    warning: {
      backgroundColor: theme.colors.warning,
      color: theme.colors.black,
    },
  };

  return (
    <button
      style={{
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
        fontSize: theme.fontSizes.base,
        boxShadow: theme.shadows.base,
        ...variants[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
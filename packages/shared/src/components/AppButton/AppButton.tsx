import React from 'react';

export interface AppButtonProps {
  label: string;
}

const AppButton = (props: AppButtonProps) => {
  return <button>{props.label}</button>;
};

export default AppButton;

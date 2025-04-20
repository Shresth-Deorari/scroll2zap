import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconButton, IconButtonProps } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { styled } from "@mui/material/styles";

type MotionIconButtonProps = IconButtonProps & {
  animate?: any;
  transition?: any;
};

const MotionIconButton = motion(IconButton);

const StyledIconButton = styled(MotionIconButton)<MotionIconButtonProps>(
  ({ theme }) => ({
    backgroundColor: `var(--color-text)`,
    color: `var(--color-bg)`,
    "&:hover": {
      backgroundColor: `var(--color-subheading)`,
    },
    padding: "6px",
    borderRadius: "50%",
    boxShadow: theme.shadows[3],
  }),
);

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRefresh = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    onClick();

    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <StyledIconButton
      onClick={handleRefresh}
      disabled={isSpinning}
      animate={{ rotate: isSpinning ? 360 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <RefreshIcon />
    </StyledIconButton>
  );
};

export default RefreshButton;

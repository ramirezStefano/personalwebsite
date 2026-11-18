import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ eyebrow, title }) => {
  const theme = useTheme();

  return (
    <Box className="animate delay-1" sx={{ mb: 5 }}>
      <Typography
        variant="overline"
        sx={{
          display: "block",
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "3px",
        }}
      >
        {eyebrow}
      </Typography>
      <Typography variant="h4" sx={{ mt: 0.5 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;

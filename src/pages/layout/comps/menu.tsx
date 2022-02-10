import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  CreditCardOutlined, AssessmentOutlined, ArticleOutlined, AccountBoxOutlined
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const menuHandClick = (url: string) => {
    navigate(url);
  };
  return (
    <Box sx={{ margin: "10px 0" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue: number) => {
          setValue(newValue);
        }}
        sx={{ fontSize: 50 }}
      >
        <BottomNavigationAction
          label="资产"
          icon={<CreditCardOutlined fontSize="large" />}
          onClick={() => menuHandClick("/asset")}
        />
        <BottomNavigationAction
          label="报表"
          icon={<AssessmentOutlined fontSize="large" />}
          onClick={() => menuHandClick("/report")}
        />
        <BottomNavigationAction
          label="账单"
          icon={<ArticleOutlined fontSize="large" />}
          onClick={() => menuHandClick("/bill")}
        />
        <BottomNavigationAction
          label="更多"
          icon={<AccountBoxOutlined fontSize="large" />}
          onClick={() => menuHandClick("/more")}
        />
      </BottomNavigation>
    </Box>
  );
};

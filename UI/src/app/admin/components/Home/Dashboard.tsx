import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Avatar, Box, Menu } from "@mui/material";
import { useState } from "react";
import Cookies from "js-cookie";
import { Constants } from "../../../../shared/constants/constant";
import Logo from "../../../../images/user.jpg";
import { CredentialService } from "../../../../services/credentialServices";
import { Routes } from "../../../../shared/routes/routes";
import UserProfile from "./UserProfile";
import { useHistory } from "react-router-dom";

interface IDashboardProps {}
const Dashboard: React.FunctionComponent<IDashboardProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const userEmail=Cookies.get(Constants.Email);
  const open = Boolean(anchorEl);
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onUserProfile = () => {
    history.push({
      pathname: Routes.UserProfile,
      search: `?email=${userEmail}`
    })
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    Cookies.remove(Constants.LbToken);
    Cookies.remove(Constants.Email);
    window.location.href = "/login";
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <img src={Logo} style={{ width: 32, height: 32 }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={onUserProfile}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
export default Dashboard;

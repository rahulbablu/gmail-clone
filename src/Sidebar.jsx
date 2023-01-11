import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<CreateOutlinedIcon />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <Link to="/">
        <SidebarOption Icon={InboxIcon} title="Inbox"  selected={true}/>
      </Link>
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={12} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={16} />
      <Link to="/sent">
        <SidebarOption
          Icon={SendOutlinedIcon}
          title="Sent"
          selected={true}
        />
      </Link>
      <SidebarOption
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        number={346}
      />
      <SidebarOption Icon={LabelOutlinedIcon} title="Categories" number={346} />
      <SidebarOption Icon={KeyboardArrowDownOutlinedIcon} title="More" />

      <div className="sidebar__labels">
        <h4>Labels</h4>
        <IconButton>
          <AddOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;

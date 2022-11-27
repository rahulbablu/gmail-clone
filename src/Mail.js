import { IconButton } from "@mui/material";
import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useNavigate } from "react-router-dom";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TurnLeftOutlinedIcon from "@mui/icons-material/TurnLeftOutlined";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";

const Mail = () => {
  const navigate = useNavigate();

  const tools = (Icon) => (
    <IconButton>
      <Icon />
    </IconButton>
  );

  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
            <ArrowBackIcon onClick={() => navigate("/")} />
          </IconButton>
          <div className="mail__toolsLeftOne">
            {tools(MoveToInboxIcon)}
            {tools(ReportGmailerrorredIcon)}
            {tools(DeleteOutlineIcon)}
          </div>
          <div className="mail__toolsLeftTwo">
            {tools(MailOutlineIcon)}
            {tools(AccessTimeIcon)}
            {tools(AddTaskIcon)}
          </div>
          <div className="mail__toolsLeftThree">
            {tools(DriveFolderUploadIcon)}
            {tools(LabelOutlinedIcon)}
            {tools(MoreVertOutlinedIcon)}
          </div>
        </div>
        <div className="mail_toolsRight">
          {tools(UnfoldMoreOutlinedIcon)}
          {tools(LocalPrintshopOutlinedIcon)}
          {tools(OpenInNewOutlinedIcon)}
          {tools(KeyboardArrowLeftOutlinedIcon)}
          {tools(ChevronRightOutlinedIcon)}
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <div className="mail__bodyHeaderLeft">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className="mail__important" />
            <p>{selectedMail?.title}</p>
          </div>
          <div className="mail__bodyHeaderRight">
            <p className="mail__time">{selectedMail?.time}</p>
            {tools(StarBorderOutlinedIcon)}
            {tools(TurnLeftOutlinedIcon)}
            {tools(MoreVertOutlinedIcon)}
          </div>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;

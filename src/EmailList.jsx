import React, { useEffect, useState } from "react";
import "./EmailList.css";

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { IconButton, Checkbox } from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { inboxCount } from "./features/mailSlice";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  const currentUser = useSelector((s) => s.user.user);

  useEffect(() => {
    const handleMails = async () => {
      const q = query(
        collection(db, "emails"),
        where("to", "==", currentUser.email)
      );

      const fetchedMails = await getDocs(q);
      const mails = fetchedMails.docs.map((doc) => doc.data());
      setEmails(mails);
    };

    return () => {
      handleMails();
    };
  }, [currentUser,emails]);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emalList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownOutlinedIcon />
          </IconButton>
          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promotions"
          color="blue"
        />
        <Section Icon={PeopleOutlinedIcon} title="Social" color="green" />
        <Section Icon={InfoOutlinedIcon} title="Updates" color="orange" />
        <Section Icon={CommentOutlinedIcon} title="Forums" color="purple" />
      </div>
      <div className="emailList__list">
        {emails.map((item) => (
          <EmailRow
            key={item.timestamp.seconds}
            id={item.timestamp.seconds}
            title={item.from}
            subject={item.subject}
            description={item.message}
            // time={new Date(item.timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;

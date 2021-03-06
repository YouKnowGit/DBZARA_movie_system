import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

// accordion lib
const Accordion2 = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary2 = withStyles({
  root: {
    // backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails2 = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

// Tab lib
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DiscountReservation = ({ display, choice, onChoice }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangeAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const cardList = [
    "??????",
    "NH",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
  ];

  return (
    <Container display={display} current={4}>
      <p>????????????</p>
      <div>
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChangeAccordion("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>DBZARA????????? / DBZARA?????????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>?????????, ?????????</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChangeAccordion("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>????????? / ?????????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>????????? ??????, ????????? ??????</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <p>????????????</p>
      <Menu>
        <AppBar position="static">
          <TabBar
            value={value}
            onChange={handleChangeTab}
            variant="fullWidth"
            aria-label="simple tabs example"
          >
            <TabItem label="????????????" {...a11yProps(0)} />
            <TabItem label="?????????" {...a11yProps(1)} />
            <TabItem label="????????? ????????????" {...a11yProps(2)} />
          </TabBar>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CreditCard>
            {cardList.map((card, idx) => (
              <CardName
                key={idx}
                onClick={() =>
                  onChoice((data) => ({ ...data, choices: true, card }))
                }
                name={card}
                state={choice.card}
              >
                {console.log(card)}
                {console.log(choice.card)}
                {card}??????
              </CardName>
            ))}
          </CreditCard>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Payment>????????? ??????</Payment>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Payment>????????? ????????????</Payment>
        </TabPanel>
      </Menu>
    </Container>
  );
};

export default DiscountReservation;

const Container = styled.div`
  display: ${(props) => (props.display === props.current ? "block" : "none")};
  width: 1200px;
  margin: auto;
  color: black;
  > div {
    margin: 20px 0;
  }
  > p {
    margin: 60px 0 20px;
    font-size: 22px;
  }
`;

// ?????????CSS
const Accordion = styled(Accordion2)`
  && {
    width: 1200px;
    margin: auto;
  }
`;
const AccordionSummary = styled(AccordionSummary2)`
  && {
    height: 60px;
    padding: 8px 50px 0 50px;
    p {
    }
  }
`;
const AccordionDetails = styled(AccordionDetails2)`
  && {
    /* padding: 8px 50px 0 50px; */
    border: 2px solid black;
  }
`;

const Menu = styled.div`
  && {
    width: 1200px;
  }
`;

const TabBar = styled(Tabs)`
  && {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const TabItem = styled(Tab)`
  border: 1px solid black;
`;

const Payment = styled.div`
  background-color: white;
  padding: 50px;
  font-size: 16px;
`;

const CreditCard = styled(Payment)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: white;
  padding: 50px;
  font-size: 16px;
`;

const CardName = styled.p`
  margin-bottom: 10px;
  /* ${(prop) => console.log("prop", prop)} */
  ${(prop) => (prop.name === prop.state ? "color: red;" : null)}
  &:hover {
    color: red;
  }
`;


import React, {useEffect, useRef, useState} from "react";
import Sqlbar from "./Sqlbar";


import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Sqlsidebar } from "./Sqlsidebar.jsx";

export function Sidebar(props) {
  const [open, setOpen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const sqlQuery = `
  CREATE TABLE Students (
      StudentID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      Age INT,
      GPA DECIMAL(3, 2)
  );

  INSERT INTO Students (StudentID, FirstName, LastName, Age, GPA)
  VALUES (1, 'John', 'Doe', 20, 3.75);

  SELECT * FROM Students;
`;
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setMenuOpen(!menuOpen);
  };

  return (

    <>

      <Card className="h-screen max-h-[42.5rem] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">

        <div className="mb-2 flex items-center gap-4 p-4 justify-center">
          <div className="mt-6 flex max-w-md gap-x-4">

            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 text flex-auto rounded-md border-0 bg-white/5 px-6 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="요구사항을 입력하세요"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform rotate-180 ${open === 1 ? "rotate-0 " : ""}`}
              />
            }
          >
            <ListItem className="p-" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <div class="flex">
                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">SQL Query</button>
                </div>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <ListItem>
                {sqlQuery}
              </ListItem>
            </AccordionBody>
          </Accordion>
         
        </List>
        <Sqlbar > 
         </Sqlbar>

      </Card>
    </>

  );
}


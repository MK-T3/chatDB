import { React, useState } from "react";
import {
  Card,
  List,
  ListItem,
  Textarea,
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
  Button,
  Drawer,
  Typography
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

export function Sidebar(props) {
  const [open, setOpen] = useState(0);
  const { sidebar, setSidebar } = props;

  const query = "SELECT name, population FROM city WHERE population <= 10000000 AND population >= 8000000 ORDER BY population DESC"


  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setSidebar(!sidebar)
  };


  return (
    <Card className="h-[calc(93vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 gap-4">
      <Typography variant="h2" class="text-center font-bold text-lg">요구사항을 입력하세요!</Typography>
      <Typography variant="lead" >
        Enter the requirements in the input window
        below to obtain the database schema and SQL Query!
      </Typography>
      <hr className="my-2 border-blue-gray-50" />
      <div className="w-auto border-indigo-600">
        <Textarea rows={8} placeholder="Input your Requirement" />
      </div>
      <div class="flex">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5  font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enter
        </button>
      </div>
      <hr className="border-blue-gray-50" />
      {/*sql query 버튼*/}
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              //버튼 회전
              className={`mx-auto h-4 w-4 transition-transform rotate-180 ${open === 1 ? "rotate-0" : ""}`}
            />
          }
        >
          <ListItem className="p-3" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <div class="flex">
                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">SQL Query</button>
              </div>
            </AccordionHeader>
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <AccordionBody className="py-1">
            <div>{query}</div>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}
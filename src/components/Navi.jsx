import { Fragment, React, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ChatbotUI } from './ChatbotUI';

const navigation = [
  { name: 'Dashboard', current: true },
  { name: 'Team', current: false },
  { name: 'Save', current: false },
  { name: 'Share', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navi() {

  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleLoginClick = () => {
    console.log("login");
  };
  const handleSaveClick = () => {
    console.log("save");
  };
  const handleShareClick = () => {
    console.log("share");
  };
  const handleConcactClick = () => {
    console.log("contact");
  };

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto flex max-w-9xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="./public/image/logo.png" alt="chatDB" />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <button className="text-lg font-bold leading-6 text-white" onClick={handleSaveClick}>
            Save
          </button>
          <button className="text-lg font-bold leading-6 text-white" onClick={handleShareClick}>
            Share
          </button>
          <button className="text-lg font-bold leading-6 text-white" onClick={handleConcactClick}>
            Contact
          </button>
          <button className="text-lg font-bold leading-6 text-white" onClick={openDrawerRight}>
            Help
          </button>
        </Popover.Group>
        <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4">
          <div className="mb-7 flex items-center justify-between">
            <h3 class="text-lg text-center font-bold">
              ChatBot Service
            </h3>
          </div>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Enter what you need help with below.
            Chatdb will solve it for you.
          </Typography>
          <hr className="my-4 border-blue-gray-50" />
          <ChatbotUI />
        </Drawer>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" onClick={handleLoginClick}>
          <button className="text-lg font-bold leading-6 text-white ml-auto dark:md:hover:bg-indigo-600 ">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
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
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ChatbotUI } from './ChatbotUI';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import { Enter } from './Enter';

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isShareOpen, setShareOpen] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const copyKey = () =>{
    navigator.clipboard.writeText(textBoxValue);
    setCopyMessage('복사되었습니다!');
  }

  const createKey = () =>{
    const key = uuidv4();
    setTextBoxValue(key);
    setCopyMessage('');
  }

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleSaveClick = () => {
    console.log("save");
  };

  const handleShareClick = () => {
    setShareOpen(true);
  };

  const handleConcactClick = () => {
    console.log("contact");
  };

  const handleShareDialogClose = () => {
    setShareOpen(false);
  };

  const LoginModalStyles = {
    content: {
      transform: loginModalOpen ? 'translateY(0)' : 'translateY(-100vh)', // 모달 창이 내려오는 애니메이션 효과
      transition: 'transform 0.3s ease-in-out', // 애니메이션의 속도와 이징 설정
      width: '50%', // 모달 창의 너비를 조정할 수 있습니다
      maxWidth: '500px', // 모달 창의 최대 너비를 제한할 수 있습니다
      height: '50%', // 모달 창의 높이를 조정할 수 있습니다
      maxHeight: '500px', // 모달 창의 최대 높이를 제한할 수 있습니다
      margin: 'auto',
      backgroundColor: 'rgb(79, 70, 229)',
    }
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
      {isShareOpen && (
        <Dialog
          open={isShareOpen}
          onClose={handleShareDialogClose}
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black opacity-50"
        >
          <div className="bg-white rounded-lg p-4 w-2/5 flex flex-col">
            <DialogHeader>Share Dialog</DialogHeader>
            <DialogBody>
              <samp></samp>
              <p className="text-gray-700">Save or share your work with key generation!.</p>
              <div className="flex">
                <input type="text" value={textBoxValue} className="border border-gray-300 px-1 py-2 rounded-md flex-grow" />
                <Button variant="outlined" color="green" onClick={copyKey} className='px-2'>
                  <span>Copy</span>
                </Button>
              </div>
              {copyMessage && <p className="text-green-500 mt-2">{copyMessage}</p>}
            </DialogBody>
            <DialogFooter className="flex justify-end">
              <Button onClick={createKey} variant="text" color = "red" className="px-4 mr-2">
                Create
              </Button>
              <Button onClick={handleShareDialogClose} variant="text" className="px-4">
                Close
              </Button>
            </DialogFooter>
          </div>
        </Dialog>
      )}

      <Modal
        isOpen={loginModalOpen}
        onRequestClose={() => setLoginModalOpen(false)}
        ariaHideApp={false}
        style={LoginModalStyles}
      >
        <button onClick={() => setLoginModalOpen(false)}>Close</button>
        <Enter />
      </Modal>
    </header>
  )
}
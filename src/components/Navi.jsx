import { Fragment, React, useState, useRef } from 'react'
<<<<<<< HEAD
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

=======
import { Disclosure, Dialog, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
import {
  Drawer,
  Typography,
<<<<<<< HEAD
  IconButton,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";
import { ChatbotUI } from './ChatbotUI';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import { Enter } from './Enter';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
=======
  Input
} from "@material-tailwind/react";
import { ChatbotUI } from './ChatbotUI';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186

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

  //save
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null)
<<<<<<< HEAD
 
=======

>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
  //share
  const [openShare, setOpenShare] = useState(false);
  const cancelShareRef = useRef(null)

  //contact
  const [openConcact, setOpenConcact] = useState(false);
  const cancelConcactRef = useRef(null)

<<<<<<< HEAD
  const createKey = () => {
    const key = uuidv4();
    setTextBoxValue(key);
    setCopyMessage('');
  }
  const copyKey = () => {
    navigator.clipboard.writeText(textBoxValue);
    setCopyMessage('복사되었습니다!');
  }

  
  const handleLoginClick = () => {
    setLoginModalOpen(true);
=======

  const [copied, setCopied] = useState(false);
  const [generatedUuid, setGeneratedUuid] = useState('');

  const textCopy = () => {
    const newUuid = uuidv4();
    navigator.clipboard.writeText(newUuid);
    setGeneratedUuid(newUuid);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const textClose = () =>{
    setGeneratedUuid('');
  }

  //login
  const [openLogin, setOpenLogin] = useState(false)
  const canceLoginRef = useRef(null)




  const handleLoginClick = () => {
    setOpenLogin(!openLogin);
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
  };

  const handleSaveClick = () => {
    console.log("save");
    setOpen(!open);
  };

  const handleShareClick = () => {
    setOpenShare(!openShare);
  };

  const handleConcactClick = () => {
    setOpenConcact(!openConcact);
<<<<<<< HEAD
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
=======
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
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
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 mb-2">
                              Database Schema Save
                            </Dialog.Title>
                            <hr className="border-blue-gray-50" />
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you going to save the schema you created?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                          onClick={() => setOpen(false)}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <button className="text-lg font-bold leading-6 text-white" onClick={handleShareClick}>
            Share
<<<<<<< HEAD
            </button>
=======
          </button>
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
          <Transition.Root show={openShare} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelShareRef} onClose={setOpenShare}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:ml-6 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 mb-2">
                              Share
                            </Dialog.Title>
                            <hr className="border-blue-gray-50" />
                            <div class="mt-2">
                              Copy the key below and share it with your team!
                            </div>
                            <div className="flex w-full mt-6 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
<<<<<<< HEAD
                              {uuidv4()}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                              </svg>
=======

                            <div onClick={textCopy}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                              </svg>
                              </div>
                              {generatedUuid && <span>{generatedUuid}</span>}
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                          onClick={() => setOpenShare(false)}
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
<<<<<<< HEAD
                          onClick={() => setOpenShare(false)}
                          ref={cancelShareRef}
=======
                          onClick={() => {setOpenShare(false),textClose()}}
                          
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <button className="text-lg font-bold leading-6 text-white" onClick={handleConcactClick}>
            Contact
          </button>
          <Transition.Root show={openConcact} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelConcactRef} onClose={setOpenConcact}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 mb-2">
                              Contact us
                            </Dialog.Title>
                            <hr className="border-blue-gray-50" />
                            <div className="mt-2">
                              <p className="text-sm text-gray-500 mb-7">
                                Please fill in the information below and submit it
                              </p>
                              <Typography variant="h6" color="blue-gray" className="mb-3">
                                Name
                              </Typography>
                              <Input
                                size="sm"
                                placeholder="name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mb-3"
                                labelProps={{
                                  className: "before:content-none after:content-none ",
                                }}
                              />
                              <Typography variant="h6" color="blue-gray" className="mb-3">
                                E-mail
                              </Typography>
                              <Input
                                size="sm"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mb-3"
                                labelProps={{
                                  className: "before:content-none after:content-none",
                                }}
                              />
                              <Typography variant="h6" color="blue-gray" className="mb-3">
                                Phone Number
                              </Typography>
                              <Input
                                size="sm"
                                placeholder="XXX-XXXX-XXXX"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mb-3"
                                labelProps={{
                                  className: "before:content-none after:content-none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                          onClick={() => setOpenConcact(false)}
                        >
                          Contact
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpenConcact(false)}
                          ref={cancelConcactRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <button className="text-lg font-bold leading-6 text-white" onClick={openDrawerRight}>
            Help
          </button>
        </Popover.Group >
        <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4">
          <div className="mb-7 flex items-center justify-between">
            <h3 class="text-xl text-center font-bold">
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" >
          <button onClick={handleLoginClick} className="text-lg font-bold leading-6 text-white ml-auto dark:md:hover:bg-indigo-600 ">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
<<<<<<< HEAD
      </nav>

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
=======
        <Transition.Root show={openLogin} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={canceLoginRef} onClose={setOpenLogin}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                              Password
                            </label>
                            <div className="text-sm">
                              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                      <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                          Start a 14 day free trial
                        </a>
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </nav >
    </header >
>>>>>>> 980e25dca9732d4c919a9fcec9d53b6f5d975186
  )
}
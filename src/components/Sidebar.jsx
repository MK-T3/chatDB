
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
  const [inputValue, setInputValue] = useState("");
  const [responseValue, setResponseValue] = useState("");
  const [mermaidValue, setMermaidValue] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 동작할 로직 작성
    const message = inputValue; // 전송할 예시 메시지

    // 메시지를 포함한 JSON 객체 생성
    const data = {
      message: message
    };
  
    // HTTP POST 요청으로 데이터를 서버로 전송
    fetch('http://dbwizard.iptime.org:8031', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json(); // 서버 응답을 JSON 형식으로 파싱
        // 필요한 경우 서버 응답 처리
      })
      .then(data => {
        console.log('Response:', data);
        setResponseValue (data.message);
        
        // 여기서부터 mermaid code를 받아오는 부분 추가

        // 버튼 클릭 시 동작할 로직 작성
        const request = data.message + "   give me mermaid code for class diagram for the above use case"; // 전송할 예시 메시지

        // 메시지를 포함한 JSON 객체 생성
        const data2 = {
          message: request
        };
      
        // HTTP POST 요청으로 데이터를 서버로 전송
        fetch('http://dbwizard.iptime.org:8031', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data2)
        })
          .then(response => {
            return response.json(); // 서버 응답을 JSON 형식으로 파싱
            // 필요한 경우 서버 응답 처리
          })
          .then(data => {
            console.log('Response:', data);
            setMermaidValue (data.message);
          })
          .catch(error => {
            console.error('Error:', error);
            // 요청 중에 발생한 오류 처리
          });

          // 여기까지 mermaid code를 받아오는 부분 추가
      })
      .catch(error => {
        console.error('Error:', error);
        // 요청 중에 발생한 오류 처리
      });
    
    // setParentContentValue (inputValue);
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
              value={inputValue} onChange={handleInputChange} placeholder="요구사항을 입력하세요." 
            />
            <button
              type="submit"
              onClick={handleButtonClick}
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
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">SQL Query</button>
                </div>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <ListItem>
                {mermaidValue}
              </ListItem>
            </AccordionBody>
          </Accordion>
         
        </List>
        <Sqlbar responseValue={responseValue}/>

      </Card>
    </>

  );
}


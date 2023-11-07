import { React, useState, useContext } from "react";
import Editor from '@monaco-editor/react'
import ERDiagram from "./ERDiagram";
import MermaidContext from './MermaidContext';

import {
  Card,
  List,
  ListItem,
  Textarea,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tooltip,
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
  const [inputValue, setInputValue] = useState("");
  const [responseValue, setResponseValue] = useState("");
  const { setMermaidValue } = useContext(MermaidContext);
  const { sidebar, setSidebar } = props;
  

  const query = "SELECT name, population FROM city WHERE population <= 10000000 AND population >= 8000000 ORDER BY population DESC"


  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setSidebar(!sidebar)
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 동작할 로직 작성
    const message = inputValue; // 전송할 예시 메시지

    // 메시지를 포함한 JSON 객체 생성
    const data = {
      message: message + "   위 내용을 바탕으로 sql문 추출해줘"
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
        const request = data.message + "   give me mermaid code from sql for class-diagram for the above use case"; // 전송할 예시 메시지

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
      <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 gap-4">
        <h1 class="text-center font-bold text-lg">요구사항을 입력하세요!</h1>
        <Typography variant="lead" >
          Enter the requirements in the input window
          below to obtain the database schema and SQL Query!
        </Typography>
        <hr className="my-2 border-blue-gray-50" />
        <div className="w-auto border-indigo-600">
          <Textarea value={inputValue} onChange={handleInputChange} rows={8} placeholder="Input your Requirement" />
        </div>
        <div class="flex">
          <Tooltip content="Send your requirement">
            <button
              type="submit"
              onClick={handleButtonClick}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5  font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enter
            </button>
          </Tooltip>
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
                className={`mx-auto h-4 w-4 transition-transform rotate-0 ${open === 1 ? "rotate-180" : ""}`}
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
            <Editor height='300px'
                            width='100%'
                            language="sql"
                            defaultValue="SELECT * FROM Students;"
                            value={responseValue}
                            options={{
                                wordWrap: 'on',
                                fontSize: 12,
                                minimap: {enabled : false},
                                scrollbar: {
                                    vertical: 'auto',
                                    horizontal: 'auto'
                                }                            
                            }}
                            />
            </AccordionBody>
          </Accordion>
        </List>
      </Card>
    </>
  );
}
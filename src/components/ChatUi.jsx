import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';

export function ChatUi() {
    const [typing, setTyping] = useState(false);
    const [message, setMessage] = useState([
        {
        message: "Input your requirement!!!",
        sender: "ChatGPT"
        }
    ]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...message, newMessage]; //all the old messages, + the new message

        
        //update our messages state
        setMessage(newMessages);

        //set a typing indicator (chatgpt is typing)
        setTyping(true)

        //process message to chatGPT (send it over and see response)
    }

    return (
        <>
            <div styles={{ position: "relative", height: "800px", width: "700px" }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                        typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing"/> : null}
                        >
                            {message.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type message here' onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>
    )
}

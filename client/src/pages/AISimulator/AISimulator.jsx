// import React, { useEffect, useRef, useState } from "react";
// import "./AISimulator.scss";
// // AI custom instruction
// import { systemMessage } from "../../utils/data";
// // user and interviewer avatars
// import ai_avatar from "../../resources/ai.png";
// import user_avatar from "../../resources/user.png";
// import { Link } from "react-router-dom";

// // openAI API Key from .env
// const openaiAPI = process.env.REACT_APP_OPENAI_API_KEY;

// const AISimulator = () => {
//   // store current message
//   const [message, setMessage] = useState("");
//   // handle loading the answer from AI
//   const [isLoading, setIsLoading] = useState(false);
//   // store all messages
//   const [allMessages, setAllMessages] = useState([
//     {
//       role: "assistant",
//       content:
//         "Alege tehnologia sau tehnologiile pentru care vrei sa fii intervievat.",
//     },
//   ]);
//   // auto scroll when the answer is received
//   const msgEnd = useRef(null);

//   const sendMessage = async () => {
//     try {
//       setIsLoading(true);

//       const text = message;
//       setMessage("");

//       let url = "https://api.openai.com/v1/chat/completions";
//       let token = `Bearer ${openaiAPI}`;
//       // more models to work with: gpt-3.5-turbo, gpt-3.5-turbo-1106, gpt-3.5-turbo-0125, gpt-4-turbo
//       let model = "gpt-3.5-turbo-1106";
//       let messagesToSend = [
//         {
//           role: "system",
//           content: systemMessage,
//         },
//         ...allMessages,
//         {
//           role: "user",
//           content: text,
//         },
//       ];

//       setAllMessages([...messagesToSend]);

//       let res = await fetch(url, {
//         method: "POST",
//         headers: {
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: model,
//           messages: messagesToSend,
//         }),
//       });

//       let resjson = await res.json();

//       if (resjson) {
//         let newAllMessages = [...messagesToSend, resjson.choices[0].message];
//         setAllMessages(newAllMessages);
//       }

//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);

//       console.error("A apărut o eroare:", error);
//     }
//   };

//   // send the message when press enter
//   const handleEnter = async (e) => {
//     if (e.key === "Enter" && message.trim().length !== 0) await sendMessage();
//   };

//   // always scroll to the most recent chat message
//   useEffect(() => {
//     msgEnd.current.scrollIntoView();
//     console.log(openaiAPI);
//   }, [allMessages]);

//   return (
//     <div className="simulator">
//       <div className="simulator-chat">
//         <div className="chat-bar">
//           <div className="circle">
//             <span className="red box"></span>
//           </div>
//           <div className="circle">
//             <span className="yellow box"></span>
//           </div>
//           <div className="circle">
//             <span className="green box"></span>
//           </div>
//           <div className="tab">
//             <span>Interviu</span>
//           </div>
//           <div
//             className="tab link"
//             onClick={() => {
//               window.location.reload();
//             }}
//           >
//             <span>Chat Nou</span>
//           </div>

//           <Link className="link-btn tab link" to="/">
//             Acasa
//           </Link>
//         </div>

//         <div className="chat-content">
//           <div className="chat-messages">
//             {allMessages.map(
//               (msg, index) =>
//                 (msg.role === "user" || msg.role === "assistant") && (
//                   <div key={index} className="message">
//                     <div className="message-avatar">
//                       <img
//                         src={msg.role === "user" ? user_avatar : ai_avatar}
//                         alt={msg.role === "user" ? "TU" : "A.I."}
//                       />
//                     </div>
//                     <div
//                       className={
//                         msg.role === "assistant"
//                           ? "message-text background"
//                           : "message-text"
//                       }
//                     >
//                       <h4>{msg.role === "user" ? "Tu" : "Intervievator"}</h4>
//                       <p>{msg.content}</p>
//                     </div>
//                   </div>
//                 )
//             )}
//             {isLoading && (
//               <div className="card">
//                 <div className="card-skeleton card-description"></div>
//               </div>
//             )}
//             <div ref={msgEnd} />
//           </div>

//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder={
//                 allMessages.length > 1
//                   ? "Raspunde la intrebare.."
//                   : "Alege o tehnologie.."
//               }
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleEnter}
//               value={message}
//             />

//             <button
//               disabled={!message.trim()}
//               className={message.trim() ? "send-btn" : "send-btn disabled"}
//               onClick={sendMessage}
//             >
//               <div className="svg-wrapper-1">
//                 <div className="svg-wrapper">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     width="24"
//                     height="24"
//                   >
//                     <path fill="none" d="M0 0h24v24H0z"></path>
//                     <path
//                       fill="currentColor"
//                       d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AISimulator;

import React from 'react'

const AISimulator = () => {
  return (
    <div>AISimulator</div>
  )
}

export default AISimulator
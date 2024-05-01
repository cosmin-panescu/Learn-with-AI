import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// style
import "./AISimulator.scss";
// user and interviewer avatars
import ai_avatar from "../../resources/ai.png";
import user_avatar from "../../resources/user.png";

const AISimulator = () => {
  // store current message
  const [message, setMessage] = useState("");
  // handle loading the answer from AI
  const [isLoading, setIsLoading] = useState(false);
  // store all messages
  const [allMessages, setAllMessages] = useState([]);
  // auto scroll when the answer is received
  const msgEnd = useRef(null);

  const sendMessage = async (e, message) => {
    if (!message) return;
    setIsLoading(true);

    let msgs = allMessages;
    msgs.push({ role: "user", content: message });
    setAllMessages(msgs);

    setMessage("");

    fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        allMessages,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setAllMessages(msgs);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // send the message when press enter
  const handleEnter = async (e) => {
    if (e.key === "Enter" && message.trim().length !== 0)
      await sendMessage(e, message);
  };

  // always scroll to the most recent chat message
  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [allMessages]);

  return (
    <div className="simulator">
      <div className="simulator-chat">
        <div className="chat-bar">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
          <div className="tab">
            <span>Interviu</span>
          </div>
          <div
            className="tab link"
            onClick={() => {
              window.location.reload();
            }}
          >
            <span>Chat Nou</span>
          </div>

          <Link className="link-btn tab link" to="/">
            Acasa
          </Link>
        </div>

        <div className="chat-content">
          <div className="chat-messages">
            {allMessages.map(
              (msg, index) =>
                (msg.role === "user" || msg.role === "assistant") && (
                  <div key={index} className="message">
                    <div className="message-avatar">
                      <img
                        src={msg.role === "user" ? user_avatar : ai_avatar}
                        alt={msg.role === "user" ? "TU" : "A.I."}
                      />
                    </div>
                    <div
                      className={
                        msg.role === "assistant"
                          ? "message-text background"
                          : "message-text"
                      }
                    >
                      <h4>{msg.role === "user" ? "Tu" : "Intervievator"}</h4>
                      <p>{msg.content}</p>
                    </div>
                  </div>
                )
            )}
            {isLoading && (
              <div className="card">
                <div className="card-skeleton card-description"></div>
              </div>
            )}
            <div ref={msgEnd} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder={
                allMessages.length > 1
                  ? "Raspunde la intrebare.."
                  : "Alege o tehnologie.."
              }
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleEnter}
              value={message}
            />

            <button
              disabled={!message.trim()}
              className={message.trim() ? "send-btn" : "send-btn disabled"}
              onClick={(e) => sendMessage(e, message)}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISimulator;

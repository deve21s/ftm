import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";

function Taskdetails() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [isshow, setShow] = useState("hidden");

  const [comment, setComment] = useState([]);
  const { error, ispending, data } = useFetch(
    `http://localhost:5000/task/${id}`
  );

  const { data: members } = useFetch(
    "https://ftmbackend.herokuapp.com/memberlist"
  );

  const token = localStorage.getItem("token");

  const showhide = () => {
    if (isshow === "block") {
      setShow("hidden");
    } else {
      setShow("block");
    }
  };
  const submitComment = () => {
    //submit comment
    fetch(`http://localhost:5000/comment/${id}?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        data.comments.push(res);
        setText("");
        showhide();
      });
  };
  return (
    <div className="flex justify-center h-screen bg-gray-400">
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      {data && (
        <div className="w-2/3 rounded-xl bg-gray-700 text-xl p-2 shadow-xl h-screen">
          <div>
            <h1 className="flex justify-center bg-yellow-600 font-mono font-bold rounded-lg mb-2">
              {data.title}
            </h1>
            <h1 className="m-2 font-mono text-blue-500">
              Task Title :{data.title}
            </h1>
            <h1 className="m-2 font-mono text-blue-500">
              Task is Completed :{data.isCompleted.toString()}
            </h1>
            <h1 className="m-2 font-mono text-blue-500">
              Task Description :{data.des}
            </h1>
            <h1 className="m-2 font-mono text-blue-500">
              Task DueDate :{data.dueDate}
            </h1>
            <h1 className="m-2 font-mono text-blue-500">
              Task Assgin :
              {members && members.find((a) => a._id === data.assign).name}
            </h1>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-gray-200 p-2 rounded-xl shadow-xl outline-none"
              onClick={showhide}
            >
              comment
            </button>
          </div>
          <div className={isshow}>
            <form className="flex flex-col flex-warp">
              <textarea
                value={text}
                className="m-2 w-5/6 md:w-1/2"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <input
                className="m-2 w-28"
                type="button"
                value="comment"
                disabled={!comment}
                onClick={submitComment}
              />
            </form>
          </div>
          <h1 className="text-center font-semibold text-4xl">Comments</h1>
          <div className="flex flex-col items-center overflow-hidden h-2/3 overflow-y-auto">
            {data.comments.length > 0 ? (
              data.comments.map((a) => (
                <div className="w-2/3 m-2 bg-white flex flex-col items-start rounded-lg">
                  <p className="m-2 bg-yellow-200 w-auto">{a.name}</p>
                  <p className="m-2">{a.text}</p>
                </div>
              ))
            ) : (
              <h1>No comment on this task</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskdetails;

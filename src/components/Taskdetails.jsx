import Loader from "./Loader";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function Taskdetails() {
  const { id } = useParams();
  const { error, ispending, data } = useFetch(
    `https://ftmbackend.herokuapp.com/task/${id}`
  );
  return (
    <div className="flex justify-center h-screen bg-gray-400">
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      {data && (
        <div className="w-2/3 rounded-xl bg-gray-700 text-xl m-2 p-2 shadow-xl">
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
            Task Assgin :{data.assign}
          </h1>
          <div className="flex justify-end">
            <button className="bg-red-500 text-gray-200 p-2 rounded-xl shadow-xl outline-none">
              comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskdetails;

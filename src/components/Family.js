import React, { useState, useEffect } from "react";
import Memberlist from "./Memberlist";
import Loader from "./Loader";
import useFetch from "../useFetch";
import Createmember from "./Createmember";

function Family(props) {
  const [members, setmembers] = useState([]);
  const { data, ispending, error } = useFetch(
    "http://localhost:5000/memberlist/60bcc6e83a0d25360c333171"
  );
  useEffect(() => {
    setmembers(data);
  }, [data]);

  const addmember = (newmember) => {
    console.log(newmember);
    setmembers([newmember, ...members]);
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      <div className="flex flex-col md:flex-row bg-gray-100 h-screen w-full">
        <div className="md:w-1/2 bg-gray-300 flex justify-center items-centers">
          <Createmember addmember={addmember} />
        </div>
        <div className="flex flex-col  md:w-1/2 bg-gray-800 items-center rounded-t-xl md:rounded-t-none md:rounded-l-xl p-8 overflow-y-auto shadow-2xl">
          <h1 className="sm:text-3x1 md:tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 font-mono">
            MemberList
          </h1>
          {members &&
            members.map((member) => (
              <Memberlist member={member} key={member._id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Family;

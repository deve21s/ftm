import React, { useState, useEffect } from "react";
import Memberlist from "./Memberlist";
import Loader from "./Loader";
import Header from "./Header";
import useFetch from "../useFetch";
import Createmember from "./Createmember";

function Family(props) {
  const [members, setmembers] = useState([]);
  const { data, ispending, error } = useFetch(
    "https://ftmbackend.herokuapp.com/memberlist"
  );
  useEffect(() => {
    setmembers(data);
  }, [data]);

  // const addmember = (newmember) => {
  //   console.log(newmember);
  //   setmembers([newmember, ...members]);
  // };
  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      <div className="flex flex-col md:flex-row bg-gray-100 md:min-h-screen w-full">
        <div className="md:w-1/2 bg-gray-300 flex justify-center items-centers">
          <Createmember />
        </div>
        <div className="flex flex-col  md:w-1/2 bg-gray-800 items-center rounded-t-xl md:rounded-t-none md:rounded-l-xl p-8 overflow-y-auto shadow-2xl">
          <h1 className="sm:text-3x1 md:tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 mt-5 font-mono">
            MemberList
          </h1>
          {members &&
            (members.length > 0 ? (
              members.map((member) => (
                <Memberlist member={member} key={member._id} />
              ))
            ) : (
              <div className="flex justify-center items-center text-xl text -white bg-red-300">
                <span>NO member avilable for this family</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Family;

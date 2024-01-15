import React, { useEffect, useState } from "react";
import axios from "axios";

interface notes {
  name: string;
  number: string;
  id: number;
}
export const SectionC = () => {
  const [note, setNote] = useState([]);
  //getting data from the server
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log(response.data);
      setNote(response.data);
    });
  }, []);

  return (
    <div>
      <div className="text-[30px] font-bold ">sectionC</div>
      <div>
        {note.map((item: notes) => (
          <div key={item.id} className="font-medium text-[18px]">
            id: {item.id} name: {item.name} , details: {item.number}
          </div>
        ))}
      </div>
    </div>
  );
};

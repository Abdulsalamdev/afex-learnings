import axios from "axios";
import React, { useEffect, useState } from "react";
import { notes } from "./sectionC";
type Contact = {
  name: string;
  number: string;
  id: number;
};
export const SectionD = () => {
  // base URl
  const baseUrl = "http://localhost:3001/persons";
  // All states
  const [notes, setNotes] = useState<Contact[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // gettting data from the server
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);
  // handle new name
  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewName(event.target.value);
    console.log(newName);
  };
  // handle filter value
  const handleFilter = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFilterValue(event.target.value);
    console.log(filterValue);
  };
  // handle new number
  const handleNumber = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewNumber(event.target.value);
    console.log(newNumber);
  };
  // upbdate note
  const newNote: {
    name: string;
    number: string;
    id: number;
  } = { name: newName, number: newNumber, id: notes.length + 1 };

  // handle submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post(baseUrl, newNote)
      .then((response) => {
        setNewName(""), setNewNumber("");
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  // filter content
  const filteredNotes = notes.filter((note) =>
    note.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  console.log(filterValue, filteredNotes);
  return (
    <div>
      <div className="text-[30px] font-bold">sectionD</div>
      <div className="text-[25px] font-medium">
        Continuation of section C The PhoneBook
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="text-[20px] font-medium py-[20px] ">
          filter show with{" "}
          <input
            value={filterValue}
            onChange={handleFilter}
            type="text"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div className="text-[20px] font-medium pb-[20px] ">
          name:{" "}
          <input
            value={newName}
            onChange={handleName}
            type="text"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div className="text-[20px] font-medium pb-[20px] ">
          number:{" "}
          <input
            value={newNumber}
            onChange={handleNumber}
            type="text"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
        <div className="">
          <button
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "4px",
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",

              cursor: "pointer",
            }}
            type="submit"
          >
            add
          </button>
        </div>
      </form>
      <div className="text-[27px] font-medium py-[30px]">Number</div>
      <div>
        {filteredNotes.map((item: notes) => (
          <div key={item.id} className="flex items-center gap-[20px] pb-[20px]">
            <div className="text-[17px] font-medium ">
              {item.name} - {item.number}{" "}
            </div>
            <div className="flex items-center gap-[15px]">
              <button className="delete-btn">delete</button>
              <button className="edit-btn">edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

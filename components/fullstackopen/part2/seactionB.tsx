import React, { useState } from "react";

export const SeactionBPart2 = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [filterValue, setFilterValue] = useState("");

  // filter function
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  //handleChange
  const handleChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  //handleSubmit
  const handlesubmit = (event: any) => {
    event.preventDefault(); // Prevents form submission from refreshing the page
    const newPerson = { name: newName }; // Create a new object with the input value
    setPersons([...persons, newPerson]); // Add the new object to the existing array of persons
    setNewName(""); // Clear the input field
  };
  console.log(filterValue, filteredPersons);
  return (
    <div className="">
      <p className="text-[30px] font-bold">Seaction B</p>
      <h2 className="text-[25px] font-medium pb-[10px]">Phonebook</h2>
      <form
        className="flex items-center gap-[20px] pb-[10px]"
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <input
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
          type="text"
          placeholder="Filter by name"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />
        <div className="text-[20px] font-medium pb-[10px]">
          name:{" "}
          <input
            value={newName}
            onChange={handleChange}
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
      <h2 className="text-[20px] font-medium">Numbers</h2>
      <div>
        {filteredPersons.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

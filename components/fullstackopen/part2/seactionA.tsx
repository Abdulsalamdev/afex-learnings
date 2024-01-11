import React from "react";

interface course {
  id: number;
  name: string;
  parts: partsComponent[];
}
interface partsComponent {
  name: string;
  exercise: string;
  id: number;
}
export const SeacPart2 = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  const totalExercises = course.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return (
    <div>
      <p className="text-[30px] font-bold">section A</p>
      <div className="text-[25px] font-bold pb-[10px]">{course.name}</div>
      <div>
        {course.parts.map((item) => (
          <div key={item.id}>
            <p className="text-[20px] font-medium">
              {item.name} {item.exercises}
            </p>
          </div>
        ))}
      </div>
      <div className="text-[20px] font-medium">
        total of {totalExercises} exercises
      </div>
    </div>
  );
};

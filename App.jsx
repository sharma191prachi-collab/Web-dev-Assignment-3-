import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", score: 55 },
    { id: 2, name: "Meera", score: 32 },
    { id: 3, name: "Rohan", score: 78 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    ));
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header title="React Student Scoreboard" />
      <StudentTable students={students} onUpdateScore={updateScore} />
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  );
}

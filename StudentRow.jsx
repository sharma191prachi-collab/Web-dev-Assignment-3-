export default function StudentRow({ student, onUpdateScore }) {
  const status = student.score >= 40 ? "Pass" : "Fail";
  const statusClass = student.score >= 40 ? "pass" : "fail";

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
        />
      </td>
      <td className={statusClass}>{status}</td>
    </tr>
  );
}

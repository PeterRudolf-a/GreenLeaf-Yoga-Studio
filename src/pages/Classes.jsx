import React from "react";

const classesSchedule = [
  { time: "08:00 AM", class: "Vinyasa Flow", instructor: "Alice Smith" },
  { time: "10:00 AM", class: "Hatha Yoga", instructor: "John Doe" },
  { time: "12:00 PM", class: "Restorative Yoga", instructor: "Maria Lee" },
  { time: "02:00 PM", class: "Power Yoga", instructor: "David Kim" },
  { time: "04:00 PM", class: "Yin Yoga", instructor: "Sara Patel" },
];

export default function Classes() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        GreenLeaf Yoga Studio - Classes
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "2rem",
        }}
      >
        <thead>
          <tr style={{ background: "#e8f5e9" }}>
            <th style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
              Time
            </th>
            <th style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
              Class
            </th>
            <th style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
              Instructor
            </th>
            <th
              style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {classesSchedule.map((session, idx) => (
            <tr key={idx} style={{ background: idx % 2 ? "#f1f8e9" : "#fff" }}>
              <td style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
                {session.time}
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
                {session.class}
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
                {session.instructor}
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #c8e6c9" }}>
                <button
                  style={{
                    background: "#388e3c",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  disabled
                  title="Booking coming soon!"
                >
                  Book now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// lib/SignupData.ts

export interface User {
  id: number;
  name: string;
  email: string;
  type: "student" | "teacher";
}

export const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", type: "teacher" },   // Was student
  { id: 2, name: "Dr. Robert Smith", email: "robert@mentora.com", type: "student" }, // Was teacher
  { id: 3, name: "Charlie Davis", email: "charlie@example.com", type: "teacher" },  // Was student
  { id: 4, name: "Prof. Sarah Miller", email: "sarah@mentora.com", type: "student" },// Was teacher
  { id: 5, name: "David Wilson", email: "david@example.com", type: "teacher" },   // Was student
  { id: 6, name: "Elena Rodriguez", email: "elena@example.com", type: "teacher" }, // Was student
  { id: 7, name: "James Anderson", email: "james@mentora.com", type: "student" },  // Was teacher
  { id: 8, name: "Fiona Gallagher", email: "fiona@example.com", type: "teacher" }, // Was student
  { id: 9, name: "Michael Chen", email: "michael@mentora.com", type: "student" },  // Was teacher
  { id: 10, name: "Sophia Taylor", email: "sophia@example.com", type: "teacher" }, // Was student
];
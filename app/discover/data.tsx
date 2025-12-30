// app/data.ts

export interface CourseCard {
  id: number;
  title: string;
  teacher: string;
  category: "mathematics" | "programming" | "science" | "commerce";
  type: "free" | "paid" | "my courses";
  rating: number;
  description: string;
  classes: { day: string; time: string }[];
  progress?: number; // Optional field for 'my courses'
}

export const cards: CourseCard[] = [
  {
    id: 1,
    title: "Discrete Mathematics",
    teacher: "Dr. Arvind Menon · IIT Alumni",
    category: "mathematics",
    type: "my courses",
    rating: 4.6,
    description: "Learn the fundamentals of discrete mathematics, logic, and combinatorics.",
    progress: 45,
    classes: [
      { day: "Monday", time: "10:00 AM - 11:30 AM" },
      { day: "Wednesday", time: "10:00 AM - 11:30 AM" }
    ]
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    teacher: "Sneha Kulkarni · Ex-Amazon",
    category: "programming",
    type: "paid",
    rating: 4.9,
    description: "Master DSA from scratch with hands-on coding examples and interview prep.",
    classes: [
      { day: "Tuesday", time: "2:00 PM - 3:30 PM" },
      { day: "Thursday", time: "2:00 PM - 3:30 PM" }
    ]
  },
  {
    id: 3,
    title: "Engineering Physics",
    teacher: "Prof. K. Natarajan · 18 yrs exp",
    category: "science",
    type: "free",
    rating: 4.5,
    description: "Deep dive into quantum mechanics, thermodynamics, and optics for engineers.",
    classes: [
      { day: "Monday", time: "09:00 AM - 10:30 AM" },
      { day: "Friday", time: "09:00 AM - 10:30 AM" }
    ]
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    teacher: "Rahul Deshpande · Google Dev",
    category: "programming",
    type: "my courses",
    rating: 4.8,
    description: "Become a full-stack developer by building real-world projects with modern tech stacks.",
    progress: 80,
    classes: [
      { day: "Saturday", time: "11:00 AM - 01:00 PM" },
      { day: "Sunday", time: "11:00 AM - 01:00 PM" }
    ]
  },
  {
    id: 5,
    title: "Linear Algebra Basics",
    teacher: "Dr. Meera Iyer · PhD Math",
    category: "mathematics",
    type: "free",
    rating: 4.7,
    description: "Understanding vectors, matrices, and their applications in data science.",
    classes: [
      { day: "Tuesday", time: "04:00 PM - 05:30 PM" },
      { day: "Thursday", time: "04:00 PM - 05:30 PM" }
    ]
  },
  {
    id: 6,
    title: "Machine Learning Foundations",
    teacher: "Vikram Joshi · AI Researcher",
    category: "programming",
    type: "paid",
    rating: 4.9,
    description: "A comprehensive guide to supervised and unsupervised learning algorithms.",
    classes: [
      { day: "Wednesday", time: "06:00 PM - 07:30 PM" },
      { day: "Friday", time: "06:00 PM - 07:30 PM" }
    ]
  },
  {
    id: 7,
    title: "Organic Chemistry",
    teacher: "Anita Sharma · 12 yrs teaching",
    category: "science",
    type: "free",
    rating: 4.4,
    description: "Explore reaction mechanisms, molecular structures, and hydrocarbon synthesis.",
    classes: [
      { day: "Monday", time: "03:00 PM - 04:30 PM" },
      { day: "Wednesday", time: "03:00 PM - 04:30 PM" }
    ]
  },
  {
    id: 8,
    title: "Operating Systems",
    teacher: "Saurabh Gupta · Systems Engineer",
    category: "programming",
    type: "paid",
    rating: 4.8,
    description: "Learn about kernel processes, memory management, and file systems.",
    classes: [
      { day: "Tuesday", time: "10:00 AM - 11:30 AM" },
      { day: "Thursday", time: "10:00 AM - 11:30 AM" }
    ]
  },
  {
    id: 9,
    title: "Business Economics",
    teacher: "Neha Malhotra · MBA, IIM",
    category: "commerce",
    type: "free",
    rating: 4.6,
    description: "Micro and macroeconomics concepts applied to modern business environments.",
    classes: [
      { day: "Friday", time: "01:00 PM - 02:30 PM" },
      { day: "Saturday", time: "01:00 PM - 02:30 PM" }
    ]
  },
  {
    id: 10,
    title: "Cybersecurity Basics",
    teacher: "Amit Verma · Security Analyst",
    category: "programming",
    type: "paid",
    rating: 4.7,
    description: "Introduction to network security, cryptography, and ethical hacking.",
    classes: [
      { day: "Monday", time: "07:00 PM - 08:30 PM" },
      { day: "Wednesday", time: "07:00 PM - 08:30 PM" }
    ]
  },
  {
    id: 11,
    title: "Probability & Statistics",
    teacher: "Dr. Pooja Khanna · Statistician",
    category: "mathematics",
    type: "free",
    rating: 4.5,
    description: "Master descriptive statistics, probability distributions, and hypothesis testing.",
    classes: [
      { day: "Tuesday", time: "09:00 AM - 10:30 AM" },
      { day: "Friday", time: "09:00 AM - 10:30 AM" }
    ]
  },
  {
    id: 12,
    title: "System Design Basics",
    teacher: "Rohit Bansal · Ex-Flipkart",
    category: "programming",
    type: "my courses",
    rating: 4.9,
    description: "Learn how to build scalable, distributed systems for high-traffic apps.",
    progress: 15,
    classes: [
      { day: "Saturday", time: "10:00 AM - 12:00 PM" },
      { day: "Sunday", time: "10:00 AM - 12:00 PM" }
    ]
  },
  {
    id: 13,
    title: "Digital Electronics",
    teacher: "S. Prakash Rao · 20 yrs exp",
    category: "science",
    type: "free",
    rating: 4.3,
    description: "Study of logic gates, flip-flops, and digital circuit design principles.",
    classes: [
      { day: "Monday", time: "02:00 PM - 03:30 PM" },
      { day: "Wednesday", time: "02:00 PM - 03:30 PM" }
    ]
  },
  {
    id: 14,
    title: "React for Beginners",
    teacher: "Kunal Mehta · Frontend Lead",
    category: "programming",
    type: "paid",
    rating: 4.8,
    description: "Learn React Hooks, State Management, and Routing from scratch.",
    classes: [
      { day: "Thursday", time: "08:00 PM - 09:30 PM" },
      { day: "Friday", time: "08:00 PM - 09:30 PM" }
    ]
  },
  {
    id: 15,
    title: "Ethics & Professional Skills",
    teacher: "Dr. Sunita Roy · Educator",
    category: "commerce",
    type: "free",
    rating: 4.6,
    description: "Develop soft skills and ethical frameworks for the modern workplace.",
    classes: [
      { day: "Saturday", time: "04:00 PM - 05:30 PM" },
      { day: "Sunday", time: "04:00 PM - 05:30 PM" }
    ]
  }
];
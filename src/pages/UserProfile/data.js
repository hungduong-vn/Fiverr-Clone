import { userRole } from "../../constants/common";

export const defSellerInfo = {
  self_intro:
    "I'm a Software Engineer with 8 years of experience and I'm most skilled at MERN stack.",
  languages: [
    { name: "Vietnamese", level: "Native Speaker" },
    { name: "English", level: "Professional Proficiency" },
  ],
  title: "Fullstack Web Developer",

  id: 1,
  name: "Japser Duong",
  email: "duongngochung13@gmail.com",
  password: "1234",
  phone: "01233456789",
  nationality: "Vietnam",
  birthday: "03-12-2000", // "2000-12-03T00:00:00.000Z"
  created_at: "09-03-2023", // "2023-03-09T04:52:38.000Z"
  gender: true,
  role: `${userRole.seller}`,
  skills: `["HTML/CSS", "JavaScript", "Responsive Website"]`,
  certificate: `["AWS", "IELTS"]`,
  avatar:
    "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
  user_socials: [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/johnny.sagittarius.7/",
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/h%C3%B9ng-d%C6%B0%C6%A1ng-6366b7178/",
    },
  ],
};

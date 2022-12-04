import { userRole } from "../../constants/common";

export const defSellerInfo = {
  id: 1,
  name: "Japser Duong",
  email: "duongngochung13@gmail.com",
  password: "1234",
  phone: "01233456789",
  birthday: "03-12-2000",
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

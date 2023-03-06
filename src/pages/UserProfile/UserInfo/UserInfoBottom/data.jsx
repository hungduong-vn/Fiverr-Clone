export const userProfile = [
  {
    title: "Description",
    updateFunc: "Edit",
    content:
      "I'm a Software Engineer with 8 years of experience and I'm most skilled at MERN stack.",
  },
  {
    title: "Languages",
    updateFunc: "Add New",
    content: (
      <>
        <div className="user-language">
          <b>English</b> - Professional Proficiency
        </div>
        <div className="user-language">
          <b>Vietnamese</b> - Native Speaker
        </div>
      </>
    ),
  },
  {
    title: "Linked Accounts",
    updateFunc: "Add New",
    content: (
      <ul>
        <li>
          <a href="#" className="user-socials">
            <i class="fab fa-facebook-f"></i>
            <span className="user-socials-name">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="user-socials">
            <i class="fab fa-linkedin-in"></i>
            <span className="user-socials-name">LinkedIn</span>
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    updateFunc: "Add New",
    content: (
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    updateFunc: "Add New",
    content: (
      <>
        <div className="user-edu">
          University of Information Technology (Vietnam National University)
          <div className="user-edu-meta">
            <span className="user-edu-major">Computer Science</span>
            <span className="user-edu-time">2018-2022</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Certifications",
    updateFunc: "Add New",
    content: null,
  },
];

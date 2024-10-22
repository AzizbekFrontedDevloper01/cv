const PDFDocument = require("pdfkit");
const fs = require("fs");
const head_font = "fonts/IBMPlexMono-Medium.ttf";
const sec_font = "fonts/IBMPlexMono-SemiBold.ttf";
const title_font = "fonts/IBMPlexMono-Regular.ttf";
const p_font = "fonts/Roboto-Light.ttf";
const profession_font = "fonts/IBMPlexMono-ExtraLight.ttf";
const section_color = [1, 49, 92]; //rgb;
const sc = [29, 29, 51]; // sidebar color
const color_text = [0, 0, 0];
const line_color = "#46464e";
const ss = 10; //section space
const ls = 10; //left space
const rls = 2 * ls; //left space
const stc = "white"; //sidebar text color
let mt = 20;
let rmt = mt;
const sh = 20; //section height
const sl = 200; //sidebar length
const page_length = 595;
const options = { width: 180, align: "justify" };
const summary = ''
//   "More than 2 years of professional experience in development and deployment of various  web Enterprise Applications using Vue.js/React.js technologies. " +
//   "Hands-on experience to MUI, Routing and Styled-components. " +
//   "Excellent communicational, analytical, business and interpersonal skills. Comfortable working independently and also a good team player. " +
//   "Highly motivated to take independent responsibility as well as has the ability to contribute and be a productive team member.";

const name = "Azizbek";
const surname = "Asadov";
const proficiency = `React developer`;
const contacts = [
  {
    title: "Address",
    value: "Tashkent, Tashkent Uzbekistan (GMT+5)",
    link: null,
  },
  {
    title: "Phone",
    value: "+99895-902-85-25",
    link: "tel:+99895-902-85-25",
  },
  {
    title: "Email",
    value: "azizbekasadov049@gmail.com",
    link: "mailto:azizbekasadov049@gmail.com",
  },
  {
    title: "Github",
    value: "github.com/Azizbek033",
    link: "https://github.com/Azizbek033",
  }
  // {
  //   title: "Linkedin",
  //   value: "linkedin.com/in/giyosiddin-shokirov-20b512276",
  //   link: "https://www.linkedin.com/in/giyosiddin-shokirov-20b512276",
  // },
];
const skills = [
  "JavaScript/ES-5/ES-6",
  "TypeScript",
  "React",

  "ReactJs/ReduxJs(ReduxToolkit)",
  "NextJs",
  "MaterialUI",
  "StyledComponents",
  "tailwindcss/bootstrap 5/less/sass",
  "Git (CI/CD)",

  "google extentions",
];

const languages = ["Uzbek", "English"];
// const works = [
//   {
//     period: `2024-01 - Present`,
//     role: `front-end Developer`,
//     org: `Freelance`,
//     text: `The CRM platform you've created has a very interesting appearance. If you write the front-end part using Next.js, TypeScript, Tailwind CSS, Axios, and Redux Toolkit, these are simple and effective technologies. Through this platform, you can manage employee information, store information about payments and advances, obtain daily reports, and allocate groups`,
//   },
//   {
//     period: `2022-03 - 2024-01`,
//     role: `front-end Developer`,
//     org: `IT PARK,  Samarkand, Uzbekistan`,
//     text:
//       `I made a multi-functional internet magazine in materialUI and typescript ` +
//       `Collaborated with 6 other team members and 4 stakeholders to develop 16 new user-facing features` +
//       `Ensured the technical feasibility of 50+ UI/UX designs.`,
//   },
//   {
//     period: `2021-09 - 2022-03`,
//     role: `front-end Developer`,
//     org: `freelance`,
//     text:
//       `Optimized 15+ applications for maximum speed and scalability` +
//       `Validated 100% of user input before submitting to the back-end` +
//       `Delivered 5+ projects of all sizes, creating solutions for consumer services`,
//   },
//   {
//     period: `2021-03 - 2021-09`,
//     role: `front-end Developer`,
//     org: `Yamato,  Tashkent, Uzbekistan`,
//     text:
//       `Wrote 10+ automated tests for every new feature to identify and rectify bugs` +
//       `Evaluated 30+ end-to-end designs for performance complexity, scalability, quality, and security` +
//       `Built 10 interactive, single-page Vue apps that could scale with
//        both increase in interaction complexity and volume.`,
//   },
// ];
 const works = [{role:'Not yet'}]
const educations = [
  {
    period: "2023-10 - 2024-10",
    speciality: "Bachelor of Computer Science: Information security",
    university: "Programmong School",
    address: "Samarkand, Samarkand Uzbekistan",
  },
];

(function () {
  const doc = new PDFDocument({ size: "A4", bufferPages: true });
  doc.rect(0, 0, sl, 1000000).fill(sc);

  doc.font(head_font).fontSize(22).fillColor(stc).text(name, ls, mt, options);
  doc
    .font(head_font)
    .fontSize(22)
    .fillColor(stc)
    .text(surname, ls, (mt += 25), options);

  doc
    .font(profession_font)
    .fontSize(14)
    .fillColor(stc)
    .text(proficiency, ls, (mt += 25), options);

  if (contacts.length) {
    // Contact
    doc.rect(0, (mt += sh + ss), sl, sh).fill(section_color);
    doc
      .font(sec_font)
      .fontSize(14)
      .fillColor(stc)
      .text(`Contact`, ls, mt, {
        ...options,
        characterSpacing: 1,
      });
    let c = 1;
    let link;
    let value;
    let title;
    for ({ title, value, link } of contacts) {
      doc
        .font(title_font)
        .fontSize(12)
        .fillColor(stc)
        .text(title, ls, c === 1 ? (mt += ss + 18) : (mt += 18), options);
      doc
        .font(p_font)
        .fontSize(10)
        .fillColor(stc)
        .text(value, ls, (mt += 18), { ...options, link: link });
      c++;
    }
  }

  if (skills.length) {
    // Skills
    doc.rect(0, (mt += 10 + ss), sl, sh).fill(section_color);
    doc
      .font(sec_font)
      .fontSize(14)
      .fillColor(stc)
      .text(`Technical Skills`, ls, mt, {
        ...options,
        characterSpacing: 1,
      });

    let i = 1;
    for (let skill of skills) {
      doc
        .font(p_font)
        .fontSize(10)
        .fillColor(stc)
        .text(skill, ls + 15, i === 1 ? (mt += 18 + ss) : (mt += 18), options);
      doc
        .circle(ls + 10, mt + 6, 2)
        .fillAndStroke(section_color, stc)
        .stroke();
      i++;
    }
  }

  if (languages.length) {
    doc.rect(0, (mt += 10 + ss), sl, sh).fill(section_color);
    doc
      .font(sec_font)
      .fontSize(14)
      .fillColor(stc)
      .text(`Languages`, ls, mt, { ...options, characterSpacing: 1 });
    let k = 1;
    for (let lang of languages) {
      doc
        .font(p_font)
        .fontSize(10)
        .fillColor(stc)
        .text(lang, ls + 15, k === 1 ? (mt += 18 + ss) : (mt += 18), options);
      doc
        .circle(ls + 10, mt + 6, 2)
        .fillAndStroke(section_color, stc)
        .stroke();
      k++;
    }
  }

  let right_width = page_length - sl - 2 * rls;
  // summary
  doc
    .font(p_font)
    .fontSize(10)
    .fillColor(color_text)
    .text(summary, sl + rls, rmt, { width: right_width, align: "justify" });
  let h = 0;
  const summary_height = doc.heightOfString(summary, { width: right_width });

  if (works.length) {
    //Work history
    doc
      .rect(sl + rls, (rmt += summary_height + 10), right_width, 2)
      .fill(line_color);
    doc
      .font(sec_font)
      .fontSize(15)
      .fillColor(section_color)
      .text(`Work History`, sl + rls, rmt + 6, {
        ...options,
        characterSpacing: 1,
      });
    doc.rect(sl + rls, (rmt += 30), right_width, 2).fill(line_color);

    for (let { period, role, org, text } of works) {
      doc
        .font(p_font)
        .fontSize(10)
        .fillColor(color_text)
        .text(period, sl + rls, (rmt += 15 + h), {
          width: 80,
          align: "justify",
        });
      doc
        .font(head_font)
        .fontSize(10)
        .fillColor(color_text)
        .text(role, 100 + sl + rls, rmt, {
          width: page_length - (sl + rls + 2 * 20),
          align: "justify",
        });
      doc
        .font(profession_font)
        .fontSize(10)
        .fillColor(color_text)
        .text(org, 100 + sl + rls, (rmt += 15), {
          width: page_length - (sl + rls + 2 * 20),
          align: "justify",
        });
      let text_width = page_length - 90 - (sl + rls + 2 * 20);

      doc
        .font(p_font)
        .fontSize(8)
        .fillColor(color_text)
        .text(text, 100 + sl + rls, (rmt += 15), {
          width: text_width,
          align: "justify",
        });
      h = doc.heightOfString(text, { width: text_width });
    }
  }

  if (educations.length) {
    doc.rect(sl + rls, (rmt += sh + h), right_width, 2).fill(line_color);
    doc
      .font(sec_font)
      .fontSize(15)
      .fillColor(section_color)
      .text(`Education`, sl + rls, rmt + 6, {
        ...options,
        characterSpacing: 1,
      });
    doc.rect(sl + rls, (rmt += 30), right_width, 2).fill(line_color);

    for (let { period, speciality, university, address } of educations) {
      doc
        .font(p_font)
        .fontSize(10)
        .fillColor(color_text)
        .text(period, sl + rls, (rmt += 12), {
          width: 80,
          align: "justify",
          link: null,
        });
      doc
        .font(head_font)
        .fontSize(8)
        .fillColor(color_text)
        .text(speciality, 100 + sl + rls, rmt, {
          width: page_length - (sl + rls + 2 * 20),
          align: "justify",
        });
      doc
        .font(profession_font)
        .fontSize(8)
        .fillColor(color_text)
        .text(university, 100 + sl + rls, (rmt += 12), {
          width: page_length - (sl + rls + 2 * 20),
          align: "justify",
        });

      doc
        .font(p_font)
        .fontSize(8)
        .fillColor(color_text)
        .text(address, 100 + sl + rls, rmt + 12, {
          width: page_length - (sl + rls + 2 * 20),
          align: "justify",
        });
    }
  }

  doc.end();
  const buffer = [];
  doc.on("data", buffer.push.bind(buffer));
  doc.on("end", () => {
    const data = Buffer.concat(buffer);
    let path = name + "-" + surname + "-cv.pdf";
    if (fs.existsSync("cv.pdf")) fs.unlinkSync(path);
    fs.writeFileSync(path, data);
  });
  console.log("Done");
})();

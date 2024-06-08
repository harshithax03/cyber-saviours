import  serviceImg1 from "./assets/images/23.png";
import  serviceImg2  from "./assets/images/24.png";
import  serviceImg3  from "./assets/images/25.png";
import  serviceImg4  from "./assets/images/26.png";
import  serviceImg5  from "./assets/images/27.png";
import  serviceImg6  from "./assets/images/28.png";



export const services = [
  {
    id: 1,
    head: `Penetration Testing Services`,
    info: `Penetration testing simulates real-world cyber attacks to
          identify and address security vulnerabilities in your network,
          servers, databases, and applications.
          At Cyber Saviours, our penetration testing services are
          designed to simulate real-world cyber attacks to identify and
          address vulnerabilities before malicious hackers can exploit them.
           Our expert team uses advanced techniques to rigorously assess the
          security of your network, servers, databases, and applications.`,
    list: [
      `Network Pentesting`,
      `Website Pentesting`,
      `Wireless Pentesting`,
      `Server Pentesting`,
      `Android Apps`,
      `API Pentesting `,
    ],
    Img: serviceImg1,
  },
  {
    id: 2,
    head: `Configuration Services`,
    info: `Configuration services ensure that your systems are set up
          correctly to prevent unauthorized access and optimize performance.
          At Cyber Saviours, our configuration services help you maintain
          robust security settings. We ensure that your network, servers,
          databases, and applications are configured to industry standards.
          Our experts provide tailored solutions to meet your specific
          security requirements and protect your assets.`,
    list: [
      `Intrusion Detection System`,
      `Intrusion Prevention System`,
      `Phishing Detection System`,
      `Firewall Configuration`,
      `SIEM`,
      `DDOS Setup`,
    ],
    Img: serviceImg2,
  },
  {
    id: 3,
    head: `SOC Analysis Services`,
    info: `SOC analysis services provide continuous monitoring and
          analysis of your IT environment to detect and respond to threats.
          At Cyber Saviours, our SOC analysis services utilize advanced tools
          and techniques to monitor your systems 24/7. We help identify
          potential threats and respond quickly to incidents, ensuring
          the security and integrity of your critical infrastructure.`,
    list: [
      `Threat Alerts Integration`,
      `24/7 Security Operation`,
      `Real-time Monitoring`,
      `Compliance Reporting`,
      `Incident Response`,
      `Advanced Analytics`,
    ],
    Img: serviceImg5,
  },
  {
    id: 4,
    head: `Secure Code Review Services`,
    info: `Secure code review services help identify vulnerabilities
          in your application's source code to prevent exploitation.
          At Cyber Saviours, our secure code review services involve
          thorough examination of your codebase. We identify and address
          security weaknesses, ensuring that your applications are resilient
          against attacks and comply with industry standards.`,
    list: [
      `Automated Code Analysis`,
      `Manual Code Inspection`,
      `Vulnerability Identification`,
      `Security Best Practices`,
      `Remediation Guidance`,
      `Compliance Verification`,
    ],
    Img: serviceImg6,
  },
  {
    id: 5,
    head: `Social Engineering Campaigns`,
    info: `Social engineering campaigns test your organization's
          susceptibility to phishing and other manipulative tactics.
          At Cyber Saviours, our social engineering campaigns simulate
          real-world attacks. We assess your employees' awareness and
          readiness to respond to phishing, baiting, and other deceptive
          practices, providing training to improve your overall security.`,
    list: [
      `Phishing Simulations`,
      `Impersonation Tests`,
      `Physical Security Assessments`,
      `Security Awareness Training`,
      `Email Security Tests`,
      `Pre-texting Attacks`,
    ],
    Img: serviceImg3,
     
  },
  {
    id: 6,
    head: `Digital Forensics`,
    info: `Digital forensics services involve the investigation and
          analysis of cyber incidents to uncover evidence and understand
          the scope of a breach. At Cyber Saviours, our digital forensics
          experts use advanced techniques to investigate data breaches,
          identify compromised assets, and provide insights into how the
          breach occurred, helping you strengthen your security posture.`,
    list: [
      `Deep Fake Investigation`,
      `Data Recovery`,
      `Mobile Forensics`,
      `Laptop Forensics`,
      `Social Media Forensics`,
      `Network Forensics`,
    ],
    Img: serviceImg4,
  },
];



export const barData = {
  labels : [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
  ], 
  datasets : [
    {
      label : "Cyber Crime rate",
      data : [0.61, 0.7, 0.86, 1.16, 2.95, 5.99, 8.44, 11.5,14.57,17.65,20.74,23.84],
      borderColor : "#61815B" ,
      backgroundColor : "#344831",
      borderWidth : 1,   
    }
  ]
}





























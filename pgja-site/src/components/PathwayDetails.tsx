import React from 'react';
import { ExternalLink, BookOpen, Users, Globe, Heart, Calculator, Wrench, Atom, TreePine } from 'lucide-react';

interface SubjectCardProps {
  subject: string;
  outcomes: string[];
  links: { text: string; url: string }[];
  bgImage: string;
  icon: React.ReactNode;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, outcomes, links, bgImage, icon }) => (
  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-95 hover:shadow-3xl bg-slate-800">
    <div 
      className="absolute inset-0 opacity-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="relative z-10 p-8 bg-gradient-to-br from-black/60 to-black/40">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-500/20 rounded-xl backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-amber-500 leading-tight">{subject}</h3>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-blue-300 mb-4">Learning Outcomes</h4>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="text-gray-200 flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-200 text-white hover:text-blue-200 group"
          >
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const PathwayDetails: React.FC = () => {
  const subjects = [
    {
      subject: "Agriculture",
      outcomes: [
        "To understand Conservation of Resources",
        "To understand Food Production Processes",
        "Understanding Hygiene Practices",
        "Understanding Production Techniques"
      ],
      links: [
        { text: "AGRICULTURE AT GRADE 7 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade7-Design-Formatted-April-2024.pdf" },
        { text: "AGRICULTURE AT GRADE 8 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "AGRICULTURE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/agriculture1.webp",
      icon: <TreePine className="w-6 h-6 text-green-400" />
    },
    {
      subject: "Creative Arts & Sports",
      outcomes: [
        "To understand Foundations of Creative Arts and Sports",
        "Practice Creating and performing",
        "Training & Coaching in various sports"
      ],
      links: [
        { text: "CREATIVE ARTS AND SPORTS GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG7-Creative-Arts-Sports-26-6-2024.pdf" },
        { text: "CREATIVE ARTS AND SPORTS GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG8-Creative-Arts-Sports-June-26-6-2024.pdf" },
        { text: "CREATIVE ARTS AND SPORTS GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG9-Creative-Arts-Sports-26-6-2024.pdf" }
      ],
      bgImage: "/artcolorful.webp",
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      subject: "Foreign Languages: French, Mandarin & German Languages",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "GERMAN AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-7-Design-Formatted-April-2024.doc.pdf" },
        { text: "FRENCH AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "FRENCH AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "GERMAN AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-8-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "FRENCH AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-9-Design-Formatted-April-2024.pdf" },
        { text: "GERMAN AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-9-Design-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/foreignpgja.webp",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      subject: "Indigenous Languages",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "INDIGENOUS LANGUAGE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "INDIGENOUS LANGUAGE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "INDIGENOUS LANGUAGE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/kenyaflag.webp",
      icon: <BookOpen className="w-6 h-6 text-orange-400" />
    },
    {
      subject: "English & Kiswahili",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "ENGLISH AT GRADE 7 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "ENGLISH AT GRADE 8 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "ENGLISH AT GRADE 9 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-9-Formatted-April-2024.pdf" },
        { text: "KISWAHILI AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-7-.pdf" },
        { text: "KISWAHILI AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-8-.pdf" },
        { text: "KISWAHILI AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-9.pdf" }
      ],
      bgImage: "/languages.webp",
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />
    },
    {
      subject: "Religious Studies: Hindu Religious Education",
      outcomes: [
        "Enhance knowledge in Manifestations of Paramatma",
        "Reading Scriptures",
        "Understand fundamentals of Dharma",
        "Religious Practice",
        "Yog",
        "Understand rites of Passage"
      ],
      links: [
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/hindu.webp",
      icon: <Heart className="w-6 h-6 text-yellow-400" />
    },
    {
      subject: "Religious Studies: Islamic Religious Education",
      outcomes: [
        "Gain knowledge in selected chapter of the Quran",
        "Gain knowledge in selected Hadith",
        "Understand pillars of Iman",
        "Practice devotional Acts",
        "Understand Akhlaq",
        "Learn about Muamalat",
        "Understand Islamic Heritage and Civilizations"
      ],
      links: [
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-8-Formatted-12.3.2024.pdf" },
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-9-Formatted-12.3.2024.pdf" }
      ],
      bgImage: "/ire.webp",
      icon: <Heart className="w-6 h-6 text-green-400" />
    },
    {
      subject: "Religious Studies: Christian Religious Education",
      outcomes: [
        "Learning about Christianity",
        "Understand about creation",
        "Understand selected section of the bible",
        "Understand about the early life of Christ",
        "Practice selected form of Worship",
        "Understand about Christian living today"
      ],
      links: [
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/religioncross.webp",
      icon: <Heart className="w-6 h-6 text-blue-400" />
    },
    {
      subject: "Mathematics",
      outcomes: [
        "Understand Numbers",
        "Understand Algebra",
        "Understand Geometry",
        "Understand Measurements",
        "Understand Probability",
        "Data handling"
      ],
      links: [
        { text: "MATHS AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-7-Design-Formated-April-2024.pdf" },
        { text: "MATH AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "MATH AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/keypad.webp",
      icon: <Calculator className="w-6 h-6 text-cyan-400" />
    },
    {
      subject: "Pre-Technical Studies",
      outcomes: [
        "Enhance foundations already established in upper primary pre-technical studies",
        "Enhance communication skills already established in upper primary pre-technical studies",
        "Understand material of production",
        "Understand tools and Production",
        "Understand entrepreneurship"
      ],
      links: [
        { text: "PRE-TECHNICAL AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-7-Formatted-April-2024.pdf" },
        { text: "PRE-TECHNICAL AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "PRE-TECHNICAL AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-9.pdf" }
      ],
      bgImage: "/robotmachine.webp",
      icon: <Wrench className="w-6 h-6 text-amber-400" />
    },
    {
      subject: "Integrated Sciences",
      outcomes: [
        "Develop skill in scientific investigations",
        "Understand mixtures, Elements and Compounds",
        "Explore and understand living things and the environment",
        "Understand about Force and Energy"
      ],
      links: [
        { text: "INTEGRATED SCIENCE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "INTEGRATED SCIENCE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "INTEGRATED SCIENCE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/outerspace.webp",
      icon: <Atom className="w-6 h-6 text-pink-400" />
    },
    {
      subject: "Social Sciences",
      outcomes: [
        "Develop skill in scientific investigations",
        "Understand mixtures, Elements and Compounds",
        "Explore and understand living things and the environment",
        "Understand about Force and Energy"
      ],
      links: [
        { text: "SOCIAL SCIENCE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-7-Formatted-April-2024.pdf" },
        { text: "SOCIAL SCIENCE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-8-Formatted-April-2024.pdf" },
        { text: "SOCIAL SCIENCE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/socialsci.webp",
      icon: <Users className="w-6 h-6 text-teal-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#043d53ff]">
        <div className="absolute inset-0 bg-[url('/cbesummary.webp')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-left lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  GRADE 7, 8 & 9 PATHWAYS PROGRAM
                </h1>
              </div>
              <div className="lg:w-1/2 space-y-6 text-gray-200 leading-relaxed text-2xl text-left">
                <p>
                  At Pioneer Girls Junior Academy, you will discover that since our establishment, our school has built a strong reputation for its commitment to trustworthiness, integrity, and academic excellence.
                </p>
                <br />
                <p>
                  As one of the leading Girls' Junior Secondary schools in the country, we are known for our dedication to excellence, resilience, and fostering holistic development in our students.
                </p>
                <br />
                <p>
                  Our curriculum strikes a balance between rigorous academic standards and engaging teaching methods that promote creativity, innovation, and an exciting learning experience.
                </p>
                <br />
                <div className="pt-6">
                  <p className="text-lg font-semibold text-blue-200 mb-4">
                    Discover a dynamic curriculum that builds on the Competency-Based Curriculum (CBC) introduced in Upper Primary.
                  </p>
                  <p>
                    Our comprehensive curriculum empowers learners to explore their talents, interests, and abilities, guiding them towards their chosen pathways in Senior Secondary Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Subject Areas for Grades 7, 8 & 9
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to build core competencies and prepare students for their future pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject.subject}
              outcomes={subject.outcomes}
              links={subject.links}
              bgImage={subject.bgImage}
              icon={subject.icon}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">Pioneer Girls Junior Academy</h3>
          <p className="text-gray-300 max-w-2xl mx-auto sm:text-left">
            Join us in making learning interesting, exciting, and enjoyable! We take pride in being the School of Choice for those who value student discipline as a key factor in achieving success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PathwayDetails;
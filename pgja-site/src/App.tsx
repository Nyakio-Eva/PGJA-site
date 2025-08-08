import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navigation';

import Home from './pages/Index.tsx';
import Pathways from './pages/Pathways.tsx'
import StudentLife from './pages/StudentLife.tsx'
import WhoWeAre from './pages/WhoWeAre.tsx';
import Talents from './pages/Talents.tsx';
import Location from './pages/Location.tsx';
import JoinUs from './pages/JoinUs.tsx';
import Fees from './pages/Fees.tsx';
import GetAccess from './pages/GetAccess.tsx';

import NotFound from './pages/NotFound.tsx';
import Enquire from './components/Enquire.tsx'
import TermsAndConditions from './pages/TermsAndConditions.tsx'; 


import History from './components/History.tsx';
import Leadership from './components/Leadership.tsx';
import Golf from './components/Golf.tsx';
import StJohnAmbulance from './components/StJohnsAmbulance.tsx';
import NursingCare from './components/NursingCare.tsx'; 
import Chaplaincy from './components/Chaplaincy.tsx';
import JoinGrade9 from './components/JoinGrade9.tsx';
import PathwayDetails from './components/PathwayDetails.tsx';
import Aviator from './components/Aviator.tsx';
import Coder from './components/Coder.tsx';
import SeaFarer from './components/SeaFarer.tsx';
import SafetySecurity from './components/SafetySecurity.tsx';
import ArtsAndCulture from './components/ArtsAndCulture.tsx';
import GamesAndSports from './components/GamesAndSports.tsx';
import JoinGrade7 from './components/JoinGrade7.tsx';
import JoinGrade8 from './components/JoinGrade8.tsx';
import FeesGrade7 from './components/FeesGrade7.tsx';
import FeesGrade8 from './components/FeesGrade8.tsx';
import FeesGrade9 from './components/FeesGrade9.tsx';
import Calendar from './components/Calendar.tsx';
import BoardingLife from './components/BoardingLife.tsx';
import StudentAccess from './components/StudentAccess.tsx';
import StaffAccess from './components/StaffAccess.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/discover-who-we-are" element={<WhoWeAre />} />
          <Route path="/discover-pathways" element={<Pathways />} />
          <Route path="/discover-student-life" element={<StudentLife />} />
          <Route path="/discover-talents" element={<Talents />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/discover-fees" element={<Fees />} />
          <Route path="/our-location" element={<Location />} />
          <Route path="/get-access" element={<GetAccess />} />

          {/* discover who we are Sub-routes */}
          <Route path="/discover-who-we-are/history" element={<History />} />
          <Route path="/discover-who-we-are/leadership" element={<Leadership />} />

          {/* Pathways Sub-routes */}
          <Route path="/pathway-details" element={<PathwayDetails />} />
          <Route path="/junior-aviator" element={<Aviator />} />
          <Route path="/junior-coder" element={<Coder/>} />
          <Route path="/junior-seafarer" element={<SeaFarer />} />
          
          {/* Student Life Sub-routes */}
          <Route path="/student-life/nursing-care" element={<NursingCare />} /> 
          <Route path="/student-life/boarding-life" element={<BoardingLife />} />
          <Route path="/student-life/chaplaincy" element={<Chaplaincy />} />
          <Route path="/student-life/safety-security" element={<SafetySecurity />} />

          {/* Talents Sub-routes */}
          <Route path="/discover-talents/games-sports" element={<GamesAndSports />} />
          <Route path="/discover-talents/arts-culture" element={<ArtsAndCulture />} />
          <Route path="/discover-talents/st-johns-ambulance" element={<StJohnAmbulance />} />
          <Route path="/discover-talents/junior-golf" element={<Golf />} />
          

          {/* Join Us Sub-routes */}
          <Route path="/join-us/grade-7" element={<JoinGrade7 />} />
          <Route path="/join-us/grade-8" element={<JoinGrade8 />} />
          <Route path="/join-us/grade-9" element={<JoinGrade9 />} />
          <Route path="/join-us/enquire" element={<Enquire />} />

          {/* Fees Sub-routes */}
          <Route path="/discover-fees/grade-7" element={<FeesGrade7 />} />
          <Route path="/discover-fees/grade-8" element={<FeesGrade8 />} />
          <Route path="/discover-fees/grade-9" element={<FeesGrade9/>} /> 
          <Route path="/fees/terms-conditions" element={<TermsAndConditions/>} />

          {/* Get Access Sub-items */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/student-access" element={<StudentAccess />} /> 
          <Route path="/staff-access" element={<StaffAccess />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
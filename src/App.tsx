import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import ArchivePage from './pages/Archive';
import NavigatorPage from './pages/Navigator';
import MacroView from './pages/MacroView';
import FutureHabitat from './pages/FutureHabitat';
import BusinessIntelligence from './pages/BusinessIntelligence';
import HeritageCode from './pages/HeritageCode';
import HumanCentric from './pages/HumanCentric';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/navigator" element={<NavigatorPage />} />
      <Route path="/macro-view" element={<MacroView />} />
      <Route path="/future-habitat" element={<FutureHabitat />} />
      <Route path="/business-intelligence" element={<BusinessIntelligence />} />
      <Route path="/heritage-code" element={<HeritageCode />} />
      <Route path="/human-centric" element={<HumanCentric />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

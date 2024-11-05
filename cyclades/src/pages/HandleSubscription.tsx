import { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import SearchField from '../components/SearchField';
import DisplayForms from '../components/DisplayForms';

const HandleSubscription = () => {
  const [selectedElementId, setSelectedElementId] = useState<number | null>(
    null,
  );

  const handleElementClick = (id: number) => {
    setSelectedElementId(id);
  };

  return (
    <>
      <Navbar />
      <LeftSidebar />
      <SearchField onElementClick={handleElementClick} />
      <DisplayForms
        selectedElementId={selectedElementId}
        onElementClick={handleElementClick}
      />
      <Footer />
    </>
  );
};

export default HandleSubscription;

import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './Components/Header';
import SideBarNav from './Components/SideBarNav';
import CampaignListScreen from './Screens/CampaignListScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBarNav/>
      <Flex
				as='main'
				mt='60px'
        ml='83px'
				direction='column'
				minH='xl'
				py='6px'
				px='6px'
				bgColor='#DAE6FF'>
          <Routes>
            <Route path='/' element={<CampaignListScreen />}/>
          </Routes>
        </Flex>
     
    </BrowserRouter>
  );
}

export default App;

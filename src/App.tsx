import Banner from './components/Banner';
import Card from './components/Card';
import MenuNav from './components/MenuNav';
import airpods from './assets/airpods3.png';
import shoes from './assets/shoes.png';
import shirt from './assets/shirtman.png';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function App() {
  // const [cookies] = useCookies(['token']);
  // const miCookieValue = cookies.token;

  // const [userLog, setUserLog] = useState<string>('');
  // useEffect(() => {
  //   if(miCookieValue){
  //     setUserLog(miCookieValue)
  //   }
  // }, []);

  return (
    <>
      {/* <h2>{miCookieValue}</h2> */}
      <Banner />
      <MenuNav />
      <div className='container m-auto flex justify-center gap-4 flex-wrap py-6 border-2'>
        <Card
          img={airpods}
          title='Airpots'
          price='120'
          description='sdasdassdasdas'
          raiting='+20k'
          style='border-2'
        />
        <Card
          img={shoes}
          title='Shoes Nike'
          price='240'
          description='sdasdassdasdas'
          raiting='+20k'
          style=' p-2 -mb-3 mt-2'
        />
        <Card
          img={shirt}
          title='Airpots'
          price='120'
          description='sdasdassdasdas'
          raiting='+20k'
          style=''
        />
        <Card
          img={airpods}
          title='Airpots'
          price='120'
          description='sdasdassdasdas'
          raiting='+20k'
          style='border-2'
        />
        <Card
          img={airpods}
          title='Parlantes'
          price='500'
          description='parlantes nuevos de marca noe'
          raiting='20mil'
          style='border-2'
        />
      </div>
    </>
  );
}

export default App;

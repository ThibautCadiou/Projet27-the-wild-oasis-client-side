import Navigation from '../_components/Navigation';
import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Account',
};

async function Home() {
  const session = await auth();
  const firstname = session.user.name.split(' ').at(0);
  return (
    <div className=''>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>Welcome, {firstname}</h2>
    </div>
  );
}

export default Home;

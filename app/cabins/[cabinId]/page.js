import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import TextExpander from '@/app/_components/TextExpander';
import { getBookedDatesByCabinId, getCabin, getCabins, getSettings } from '@/app/_lib/data-service';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Suspense } from 'react';

// export const metadata = {
//   title: 'Cabin',
// };

export async function generateMetadata({ params }) {
  // const cabin = await getCabin(params.cabinId);
  const cabinId = params?.cabinId;
  const cabin = await getCabin(cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: cabin.id.toString(),
  }));
  return ids;
}

export default async function Page({ params }) {
  const cabinId = await params.cabinId;
  const cabin = await getCabin(cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-400'>
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href='/' className='flex items-center gap-4 z-10'>
      <img src='/logo.png' height='60' width='60' alt='The Wild Oasis logo' />
      <span className='text-xl font-semibold text-primary-100'>The Wild Oasis</span>
    </a>
  );
}

export default Logo;

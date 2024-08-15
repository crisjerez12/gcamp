import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { MenuIcon, MountainIcon } from 'lucide-react';
import Image1 from '@/public/images/image2.png';
export default function HomePage() {
  return (
    <div className='flex flex-col max-w-6xl'>
      <header className='bg-primary text-primary-foreground'>
        <div className='container px-4 md:px-6 flex items-center justify-between h-16'>
          <Link href='#' className='flex items-center gap-2' prefetch={false}>
            <MountainIcon className='w-6 h-6 ' />
            <span className='text-lg font-semibold'>GCAMP RESORT</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='#'
              className='text-sm font-medium hover:underline'
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:underline'
              prefetch={false}
            >
              Reserve
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:underline'
              prefetch={false}
            >
              Rooms
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:underline'
              prefetch={false}
            >
              About
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:underline'
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant='outline' size='icon' className='md:hidden'>
            <MenuIcon className='w-6 h-6 text-slate-950' />
            <span className='sr-only'>Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className='flex-1'>
        <section className='relative h-[500px] md:h-[600px] lg:h-[700px]'>
          <Image
            src={Image1}
            height={0}
            width={0}
            className='object-cover w-full h-full '
            alt='carousel-image'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center text-primary-foreground space-y-4'>
              <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Welcome to GCAMP RESORT
              </h1>
              <p className='text-lg md:text-xl'>
                Escape to our luxurious mountain retreat and experience the
                ultimate in relaxation.
              </p>
              <Link
                href='#'
                className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                prefetch={false}
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </section>
        <section className='mt-6'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            See Our Location
          </h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1373.9337789869849!2d124.62367744066175!3d5.988728260898501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNTknMTkuOSJOIDEyNMKwMzcnMjMuNyJF!5e1!3m2!1sen!2sph!4v1723719043428!5m2!1sen!2sph'
            width='100%'
            height='450'
            loading='lazy'
          ></iframe>
        </section>
        <section className='py-12 md:py-16 lg:py-20'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center text-center space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Featured Rooms
                </h2>
                <p className='text-muted-foreground md:text-lg'>
                  Explore our luxurious rooms and suites.
                </p>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Deluxe Suite'
                    width={500}
                    height={500}
                    className='w-full h-[300px] object-cover transition-all group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                    <div className='text-primary-foreground space-y-1'>
                      <h3 className='text-xl font-bold'>Deluxe Suite</h3>
                      <p className='text-sm'>
                        Luxurious suite with stunning mountain views.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Premium Room'
                    height={500}
                    width={500}
                    className='w-full h-[300px] object-cover transition-all group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                    <div className='text-primary-foreground space-y-1'>
                      <h3 className='text-xl font-bold'>Premium Room</h3>
                      <p className='text-sm'>
                        Spacious room with modern amenities.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Family Suite'
                    width={500}
                    height={500}
                    className='w-full h-[300px] object-cover transition-all group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                    <div className='text-primary-foreground space-y-1'>
                      <h3 className='text-xl font-bold'>Family Suite</h3>
                      <p className='text-sm'>
                        Spacious suite perfect for families.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-16 lg:py-20 bg-muted'>
          <div className='container px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Explore Our Resort
                </h2>
                <p className='text-muted-foreground md:text-lg'>
                  Take a closer look at our beautiful resort and all it has to
                  offer.
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Resort Photo 1'
                    width={500}
                    height={500}
                    className='w-full h-[200px] md:h-[250px] object-cover transition-all group-hover:scale-105'
                  />
                </Link>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Resort Photo 2'
                    width={500}
                    height={500}
                    className='w-full h-[200px] md:h-[250px] object-cover transition-all group-hover:scale-105'
                  />
                </Link>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Resort Photo 3'
                    width={500}
                    height={500}
                    className='w-full h-[200px] md:h-[250px] object-cover transition-all group-hover:scale-105'
                  />
                </Link>
                <Link
                  href='#'
                  className='relative group overflow-hidden rounded-xl'
                  prefetch={false}
                >
                  <Image
                    src={Image1}
                    alt='Resort Photo 4'
                    width={500}
                    height={500}
                    className='w-full h-[200px] md:h-[250px] object-cover transition-all group-hover:scale-105'
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-16 lg:py-20'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center text-center space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                  Contact Us
                </h2>
                <p className='text-muted-foreground md:text-lg'>
                  Get in touch with us for more information.
                </p>
              </div>
              <form className='w-full max-w-md space-y-4'>
                <Input type='text' placeholder='Name' className='w-full' />
                <Input type='email' placeholder='Email' className='w-full' />
                <Textarea placeholder='Message' className='w-full' rows={5} />
                <Button type='submit' className='w-full'>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-primary text-primary-foreground py-6'>
        <div className='container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between'>
          <div className='flex items-center gap-2'>
            <MountainIcon className='w-6 h-6' />
            <span className='text-lg font-semibold'>GCAMP RESORT</span>
          </div>
          <nav className='flex items-center gap-6 mt-4 md:mt-0'>
            <Link href='#' className='text-sm hover:underline' prefetch={false}>
              Privacy
            </Link>
            <Link href='#' className='text-sm hover:underline' prefetch={false}>
              Terms
            </Link>
            <Link href='#' className='text-sm hover:underline' prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

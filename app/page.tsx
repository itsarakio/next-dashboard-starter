import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from '@/app/ui/home.module.css'
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-r-transparent border-l-transparent border-b-[26px] border-b-black" />
          <p className={`text-red-600 text-xl md:text-3xl md:leading-normal ${lusitana.className}`}>
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAE0lEQVR42mP88O7DfwY8gJH2CgDB7A85onfltQAAAABJRU5ErkJggg==" className="hidden md:block" src={"/hero-desktop.png"} height={760} width={1000} alt="desktop desctioption" />
          <Image placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAE0lEQVR42mP88O7DfwY8gJH2CgDB7A85onfltQAAAABJRU5ErkJggg==" quality={75} className="block md:hidden" width={560} height={620} src={"/hero-mobile.png"} alt="mobile image i suppose"/>
       </div>
      </div>
    </main>
  );
}

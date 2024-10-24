import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { getExperts } from "@/lib/api";
import ExpertCard from "../components/expert-card";

async function getData() {
  const data = await getExperts();
  return data;
}

export default async function ExpertsPage() {
  const data = await getData();
  return (
    <div>
      <main className="bg-white flex flex-col sm:gap-12 gap-8">
        <section className={`relative px-4`}>
          <div className="lg:pb-24 pb-8 lg:pt-12 pt-5">
            <div className="mx-auto">
              <div className="mb-1 lg:hidden">
                <Link href="/" className="">
                  <Image
                    className="sm:max-w-none max-w-[15px] h-auto"
                    src="/back-icon.svg"
                    alt="Back"
                    width={29}
                    height={44}
                    aria-label="back icon"
                  />
                </Link>
              </div>
              <div className="relative flex items-center justify-center">
                <h1 className="absolute text-center font-bold text-3xl sm:text-4xl xl:text-6xl max-w-[11ch] !leading-[120%]">
                  Experts
                </h1>
                <Image
                  className="sm:max-w-none max-w-[150px] h-auto"
                  src="/mechanisms-bg.svg"
                  alt=""
                  width={333}
                  height={333}
                  aria-label="hidden"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-24 bottom-1/2 translate-y-1/2 lg:block hidden">
            <Link href="/">
              <Image
                className="sm:max-w-none max-w-[15px] h-auto"
                src="/back-icon.svg"
                alt="Back"
                width={29}
                height={44}
                aria-label="back icon"
              />
            </Link>
          </div>
        </section>

        <section className="px-4 mx-auto">
           {!!data?.length && (
          <div className="grid md:grid-cols-3 grid-cols-2 w-fit mx-auto sm:gap-8 gap-2 gap-y-16">
            {data.map((entry) => (
              <ExpertCard key={entry.id} expert={entry} />
            ))}
          </div>)}
        </section>

        <Footer />
      </main>
    </div>
  );
}

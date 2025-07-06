import { useCountdown } from "../utlis/countDown";

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const { days, hours, minutes, seconds } = useCountdown({ targetDate });

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 rounded-lg">
      <div className={`relative flex flex-col items-center justify-center p-3`}>
        <div className="text-xl font-bold text-purple-600">{`${days}`}</div>
        <span className="block text-lg">DAYS</span>
      </div>
      <span className="text-xl">:</span>
      <div className={`relative flex flex-col items-center justify-center p-3`}>
        <div className="text-xl font-bold text-purple-600">{`${hours}`}</div>
        <span className="block text-lg">HOURS</span>
      </div>
      <span className="text-xl">:</span>
      <div className={`relative flex flex-col items-center justify-center p-3`}>
        <div className="text-xl font-bold text-purple-600">{`${minutes}`}</div>
        <span className="block text-lg">MINUTES</span>
      </div>
      <span className="text-xl">:</span>
      <div className={`relative flex flex-col items-center justify-center p-3`}>
        <div className="text-xl font-bold text-purple-600">{`${seconds}`}</div>
        <span className="block text-lg">SECONDS</span>
      </div>
    </div>
  );
};

const CommingSoon = () => {
  const targetDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  return (
    <>
      <section className=" flex flex-col gap-6 items-center">
        <img className="h-[350px] w-[350px]" src="/theblog/images/pages/commingSoon.webp" alt="under Construction" />
        <h2 className="text-5xl font-semibold text-center tracking-custom">Launching Soon</h2>
        <CountdownTimer targetDate={targetDate} />
        <p className="text-center text-grey01 text-xl leading-8 lg:w-[80.1578%] mx-auto">Get in touch with us: mail@pagedone.com</p>
      </section>
    </>
  )
}

export default CommingSoon

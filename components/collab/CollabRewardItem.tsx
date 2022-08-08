export type CollabRewardItemProps = {
  icon: JSX.Element | string;
  title?: string;
  desc?: string;
  logo?: string;
  amount?: number;
};

export default function CollabRewardItem({ logo, amount, icon, title, desc }: CollabRewardItemProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-p12-black/80 px-12 py-3 md:flex-wrap md:justify-center md:gap-3">
      <div className="flex flex-grow items-center gap-4 md:justify-center">
        <img className="aspect-square max-h-[70px] rounded-[17px]" src={logo} alt="projectLogo" />
        <div className="flex w-fit flex-col justify-center gap-2">
          {title && <h3 className="text-xl font-semibold leading-6">{title}</h3>}
          {desc && <p className="leading-5">{desc}</p>}
        </div>
      </div>
      <div className="flex w-max items-center gap-5">
        {amount ? (
          <>
            <div className="w-fit text-5xl font-bold leading-[52px]">{amount}</div>
            {typeof icon === 'string' ? <img className="aspect-square h-12" src={icon} alt={icon} /> : icon}
          </>
        ) : (
          <span className="text-[42px] font-bold leading-[46px] text-[#F13361]">Unlucky</span>
        )}
      </div>
    </div>
  );
}

import { IDonateCardBottomProp } from "@/types";

const DonateCardBottom = ({
  selection,
  amount,
  name,
  phoneNumber,
  item,
  setAmount,
  setName,
  setPhoneNumber,
  setItem,
}: IDonateCardBottomProp) => {
  return selection === "Money" ? (
    <div className="w-full mt-12">
      <input
        type="text"
        className="w-full border-[1px] border-primary rounded-[20px] py-4 px-5 font-semibold text-base placeholder:font-semibold placeholder:text-base placeholder:text-black mb-[48px]"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  ) : (
    <div className="w-full mt-12 gap-2 flex flex-col justify-center">
      <input
        type="text"
        className="w-full border-[1px] border-primary rounded-[20px] py-4 px-5 font-semibold text-base placeholder:font-semibold placeholder:text-base placeholder:text-black"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="w-full border-[1px] border-primary rounded-[20px] py-4 px-5 font-semibold text-base placeholder:font-semibold placeholder:text-base placeholder:text-black"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        type="text"
        className="w-full border-[1px] border-primary rounded-[20px] py-4 px-5 font-semibold text-base placeholder:font-semibold placeholder:text-base placeholder:text-black"
        placeholder="What you want to donate"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
  );
};

export default DonateCardBottom;

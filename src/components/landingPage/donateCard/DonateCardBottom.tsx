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
  return (
    <div className="w-full mt-[13.31px] gap-2 flex flex-col justify-center">
      <input
        type="text"
        className="w-full border-[1px] border-primary bg-inherit rounded-[20px] py-4 -sm:py-3 px-5 font-semibold placeholder:font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="w-full border-[1px] border-primary bg-inherit rounded-[20px] py-4 -sm:py-3 px-5 font-semibold placeholder:font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {selection === "Money" ? (
        <input
          type="text"
          className="w-full border-[1px] border-primary bg-inherit rounded-[20px] py-4 -sm:py-3 px-5 font-semibold placeholder:font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="w-full border-[1px] border-primary rounded-[20px] py-4 -sm:py-3 px-5 font-semibold placeholder:font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black"
          placeholder="What you want to donate"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      )}
    </div>
  );
};

export default DonateCardBottom;

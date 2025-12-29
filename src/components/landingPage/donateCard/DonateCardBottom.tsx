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
    <div className="w-full mt-2 gap-2 flex flex-col justify-center">
      {selection !== "Money" ? (
        <>
          <input
            type="text"
            className="w-full h-10 md:h-12 border-[1px] border-primary bg-inherit rounded-lg px-2 py-2 font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black/40 outline-none"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="w-full h-10 md:h-12 border-[1px] border-primary bg-inherit rounded-lg px-2 py-2 font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black/40 outline-none"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <textarea
            className="w-full h-20 md:h-24 border-[1px] border-primary bg-inherit rounded-lg px-2 py-2 font-semibold placeholder:text-base -sm:placeholder:text-xs placeholder:text-black/40 outline-none"
            placeholder="What you want to donate"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="submit"
            value="Donate Now"
            className="bg-primary-gradient py-[14px] px-[75px] rounded-xl text-white font-semibold
            text-base -sm:text-xs mt-6 w-fit mx-auto"
            style={{ cursor: "pointer" }}
          />
        </>
      ) : (
        <div className="">
          <p>You can donate using the account below:</p>
          <div className="mt-4 space-y-3 text-base md:text-[20px]">
            <dl className="flex gap-2">
              <dt className="font-semibold">Account number:</dt>
              <dd>6528707132</dd>
            </dl>
            <dl className="flex gap-2">
              <dt className="font-semibold">Bank:</dt>
              <dd>Moniepoint</dd>
            </dl>
            <dl className="flex flex-wrap gap-2">
              <dt className="flex-shrink-0 font-semibold">Account name:</dt>
              <dd>Sustainobles by Nnanna Oyiga</dd>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateCardBottom;

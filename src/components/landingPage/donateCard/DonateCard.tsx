import { FormEvent, useState } from "react";
import { poppins } from "../Two";
import DonateCardTop from "./DonateCardTop";
import DonateCardBottom from "./DonateCardBottom";

const DonateCard = () => {
  const [selection, setSelection] = useState("Money");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [item, setItem] = useState("");

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${poppins.className} bg-white text-black flex flex-col  py-[38px] px-[71px] w-fit  rounded-[20px] min-h-[528px]`}
    >
      <DonateCardTop selection={selection} setSelection={setSelection} />
      <form onSubmit={handleForm} className="flex flex-col items-center">
        <DonateCardBottom
          selection={selection}
          amount={amount}
          name={name}
          phoneNumber={phoneNumber}
          item={item}
          setAmount={setAmount}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setItem={setItem}
        />

        <input
          type="submit"
          value="Donate Now"
          className="bg-secondary py-[14px] px-[75px] rounded-xl text-primary font-semibold text-base mt-6"
        />
      </form>
    </div>
  );
};

export default DonateCard;

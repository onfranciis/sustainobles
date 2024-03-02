import { FormEvent, useState } from "react";
import { poppins } from "../Two";
import DonateCardTop from "./DonateCardTop";
import DonateCardBottom from "./DonateCardBottom";
import { useRequest } from "@/hooks/useRequest";

const DonateCard = () => {
  const { Send } = useRequest();
  const [selection, setSelection] = useState("Money");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [item, setItem] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = {
    name,
    item,
    phoneNumber,
  };

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selection !== "Material") {
      window.open("https://paystack.com/pay/sustainobles", "_blank");
    } else {
      Send({
        url: "/donate",
        body: form,
        setSuccess,
        setError,
        setLoading,
      });
    }
  };

  return (
    <div
      className={`${poppins.className} -sm:mx-7 -sm:text-xs border border-neutral-400 bg-tertiary text-black flex flex-col py-[38px] px-[71px] -md:px-9 -sm:px-5 w-fit rounded-[20px] sm:min-h-[492px]`}
    >
      <DonateCardTop selection={selection} setSelection={setSelection} />
      <div className="h-2 mb-2 mt-[-8px] pl-2">
        {success && <p className="text-[green]">{success}</p>}
        {error && <p className="text-[red]">{error}</p>}
        {loading && <p className="text-[powderblue]">sending...</p>}
      </div>

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
          className="bg-secondary py-[14px] px-[75px] rounded-xl text-primary font-semibold text-base -sm:text-xs mt-6"
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
};

export default DonateCard;

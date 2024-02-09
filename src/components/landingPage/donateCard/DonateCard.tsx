import { FormEvent, useState } from "react";
import { poppins } from "../Two";
import DonateCardTop from "./DonateCardTop";
//import donateMaterial from "@/hooks/useDonationHelper";
import DonateCardBottom from "./DonateCardBottom";

const DonateCard = () => {
  const [selection, setSelection] = useState("Money");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [item, setItem] = useState("");

  //const donateMaterial = donateMaterial();
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selection === "Money") {
        window.open("https://paystack.com/pay/sustainobles", "_blank");
      } else if (selection === "Material") {
        const serverEnd = process.env.NEXT_PUBLIC_API_URL;
        //const authorization = process.env.NEXT_PUBLIC_KEY;

        /*if (!serverEnd || !authorization) {
          throw new Error("Missing API URL or authorization token");
        }*/

        fetch(serverEnd!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Testing",
          },
          body: JSON.stringify({
            name,
            phoneNumber,
            item,
          }),
        }).then((response) => {
          console.log(response);
          if (response.ok) {
            console.log("Donation successful");
          } else {
            console.error("Donation failed");
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`${poppins.className} -sm:mx-7 -sm:text-xs border border-neutral-400 bg-tertiary text-black flex flex-col py-[38px] px-[71px] -md:px-9 -sm:px-5 w-fit rounded-[20px] sm:min-h-[492px]`}
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
          className="bg-secondary py-[14px] px-[75px] rounded-xl text-primary font-semibold text-base -sm:text-xs mt-6"
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
};

export default DonateCard;

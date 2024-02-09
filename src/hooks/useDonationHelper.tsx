import React, { useState } from "react";
import useDonationAPI from "@/hooks/POST/useDonationAPI";

interface DonateMaterialProps {
  name: string;
  phoneNumber: string;
  item: string;
}

const DonateMaterial: React.FC<DonateMaterialProps> = ({
  name,
  phoneNumber,
  item,
}) => {
  const [donationResponse, setDonationResponse] = useState<Response | null>(
    null
  );

  const handleDonation = async () => {
    const response = await useDonationAPI(name, phoneNumber, item);
    setDonationResponse(response);
  };

  return <></>;
};

export default DonateMaterial;

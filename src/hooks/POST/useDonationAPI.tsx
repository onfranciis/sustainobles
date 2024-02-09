// useDonationAPI.ts
import { useState, useEffect } from "react";

const useDonationAPI = (name: string, phoneNumber: string, item: string) => {
  const [donationResponse, setDonationResponse] = useState<Response | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const serverEnd = process.env.NEXT_PUBLIC_URL;
      const authKey = process.env.NEXT_PUBLIC_KEY;
      const response = await fetch(serverEnd!, {
        method: "POST",
        body: JSON.stringify({ name, phoneNumber, item }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authKey}`,
        },
      });

      const data = await response.json();
      setDonationResponse(data);
    };

    fetchData();
  }, [name, phoneNumber, item]);

  return donationResponse;
};

export default useDonationAPI;

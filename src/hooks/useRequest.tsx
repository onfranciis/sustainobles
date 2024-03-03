import { IRequest } from "@/types";
import { config } from "@/utils/config";

export const useRequest = () => {
  const Send = ({ url, body, setLoading, setSuccess, setError }: IRequest) => {
    setLoading(true);

    fetch(config.BASE_URL + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${config.TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        const response = await data.json();

        if (data.status === 201) {
          setSuccess("Noted successfully!");
        } else {
          setError(response.error);
        }
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setSuccess("");
          setError("");
        }, 1000);
      });
  };

  return { Send };
};

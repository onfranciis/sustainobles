export interface IDonateCardBottomProp {
  selection: string;
  amount: string;
  name: string;
  phoneNumber: string;
  item: string;
  setAmount: (data: string) => void;
  setName: (data: string) => void;
  setPhoneNumber: (data: string) => void;
  setItem: (data: string) => void;
}

export interface IProjectCardProp {
  Data: {
    title: string;
    body: string;
    image: string;
    url: string;
    type: "One" | "Two";
  };
}

export interface ILoginResponse {
  email: string;
  first_name: string;
  last_name: string;
  token: string;
}

export interface IClientList {
  client_first_name: string;
  client_last_name: string;
  client_gender: string;
  client_email: string;
}
export interface IModalProps {
  opened: boolean;
  close: () => void;
  // onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IValues {
  email: string;
  password: string;
}
export interface ICreateClient {
  client_first_name:string;
  client_last_name:string;
  client_gender:string;
  client_email:string;
  client_industry:string;
  client_security_question:string;
  client_security_answer:string;
  status:boolean;
  total_investment:number;
}

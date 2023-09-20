import { createBuilder } from "@ibnlanre/portal";
import { API, AUTHAPI } from "./axios-config";
import {
  IClientList,
  ICreateClient,
  ICreateIndustry,
  ILoginResponse,
} from "@/type";

export const builder = createBuilder({
  api: {
    client: {
      client_list: () => API.get("client_list"),

      create_client_portfolio: (data: ICreateClient) =>
        API.post<IClientList>("create_client_portfolio/", data),

      create_industry: (data: ICreateIndustry) =>
        API.post<ICreateIndustry>("create_industry/", data),

      create_organization: (data: any) =>
        API.get("api/client/create_organization", data),

      industry_list: () => API.get("industry_list/"),
    },
    tenant: {
      create_business: (data: any) => API.post("api/client/", data),
    },
    login: {
      sign_in: (data: Record<"email" | "password", string>) =>
        AUTHAPI.post<ILoginResponse>("login/", data),
      refresh: (data: any) => AUTHAPI.post("api/client/login", data),
    },
  },
});

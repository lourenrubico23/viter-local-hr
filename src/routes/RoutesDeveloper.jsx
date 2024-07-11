import { devNavUrl } from "../components/helpers/function-general";
import User from "../components/pages/developers/settings/users/User";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${devNavUrl}/`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/overview`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users`,
    element: <User />,
  },
];

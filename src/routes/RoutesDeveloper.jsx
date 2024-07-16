import Overview from "@/components/pages/developers/overview/Overview";
import { devNavUrl } from "../components/helpers/function-general";
import Account from "../components/pages/developers/account/Account";
import User from "../components/pages/developers/settings/users/User";
import Time from "@/components/pages/developers/time/Time";
import Leave from "@/components/pages/developers/leave/Leave";
import System from "@/components/pages/developers/settings/users/system/System";
import Role from "@/components/pages/developers/settings/users/role/Role";
import Other from "@/components/pages/developers/settings/users/other/Other";
import FbsAdmin from "@/components/pages/developers/settings/users/fbsAdmin/FbsAdmin";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${devNavUrl}/`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/overview`,
    element: <Overview/>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/time`,
    element: <Time/>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/leave`,
    element: <Leave/>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users`,
    element: <User />,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users/system`,
    element: <System />,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users/admin`,
    element: <FbsAdmin />,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users/other`,
    element: <Other />,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/settings/users/role`,
    element: <Role />,
  },
  {
    path: `${devNavUrl}/${devNavUrl}/account`,
    element: <Account />,
  },
];

import { useState } from "react";

import CompanysUi from "./CompanysUi";

export default function Home() {
  const [adminAlert, setAdminAlert] = useState({
    companys: false,
    items: false,
  });

  const handleClickOpenAdmin = (type: string) => {
    setAdminAlert({
      ...adminAlert,
      [type]: true,
    });
  };

  const props = { handleClickOpenAdmin };
  return <CompanysUi {...props} />;
}

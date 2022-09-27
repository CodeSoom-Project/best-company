import styled from "styled-components";

import CompanyAdminUi from "../../components/companys/CompanyAdminUi";
import ItemAdminUi from "../../components/companys/ItemAdminUi";

// import { VscAdd, VscRemove } from "react-icons/vsc";
import { flexbox } from "../../styles/utils/flexbox";

export interface PropType {
  adminAlert: { companys: boolean; items: boolean };
  handleClickOpenAdmin: any;
}

export default function CompanysUi({
  adminAlert,
  handleClickOpenAdmin,
}: PropType) {
  const { companys, items } = adminAlert;

  const handleClickOpenCompanysAdmin = () => {
    handleClickOpenAdmin("companys");
  };
  const handleClickOpenItemsAdmin = () => {
    handleClickOpenAdmin("items");
  };

  return (
    <Container>
      <Header>
        <h1>지원회사</h1>
        <div className="controls">
          <figure onClick={handleClickOpenCompanysAdmin}>회사 관리</figure>
          <figure onClick={handleClickOpenItemsAdmin}>항목 관리</figure>
        </div>
      </Header>
      {/* 회사관리  */}
      {companys && <CompanyAdminUi />}
      {/* 항목 관리 */}
      {items && <ItemAdminUi />}
    </Container>
  );
}

const Container = styled.div`
  margin-left: 2rem;
`;
const Header = styled.header`
  ${flexbox("between")}
  figure {
    ${flexbox()}
  }
  h1 {
    font-family: NotoR;
  }

  .controls {
    ${flexbox()}
  }
`;

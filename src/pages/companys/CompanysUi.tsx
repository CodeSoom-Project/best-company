import styled from "styled-components";
// import { VscAdd, VscRemove } from "react-icons/vsc";
import { flexbox } from "../../styles/utils/flexbox";

export interface propType {
  handleClickOpenAdmin: any;
}

export default function CompanysUi({ handleClickOpenAdmin }: propType) {
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

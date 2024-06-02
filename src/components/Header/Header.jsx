import NavBar from "../NavBar/NavBar";
import * as S from "./Header.styled";

// leftsection 로그인 여부에 따라 조건부 렌더링
// 페이지 경로 정해지면 menu에 onClick이벤트로 navigate 추가하기
// 뒤로가기 버튼 navigate(-1)
// 헤더 타이틀 클릭하면 home으로 이동. navigate("/")

const Header = () => {
  //const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </S.TitleSection>
      </S.Container>
      <NavBar />
    </>
  );
};

export default Header;

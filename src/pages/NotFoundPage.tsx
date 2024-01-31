import { useNavigate } from "react-router-dom";
import Button from "src/components/button";
import { NotFoundButtonWrapper, Title } from "src/styles";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Page Not Found 🤨 </Title>
      <NotFoundButtonWrapper>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </NotFoundButtonWrapper>
    </>
  );
};

export default NotFoundPage;

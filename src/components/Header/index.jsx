import { Container } from "./styles";

export const Header = ({ openModal }) => {
  return (
    <Container>
      <header>
        <nav>
          <div>
            <button
              type="button"
              onClick={() => {
                openModal();
              }}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">Icon</div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

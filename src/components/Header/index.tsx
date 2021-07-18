import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
import logoImg from '../../assets/logo.svg'

type HeaderProps = {
  openModal: () => void;
};

function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;

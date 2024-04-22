import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import * as S from './styles'

export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <S.FooterContainer>
      <img src={logo} alt="Logo eFood" />
      <div>
        <S.SocialContainer>
          <li>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </S.SocialContainer>
        <p>
          {getYear()}- &copy;
          <a href="https://portfolio-pink-omega-63.vercel.app/">
            <strong> Portfólio Guilherme Camargo</strong>
          </a>{' '}
          - Todos os direitos reservados
        </p>
        <p>
          A eFood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </div>
    </S.FooterContainer>
  )
}

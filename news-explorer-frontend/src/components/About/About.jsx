import profile_picture from "../../assets/profile_picture.jpg";

const About = () => {
  return (
    <div className="about container">
      <img
        className="about__profile-picture"
        src={profile_picture}
        alt="Imagem de perfil do autor Bastien Roque"
      />
      <div className="about__content">
        <h2 className="about__title">Sobre o autor</h2>
        <p className="about__paragraph">
          Esse bloco descreve o autor do projeto. Aqui você deve indicar seu
          nome, o que você faz e quais tecnologias de desenvolvedor você
          conhece. Você também pode falar sobre sua experiência com o Practicum,
          o que aprendeu lá e como pode ajudar clientes em potencial.
        </p>
      </div>
    </div>
  );
};

export default About;

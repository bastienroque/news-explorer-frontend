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
          Bastien, 26 anos, a viver em Portugal, Fullstack Developer e aluno da
          TripleTen Brasil. <br></br>
          <br></br>Desenvolvo aplicações web completas, trabalhando tanto no
          front-end como no back-end. Tenho experiência com HTML, CSS,
          JavaScript, TypeScript, React, Tailwind, REST APIs, Node.js, Express,
          Redis, Upstash e Google Cloud Platform. <br></br>
          <br></br>A minha formação na TripleTen Brasil permitiu-me adquirir uma
          base sólida em desenvolvimento fullstack, através de projetos práticos
          avaliados por profissionais da área. Ao longo do percurso, desenvolvi
          competências técnicas e uma melhor compreensão de boas práticas de
          desenvolvimento. <br></br>
          <br></br>Com esta experiência e vários projetos concluídos, estou
          pronto para contribuir em equipas de desenvolvimento web e continuar a
          evoluir como developer.
        </p>
      </div>
    </div>
  );
};

export default About;

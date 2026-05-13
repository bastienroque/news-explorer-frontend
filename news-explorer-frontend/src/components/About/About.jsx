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
          Bastien, 26 anos a viver em Portugal, Fullstack Developer aluno da
          TripleTen Brasil.<br></br>
          <br></br>Desenvolvo projetos Web, incluindo o front-end e o back-end
          da aplicação, com tecnologias como HTML, CSS, JavaScript, React,
          Tailwind, RestAPI, Node, Express, Redix, Upstash e Google Cloud
          Platform.
          <br></br>Isto tudo graças à TripleTen Brasil, onde segui o programa
          que desenvolveram sobre Fullstack development que me ensinou bastante
          sobre a área e as diferentes tecnologias usadas hoje em dia. A equipa
          de formação está sempre disponivel e motivada para ajudar a entender e
          resolver qualquer situação complexa que após uma boa conversa já
          parece muito mais accessivel.<br></br>
          <br></br>Com esta aprendizagem e após vários projetos realizados e
          aprovados por profissionais da área, estou pronto para ajudar e
          contribuir em qualquer projeto de desenvolvimento Web.
        </p>
      </div>
    </div>
  );
};

export default About;

import { useMediaQuery, Container, chakra } from "@chakra-ui/react";
import RepositoryCard from "../components/ghcomponents/GithubCard";
import repositoriesList from "../components/ghcomponents/GithubList";
import StackGrid from "react-stack-grid";

const GithubLayer = () => {
  const [isLargerThan720] = useMediaQuery(["(min-width: 720px)"], {
    ssr: false,
  });
  const [isLargerThan982] = useMediaQuery(["(min-width: 982px)"], {
    ssr: false,
  });

  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    }
  }

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} id="projects">
      <chakra.h3 fontSize="4xl" mb={50} textAlign="center" color="white">
        Proyectos en seguimiento 👨🏻‍💻
      </chakra.h3>
      <chakra.p color="white" textAlign="left">
            Estos son los proyectos a los que actualmente dedico mi tiempo autodidacta, académico y profesional. Me encuentro cursando la licenciatura
            de ciberseguridad en la Universidad FASTA. Idealmente, planeo complementar mis estudios con un archivo que registre todo lo aprendido, dando lugar a un aprendizaje continuo.
      </chakra.p>
      <StackGrid
        columnWidth={
          !isLargerThan982 && !isLargerThan720 ? "100%" : columnWidth
        }
      >
        {repositoriesList()?.map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            language={repo.language}
            url={repo.url}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
          />
        ))}
      </StackGrid>
    </Container>
  );
};

export default GithubLayer;

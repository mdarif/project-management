import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

export default function Projects() {
  /**
   * useQuery
   *
   * The useQuery React hook is the primary API for executing queries in an Apollo application.
   * To run a query within a React component, call useQuery and pass it a GraphQL query string.
   * When your component renders, useQuery returns an object from Apollo Client that contains
   * loading, error, and data properties you can use to render your UI.
   *
   * https://www.apollographql.com/docs/react/data/queries/#usequery-api
   */
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

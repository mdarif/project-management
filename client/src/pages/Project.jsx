import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
import Spinner from '../components/Spinner';
import { GET_PROJECT } from '../queries/projectQueries';

export default function Project() {
  /**
   * UseParams
   *
   * The useParams hook returns an object of key/value pairs of the dynamic params
   * from the current URL that were matched by the <Route path>.
   * Child routes inherit all params from their parent routes.
   */
  const { id } = useParams();

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
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {data && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          <ClientInfo client={data.project.client} />

          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
}

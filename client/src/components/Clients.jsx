import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import ClientRow from './ClientRow';
import Spinner from './Spinner';

export default function Clients() {
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
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {data && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

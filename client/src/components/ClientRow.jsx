import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function ClientRow({ client }) {
  /**
   * useMutation
   *
   * The useMutation React hook is the primary API for executing
   * mutations in an Apollo application.
   *
   * https://www.apollographql.com/docs/react/data/mutations/
   */

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    /**
     * Updating local data
     *
     * When you execute a 'mutation', you modify back-end data. Usually,
     * you then want to update your 'locally cached data' to reflect the
     * back-end modification.
     *
     * For example, if you execute a mutation to add an item to your to-do
     * list, you also want that item to appear in your cached copy of the list.
     */

    // refetchQueries: [{ query: GET_CLIENTS }], more at https://www.apollographql.com/docs/react/data/mutations/#refetching-queries

    /**
     * readQuery
     * The 'readQuery' method enables you to execute a GraphQL query directly on your cache.
     */

    /**
     * writeQuery
     * The 'writeQuery' method enables you to write data to your cache in a shape that matches a GraphQL query.
     * It resembles 'readQuery', except that it requires a data option.
     *
     * Any changes you make to cached data with writeQuery are not pushed to your GraphQL server.
     * If you reload your environment, these changes disappear.
     */
    /*     update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    }, */
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutations';

export default function DeleteProjectButton({ projectId }) {
  /**
   * useNavigate
   *
   * The useNavigate hook returns a function that lets you navigate programmatically,
   * for example after a form is submitted.
   *
   * https://reactrouter.com/docs/en/v6/hooks/use-navigate
   */
  const navigate = useNavigate();

  /**
   * useMutation
   *
   * The useMutation React hook is the primary API for executing
   * mutations in an Apollo application.
   *
   * https://www.apollographql.com/docs/react/data/mutations/
   */
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    /**
     * onCompleted
     *
     * A callback function that's called when your query successfully
     * completes with zero errors
     *
     * https://www.apollographql.com/docs/react/api/react/hooks/#oncompleted
     */
    onCompleted: () => navigate('/'),
    /**
     * refetchQueries
     *
     * Apollo Client allows you to make local modifications to your GraphQL data
     * by updating the cache, but sometimes it's more straightforward to update
     * your client-side GraphQL data by refetching queries from the server
     *
     * https://www.apollographql.com/docs/react/data/refetching/
     */
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteProject}>
        <FaTrash className='icon' />
        Delete Project
      </button>
    </div>
  );
}

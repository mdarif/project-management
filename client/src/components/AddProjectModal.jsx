import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECT, GET_PROJECTS } from '../queries/projectQueries';
import { ADD_PROJECT } from '../mutations/projectMutations';

export default function AddProjectModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new'); // 'new' is the key (enum), value is "Not Started"

  /**
   * useMutation
   *
   * The useMutation React hook is the primary API for executing
   * mutations in an Apollo application.
   *
   * https://www.apollographql.com/docs/react/data/mutations/
   */
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
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
    update(cache, { data: { addProject } }) {
      /**
       * readQuery
       * The 'readQuery' method enables you to execute a GraphQL query directly on your cache.
       */
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      /**
       * writeQuery
       * The 'writeQuery' method enables you to write data to your cache in a shape that matches a GraphQL query.
       * It resembles 'readQuery', except that it requires a data option.
       *
       * Any changes you make to cached data with writeQuery are not pushed to your GraphQL server.
       * If you reload your environment, these changes disappear.
       */
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      alert('Please fill all the fields');
    }

    addProject(name, description, status, clientId);

    setName('');
    setDescription('');
    setStatus('new');
    setClientId('');
  };

  if (loading) return null;
  if (error) return 'Something went wrong!';

  return (
    <>
      {data && (
        <>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#addProjectModal'
          >
            <span className='d-flex align-items-center'>
              <FaList className='icon' />
              <span>New Project</span>
            </span>
          </button>

          <div
            className='modal fade'
            id='addProjectModal'
            aria-labelledby='addProjectModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addProjectModalLabel'>
                    Add Project
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                      <label className='form-label' htmlFor=''>
                        Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className='form-label' htmlFor=''>
                        Description
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className='form-label' htmlFor=''>
                        Status
                      </label>
                      <select
                        className='form-select'
                        id='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                      </select>
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Client</label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value=''>Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-primary'
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

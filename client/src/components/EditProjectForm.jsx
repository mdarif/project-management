import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECT } from '../queries/projectQueries';

export default function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('');

  /**
   * useMutation
   *
   * The useMutation React hook is the primary API for executing
   * mutations in an Apollo application.
   *
   * https://www.apollographql.com/docs/react/data/mutations/
   */
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    /**
     * refetchQueries
     *
     * Apollo Client allows you to make local modifications to your GraphQL data
     * by updating the cache, but sometimes it's more straightforward to update
     * your client-side GraphQL data by refetching queries from the server
     *
     * https://www.apollographql.com/docs/react/data/refetching/
     */
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill out all the fields');
    }
    updateProject(name, description, status);
  };

  return (
    <div className='mt-5'>
      <h3>Update Project Details</h3>
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
          <textarea
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

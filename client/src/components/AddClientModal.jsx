import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function AddClientModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [, setClose] = useState(true);

  /**
   * useMutation
   *
   * The useMutation React hook is the primary API for executing
   * mutations in an Apollo application.
   *
   * https://www.apollographql.com/docs/react/data/mutations/
   */
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
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
    update(cache, { data: { addClient } }) {
      /**
       * readQuery
       * The 'readQuery' method enables you to execute a GraphQL query directly on your cache.
       */
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      /**
       * writeQuery
       * The 'writeQuery' method enables you to write data to your cache in a shape that matches a GraphQL query.
       * It resembles 'readQuery', except that it requires a data option.
       *
       * Any changes you make to cached data with writeQuery are not pushed to your GraphQL server.
       * If you reload your environment, these changes disappear.
       */
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill all the fields');
    }

    addClient(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
      >
        <span className='d-flex align-items-center'>
          <FaUser className='icon' />
          <span>Add Client</span>
        </span>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addClientModalLabel'>
                Add Client
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
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='mb-3'>
                  <label className='form-label' htmlFor=''>
                    Phone
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

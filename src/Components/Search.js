import React, { useState } from 'react'
import { MarkGithubIcon  } from '@primer/octicons-react';

const Search = (props) => {
    const [username, setUsername] = useState('')
    const handleChange = e => setUsername(e.target.value);
    const submit = (e) => {
        e.preventDefault();  
        props.history.push({
            pathname: '/user',
            search: `id=${username}`,
            state: { id: username }
        });
    }
  return (
    <div className="justify-content-center align-self-center mx-auto">
        <form onSubmit={submit}>
          <div className="row mb-4">
            <div className="mx-auto">
              <a href='https://github.com'>
                <MarkGithubIcon size={120}/>
              </a>
            </div>            
          </div>
          <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input name="username" type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" onChange={handleChange}/>
          </div>
        </form>
      </div>
  );
}

export default Search;
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Submit = ({onSave, onChange, errors, site}) => {
  return (
    <div className="submit-container">
      <form>
        <div className="row">
          <div className="medium-6 columns">
            <label>Site Name
              <input type="text" placeholder="" name="name" onChange={onChange}/>
            </label>
            {errors && errors.name && <p className="help-text alert">{errors.name}</p>}
          </div>
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <label>Site Url
              <input type="text" placeholder="" name="href" onChange={onChange}/>
            </label>
            {errors && errors.href && <p className="help-text alert">{errors.href}</p>}
            <p className="help-text">{site.href}</p>
          </div>
        </div>
        {/*<div className="row">*/}
          {/*<div className="medium-6 columns">*/}
            {/*<label>Site Language*/}
              {/*<select name="lang" onChange={onChange}>*/}
                {/*<option value="english">English</option>*/}
                {/*<option value="chinese">Chinese</option>*/}
              {/*</select>*/}
            {/*</label>*/}
            {/*{errors && errors.lang && <p className="help-text alert">{errors.lang}</p>}*/}
          {/*</div>*/}
        {/*</div>*/}
        <div className="row">
          <button type="button" className="success button" onClick={onSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

Submit.propTypes = {
  //course: PropTypes.object.isRequired
};

export default Submit;


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneCategories, fetchSmartphones,  } from './redux/actions/phoneActions';

function Effect(props) {
  const { phoneCategories, smartphones, fetchPhoneCategories, fetchSmartphones,  } = props;

  useEffect(() => {
    
    fetchPhoneCategories();
    fetchSmartphones();

    
    
  }, [fetchPhoneCategories, fetchSmartphones, ]);

  return (
    <div>
      <h1>Effect </h1>
      
      <div className='row'>
        <div className='col-sm-4'>
          {phoneCategories.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
        <div className='col-sm-8'>
          {smartphones.length > 0 ? (
            smartphones.map((phone, i) => (
              <div key={i}>
                <h3>name : {phone.title}</h3>
                <p>description : {phone.description}</p>
                <img style={{ width: '100px', height: '100px' }} src={phone.thumbnail} alt={`Phone ${i}`} />
              </div>
            ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  phoneCategories: state.phones.phoneCategories,
  smartphones: state.phones.smartphones,
 
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoneCategories: () => dispatch(fetchPhoneCategories()),
  fetchSmartphones: () => dispatch(fetchSmartphones()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Effect);

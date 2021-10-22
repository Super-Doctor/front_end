import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log('from hoookss',values);
    callback(values);
    
  };

  const handleChange = (event) => {
    event.persist();
    
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const startVideo = () => {
    
    setValues({message : 'https://hema-video-chat.herokuapp.com/?room=hospital_1'})
    console.log('from hoookss' ,values);

   callback(values);
  
  };

  return {
    handleChange,
    handleSubmit,
    values,
    startVideo
  };
};

export default useForm;
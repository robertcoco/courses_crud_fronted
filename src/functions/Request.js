import axios from 'axios';

const GetAllData = async() => {
        fetch( "http://localhost:3000/api/course/create")
        .then(res => res.json()).then(res => console.log(res))
        .catch(rejected => {
          console.log(rejected);
      });
        
      }
export {
  GetAllData
};



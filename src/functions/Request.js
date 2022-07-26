import axios from 'axios';
const GetData = async(state) => {
    const request =  await axios.get("http://localhost:3000/api/course/");
    state(request.data.data);
}

const CreateData = async(state) => {
    const request = await axios.post('http://localhost:3000/api/course/create',state);
    console.log(request);
}

const DeleteCourse = async(id, datos) => {
    const data = datos;
    await fetch("http://localhost:3000/api/course/delete", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'     
        }
    })
}

const EditCourses = async(id, datos) => {
    if(datos !== null) {
        await fetch("http://localhost:3000/api/course/edit", {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'     
            }
        })
    }
}

export {
    CreateData,
    GetData,
    DeleteCourse,
};
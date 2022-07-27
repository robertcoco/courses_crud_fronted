import axios from 'axios';

const GetData = async() => {
    const { data } = await axios.get("http://localhost:3000/api/course/");

    if (data.success) {
        return data.data
    }

    return null
}

const CreateData = async(state) => {
    const {data: res} = await axios.post('http://localhost:3000/api/course/create', state);
        
    return res
}

// TODO: poner delete con axios.

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

const EditData = async(data) => {
    if(data && data.id) {
        const {data: res} = await axios.put('http://localhost:3000/api/course/edit', data);
        return res
    }else {
        console.log("Undefinded data or id")
        return null
    }
}

export {
    CreateData,
    GetData,
    DeleteCourse,
    EditData
};